const translations = {
  ko: {
    heroTag: 'Curated Open Source',
    heroTitle1: 'Built with ',
    heroTitle2: 'taste',
    heroTitleComma: ',',
    heroTitle3: 'shipped with ',
    heroTitle4: 'craft',
    heroSub: 'AI 에이전트, 리걸 에이전트, 대시보드, 그리고 개발자 도구 — 각 프로젝트는 엄선되어 일정한 품질 기준에 맞춰 구축되었습니다.',
    scrollHint: '스크롤하여 탐색',
    statRepos: '레포지토리',
    statStars: '스타',
    statCategories: '카테고리',
    statLanguages: '언어',
    sectionAll: '전체 프로젝트',
    footerNote: 'GitHub API 기반 통계 · 매일 업데이트',
    footerRights: 'All rights reserved.',
  },
  en: {
    heroTag: 'Curated Open Source',
    heroTitle1: 'Built with ',
    heroTitle2: 'taste',
    heroTitleComma: ',',
    heroTitle3: 'shipped with ',
    heroTitle4: 'craft',
    heroSub: 'AI agents, legal workflow systems, dashboards, and developer tools — each project handpicked and built to a standard.',
    scrollHint: 'Scroll to explore',
    statRepos: 'Repositories',
    statStars: 'Stars',
    statCategories: 'Categories',
    statLanguages: 'Languages',
    sectionAll: 'All Projects',
    footerNote: 'Stats powered by GitHub API · Updated daily',
    footerRights: 'All rights reserved.',
  },
}

let currentLang = localStorage.getItem('lang') || 'ko'

export function getLang() {
  return currentLang
}

export function setLang(lang) {
  currentLang = lang
  localStorage.setItem('lang', lang)
  document.documentElement.lang = lang
  applyTranslations()
  updateToggleUI()
}

export function toggleLang() {
  setLang(currentLang === 'ko' ? 'en' : 'ko')
}

function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]')
  elements.forEach((el) => {
    const key = el.dataset.i18n
    const text = translations[currentLang]?.[key]
    if (text !== undefined) {
      el.textContent = text
    }
  })
}

function updateToggleUI() {
  document.querySelectorAll('.i18n-option').forEach((opt) => {
    opt.classList.toggle('active', opt.dataset.lang === currentLang)
  })
}

export function initI18n() {
  document.documentElement.lang = currentLang
  applyTranslations()
  updateToggleUI()

  const toggle = document.getElementById('i18n-toggle')
  if (toggle) {
    toggle.addEventListener('click', toggleLang)
  }
}
