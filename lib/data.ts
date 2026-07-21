export const siteConfig = {
  name: 'Mohamed Ibrahim Mohamed',
  title: 'Frontend Engineer & AI Automation Developer',
  tagline: 'I build the interface and the intelligence behind it.',
  description:
    'Frontend Engineer specializing in React and Next.js, building secure, scalable, production-grade web apps — combined with AI automation systems that make those products smarter.',
  location: 'Mansoura, Egypt (UTC+2)',
  availability: 'Available for full-time remote work',
  email: 'mohamedelboraei138@gmail.com',
  phone: '+20 155 065 4064',
  linkedin: 'https://www.linkedin.com/in/mohamed-elboraei-84a430361',
  github: 'https://github.com/mohamed0155065',
}

export const skills = {
  frontend: [
    'React 19',
    'Next.js 15',
    'TypeScript',
    'JavaScript (ES2023)',
    'Tailwind CSS',
    'Framer Motion',
    'Material UI',
  ],
  state: ['Redux Toolkit', 'Zustand', 'React Query', 'Context API'],
  forms: ['React Hook Form', 'Zod'],
  backend: ['Supabase (PostgreSQL, Auth, Storage)', 'Server Actions', 'REST APIs'],
  ai: [
    'LLM Integration (Groq API)',
    'Prompt Engineering',
    'Document Processing (PDF, DOCX)',
    'n8n Webhooks & Automation',
    'Multi-tenant AI Architecture',
  ],
  tooling: ['Vite', 'Git', 'Vercel', 'Conventional Commits'],
}

