import './style.css'
import { repos, categories } from './repos.js'
import { initI18n, getLang } from './i18n.js'
import { initLenis, initAnimations } from './animations.js'
import { initFilters, getCurrentCategory } from './filters.js'

const GITHUB_USER = 'kipeum86'

const starSvg = `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/></svg>`

function getRepoUrl(repo) {
  return repo.customUrl || `https://github.com/${GITHUB_USER}/${repo.name}`
}

function timeAgo(dateStr) {
  if (!dateStr) return ''
  const now = new Date()
  const date = new Date(dateStr)
  const days = Math.floor((now - date) / (1000 * 60 * 60 * 24))
  if (days === 0) return getLang() === 'ko' ? '오늘' : 'today'
  if (days === 1) return getLang() === 'ko' ? '어제' : 'yesterday'
  if (days < 30) return getLang() === 'ko' ? `${days}일 전` : `${days}d ago`
  const months = Math.floor(days / 30)
  return getLang() === 'ko' ? `${months}개월 전` : `${months}mo ago`
}

// ── Render Functions ──

function renderGrid(category = 'All') {
  const grid = document.getElementById('repo-grid')
  if (!grid) return

  const lang = getLang()
  const filtered =
    category === 'All'
      ? repos
      : repos.filter((r) => r.category === category)

  if (!filtered.length) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:48px 0;">${
      lang === 'ko' ? '이 카테고리에 해당하는 프로젝트가 없습니다.' : 'No repos in this category.'
    }</p>`
    return
  }

  grid.innerHTML = filtered
    .map(
      (repo) => `
    <a href="${getRepoUrl(repo)}" target="_blank" rel="noopener" class="repo-card">
      <div class="repo-category">${repo.category}</div>
      <div class="repo-name">${repo.name}</div>
      <div class="repo-desc">${repo.description[lang] || repo.description.en}</div>
      <div class="repo-meta">
        ${repo.language ? `<span><span class="lang-dot" style="background:${repo.languageColor}"></span>${repo.language}</span>` : ''}
        ${repo.stars > 0 ? `<span class="star-icon">${starSvg} ${repo.stars}</span>` : ''}
        ${repo.updatedAt ? `<span>${timeAgo(repo.updatedAt)}</span>` : ''}
      </div>
    </a>
  `
    )
    .join('')
}

function computeStats() {
  const totalRepos = repos.length
  const totalStars = repos.reduce((sum, r) => sum + (r.stars || 0), 0)
  const totalCategories = categories.length - 1 // minus "All"
  const languages = new Set(repos.map((r) => r.language).filter(Boolean))

  document.getElementById('stat-repos').dataset.count = totalRepos
  document.getElementById('stat-stars').dataset.count = totalStars
  document.getElementById('stat-categories').dataset.count = totalCategories
  document.getElementById('stat-languages').dataset.count = languages.size
}

// ── Init ──

document.addEventListener('DOMContentLoaded', () => {
  // Render content
  renderGrid()
  computeStats()

  // Init systems
  initI18n()
  initLenis()
  initAnimations()
  initFilters((category) => {
    renderGrid(category)
  })

  // Re-render on language change
  document.getElementById('i18n-toggle')?.addEventListener('click', () => {
    requestAnimationFrame(() => {
      renderGrid(getCurrentCategory())
    })
  })
})
