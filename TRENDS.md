# Red Team Radar — Trend ledger

Single source of truth. The README and reports are derived from this file.
Last updated: 2026-08-02

Trend stages: `seed` → `emerging` → `accelerating` → `mainstreaming` → `dormant`.
Evidence line format: `date — primary URL — one line of context`. Max 10 per trend.

---

## trends

<!--
Seed the ledger by running the daily routine. Each trend block looks like:

### id: ad-adcs-001 — ADCS abuse & escalation
- stage: emerging
- confidence: medium
- last_evidence: YYYY-MM-DD
- aliases: [ESC1..ESC16, certificate abuse]
- notes: also-called "..."; scope note
- evidence:
  - YYYY-MM-DD — https://... — one line of context
-->

_(empty — first run will populate this)_

---

## observation_queue

<!-- Below-bar / unverified signals. Cap ~25. Line format:
- YYYY-MM-DD — https://... — context — [unverified | N groups so far] -->

- 2026-07-31 — https://specterops.io/blog/2026/03/24/attack-paths-dont-stop-at-identity-providers/ — SpecterOps/BloodHound Enterprise extends attack-path graphing to Okta/Entra/GitHub identity, beyond on-prem AD — [unverified, found via search, not opened this session]
- 2026-07-31 — https://www.outflank.nl/blog/2026/03/26/introducing-cobalt-strike-research-labs/ — Outflank + Fortra launch "Cobalt Strike Research Labs" (CS:RL), a research-tooling drop channel for Cobalt Strike (UDRLs, sleep masks, UDC2 channels) — [unverified, found via search, not opened this session]
- 2026-07-31 — https://github.com/D7EAD/mkPIVM — mkPIVM: generates polymorphic, position-independent VMs from x86/x64 shellcode for EDR evasion, ships an accompanying research paper (421 stars, active) — [verified, opened 2026-08-02, 1 group so far — EDR evasion axis]
- 2026-07-31 — https://github.com/JM00NJ/Phantom-Evasion-Loader — Phantom-Evasion-Loader: x64 ASM/SROP injection loader for Linux aimed at modern EDR/XDR + kernel monitors (109 stars) — [verified, opened 2026-08-02, 1 group so far — EDR evasion axis]

---

## study_shelf

<!-- 0–2 per day, newest first. A single strong artifact qualifies (no trend bar). -->

- 2026-08-02 — https://github.com/advisories/GHSA-v2vc-rgvq-3pwf — CVE-2026-10520 (critical, CVSS 10.0): Ivanti Sentry pre-auth OS command injection, fixed in R10.5.2/R10.6.2/R10.7.1; resolves the queued watchTowr writeup (blog still 403 under egress block) via a direct GHSA open. WebSearch this week corroborated 6+ independent groups (FortiGuard, CrowdSec, Horizon3, eSentire, CERT-EU) tracking active exploitation and CISA KEV listing — edge-device axis, high offensive relevance.
- 2026-08-02 — https://github.com/ADScanPro/adscan — ADscan: Linux-native CLI consolidating 104 AD attack-chain techniques (Kerberoasting, AS-REP roasting, password spraying, automated ADCS ESC1-16 detection/exploitation, DCSync, BloodHound-compatible attack-path output) into one Dockerized tool, no Windows infra required (506 stars, 56 forks, active). AD/identity axis.
- 2026-07-31 — https://github.com/advisories/GHSA-mjqf-28ph-426h — CVE-2026-54680 (critical): kube-logging/logging-operator writes CRD-supplied strings into fluent.conf unescaped; a newline in a Flow value injects arbitrary Fluentd directives (e.g. `@type exec`) → RCE in the aggregator pod. Kubernetes/cloud axis. Pinned + opened this session (resolves the daily-run placeholder); patched build 20260608145523.
- 2026-07-31 — https://github.com/advisories/GHSA-pgwh-4jj4-qm8v — CVE-2026-67428 (high): flyto2-core (PyPI) — several HTTP-family modules fetch client-controlled URLs without the SSRF guard their siblings apply → SSRF to internal/cloud-metadata endpoints. Web/API axis. Pinned + opened this session (resolves the daily-run placeholder).
- 2026-07-31 — https://github.com/projectdiscovery/nuclei/releases/tag/v3.11.0 — Nuclei now refuses to run unsigned JavaScript-protocol templates (breaking change, released 2026-07-06); if you maintain custom offensive nuclei templates using the `javascript:` protocol, they now need signing or they silently stop loading.
- 2026-07-31 — https://github.com/advisories/GHSA-xr9x-r78c-5hrm — CVE-2026-66066: Rails Active Storage arbitrary file read + RCE during variant processing, published 2026-07-30. Widely-deployed framework; check for it on any Rails target using Active Storage variants.

