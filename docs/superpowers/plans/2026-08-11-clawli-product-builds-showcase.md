# Clawli Product Builds Showcase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Syncra and Clawli to the already-live Product Builds showcase so all approved entries appear in order across Zo and GitHub, with three paste-ready Clawli prompts for the remaining brand sites.

**Architecture:** Make one bounded edit to the public Zo `/` route, one bounded README edit on a dedicated GitHub branch, and one durable prompt document. Preserve all revenue routes, private services, existing offer copy, and unrelated profile content.

**Tech Stack:** Zo Space React route, Tailwind CSS, GitHub Markdown, git/gh CLI, agent-browser visual QA.

## Global Constraints

- Product Builds order: Y2KSelfie.ai, Ship With Bob, Syncra, Clawli.
- Clawli description: “A multi-agent LinkedIn workspace that turns content strategy into researched, reviewed, and approval-gated posts.”
- Clawli tags: “Multi-agent AI · LinkedIn operations”.
- Clawli URL: `https://clawli.ai` only; do not imply a public repository.
- Syncra remains explicitly a proposal demo, not a deployed client product.
- Do not add unsupported counts, performance, pricing, customer, revenue, uptime, latency, or outcome claims.
- Edit only Zo `/`; keep it public and preserve revenue CTAs, navigation, footer, private services, and unrelated routes.
- Keep the GitHub showcase change separate from Meta/OG/email cleanup.

---

### Task 1: Durable Site Prompts

**Files:**
- Create: `Projects/alex-brand/reports/product-builds-showcase/clawli-platform-prompts.md`

**Interfaces:**
- Consumes: approved Clawli design spec.
- Produces: three paste-ready prompts for alexcinovoj.com, alexcinovoj.dev, and techtideai.io.

- [ ] **Step 1:** Copy the three approved prompts verbatim from the design spec into one labeled Markdown document.
- [ ] **Step 2:** Scan for banned former-project identity terms and unsupported claims; expected result is zero matches.
- [ ] **Step 3:** Confirm each prompt contains the canonical name, description, tags, URL, ordering, accessibility, responsive, and claim-boundary requirements.

### Task 2: Zo Homepage Showcase

**Files:**
- Modify: Zo Space page route `/`.

**Interfaces:**
- Consumes: existing Product Builds card component pattern and canonical Syncra/Clawli entries.
- Produces: four-card public Product Builds grid.

- [ ] **Step 1:** Re-read the current `/` route and confirm it is public.
- [ ] **Step 2:** Add `SYNCra` and `CLAWLI` URL constants alongside existing product constants.
- [ ] **Step 3:** Add Syncra as the third card and Clawli as the fourth card using the existing external-link, focus, typography, spacing, and grid pattern.
- [ ] **Step 4:** Check Zo route runtime errors; expected result is no errors.
- [ ] **Step 5:** Verify desktop and mobile screenshots, no horizontal overflow, accessible link names, card order, and unchanged revenue/footer links.

### Task 3: GitHub Profile Showcase PR

**Files:**
- Modify: `Projects/alex-brand/github-profile/README.md`.

**Interfaces:**
- Consumes: canonical Syncra and Clawli entries.
- Produces: a Product Builds table with four rows in approved order.

- [ ] **Step 1:** Confirm only spec commits are ahead of `origin/main` and the worktree contains no unrelated edits.
- [ ] **Step 2:** Create branch `agent/add-syncra-clawli-showcase` from the current approved-spec state.
- [ ] **Step 3:** Add Syncra and Clawli rows after Ship With Bob using the canonical descriptions, tags, and live-product links.
- [ ] **Step 4:** Verify Markdown structure and all four product links with read-only HTTP checks.
- [ ] **Step 5:** Commit only `README.md` and the prompt/plan artifacts, push, open a draft PR, review the diff, then merge once checks pass.

### Task 4: Final Reconciliation

**Files:**
- Verify: Zo `/`, GitHub profile README, and the prompt document.

**Interfaces:**
- Consumes: outputs from Tasks 1–3.
- Produces: verified five-surface rollout package, with three surfaces represented by implementation prompts.

- [ ] **Step 1:** Confirm canonical copy, URL, tags, order, proprietary positioning, and no unsupported claims across all outputs.
- [ ] **Step 2:** Record Zo route visibility, runtime status, screenshots, GitHub PR URL, and prompt file path.
