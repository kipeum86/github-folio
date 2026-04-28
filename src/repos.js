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
      ko: 'KP Legal Agent · 계약 검토 — 상대방 계약서를 조항별로 분석하고, DOCX 레드라인과 검토 메모를 자동으로 생성합니다.',
      en: 'KP Legal Agent · Contract Review — Contract review workflow that turns counterparty drafts into clause-level analysis, tracked-change DOCX redlines, and review memos.',
    },
  },
  {
    name: 'general-legal-research',
    category: 'Legal AI',
    description: {
      ko: 'KP Legal Agent · 해외법령 리서치 — 17개국 이상의 법률을 대상으로 출처 검증, 신뢰도 점수 산정, 비교 분석까지 수행하는 증거 기반 리서치 에이전트.',
      en: 'KP Legal Agent · Foreign Law Research — Evidence-based foreign law research workflow for 17+ jurisdictions, with source verification, reliability scoring, and structured comparative outputs.',
    },
  },
  {
    name: 'game-legal-research',
    category: 'Legal AI',
    description: {
      ko: 'KP Legal Agent · 게임 산업법 — 확률형 아이템, P2E, e스포츠, 미성년자 보호 등 각국 게임 규제를 관할권별로 비교·분석하는 증거 기반 리서치 에이전트.',
      en: 'KP Legal Agent · Game Industry Law — Evidence-based research workflow for cross-jurisdiction game regulation, including loot boxes, P2E, esports, and minor protection.',
    },
  },
  {
    name: 'legal-translation-agent',
    category: 'Legal AI',
    description: {
      ko: 'KP Legal Agent · 법률 번역 — 한·영·중·대만·일 5개 언어 사이에서 법률 용어의 정확성과 문서 구조를 유지하며 번역하는 에이전트.',
      en: 'KP Legal Agent · Legal Translation — Translates legal documents across 5 languages (EN, KO, ZH-CN, ZH-TW, JA) with strict accuracy, consistency, and structural fidelity.',
    },
  },
  {
    name: 'legal-writing-agent',
    category: 'Legal AI',
    description: {
      ko: 'KP Legal Agent · 법률 문서 작성 — 한국어·영어 법률 문서(의견서, 준비서면 등)를 각 관할권 관행에 맞춰 초안·수정하는 이중언어 작성 에이전트.',
      en: 'KP Legal Agent · Legal Drafting — Bilingual workflow for drafting and revising non-contract legal documents in Korean and English.',
    },
  },
  {
    name: 'second-review-agent',
    category: 'Legal AI',
    description: {
      ko: 'KP Legal Agent · 시니어 검수 — AI가 생성한 법률 문서를 외부 공유 전 마지막으로 검증하고, 빨간펜 레드라인 DOCX로 돌려주는 최종 품질 관문.',
      en: 'KP Legal Agent · Senior Review — Final quality gate for AI-generated legal documents, verifying citations and returning redlined DOCX with tracked changes.',
    },
  },
  {
    name: 'legal-agent-orchestrator',
    category: 'Legal AI',
    description: {
      ko: 'KP 리걸 오케스트레이터 — 8명의 전문 에이전트를 질문 유형에 따라 분류·라우팅하고, 순차·병렬·토론 협업으로 감사 가능한 법률 분석을 만드는 멀티 에이전트 워크플로 시스템.',
      en: 'KP Legal Orchestrator — Multi-agent legal workflow that classifies each question, routes it to one of 8 specialists, and runs sequential / parallel / debate collaboration to produce audit-friendly legal analysis with full process logs.',
    },
  },
  {
    name: 'citation-auditor',
    category: ['Legal AI', 'Skills / Plugins'],
    description: {
      ko: 'AI Trust Infrastructure · 인용 감사 — AI가 만든 법률·의료·학술 문서의 인용과 사실 주장을 한국법·미국법·EU법·UK법·학술·일반지식·웹 7개 검증기로 검사하고 ✅ ⚠️ ❓ 배지로 마크업하는 Claude Code 플러그인.',
      en: 'AI Trust Infrastructure · Citation Audit — Claude Code plugin that audits AI-generated documents (legal, medical, academic) using 7 verifiers (Korean / US / UK / EU law, academic, general knowledge, web) and annotates outputs with ✅ ⚠️ ❓ verdict badges.',
    },
  },
  {
    name: 'PIPA-expert',
    category: 'Legal AI',
    description: {
      ko: 'KP Legal Agent · 개인정보보호 — 929개 조문, 46개 공식 가이드라인, landmark 판례·해석례 30건, 상호참조 2,369개를 구조화 RAG로 다루는 개인정보보호법 리서치 에이전트.',
      en: 'KP Legal Agent · Privacy — Korean data privacy research workflow built on 929 statute articles, 46 PIPC guidelines, 30 landmark cases & interpretations, and 2,369 cross-references.',
    },
  },
  {
    name: 'GDPR-expert',
    category: 'Legal AI',
    description: {
      ko: 'KP Legal Agent · EU 데이터 보호 — 5개 EU 법률, 321개 조문 + 535개 전문(recital), EDPB 문서 120건, CJEU 판례 51건을 구조화 RAG로 다루는 EU 데이터 보호 리서치 에이전트.',
      en: 'KP Legal Agent · EU Data Protection — EU data protection workflow built on 5 EU laws, 321 articles + 535 recitals, 120 EDPB documents, and 51 CJEU cases via structured RAG.',
    },
  },
  {
    name: 'document-redactor',
    category: 'Legal AI',
    description: {
      ko: 'AI 업로드 전 안전 단계용 오프라인 DOCX 비식별화 도구. 계약서·의견서·소송 문서의 민감 정보를 로컬 브라우저에서 검토·삭제하고 검증된 `.redacted.docx`를 생성합니다.',
      en: 'Offline DOCX redactor for the safety step before AI. Reviews and removes sensitive strings from contracts, memos, and court filings locally, then exports a verified `.redacted.docx`.',
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

  // ── Skills / Plugins ──
  {
    name: 'StockAnalysisClaudeSkill',
    category: 'Skills / Plugins',
    description: {
      ko: '상장 기업의 종합 투자 분석 HTML 대시보드를 자동 생성하는 Claude 스킬.',
      en: 'Claude skill that generates comprehensive, premium investment analysis HTML dashboards for any publicly traded company.',
    },
  },
  {
    name: 'travel-planner-dashboard',
    category: 'Skills / Plugins',
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
  {
    name: 'assembly-intelligence',
    category: 'Legal AI',
    description: {
      ko: '산업별 종합 국회 모니터링 시스템 — 의안, 회의, 발언, 정책 신호를 추적해 국회 인텔리전스로 정리합니다.',
      en: 'Comprehensive National Assembly monitoring for industry-specific intelligence across bills, hearings, and policy signals.',
    },
  },
  {
    name: 'game-legal-briefing',
    category: 'Legal AI',
    description: {
      ko: '게임 산업 규제 인텔리전스 — 54개 RSS 피드에서 법률·규제 기사를 수집, AI 분류·요약 후 정적 브리핑 사이트 및 이메일로 자동 발행.',
      en: 'Open-source regulatory intelligence for the game industry — collects from 54 RSS feeds, AI-classifies and summarizes legal/regulatory articles, and publishes as a static briefing site with email delivery.',
    },
  },

  // ── Content & Web ──
  {
    name: 'briefing-hub',
    category: 'Content & Web',
    description: {
      ko: '브리핑 허브 — 영어 팟캐스트, 한국 유튜브, 데일리 매크로, 게임 산업법, Economist 큐레이션 5개 브리핑 사이트의 최신 항목을 한 페이지로 모아 보여주는 정적 Astro 포털.',
      en: 'Briefing Hub — Static Astro portal that aggregates the latest item from 5 briefing sites (English podcasts, Korean YouTube, daily macro, game-industry law, Economist curation) into a single weekly view.',
    },
  },
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
    category: 'Skills / Plugins',
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
    name: 'youtube-briefing',
    category: 'Content & Web',
    description: {
      ko: '한국 경제·시사 유튜브를 자동 요약해 에디토리얼 피드 형태의 브리핑으로 발행하는 시스템.',
      en: 'Auto-summarized Korean economics and current-affairs YouTube, published as an editorial feed.',
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
  'Skills / Plugins',
  'Content & Web',
  'Obsidian',
  'Fun & Creative',
]