---

## strategy_notes

<!-- Dated coverage/scope corrections. Curator entries are never deleted. -->

- (curator) Initial scope per AGENTS.md: AD/identity, C2/evasion/initial-access,
  web/API/cloud, exploitable CVEs, TTP taxonomies.
- 2026-07-31 (agent) First run. This session's outbound network was restricted by
  org egress policy to `github.com` (+ raw/API subdomains) only — every non-GitHub
  fetch (all 10 primary blogs, NVD, CISA KEV, Reddit, HN) returned a policy 403 at
  the proxy. GHSA (github.com/advisories) and all tracked GitHub tool repos were
  reachable and swept normally; GitHub code/repo search covered the discovery lane.
  Because most primary-source diversity is blog-driven, no item could clear the
  3-independent-source trend bar today — the ledger stays trend-free by design, not
  by omission. Non-GitHub findings this run come from WebSearch snippets only and
  are queued `[unverified]`, per the "cite only URLs opened this session" rule; they
  need a direct open next time the network isn't restricted before they can count as
  evidence. If this scoping is intentional going forward, the routine's primary-sweep
  lane needs rethinking (mirror blogs via GitHub Pages repos where available, or
  accept a permanently GHSA+GitHub-only radar).
- 2026-W31 (agent, weekly) Egress block PERSISTS into the second session: `example.com`,
  `labs.watchtowr.com`, and NVD all still 403 at the CONNECT tunnel; WebFetch 403s the same
  non-GitHub hosts. WebFetch on `github.com` and WebSearch (server-side) both work. Coverage
  reads 21/21 (every swept source appears opened-or-degraded) but that HIDES that 12/21 —
  all 10 blogs + NVD + CISA KEV — were `degraded`, not opened, two runs running. NOT an
  anchoring/thematic problem (0 evidence and 0 trends is a network artifact, not curator
  bias), so no exploration redirect is warranted — the fix is infrastructural. Redirect for
  next week: lean the primary lane on GitHub-native equivalents (GHSA, `*/security/advisories`,
  CVEProject/cvelistV5, GitHub-Pages blog mirrors) and use WebSearch strictly for queue
  corroboration counts, never as evidence. Two GHSA advisories the first daily run left
  unpinned (Fluentd Logging Operator RCE, "Flyto2 Core" SSRF) were pinned and opened this
  session → moved to study_shelf. See reports/weekly/2026-W31.md for proposed amendments.
- 2026-08-02 (agent, daily) Egress block PERSISTS a third session: all 10 primary blogs,
  NVD, CISA KEV, old.reddit.com and news.ycombinator.com all still 403 at the proxy;
  github.com (repos, releases.atom, GHSA, code/repo search) fully reachable. The
  GitHub-native redirect proposed last week paid off today: the queued Ivanti Sentry
  CVE-2026-10520 was resolved off a directly-opened GHSA advisory
  (GHSA-v2vc-rgvq-3pwf) without needing the blocked watchTowr blog, and two queued
  EDR-evasion repos (mkPIVM, Phantom-Evasion-Loader) were opened and verified. Still 0
  trends seedable — the ≥3-independent-source bar needs blog diversity this radar
  can't reach under the current egress policy, so `trends` staying empty is the
  expected outcome of an infrastructural block, not a coverage miss. If the block is
  still live at the next weekly run, this is a strong candidate for a formal routine
  amendment (permanently reweight the primary-sweep lane toward GHSA/CVEProject/repo
  releases, demote the 10 blogs to opportunistic best-effort).
