#!/usr/bin/env node

// Fetches GitHub repo stats at build time and writes to src/repo-stats.json
// Uses GITHUB_TOKEN from environment (auto-provided by GitHub Actions)

import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const GITHUB_USER = 'kipeum86'
const STATS_FILE = resolve(__dirname, '../src/repo-stats.json')

// Read current repo-stats.json as fallback
let fallbackStats = {}
try {
  fallbackStats = JSON.parse(readFileSync(STATS_FILE, 'utf-8'))
} catch {
  // No fallback available
}

// Read repo names from repos.js (extract name fields)
const reposFile = readFileSync(resolve(__dirname, '../src/repos.js'), 'utf-8')
const nameMatches = reposFile.matchAll(/name:\s*'([^']+)'/g)
const repoNames = [...nameMatches].map((m) => m[1])

async function fetchRepoStats(name) {
  const token = process.env.GITHUB_TOKEN || ''
  const headers = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'github-folio-build',
  }
  if (token) {
    headers.Authorization = `token ${token}`
  }

  const res = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${name}`, { headers })
  if (!res.ok) {
    console.warn(`  ⚠ Failed to fetch ${name}: ${res.status}`)
    return fallbackStats[name] || null
  }

  const data = await res.json()
  return {
    stars: data.stargazers_count ?? 0,
    forks: data.forks_count ?? 0,
    language: data.language ?? null,
    updated_at: data.pushed_at ? data.pushed_at.split('T')[0] : null,
  }
}

async function main() {
  console.log(`Fetching stats for ${repoNames.length} repos...`)
  const stats = {}

  for (const name of repoNames) {
    const result = await fetchRepoStats(name)
    if (result) {
      stats[name] = result
      console.log(`  ✓ ${name}: ★${result.stars}`)
    }
  }

  writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2) + '\n')
  console.log(`\nWritten to ${STATS_FILE}`)
}

main().catch((err) => {
  console.error('fetch-stats failed:', err.message)
  console.log('Using fallback repo-stats.json')
  // Don't exit with error — stale stats are better than no deploy
})
