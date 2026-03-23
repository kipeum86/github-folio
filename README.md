<p align="center">
  <img src="public/favicon.svg" width="64" height="64" alt="github-folio" />
</p>

<h1 align="center">github-folio</h1>

<p align="center">
  <strong>A cinematic, Awwwards-level portfolio for open-source work.</strong><br />
  <sub>Built with taste, shipped with craft.</sub>
</p>

<p align="center">
  <a href="https://kipeum86.github.io/github-folio/">Live Site</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#features">Features</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#tech-stack">Stack</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#getting-started">Getting Started</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#한국어">한국어</a>
</p>

<br />

---

<br />

## Why

GitHub profiles show a flat list of repositories. No hierarchy, no narrative, no craft.

**github-folio** turns hand-picked repos into a curated, scroll-driven experience — categorized, animated, and bilingual. GitHub stats (stars, forks, languages) refresh daily via CI; repos themselves are manually curated in `src/repos.js`.

<br />

## Features

| | Feature | Detail |
|---|---|---|
| **Cinematic Scroll** | GSAP + ScrollTrigger + Lenis | Buttery 60fps scroll animations with staggered card reveals |
| **Live Stats** | GitHub API at build time | Stars, forks, languages — fetched daily via CI, zero client-side API calls |
| **Bilingual** | Korean / English toggle | Full i18n with `localStorage` persistence — every string, every description |
| **7 Categories** | Filterable grid | Legal AI · Investment · Claude Skills · Content & Web · Obsidian · Fun & Creative |
| **Dark Luxury** | Custom design system | `#0a0a0f` base, purple-blue gradients, glass morphism, Inter + Noto Sans KR |
| **Accessible** | `prefers-reduced-motion` | Respects system settings, semantic HTML, ARIA labels on interactive elements |
| **Lightweight** | < 150 KB gzipped | No framework runtime — vanilla JS modules, Vite-optimized |

<br />

## Tech Stack

```
Vite 8           →  Build & HMR
GSAP 3           →  Timeline animations, ScrollTrigger
Lenis            →  Smooth scrolling (disabled on touch devices)
Vanilla JS       →  Zero framework overhead
GitHub Actions   →  Daily stats fetch → build → deploy to GitHub Pages
```

