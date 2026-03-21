const translations = {
  ko: {
    heroTag: '큐레이션 오픈소스',
    heroTitle1: '',
    heroTitle2: '감각',
    heroTitleComma: '으로 만들고,',
    heroTitle3: '',
    heroTitle4: '장인정신',
    heroSub: 'AI 에이전트, 리걸테크, 대시보드, 개발 도구 — 하나하나 엄선하고 기준을 세워 만든 프로젝트들.',
    scrollHint: '스크롤하여 탐색',
    statRepos: '레포지토리',
    statStars: '스타',
    statCategories: '카테고리',
    statLanguages: '언어',
    sectionFeatured: '추천 프로젝트',
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
    heroSub: 'AI agents, legal tech, dashboards, and developer tools — each repo handpicked and built to a standard.',
    scrollHint: 'Scroll to explore',
    statRepos: 'Repositories',
    statStars: 'Stars',
    statCategories: 'Categories',
    statLanguages: 'Languages',
    sectionFeatured: 'Featured',
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
