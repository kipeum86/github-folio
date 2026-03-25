// Curated repo data — KP's selected showcase repos
// GitHub API stats are merged from repo-stats.json at build time

import repoStats from './repo-stats.json'

const LANG_COLORS = {
  Python: '#3572A5',
  TypeScript: '#3178C6',
  HTML: '#e34c26',
  JavaScript: '#f1e05a',
}

const repoData = [
  // ── Legal AI ──
  {
    name: 'contract-review-agent',
    category: 'Legal AI',
    description: {
      ko: '법무법인 진주 · 고덕수 변호사 (6년차) — 상대방 계약서를 조항별로 분석하고, 수정사항이 반영된 DOCX 레드라인을 자동 생성하는 AI 계약 검토 에이전트.',
      en: 'Jinju Law · Attorney Ko Duk-soo (6th yr) — Local-first AI contract review agent that turns legal templates and counterparty drafts into clause-level analysis and tracked-change DOCX redlines.',
    },
  },
  {
    name: 'general-legal-research',
    category: 'Legal AI',
    description: {
      ko: '법무법인 진주 · 김재식 변호사 (5년차) — 17개국 이상의 법률을 비교·분석하는 AI 리서치 에이전트. 출처 검증, 신뢰도 점수 산정, 비교 분석 리포트 자동 생성.',
      en: 'Jinju Law · Attorney Kim Jae-sik (5th yr) — Evidence-based legal research agent for 17+ jurisdictions, with source verification, reliability scoring, and structured comparative outputs.',
    },
  },
  {
    name: 'game-legal-research',
    category: 'Legal AI',
    description: {
      ko: '법무법인 진주 · 심진주 변호사 (3년차) — 각국 게임 규제(확률형 아이템, P2E, e스포츠, 미성년자 보호 등)를 비교·분석하는 AI 리서치 에이전트.',
      en: 'Jinju Law · Attorney Sim Jin-ju (3rd yr) — Evidence-based legal research agent for cross-jurisdiction game regulation (loot boxes, P2E, esports, minor protection, etc.).',
    },
  },
  {
    name: 'legal-translation-agent',
    category: 'Legal AI',
    description: {
      ko: '법무법인 진주 · 변혁기 변호사 (4년차) — 5개 국어(한·영·중·대만·일) 법률 문서 번역 에이전트. 법률 용어의 정확성과 문서 구조를 유지하며 번역.',
      en: 'Jinju Law · Attorney Byeon Hyeok-gi (4th yr) — Translates legal documents across 5 languages (EN, KO, ZH-CN, ZH-TW, JA) with strict accuracy and structural fidelity.',
    },
  },
  {
    name: 'legal-writing-agent',
    category: 'Legal AI',
    description: {
      ko: '법무법인 진주 · 한석봉 변호사 — 한국어/영어 법률 문서 작성 에이전트. 의견서, 준비서면 등을 각 관할권 관행에 맞춰 초안·수정.',
      en: 'Jinju Law · Attorney Han Sok-pong — Bilingual (Korean/English) legal writing agent — drafts and revises advisory opinions, litigation filings, and regulatory documents.',
    },
  },
  {
    name: 'second-review-agent',
    category: 'Legal AI',
    description: {
      ko: '법무법인 진주 · 반성문 파트너 (10년차) — AI가 생성한 법률 문서의 최종 검수 에이전트. 다른 에이전트들의 결과물을 빨간펜으로 검토하는 마지막 품질 관문.',
      en: 'Jinju Law · Partner Ban Seong-mun (10th yr) — Final quality gate for AI-generated legal documents. Reviews work from all other agents with zero tolerance for hallucinated citations.',
    },
  },
  {
    name: 'PIPA-expert',
    category: 'Legal AI',
    description: {
      ko: '법무법인 진주 · 정보호 변호사 (5년차) — 개인정보보호법 전문 AI 에이전트. 929개 조문, 46개 공식 가이드라인, 1,498개 상호참조 기반 구조화 RAG.',
      en: 'Jinju Law · Attorney Jeong Bo-ho (5th yr) — AI advisor for Korean data privacy law (PIPA). 929 statute articles, 46 PIPC guidelines, 1,498 cross-references via structured RAG.',
    },
  },
  {
    name: 'GDPR-expert',
    category: 'Legal AI',
    description: {
      ko: '법무법인 진주 — EU 데이터 보호법 전문 AI 에이전트. GDPR, ePrivacy Directive, EU AI Act, Data Act, Data Governance Act를 구조화 RAG로 분석.',
      en: 'Jinju Law — AI agent for EU data protection law. Covers GDPR, ePrivacy Directive, EU AI Act, Data Act, and Data Governance Act via agent-native structured RAG.',
    },
  },

  // ── Investment ──
  {
    name: 'stock-analysis-agent',
    category: 'Investment',
    description: {
      ko: '미국·한국 주식을 기관 수준으로 분석하는 AI 리서치 에이전트 — 며칠 걸릴 분석을 몇 분 만에.',
      en: 'Institutional-grade stock research for US and Korean equities — delivered in minutes, not days.',
    },
  },
  {
    name: 'investment-portfolio-advisor',
    category: 'Investment',
    description: {
      ko: 'AI 기반 개인 투자 매니저. 거시경제부터 포트폴리오까지 탑다운 분석을 몇 분 안에 완성.',
      en: 'Your personal AI investment manager. Top-down macro-to-portfolio analysis — delivered in minutes, not days.',
    },
  },

  // ── Claude Skills ──
  {
    name: 'StockAnalysisClaudeSkill',
    category: 'Claude Skills',
    description: {
      ko: '상장 기업의 종합 투자 분석 HTML 대시보드를 자동 생성하는 Claude 스킬.',
      en: 'Claude skill that generates comprehensive, premium investment analysis HTML dashboards for any publicly traded company.',
    },
  },
  {
    name: 'travel-planner-dashboard',
    category: 'Claude Skills',
    description: {
      ko: '여행 계획을 인터랙티브 HTML 대시보드로 만들어주는 Claude 스킬.',
      en: 'Claude skill for creating interactive HTML travel plan dashboards.',
    },
  },

  // ── Legal AI (Generalized Tools) ──
  {
    name: 'parlawatch',
    category: 'Legal AI',
    description: {
      ko: '국회 모니터링 자동화 도구 — 국정감사/상임위 영상을 AI로 분석하여 산업별 맞춤 브리핑을 자동 생성. Google Sheets 기반.',
      en: 'Parliament monitoring automation — AI-analyzes committee hearings and generates industry-specific briefings. Google Sheets-based, domain-agnostic.',
    },
  },

  // ── Content & Web ──
  {
    name: 'content-dashboard-agent',
    category: 'Content & Web',
    description: {
      ko: 'PDF, 텍스트, 웹페이지, YouTube 영상을 구조화된 JSON과 깔끔한 HTML 대시보드로 변환.',
      en: 'Turn PDFs, text files, webpages, and YouTube videos into structured JSON and polished single-file HTML dashboards.',
    },
  },
  {
    name: 'web-content-designer',
    category: 'Claude Skills',
    description: {
      ko: '텍스트, 기사, URL을 완성도 높은 단일 HTML 페이지로 변환하는 Claude 스킬. 3가지 레이아웃, 10가지 디자인 테마.',
      en: 'Claude skill that transforms text, articles, or URLs into production-grade single-file HTML pages. 3 layouts, 10 design themes.',
    },
  },
  {
    name: 'podcast-briefing',
    category: 'Content & Web',
    description: {
      ko: 'AI가 큐레이션하는 팟캐스트 브리핑 — 10개 소스에서 한/영 요약을 뽑아 프리미엄 웹앱으로 제공.',
      en: 'AI-curated bilingual podcast intelligence — 10 sources, KO/EN summaries, premium editorial web app.',
    },
  },
  {
    name: 'ebook-writer',
    category: 'Content & Web',
    description: {
      ko: '주제 하나를 입력하면 전문적인 전자책을 완성해주는 멀티 에이전트 시스템.',
      en: 'A multi-agent system that transforms a topic into a professional, print-ready ebook.',
    },
  },
  {
    name: 'prompt-library',
    category: 'Content & Web',
    customUrl: 'https://kipeum86.github.io/prompt-library/',
    description: {
      ko: 'AI 프롬프트 라이브러리 — 다양한 용도별 프롬프트 모음.',
      en: 'AI prompt library — a curated collection of prompts for various use cases.',
    },
  },

  {
    name: 'visual-story-creator',
    category: 'Content & Web',
    description: {
      ko: '멀티 에이전트 비주얼 스토리텔링 엔진 — 텍스트 입력만으로 FT급 비주얼 스토리를 자동 생성.',
      en: 'Multi-agent visual storytelling engine — generates FT-grade visual stories from text input.',
    },
  },
  {
    name: 'auto-newsbriefing',
    category: 'Content & Web',
    description: {
      ko: '범용 뉴스레터 자동화 — RSS 수집, AI 분류/요약, Google Sheets 아카이브, 이메일 발송까지 어떤 도메인이든.',
      en: 'Domain-agnostic newsletter automation — RSS collection, AI classification/summarization, Google Sheets archiving, and email dispatch for any industry.',
    },
  },
  {
    name: 'daily-brief',
    category: 'Content & Web',
    description: {
      ko: 'AI 모닝 브리핑 — 한국·미국 시장 데이터, 글로벌 뉴스, AI 크로스마켓 분석을 매일 아침 자동 생성. 운영 비용 $0.',
      en: 'AI-powered morning briefing for investors — Korean + US markets, global news, and AI cross-market analysis delivered daily at zero cost.',
    },
  },

  // ── Obsidian ──
  {
    name: 'obsidian-auto-tagger',
    category: 'Obsidian',
    description: {
      ko: 'Obsidian 볼트용 AI 자동 태깅 — 설정 파일 기반으로 동작, 하드코딩 없음.',
      en: 'AI-powered tagging for any Obsidian vault — fully config-driven, zero hardcoding.',
    },
  },
  {
    name: 'obsidian-vault-doctor',
    category: 'Obsidian',
    description: {
      ko: 'Obsidian 볼트 건강 관리 프레임워크 — vault-rules.json 하나로 감사, 분류, 리뷰 주기를 실행.',
      en: 'Universal Obsidian vault health framework — audit, classify clippings, and run review cycles with a single vault-rules.json.',
    },
  },
  {
    name: 'nlm2obsidian',
    category: 'Obsidian',
    description: {
      ko: 'Google NotebookLM 노트북을 Obsidian으로 가져오기.',
      en: 'Import your Google NotebookLM notebooks into Obsidian.',
    },
  },

  // ── Fun & Creative ──
  {
    name: 'Project-26-Interior-Gallery',
    category: 'Fun & Creative',
    description: {
      ko: 'GSAP과 바닐라 JS로 만든 몰입감 있는 풀스크린 인테리어 갤러리 슬라이더.',
      en: 'A sleek, immersive full-screen interior gallery slider built with vanilla HTML/CSS/JS and GSAP.',
    },
  },
  {
    name: 'Dashboards-and-Archives',
    category: 'Fun & Creative',
    customUrl: 'https://kipeum86.github.io/Dashboards-and-Archives/',
    description: {
      ko: '직접 만든 분석 대시보드와 리포트 아카이브 모음.',
      en: 'A collection of my analytical dashboards and reports.',
    },
  },
  {
    name: 'Book-Summaries',
    category: 'Fun & Creative',
    customUrl: 'https://kipeum86.github.io/Book-Summaries/',
    description: {
      ko: '읽은 책들의 요약 모음.',
      en: 'A collection of book summaries.',
    },
  },
  {
    name: '2025-Reading-List',
    category: 'Fun & Creative',
    customUrl: 'https://kipeum86.github.io/2025-Reading-List/',
    description: {
      ko: '2025년 독서 리스트.',
      en: 'My 2025 reading list.',
    },
  },
  {
    name: 'AI Photo Studio — Lifestyle',
    category: 'Fun & Creative',
    customUrl: 'https://kp-s-ai-photo-studio-lifestyle-sports-824825595989.us-west1.run.app/',
    description: {
      ko: 'AI 포토 스튜디오 — 라이프스타일 & 스포츠 편.',
      en: "KP's AI Photo Studio — Lifestyle & Sports edition.",
    },
  },
  {
    name: 'AI Photo Studio — Culture',
    category: 'Fun & Creative',
    customUrl: 'https://kp-s-ai-photo-studio-culture-arts-824825595989.us-west1.run.app/',
    description: {
      ko: 'AI 포토 스튜디오 — 문화 & 예술 편.',
      en: "KP's AI Photo Studio — Culture & Arts edition.",
    },
  },
]

// Merge build-time GitHub stats into repo data
export const repos = repoData.map((repo) => {
  const stats = repoStats[repo.name] || {}
  return {
    ...repo,
    stars: stats.stars ?? 0,
    forks: stats.forks ?? 0,
    language: stats.language ?? null,
    languageColor: LANG_COLORS[stats.language] ?? '#888',
    updatedAt: stats.updated_at ?? null,
  }
})

export const categories = [
  'All',
  'Legal AI',
  'Investment',
  'Claude Skills',
  'Content & Web',
  'Obsidian',
  'Fun & Creative',
]