**Fonts** — [Inter](https://fonts.google.com/specimen/Inter) (200–700) for Latin, [Noto Sans KR](https://fonts.google.com/noto/specimen/Noto+Sans+KR) (300–700) for Korean.

<br />

## Project Structure

```
github-folio/
├── src/
│   ├── main.js            # Entry — renders grid, wires stats counters
│   ├── repos.js           # Curated repo data (30 repos, 7 categories)
│   ├── i18n.js            # KO/EN translations + toggle logic
│   ├── animations.js      # GSAP timelines, Lenis, ScrollTrigger
│   ├── filters.js         # Category filter transitions
│   ├── style.css          # Full design system (CSS custom properties)
│   └── repo-stats.json    # Build-time GitHub API cache
├── scripts/
│   └── fetch-stats.js     # Node script: GitHub API → JSON
├── .github/workflows/
│   └── deploy.yml         # CI: fetch stats → build → deploy
├── index.html             # Single-page entry
└── vite.config.js         # Base path: /github-folio/
```

<br />

## Getting Started

```bash
# Clone
git clone https://github.com/kipeum86/github-folio.git
cd github-folio

# Install
npm install

# Fetch live GitHub stats (optional — falls back to cached JSON)
export GITHUB_TOKEN=ghp_your_token
npm run fetch-stats

# Dev server
npm run dev

# Production build
npm run build && npm run preview
```

<br />

## How It Works

```
┌─────────────────────────────────────────────────────────────┐
│  BUILD TIME (GitHub Actions — daily at 06:00 UTC)           │
│                                                             │
│  fetch-stats.js ─→ GitHub REST API ─→ repo-stats.json      │
│  vite build     ─→ bundle + tree-shake ─→ dist/            │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  RUNTIME (Browser — zero API calls)                         │
│                                                             │
│  main.js imports repos.js + repo-stats.json (merged)        │
│  → renderGrid() builds DOM from template literals           │
│  → GSAP ScrollTrigger animates on scroll                    │
│  → Lenis provides smooth scrolling (desktop only)           │
│  → i18n toggle swaps all data-i18n elements                 │
└─────────────────────────────────────────────────────────────┘
```

<br />

## Showcase Categories

| Category | Repos | Highlights |
|---|---|---|
| **Legal AI** | 7 | Contract review, multi-jurisdiction research, translation, quality gate |
| **Investment** | 2 | Institutional-grade stock analysis, portfolio advisory |
| **Claude Skills** | 3 | Investment dashboards, travel planner, web content designer |
| **Content & Web** | 5 | Podcast briefing, ebook writer, visual storytelling, newsletter automation |
| **Obsidian** | 3 | Auto-tagger, vault doctor, NotebookLM importer |
| **Fun & Creative** | 5 | Interior gallery, dashboards archive, AI photo studios |

<br />

## Deployment

Fully automated via GitHub Actions:

1. **Trigger** — push to `main`, daily cron, or manual dispatch
2. **Fetch** — `scripts/fetch-stats.js` pulls live stats with `GITHUB_TOKEN`
3. **Build** — Vite bundles to `dist/`
4. **Deploy** — `actions/deploy-pages@v4` ships to GitHub Pages

Stats refresh daily. Repos are manually curated in `src/repos.js` — add or remove entries to update the showcase.

<br />

---

<br />

# 한국어

## github-folio란?

GitHub 프로필은 레포지토리를 날짜순으로 나열할 뿐입니다. 맥락도, 서사도, 디자인도 없습니다.

**github-folio**는 직접 선별한 레포를 **카테고리별로 큐레이션**하고, **스크롤 애니메이션**과 **GitHub 통계**를 더한 시네마틱 포트폴리오입니다. 한국어/영어 전환을 지원하며, 통계는 CI에서 매일 자동 갱신됩니다. 레포 추가/제거는 `src/repos.js`에서 수동으로 관리합니다.

<br />

## 주요 기능

| | 기능 | 설명 |
|---|---|---|
| **시네마틱 스크롤** | GSAP + ScrollTrigger + Lenis | 60fps 부드러운 스크롤, 카드별 순차 등장 애니메이션 |
| **실시간 통계** | 빌드 타임 GitHub API | 스타, 포크, 언어 — CI에서 매일 갱신, 클라이언트 API 호출 0건 |
| **이중 언어** | 한국어 / English 전환 | 모든 텍스트 `localStorage` 기반 언어 유지 |
| **7개 카테고리** | 필터링 가능한 그리드 | Legal AI · 투자 · Claude Skills · 콘텐츠 & 웹 · Obsidian · Fun & Creative |
| **다크 럭셔리** | 커스텀 디자인 시스템 | `#0a0a0f` 배경, 퍼플-블루 그라디언트, 글래스모피즘 |
| **접근성** | `prefers-reduced-motion` 지원 | 시스템 설정 존중, 시맨틱 HTML, ARIA 라벨 |
| **경량** | gzip 150KB 미만 | 프레임워크 런타임 없음 — 바닐라 JS + Vite 최적화 |

<br />

## 기술 스택

```
Vite 8           →  빌드 & 핫 리로드
GSAP 3           →  타임라인 애니메이션, ScrollTrigger
Lenis            →  부드러운 스크롤 (터치 디바이스에서는 비활성화)
Vanilla JS       →  프레임워크 오버헤드 제로
GitHub Actions   →  매일 통계 갱신 → 빌드 → GitHub Pages 배포
```

**폰트** — [Inter](https://fonts.google.com/specimen/Inter) (200–700) 라틴 문자, [Noto Sans KR](https://fonts.google.com/noto/specimen/Noto+Sans+KR) (300–700) 한글.

<br />

## 로컬 실행

```bash
# 클론
git clone https://github.com/kipeum86/github-folio.git
cd github-folio

# 설치
npm install

# GitHub 통계 가져오기 (선택 — 캐시된 JSON으로 대체 가능)
export GITHUB_TOKEN=ghp_your_token
npm run fetch-stats

# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build && npm run preview
```

<br />

## 동작 원리

```
┌─────────────────────────────────────────────────────────────┐
│  빌드 타임 (GitHub Actions — 매일 06:00 UTC)                  │
│                                                             │
│  fetch-stats.js ─→ GitHub REST API ─→ repo-stats.json      │
│  vite build     ─→ 번들링 + 트리 셰이킹 ─→ dist/              │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  런타임 (브라우저 — API 호출 0건)                                │
│                                                             │
│  main.js가 repos.js + repo-stats.json을 병합하여 임포트         │
│  → renderGrid()가 템플릿 리터럴로 DOM 생성                      │
│  → GSAP ScrollTrigger가 스크롤에 반응하여 애니메이션              │
│  → Lenis가 부드러운 스크롤 제공 (데스크톱 전용)                    │
│  → i18n 토글이 모든 data-i18n 요소를 전환                       │
└─────────────────────────────────────────────────────────────┘
```

<br />

## 쇼케이스 카테고리

| 카테고리 | 레포 수 | 주요 프로젝트 |
|---|---|---|
| **Legal AI** | 7 | 계약 검토, 다관할권 리서치, 법률 번역, 최종 검수 |
| **투자** | 2 | 기관급 주식 분석, 포트폴리오 어드바이저 |
| **Claude Skills** | 3 | 투자 대시보드, 여행 플래너, 웹 콘텐츠 디자이너 |
| **콘텐츠 & 웹** | 5 | 팟캐스트 브리핑, 전자책 생성, 비주얼 스토리, 뉴스레터 자동화 |
| **Obsidian** | 3 | 자동 태거, 볼트 닥터, NotebookLM 임포터 |
| **Fun & Creative** | 5 | 인테리어 갤러리, 대시보드 아카이브, AI 포토 스튜디오 |

<br />

## 배포

GitHub Actions로 완전 자동화:

1. **트리거** — `main` 푸시, 매일 크론, 수동 디스패치
2. **통계 수집** — `scripts/fetch-stats.js`가 `GITHUB_TOKEN`으로 실시간 통계 수집
3. **빌드** — Vite가 `dist/`로 번들링
4. **배포** — `actions/deploy-pages@v4`가 GitHub Pages에 배포

통계는 매일 갱신됩니다. 레포는 `src/repos.js`에서 수동으로 추가/제거합니다.

<br />

---

<p align="center">
  <sub>Made by <a href="https://github.com/kipeum86">KP</a></sub>
</p>
