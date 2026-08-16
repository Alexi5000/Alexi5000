# Alex Cinovoj

**I build control planes for AI agents.**

Policy gates, approval workflows, immutable audit, and eval harnesses — the deterministic layer that makes autonomous systems deployable.

Founder & CTO, TechTide AI · Automation Vibes co-host · 13 years US enterprise IT · Lovable Champion and Lovable beta user for over 1 year · 9 Anthropic Academy course completions

Lovable Champion is an earned Discord community support volunteer role, not a certification.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alexcinovoj/)
[![TechTide AI](https://img.shields.io/badge/techtideai.io-0f766e?style=flat-square)](https://techtideai.io)
[![alexcinovoj.com](https://img.shields.io/badge/alexcinovoj.com-111827?style=flat-square&logo=safari&logoColor=white)](https://alexcinovoj.com)

</div>

<img src="assets/divider_thin.png" alt="" width="100%" />

## Purpose and use cases

This repository is the source for the **Alexi5000 GitHub profile**. It presents current open-source work, product builds, and the operating principles behind governed AI systems. Use it when you need an accurate public overview of the projects, the design philosophy behind them, or the right route for collaboration and technical questions.

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

Most agent failures aren't model failures — they're governance failures. I design the enforcement layer that sits between an agent and anything that matters: deterministic policy engines with zero LLM calls in the decision path, human-in-the-loop approval gates, database-enforced immutable audit logs, and eval harnesses that treat policy regressions as build breaks. If a system can't show you a log, it isn't governed.

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

</div>

<div align="center">

![Anthropic Academy](https://img.shields.io/badge/Anthropic_Academy-9_Courses_Completed-D97706?style=flat-square&logo=anthropic&logoColor=white)
![Worker Nodes](https://img.shields.io/badge/Worker_Nodes-50+_in_Production-16a34a?style=flat-square)
![Enterprise IT](https://img.shields.io/badge/US_Enterprise_IT-13_Years-3B82F6?style=flat-square)

</div>

<img src="assets/divider_thin.png" alt="" width="100%" />

## Open Source

| Project | What it governs |
| :--- | :--- |
| [**ClawKeeper**](https://github.com/Alexi5000/ClawKeeper) | Agent finance platform where a deterministic policy engine runs tenant, capability, and approval checks **before any LLM call**. Payments default to $0 autonomous spend, and the audit log is immutable at the database layer — `UPDATE` or `DELETE` raises an exception. |
| [**techtide-harness-kit**](https://github.com/TechTideOhio/techtide-harness-kit) | Trust contracts as JSON Schema: every skill declares its risk tier, tool permissions, deny-by-default network egress, approval gates, and compliance control mappings. Ships a prompt-injection threat model with adversarial fixtures, enforced by ~28 CI validation gates. |
| [**CipherClaw**](https://github.com/Alexi5000/CipherClaw) | Multi-agent debugger with **zero LLM calls in the analysis path** — causal graphs, weighted root-cause scoring, and failure prediction you can't prompt-inject. 206 zero-mock tests, zero runtime dependencies, no network egress. |
| [**swarm-357**](https://github.com/TechTideOhio/swarm-357) | 357-agent orchestrator governed by per-agent budget caps, a pattern-matched bash security gate, layer-level daily budgets with automatic model downgrade, a hard per-run spend ceiling, and correlation-ID structured telemetry. |
| [**FintheFinder**](https://github.com/Alexi5000/FintheFinder) | Deep-research agent with a real human-in-the-loop approval workflow — the run suspends until a human approves — and a deterministic citation audit with zero AI in the verification path. |
| [**TechTideAI2**](https://github.com/Alexi5000/TechTideAI2) | Company-scale agent platform on a three-plane architecture — control, data, and evidence. Status transitions run through an explicit state machine, execution has a hard timeout, and changes are graded by an adversarial eval harness with a 33-task golden suite. |

## Product Builds

| Product | What it does | Tags |
| :--- | :--- | :--- |
| [**Y2KSelfie.ai**](https://y2kselfie.ai) | An AI photo experience that transforms modern selfies into nostalgic Y2K-era portraits. | AI imaging · consumer web app |
| [**Ship With Bob**](https://shipwithbob.com) | A voice-first task manager that turns a spoken brain dump into small, prioritized jobs so users can decide what to do now, next, and later. | Voice AI · productivity PWA |
| [**Syncra**](https://syncra.us) | An interactive law-firm operations portal demonstrating AI-assisted document intake, classification, routing, approvals, and role-based workflows. Proposal demo built for a California law firm. | Legal tech · AI workflow portal |
| [**Clawli**](https://clawli.ai) | A multi-agent LinkedIn workspace that turns content strategy into researched, reviewed, and approval-gated posts. | Multi-agent AI · LinkedIn operations |
| [**Buckeye DataCom**](https://buckeyedatacom.lovable.app) | A client website for a Central Ohio low-voltage contractor, presenting fiber, structured cabling, and enterprise network services. | Client website · fiber & low-voltage · Central Ohio |

<img src="assets/divider_thin.png" alt="" width="100%" />

## Manifesto

```
Logs over vibes.
Production over theater.
Deny by default.
```

The trustworthy part of an agent system is the part with no AI in it. Policy checks, budget ceilings, audit trails, and approval gates should be boring, deterministic functions — because you can't prompt-inject a function.

<img src="assets/divider_thin.png" alt="" width="100%" />

## Pre-2026 governance work

The same discipline, before it had a name: production marketplace infrastructure with idempotent payment webhooks, forward-only migrations, end-to-end trace propagation into an ops event log, and ten pre-written incident runbooks — on top of 13 years in US enterprise IT. Governance isn't a pivot; it's the pattern.

<img src="assets/divider_thin.png" alt="" width="100%" />

## Shipping now

- **TechTide AI** — client engagements: Production Triage, Workflow Rescue, Fractional FDE
- **techtide-harness-kit** — trust contracts and CI gates for agent skills
- **swarm-357** — governed multi-agent orchestration

*Updated quarterly.*

<img src="assets/divider_thin.png" alt="" width="100%" />

## Podcast & community

- [**Automation Vibes**](https://automationvibes.ai) — podcast + newsletter with Shane Spencer
- **Anthropic Partner Network** — services partner

<img src="assets/divider_thin.png" alt="" width="100%" />

## Support and contact

For a project question, collaboration inquiry, or a correction to this public profile, start at [techtideai.io](https://techtideai.io) or email [alex@techtideai.io](mailto:alex@techtideai.io). Do not send credentials, customer records, private repository material, or security-sensitive reports through public GitHub discussions.

## Work with me

**Start with the $1,000 AI Audit** — 90-minute live review, written go/no-go plan in 48 hours — at [techtideai.io/audit](https://techtideai.io/audit). Not ready for the full audit? The $247 Production Block Diagnosis reviews one stuck workflow async. Production Triage and larger engagements available after that; book in the [Featured section on LinkedIn](https://www.linkedin.com/in/alexcinovoj/) or at [techtideai.io](https://techtideai.io).

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alexcinovoj/)
[![TechTide AI](https://img.shields.io/badge/techtideai.io-0f766e?style=flat-square)](https://techtideai.io)
[![alexcinovoj.com](https://img.shields.io/badge/alexcinovoj.com-111827?style=flat-square&logo=safari&logoColor=white)](https://alexcinovoj.com)
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:alex@techtideai.io)

</div>

<img src="assets/divider_thin.png" alt="" width="100%" />

<div align="center">
  <sub>50+ concurrent worker nodes in production · 9 Anthropic Academy course completions · 13 yrs US enterprise IT · Columbus, OH</sub>
</div>
