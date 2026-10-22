# Alex Cinovoj

**AI & Infra Engineer. Building AI that survives outside the demo.**

Policy gates, approval workflows, immutable audit, and eval harnesses: the deterministic layer that makes autonomous systems deployable.

Founder & CTO, TechTide AI · CTO & Co-Founder, CPG Playbook

Lovable Senior Champion · 9 Anthropic Academy course completions

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alexcinovoj/)
[![TechTide AI](https://img.shields.io/badge/techtideai.io-0f766e?style=flat-square)](https://techtideai.io)
[![alexcinovoj.com](https://img.shields.io/badge/alexcinovoj.com-111827?style=flat-square&logo=safari&logoColor=white)](https://alexcinovoj.com)

</div>

<img src="assets/divider_thin.png" alt="" width="100%" />

## Why these repositories exist

TechTide AI runs two lanes, and the 34 public repositories indexed below serve both. The first lane is revenue for Alex: the public code backs the LinkedIn writing and the client engagements listed on [techtideai.io](https://techtideai.io), so every repository here is something a prospect can read before a call. The second lane is building TechTide AI into a local automation agency in Columbus, Ohio while publishing reproducible agent tooling, which is why most of the original projects are control planes, harnesses, and evaluation gates rather than demos. The timing is deliberate: Anthropic shipped Agent Skills in October 2025 as a portable format for packaging agent procedures[^1], and the 2025 Stack Overflow Developer Survey found 52% of developers saying agents have changed how they complete work while trust in AI tools is falling[^2]. Inspectable, reproducible tooling is the response to that gap.

## Featured projects

| Project | What it does | Status |
| :--- | :--- | :--- |
| [**Abodra**](https://abodra.ai) | Building-design software for exploring a property project and preparing a builder handoff. | In development |
| [**ShipReady**](https://shipreadyai.dev) | A launch-check tool for AI-built apps. It separates findings from declared information and checks that still need a person. | Product · Scan verification pending |
| [**AssetForge 3D**](https://assetforge3d.lovable.app) | A workspace for creating and refining 3D assets from prompts and reference images. | Beta candidate |
| [**CipherClaw**](https://cipherclaw.com) | An open-source toolkit for investigating recorded multi-agent runs. | Open-source engineering project |

These are product and engineering projects. Their listings do not imply customer results or a completed launch review.

[**Visit the TechTideAI Office**](https://ttoffice.lovable.app): a walkable 3D studio and gallery. Staff activity is simulated.

## Purpose and use cases

This repository is the source for the **Alexi5000 GitHub profile** and the index of every public repository under Alexi5000 and TechTideOhio. It presents current open-source work, product builds, and the operating principles behind governed AI systems. Use it when you need an accurate public overview of the projects, the design philosophy behind them, or the right route for collaboration and technical questions.

## Maintainer quickstart

The profile is a Markdown-and-assets repository with a dependency-free Node verification contract. Use **Node.js 22 or newer** to validate a change before publishing it.

```bash
git clone https://github.com/Alexi5000/Alexi5000.git
cd Alexi5000
npm ci
npm run build
npm run lint
npm run typecheck
npm run test
```

`npm run build`, `npm run lint`, and `npm run test` validate the profile contract: public identity, quickstart and support routes, and the presence of every local asset referenced by the README. Keep the profile concise, publish only intentionally public information, and add any new local visual file under `assets/`.

<div align="center">

![Anthropic](https://img.shields.io/badge/Anthropic-111827?style=flat-square&logo=anthropic&logoColor=white)
![Claude Code](https://img.shields.io/badge/Claude_Code-111827?style=flat-square&logo=anthropic&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-111827?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-111827?style=flat-square&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-111827?style=flat-square&logo=python&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-111827?style=flat-square&logo=postgresql&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-111827?style=flat-square&logo=supabase&logoColor=3ECF8E)
![Docker](https://img.shields.io/badge/Docker-111827?style=flat-square&logo=docker&logoColor=white)
![React](https://img.shields.io/badge/React-111827?style=flat-square&logo=react&logoColor=61DAFB)

![Anthropic Academy](https://img.shields.io/badge/Anthropic_Academy-9_Courses_Completed-D97706?style=flat-square&logo=anthropic&logoColor=white)
![Enterprise IT](https://img.shields.io/badge/US_Enterprise_IT-13_Years-3B82F6?style=flat-square)

</div>

<img src="assets/divider_thin.png" alt="" width="100%" />

## More open-source work

Every public repository under [Alexi5000](https://github.com/Alexi5000) and [TechTideOhio](https://github.com/TechTideOhio), each listed once. Descriptions follow each repository's own README tagline as of 2026-10-20. Forks are marked with their upstream.

### Originals

| Project | What it does |
| :--- | :--- |
| [**ClawKeeper**](https://github.com/Alexi5000/ClawKeeper) | Auditable SMB finance-agent control plane. Agents can propose finance work; deterministic policy, tenant boundaries, approval gates, and evidence logs decide what can run. |
| [**techtide-harness-kit**](https://github.com/TechTideOhio/techtide-harness-kit) | The enterprise skill platform for AI coding agents: 385 production skills, 348 specialist agents, 6 cloud providers, 7 harnesses, one repo. |
| [**CipherClaw**](https://github.com/Alexi5000/CipherClaw) | An OpenClaw debugging and observability skill: an open-source toolkit that traces root causes, profiles agent behavior, and predicts failures in multi-agent systems. |
| [**swarm-357**](https://github.com/TechTideOhio/swarm-357) | A Python multi-agent orchestration framework for Claude agents: a 357-role catalog across 6 business layers with portable memory, enforced LLM cost control, human-in-the-loop approvals on shell commands, and durable checkpoints. |
| [**swarm-357-site**](https://github.com/TechTideOhio/swarm-357-site) | Marketing site, documentation library, and engineering blog for TechTide Swarm 357, built with Next.js 16, React 19, and Tailwind CSS v4. |
| [**FintheFinder**](https://github.com/Alexi5000/FintheFinder) | Evidence-first deep research built on Mastra agents, typed contracts, Supabase persistence, and production proof gates. |
| [**TechTideAI2**](https://github.com/Alexi5000/TechTideAI2) | The harness an FDE ships into a customer environment, the customer's operators monitor, and an auditor can replay. |
| [**techtide-lovable-skills**](https://github.com/TechTideOhio/techtide-lovable-skills) | A curated monorepo of reusable AI-agent skills and workflow contracts for Lovable, with companion guidance for v0 and Replit handoffs. |
| [**Bri**](https://github.com/Alexi5000/Bri) | BRI (Brianna), an open-source multimodal video intelligence agent: frame extraction, scene captions, transcription, and object detection through a FastAPI MCP service and a Streamlit interface. |
| [**Ellie**](https://github.com/Alexi5000/Ellie) | AI video analysis agent: upload any video, ask anything. Gemini 2.5 Flash, Whisper, React 19, and tRPC 11. |
| [**MoneyFlow**](https://github.com/Alexi5000/MoneyFlow) | A local budgeting demo with a dark dashboard, rule-based categorization, budget envelopes, savings goals, and a React plus FastAPI foundation. |
| [**WildScape-Europe**](https://github.com/Alexi5000/WildScape-Europe) | A React and TypeScript camping discovery platform for European wilderness travel: typed campsite search, weather and aurora intelligence, booking workflows, and interactive maps in one Vite frontend. |
| [**cozymls1**](https://github.com/Alexi5000/cozymls1) | Haven Estate Suite: MLS integration, deal pipeline, client management, and market analytics in one dashboard for real estate agents. |
| [**diagrammagic**](https://github.com/Alexi5000/diagrammagic) | AI-powered diagram generation: type what you want in plain English, get production-ready Mermaid diagrams. |
| [**miro-workflows**](https://github.com/Alexi5000/miro-workflows) | Miro command center: React dashboard, Node API, custom MCP server, typed contracts, three-agent planning harness, OAuth device flow, Prometheus metrics, and a full Docker stack. |
| [**titanic-iceberg-run**](https://github.com/Alexi5000/titanic-iceberg-run) | A browser-based cinematic navigation game in TypeScript, Three.js, Vite, and WebGL2: captain the RMS Titanic through a procedurally generated North Atlantic crossing. |
| [**yuberapp1**](https://github.com/Alexi5000/yuberapp1) | Yuber: describe what broke, and it classifies the emergency, finds a nearby professional, creates a typed service workflow, and tracks the job from request to resolution. |
| [**SustainableFW**](https://github.com/TechTideOhio/SustainableFW) | ForestTwin, a forest-monitoring interface prototype with 3D visualization, simulated telemetry, scenario controls, and carbon-ledger views. API routes return mock data. |
| [**scarlet-fiber-future-web**](https://github.com/TechTideOhio/scarlet-fiber-future-web) | Buckeye DataCom fiber optic solutions website: animated fiber cable visualizations and service information for a fiber installation and networking company. |
| [**.github**](https://github.com/TechTideOhio/.github) | Organization-profile and default community-health repository for TechTide AI. |

### Forks

| Project | What it does |
| :--- | :--- |
| [**9router_OrcaFlow**](https://github.com/Alexi5000/9router_OrcaFlow) (fork of decolua/9router) | OrcaFlow: one endpoint for all your AI providers, with smart fallback, auto-routing, and zero downtime. |
| [**BobKnots**](https://github.com/Alexi5000/BobKnots) (fork of OpenKnots/code-editor) | Knot Code: AI coding without the bloat. A lightweight, AI-native code editor powered by OpenClaw for desktop, iOS, and browser. |
| [**Open-SEO-Clawli**](https://github.com/Alexi5000/Open-SEO-Clawli) (fork of every-app/open-seo) | Fork of OpenSEO, an open-source alternative to Semrush and Ahrefs, maintained for Clawli.ai. |
| [**OpenVoiceUI_ClawLI**](https://github.com/Alexi5000/OpenVoiceUI_ClawLI) (fork of MCERQUA/OpenVoiceUI) | TechTide ClawLI Voice Interface: a voice-first, multimodal interface for autonomous agents that packages the audio pipeline, streaming transcription, sentence boundaries, and barge-in handling. |
| [**Rose**](https://github.com/Alexi5000/Rose) (fork of neural-maze/ava-whatsapp-agent-course) | An open-source voice companion for emotional support, grounding, and reflective conversations with deterministic crisis-safety handling. Not a therapist or emergency service. |
| [**agent-lightning**](https://github.com/Alexi5000/agent-lightning) (fork of microsoft/agent-lightning) | The absolute trainer to light up AI agents: a Microsoft Research framework for optimizing agents with reinforcement learning, prompt optimization, and fine-tuning. This fork pins Python 3.10 to 3.13 with a checked-in `uv.lock`. |
| [**anvil_TechTide**](https://github.com/Alexi5000/anvil_TechTide) (fork of zdenham/anvil) | Anvil, a desktop IDE for parallel agent work: isolated worktrees, first-class planning, a full terminal and file-editing surface, and visibility into agent and sub-agent activity. |
| [**awesome-llm-apps**](https://github.com/Alexi5000/awesome-llm-apps) (fork of Shubhamsaboo/awesome-llm-apps) | Awesome LLM Apps: AI agents, multi-agent teams, MCP agents, RAG, voice agents, agent skills, and fine-tuning tutorials. Maintained as an applied agent-engineering reference library. |
| [**claude-code-templates**](https://github.com/Alexi5000/claude-code-templates) (fork of davila7/claude-code-templates) | Ready-to-use configurations for Anthropic's Claude Code: agents, commands, MCP integrations, settings, hooks, skills, and project templates, installable with one command. |
| [**openclawworld_ClawLI**](https://github.com/Alexi5000/openclawworld_ClawLI) (fork of DevvGwardo/openclawworld) | A local-first multiplayer 3D environment where people and AI agents move, chat, emote, and coordinate in real time; a reference for operator-visible agent systems. |
| [**scarlet-fiber-future-web**](https://github.com/Alexi5000/scarlet-fiber-future-web) (fork of TechTideOhio/scarlet-fiber-future-web) | Scarlet Fiber Future Web: the primary public web experience for TechTide Ohio, a responsive React, TypeScript, Vite, and Tailwind application. |
| [**signetai_Orca**](https://github.com/Alexi5000/signetai_Orca) (fork of Signet-AI/signetai) | SignetAI Orca: shared memory for every harness. One memory graph across Claude Code, OpenCode, OpenClaw, Codex, Kimi, Hermes, Pi, and Gemini CLI, local first with an audit trail back to source. |
| [**terminal-ui**](https://github.com/Alexi5000/terminal-ui) (fork of OpenKnots/terminal-ui) | Terminal-like UI components for the web: build CLI experiences in React. |
| [**vibe-kanban**](https://github.com/Alexi5000/vibe-kanban) (fork of BloopAI/vibe-kanban) | A kanban board where agents report their own task state over MCP: what is queued, in flight, blocked, and shipped, live per agent and per repo. |

## More products and experiments

| Product | What it does | Tags |
| :--- | :--- | :--- |
| [**Y2KSelfie.ai**](https://y2kselfie.ai) | An AI photo experience that transforms modern selfies into nostalgic Y2K-era portraits. | AI imaging · Consumer web app |
| [**Ship With Bob**](https://shipwithbob.com) | A voice-first task manager that turns a spoken brain dump into small, prioritized jobs so users can decide what to do now, next, and later. | Voice AI · Productivity PWA |
| [**Syncra**](https://syncra.us) | An interactive law-firm operations portal demonstrating AI-assisted document intake, classification, routing, approvals, and role-based workflows. Proposal demo built for a California law firm. | Legal tech · AI workflow portal · Proposal demo |
| [**Clawli**](https://clawli.ai) | A multi-agent LinkedIn workspace that turns content strategy into researched, reviewed, and approval-gated posts. | Multi-agent AI · LinkedIn operations |
| [**Buckeye DataCom**](https://buckeyedatacom.lovable.app) | A client website built for a Central Ohio low-voltage contractor, presenting fiber, structured cabling, and enterprise network services. | Client delivery · Service-business website · Central Ohio |
| [**Midwest Thunder**](https://mt.lovable.app) | A client-facing equestrian event experience built for an Iowa organization, bringing season schedules, ticket choices, venue information, and visitor navigation into one cohesive digital product. | Client portal · Event experience · Iowa |

<img src="assets/divider_thin.png" alt="" width="100%" />

## Manifesto

```
Logs over vibes. Production over theater.
Deny by default.
```

Most agent failures are not model failures; they are governance failures. I design the enforcement layer that sits between an agent and anything that matters: deterministic policy engines with zero LLM calls in the decision path, human-in-the-loop approval gates, database-enforced immutable audit logs, and eval harnesses that treat policy regressions as build breaks. If a system cannot show you a log, it is not governed.

The trustworthy part of an agent system is the part with no AI in it. Policy checks, budget ceilings, audit trails, and approval gates should be boring, deterministic functions, because you cannot prompt-inject a function.

## Pre-2026 governance work

The same discipline, before it had a name: production marketplace infrastructure with idempotent payment webhooks, forward-only migrations, end-to-end trace propagation into an ops event log, and ten pre-written incident runbooks, on top of 13 years in US enterprise IT. Governance is not a pivot; it is the pattern.

## Shipping now

- **TechTide AI**: [Systems Decision Audit](https://techtideai.io/audit), Custom MCP Server Development, and Production Triage & Implementation
- **techtide-harness-kit**: trust contracts and CI gates for agent skills
- **swarm-357**: governed multi-agent orchestration

*Last reviewed 2026-10-22.*

<img src="assets/divider_thin.png" alt="" width="100%" />

## Podcast & community

Logs over Vibes — a new podcast from Alex Cinovoj and Shane Spencer. Coming soon. Season 1 aired as Automation Vibes (2025).

[Season 1 archive](https://automationvibes.ai) · [Substack](https://alexcinovoj.substack.com/)

<img src="assets/divider_thin.png" alt="" width="100%" />

## Support and contact

For a project question, collaboration inquiry, or a correction to this public profile, start at [techtideai.io](https://techtideai.io) or email [alex@techtideai.io](mailto:alex@techtideai.io). Do not send credentials, customer records, private repository material, or security-sensitive reports through public GitHub discussions.

## Work with me

### Systems Decision Audit — $1,000

A 90-minute live review of one stalled AI workflow: inputs, retrieval, tool permissions, failure handling, security posture. Written verdict within 48 hours — Ship, Fix, Redesign, or Stop. Full fee credited toward implementation if it starts within 30 days.

[Systems Decision Audit](https://techtideai.io/audit)

### Custom MCP Server Development — from $12,000, fixed scope

Securely connect Claude to your internal APIs and data: strict JSON schemas, scoped OAuth boundaries, least-privilege tool permissions, immutable audit logs. Scoped and quoted fixed before work starts.

### Production Triage & Implementation — $10,000–$25,000, fixed scope, application only

Move a stalled AI pilot into production: deterministic policy engines, human-in-the-loop approval gates, observability, rollback rehearsals. Fixed scope, fixed price, application only.

[TechTide AI](https://techtideai.io)

[LinkedIn](https://linkedin.com/in/alexcinovoj) · [X](https://x.com/AlexCinovoj) · [Substack](https://alexcinovoj.substack.com/) · [GitHub](https://github.com/Alexi5000)

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alexcinovoj/)
[![TechTide AI](https://img.shields.io/badge/techtideai.io-0f766e?style=flat-square)](https://techtideai.io)
[![alexcinovoj.com](https://img.shields.io/badge/alexcinovoj.com-111827?style=flat-square&logo=safari&logoColor=white)](https://alexcinovoj.com)
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:alex@techtideai.io)

<sub>9 Anthropic Academy course completions · 13 yrs US enterprise IT · Columbus, OH</sub>

</div>

[^1]: Anthropic, "Introducing Agent Skills", https://www.anthropic.com/news/skills, published 2025-10-16.
[^2]: Stack Overflow, "Developers remain willing but reluctant to use AI: The 2025 Developer Survey results are here", https://stackoverflow.blog/2025/07/29/developers-remain-willing-but-reluctant-to-use-ai-the-2025-developer-survey-results-are-here/, published 2025-07-29.