export const projects = [
  {
    slug: 'marketly',
    title: 'Marketly',
    subtitle: 'Production-Grade E-Commerce Platform',
    year: '2026',
    category: 'Full-Stack',
    tags: ['Next.js 15', 'TypeScript', 'Supabase', 'Zustand', 'Recharts', 'Zod'],
    summary:
      'A full e-commerce platform built with edge-level auth, zero client-side mutations, and a real-time analytics dashboard. Every architectural decision was made to eliminate security exposure.',
    liveUrl: 'https://e-commerce-v7pt.vercel.app',
    githubUrl: 'https://github.com/mohamed0155065/e-commerce',
    color: 'from-teal-900/30 to-background',
    accentColor: 'text-teal',
    metrics: [
      { label: 'Bundle size reduction', value: '~25%' },
      { label: 'DB calls cut during typing', value: '~40%' },
      { label: 'Client-side mutations eliminated', value: '100%' },
    ],
    problem:
      'Most e-commerce demos expose admin routes on the client, leak data through CSR mutations, and bolt on search as an afterthought. The goal was to build one that treats security and performance as first-class requirements, not last-minute patches.',
    decisions: [
      {
        title: 'Edge-Level Authentication',
        detail:
          'Used Next.js Middleware combined with Supabase JWT verification to block unauthorized admin access before the page ever renders. Zero client-side exposure — the response never leaves the edge if auth fails.',
      },
      {
        title: '100% Server Actions for DB Writes',
        detail:
          'Eliminated all client-side data mutations by migrating every database write to Next.js Server Actions. This reduced the client bundle by ~25% and prevented any data leakage through exposed API routes.',
      },
      {
        title: 'URL-Driven Search with Debouncing',
        detail:
          'Built fully shareable, URL-driven search state with debounced queries. This cut redundant database calls by ~40% during typing while keeping search results bookmarkable and shareable.',
      },
      {
        title: 'Zustand Mounting Guards for SSR/CSR Hydration',
        detail:
          "Resolved hydration mismatches from persisted Zustand state by implementing mounting guards — the component only reads from the store after client-side hydration, ensuring stable rendering across sessions.",
      },
    ],
    outcomes: [
      'Edge authentication blocking unauthorized access before render',
      '100% migration of DB writes to Server Actions, ~25% bundle reduction',
      'URL-driven debounced search cuts DB calls ~40% during typing',
      'Real-time sales analytics dashboard using Recharts on live PostgreSQL data',
      'Zero SSR/CSR hydration mismatches via Zustand mounting guards',
    ],
    improvements:
      'Add optimistic UI updates for cart operations, implement Redis caching for product catalog, and build an inventory management system with low-stock alerts.',
  },
  {
    slug: 'ai-document-assistant',
    title: 'AI Document Assistant',
    subtitle: 'Multi-Tenant AI Document Processing Platform',
    year: '2025',
    category: 'AI / Full-Stack',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Groq API', 'pdf2json', 'mammoth'],
    summary:
      'A multi-tenant platform where users create isolated project workspaces, upload PDF/DOCX/TXT files, and run AI-driven analysis through custom prompt engineering. Built on Groq for sub-100ms LLM inference.',
    liveUrl: 'https://ai-document-assistant-beryl.vercel.app/',
    githubUrl: 'https://github.com/mohamed0155065/Ai-document-assistant-',
    color: 'from-blue-900/20 to-background',
    accentColor: 'text-teal',
    metrics: [
      { label: 'File formats supported', value: '3 (PDF, DOCX, TXT)' },
      { label: 'Architecture', value: 'Multi-tenant' },
      { label: 'LLM provider', value: 'Groq (low-latency)' },
    ],
    problem:
      'Teams needed to analyze large volumes of documents against custom criteria without sending raw files to a third-party SaaS. The platform needed strict user isolation, flexible prompt control, and fast inference.',
    decisions: [
      {
        title: 'Multi-Tenant Workspace Isolation via Supabase RLS',
        detail:
          'Every project, document, and AI output is scoped to the authenticated user through Supabase Row Level Security. No user can query another tenant\'s data, regardless of the API call shape.',
      },
      {
        title: 'Document Ingestion Pipelines',
        detail:
          'Built separate parsers for PDF (pdf2json), DOCX (mammoth), and TXT files, each outputting normalized, structured text. This normalization layer ensures the LLM receives consistent input regardless of source format.',
      },
      {
        title: 'Multi-Document Context Aggregation',
        detail:
          'Designed a context aggregation layer that merges extracted content from multiple documents with user-defined prompts before sending to Groq. This enables coherent analysis across an entire project\'s document set.',
      },
      {
        title: 'Groq API for Low-Latency Inference',
        detail:
          'Chose Groq over OpenAI for its sub-100ms inference speed. For a document analysis tool where users expect near-instant responses, latency directly impacts perceived quality.',
      },
    ],
    outcomes: [
      'Isolated multi-tenant workspaces with Supabase RLS preventing cross-user data access',
      'Ingestion pipelines for PDF, DOCX, TXT with normalized output for downstream LLM processing',
      'Multi-document context aggregation enabling coherent analysis across entire project document sets',
      'Drag-and-drop file uploads with document lifecycle management and analysis history tracking',
      'Clean architecture with strict separation: ingestion, AI orchestration, storage, and UI layers',
    ],
    improvements:
      'Add streaming AI responses for large documents, implement semantic search across document content using embeddings, and support bulk export of analysis outputs.',
  },
  {
    slug: 'customer-service-bot',
    title: 'Customer Service Telegram Bot',
    subtitle: 'AI-Powered Automated Support System',
    year: '2025',
    category: 'AI Automation',
    tags: ['n8n', 'Telegram API', 'LLM Integration', 'Webhooks', 'Prompt Engineering'],
    summary:
      'An automated customer service bot built on Telegram using n8n workflows and LLM integration. Handles FAQs, routes complex queries, and maintains conversation context — reducing support load without sacrificing response quality.',
    liveUrl: '#',
    githubUrl: 'https://github.com/mohamed0155065',
    color: 'from-cyan-900/20 to-background',
    accentColor: 'text-teal',
    metrics: [
      { label: 'Automation layer', value: 'n8n Workflows' },
      { label: 'Platform', value: 'Telegram API' },
      { label: 'Integration', value: 'LLM + Webhooks' },
    ],
    problem:
      'Small businesses spending significant hours on repetitive support tickets needed automation that felt human — not a rigid decision tree. The bot needed to understand intent, not just match keywords.',
    decisions: [
      {
        title: 'n8n as the Workflow Orchestration Layer',
        detail:
          'n8n provides a visual, inspectable workflow engine that non-engineers can monitor. It handles Telegram webhook ingestion, message routing, LLM API calls, and response dispatch — all in a single auditable flow.',
      },
      {
        title: 'Intent-Based Routing vs Keyword Matching',
        detail:
          'Instead of a static keyword tree, queries are sent to an LLM with a carefully engineered system prompt that classifies intent and selects the appropriate response template. This handles variations in phrasing naturally.',
      },
      {
        title: 'Conversation Context Management',
        detail:
          'Implemented a sliding-window context buffer that passes recent message history to the LLM. This maintains conversation coherence across multi-turn exchanges without exceeding token limits.',
      },
    ],
    outcomes: [
      'Automated FAQ handling with LLM-powered intent classification',
      'n8n workflow orchestration with full audit trail and visual monitoring',
      'Context-aware multi-turn conversations via sliding-window history',
      'Seamless escalation path routing complex queries to human agents',
    ],
    improvements:
      'Add sentiment analysis to prioritize urgent escalations, integrate with CRM systems for order status lookups, and build a no-code admin panel for updating knowledge bases.',
  },
  {
    slug: 'automated-hiring-system',
    title: 'Automated Hiring System',
    subtitle: 'End-to-End Recruitment Automation Pipeline',
    year: '2025',
    category: 'AI Automation',
    tags: ['n8n', 'LLM Integration', 'Webhooks', 'Prompt Engineering', 'Automation'],
    summary:
      'A fully automated hiring pipeline that ingests applications, scores candidates against defined criteria using LLM evaluation, routes shortlisted candidates for review, and dispatches automated communications — all without manual intervention.',
    liveUrl: '#',
    githubUrl: 'https://github.com/mohamed0155065',
    color: 'from-indigo-900/20 to-background',
    accentColor: 'text-teal',
    metrics: [
      { label: 'Pipeline stages automated', value: '5' },
      { label: 'Manual steps eliminated', value: 'Initial screening' },
      { label: 'Stack', value: 'n8n + LLM + Webhooks' },
    ],
    problem:
      'Recruiting teams were spending 60–70% of screening time on initial CV reviews — repetitive work that doesn\'t require human judgment. The system needed to score objectively against criteria, not introduce bias.',
    decisions: [
      {
        title: 'Structured LLM Scoring with Explicit Criteria',
        detail:
          'Candidates are scored using a structured prompt that provides explicit criteria weights (technical skills, experience level, required qualifications). The LLM outputs a JSON score object, not free text — enabling automated threshold filtering.',
      },
      {
        title: 'n8n Multi-Stage Pipeline with Conditional Routing',
        detail:
          'Each pipeline stage (ingestion → scoring → threshold check → routing → communication) is a separate n8n node with conditional branches. This makes the logic transparent, auditable, and easy to modify without code changes.',
      },
      {
        title: 'Automated Communication Templates',
        detail:
          'Shortlisted candidates receive personalized interview invitations; rejected candidates receive respectful, contextual rejection emails — all generated and dispatched automatically while remaining adjustable through the n8n template nodes.',
      },
    ],
    outcomes: [
      '5-stage automated pipeline: ingestion, LLM scoring, threshold filtering, routing, and communication',
      'Structured JSON scoring output enabling objective threshold-based candidate filtering',
      'Personalized automated communications for both shortlisted and rejected candidates',
      'Full pipeline visibility through n8n\'s visual workflow interface',
      'Eliminated manual initial screening phase entirely',
    ],
    improvements:
      'Add bias detection analysis on scoring outputs, build a recruiter dashboard for pipeline analytics, and implement A/B testing on scoring criteria to improve hire quality over time.',
  },
]

export type Project = (typeof projects)[0]
