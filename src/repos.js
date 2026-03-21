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
    featured: true,
    description: {
      ko: '법률 템플릿과 상대방 초안을 조항별 분석과 변경추적 DOCX 레드라인으로 변환하는 로컬 우선 AI 계약 검토 에이전트.',
      en: 'Local-first AI contract review agent that turns legal templates and counterparty drafts into clause-level analysis and tracked-change DOCX redlines.',
    },
  },
  {
    name: 'general-legal-research',
    category: 'Legal AI',
    description: {
      ko: '교차 관할권 증거 기반 법률 연구 에이전트. 출처 검증, 신뢰도 점수화, 구조화된 비교 출력.',
      en: 'Evidence-based legal research agent for cross-jurisdiction, with source verification, reliability scoring, and structured comparative outputs.',
    },
  },
  {
    name: 'game-legal-research',
    category: 'Legal AI',
    description: {
      ko: '교차 관할권 게임 규제를 위한 증거 기반 법률 연구 에이전트.',
      en: 'Evidence-based legal research agent for cross-jurisdiction game regulation, with source verification and reliability scoring.',
    },
  },
  {
    name: 'legal-translation-agent',
    category: 'Legal AI',
    description: {
      ko: '5개 언어에 걸쳐 엄격한 정확성, 일관성, 구조적 충실도로 법률 문서를 번역하는 Claude Code 에이전트.',
      en: 'A Claude Code agent that translates legal documents with strict accuracy, consistency, and structural fidelity across 5 languages.',
    },
  },
  {
    name: 'legal-writing-agent',
    category: 'Legal AI',
    description: {
      ko: '한국어/영어 이중언어 법률 문서 작성 에이전트 — 관할권에 맞는 관행으로 비계약 법률 문서 초안 작성 및 수정.',
      en: 'Bilingual (Korean/English) legal writing agent — drafts and revises non-contract legal documents with jurisdiction-appropriate conventions.',
    },
  },
  {
    name: 'second-review-agent',
    category: 'Legal AI',
    description: {
      ko: 'AI 생성 법률 문서의 최종 품질 게이트. Claude Code 기반.',
      en: 'Final quality gate for AI-generated legal documents, powered by Claude Code.',
    },
  },

  // ── Investment ──
  {
    name: 'stock-analysis-agent',
    category: 'Investment',
    description: {
      ko: '미국 및 한국 주식에 대한 기관급 주식 리서치 — 며칠이 아닌 몇 분 만에 제공.',
      en: 'Institutional-grade stock research for US and Korean equities — delivered in minutes, not days.',
    },
  },
  {
    name: 'investment-portfolio-advisor',
    category: 'Investment',
    description: {
      ko: '당신의 개인 AI 투자 매니저. 탑다운 매크로-포트폴리오 분석 — 며칠이 아닌 몇 분 만에.',
      en: 'Your personal AI investment manager. Top-down macro-to-portfolio analysis — delivered in minutes, not days.',
    },
  },

  // ── Claude Code & AI Tools ──
  {
    name: 'everything-claude-code',
    category: 'Claude Code',
    description: {
      ko: '에이전트 하네스 성능 최적화 시스템. Claude Code, Codex, Opencode, Cursor를 위한 스킬, 본능, 메모리, 보안, 리서치 우선 개발.',
      en: 'The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.',
    },
  },
  {
    name: 'awesome-claude-code-subagents',
    category: 'Claude Code',
    description: {
      ko: '다양한 개발 활용 사례를 다루는 100개 이상의 전문 Claude Code 서브에이전트 컬렉션.',
      en: 'A collection of 100+ specialized Claude Code subagents covering a wide range of development use cases.',
    },
  },
  {
    name: 'StockAnalysisClaudeSkill',
    category: 'Claude Code',
    description: {
      ko: '공개 상장 기업에 대한 종합적이고 프리미엄급 투자 분석 HTML 대시보드를 생성하는 Claude 스킬.',
      en: 'Claude skill that generates comprehensive, premium investment analysis HTML dashboards for any publicly traded company.',
    },
  },

  // ── Content & Web ──
  {
    name: 'content-dashboard-agent',
    category: 'Content & Web',
    description: {
      ko: 'PDF, 텍스트 파일, 웹페이지, YouTube 영상을 구조화된 JSON과 세련된 단일 파일 HTML 대시보드로 변환.',
      en: 'Turn PDFs, text files, webpages, and YouTube videos into structured JSON and polished single-file HTML dashboards.',
    },
  },
  {
    name: 'web-content-designer',
    category: 'Content & Web',
    description: {
      ko: '텍스트, 기사, URL을 프로덕션급 단일 파일 HTML 페이지로 변환하는 Claude 스킬. 3가지 레이아웃, 10가지 디자인 테마.',
      en: 'Claude skill that transforms text, articles, or URLs into production-grade single-file HTML pages. 3 layouts, 10 design themes.',
    },
  },
  {
    name: 'podcast-briefing',
    category: 'Content & Web',
    description: {
      ko: 'AI 큐레이션 이중언어 팟캐스트 인텔리전스 — 9개 소스, 한/영 요약, 프리미엄 에디토리얼 웹 앱.',
      en: 'AI-curated bilingual podcast intelligence — 9 sources, KO/EN summaries, premium editorial web app.',
    },
  },
  {
    name: 'ebook-writer',
    category: 'Content & Web',
    description: {
      ko: '주제를 전문적이고 인쇄 가능한 전자책으로 변환하는 멀티 에이전트 시스템.',
      en: 'A multi-agent system that transforms a topic into a professional, print-ready ebook.',
    },
  },

  // ── Obsidian ──
  {
    name: 'obsidian-auto-tagger',
    category: 'Obsidian',
    description: {
      ko: '모든 Obsidian 볼트를 위한 AI 기반 태깅 — 완전 설정 기반, 하드코딩 제로.',
      en: 'AI-powered tagging for any Obsidian vault — fully config-driven, zero hardcoding.',
    },
  },
  {
    name: 'obsidian-vault-doctor',
    category: 'Obsidian',
    description: {
      ko: '범용 Obsidian 볼트 건강 프레임워크 — 단일 vault-rules.json으로 감사, 분류, 리뷰 주기 실행.',
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
      ko: '바닐라 HTML/CSS/JS와 GSAP으로 구축한 세련되고 몰입감 있는 풀스크린 인테리어 갤러리 슬라이더.',
      en: 'A sleek, immersive full-screen interior gallery slider built with vanilla HTML/CSS/JS and GSAP.',
    },
  },
  {
    name: 'DashGen-AI',
    category: 'Fun & Creative',
    description: {
      ko: '모든 YouTube 영상을 정교한 HTML 전략 대시보드로 변환.',
      en: 'Turn any YouTube video into a sophisticated HTML strategy dashboard.',
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
  'Claude Code',
  'Content & Web',
  'Obsidian',
  'Fun & Creative',
]
