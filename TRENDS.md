# Red Team Radar — Trend ledger

Single source of truth. The README and reports are derived from this file.
Last updated: 2026-08-01

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

### id: ad-certighost-001 — CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)
- stage: seed
- confidence: medium
- last_evidence: 2026-08-01
- aliases: [CertiGhost, CVE-2026-54121, ADCS chase spoofing, cdc/rmd cert-request spoofing]
- notes: AD CS's enrollment "chase" fallback resolves an attacker-supplied `cdc`/`rmd` target
  over unauthenticated LDAP/SMB without verifying it is a real DC, letting a low-privileged
  domain user obtain a DC-impersonating certificate → PKINIT → DCSync. Patched by Microsoft's
  July 2026 update (chase target must now resolve to a genuine DC computer object). Distinct
  from classic ESC1–16 template-misconfiguration abuse — a CA-side trust bug, not a template bug.
- evidence:
  - 2026-07-14 — https://github.com/advisories/GHSA-64qv-2ffq-h4w6 — Official advisory: AD CS improper authorization (CWE-285), CVSS 8.8 (AV:N/AC:L/PR:L/S:U/C:H/I:H/A:H), patched by the MS July 2026 update.
  - 2026-07-24 — https://gist.github.com/H0j3n/a5ef2609b5f2944ac2390a191a534c26 — h0j3n & aniqfakhrul's technical writeup coining "CertiGhost": unvalidated cdc/rmd chase → rogue LDAP/SMB → forged DC identity → cert issuance → PKINIT/DCSync.
  - 2026-07-23 — https://github.com/aniqfakhrul/CVE-2026-54121 — Original researchers' PoC, 295 stars — most-adopted PoC in the family.
  - 2026-07-28 — https://github.com/mwnickerson/certighost-bof — Independent Mythic/Apollo Beacon Object File automating the cert-enrollment step of the chain (explicitly lab-scoped).
  - 2026-07-31 — https://github.com/nafiez/Metasploit-CVE-2026-54121-Certighost — Independent Metasploit auxiliary module weaponizing the same chase-fallback DC-impersonation chain.

---

## observation_queue

<!-- Below-bar / unverified signals. Cap ~25. Line format:
- YYYY-MM-DD — https://... — context — [unverified | N groups so far] -->

- 2026-07-31 — https://labs.watchtowr.com/more-evidence-that-words-dont-mean-what-we-thought-they-meant-ivanti-sentry-pre-auth-os-command-injection-cve-2026-10520/ — Ivanti Sentry pre-auth OS command injection (CVE-2026-10520, CVSS 10.0); watchTowr published technical analysis, a PoC and a vuln-check script — [unverified, found via search, not opened this session]
- 2026-07-31 — https://specterops.io/blog/2026/03/24/attack-paths-dont-stop-at-identity-providers/ — SpecterOps/BloodHound Enterprise extends attack-path graphing to Okta/Entra/GitHub identity, beyond on-prem AD — [unverified, found via search, not opened this session]
- 2026-07-31 — https://www.outflank.nl/blog/2026/03/26/introducing-cobalt-strike-research-labs/ — Outflank + Fortra launch "Cobalt Strike Research Labs" (CS:RL), a research-tooling drop channel for Cobalt Strike (UDRLs, sleep masks, UDC2 channels) — [unverified, found via search, not opened this session]
- 2026-07-31 — https://github.com/D7EAD/mkPIVM — mkPIVM: generates polymorphic, position-independent VMs from x86/x64 shellcode for EDR evasion (421 stars, active) — [1 group so far, opened 2026-08-01: confirmed as described, self-labeled PoC/research-stage, Windows-only]
- 2026-07-31 — https://github.com/JM00NJ/Phantom-Evasion-Loader — Phantom-Evasion-Loader: Linux x64 ASM injection loader using SROP hijacking + process_vm_writev to evade EDR/XDR incl. Falco, claims 0/65 on VirusTotal (109 stars) — [1 group so far, opened 2026-08-01: confirmed as described]
- 2026-08-01 — https://github.com/entropykit/entropia — entropia: a compiled language purpose-built for Windows position-independent x86-64 shellcode and Beacon Object Files (176 stars, active) — [1 group so far, opened this session]
- 2026-08-01 — https://github.com/WKL-Sec/OpenBOF — OpenBOF: new community-maintained BOF collection for red-team ops/research, launched 2026-07-26, growing fast (24 stars in days) — [1 group so far, opened this session]
- 2026-07-31 — https://labs.watchtowr.com/more-evidence-that-words-dont-mean-what-we-thought-they-meant-ivanti-sentry-pre-auth-os-command-injection-cve-2026-10520/ — (see queue line above) WebSearch corroboration this week: CVE-2026-10520 confirmed across 6+ independent groups (watchTowr, FortiGuard, CrowdSec, Horizon3, eSentire, CERT-EU) and added to CISA KEV (actively exploited). Still [unverified] — the primary blog remains 403 under the egress block, so no URL was opened; promote once a real open is possible.

---

## study_shelf

<!-- 0–2 per day, newest first. A single strong artifact qualifies (no trend bar). -->

- 2026-08-01 — https://github.com/advisories/GHSA-p849-8hwh-84j9 — CVE-2026-52887 (critical, CVSS 10.0): NocoBase `plugin-notification-in-app-message` ≤2.0.60 — unauthenticated SQL injection in `/api/myInAppChannels:list` via the `filter[latestMsgReceiveTimestamp][$lt]` parameter, escalating to RCE through `COPY ... TO PROGRAM` on the default superuser Postgres role. Public PoC in the advisory. Patched in 2.0.61.
- 2026-08-01 — https://github.com/Squ1shification/SliverC2-Evasion-Suite — new on-axis C2/evasion tool: four-part defense-evasion kit for Sliver C2 (Crystal Palace loader, sleep masking, in-memory PE execution, PPID-spoofed remote process injection), 81 stars, actively updated.
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
- 2026-08-01 (agent) Egress block PERSISTS a third session (blogs, NVD, CISA KEV, Reddit, HN
  all still 403; `github.com`, raw/gist/API subdomains, and the `mcp__github__*` search tools
  all reachable). Unlike the first two sessions this run still produced a full trend: GitHub
  Security Advisories, gist writeups, and GitHub repo/code search together carried enough
  independent-source diversity to clear the trend bar for CVE-2026-54121 ("CertiGhost", AD CS
  DC-impersonation) without opening a single blog. This validates the weekly's proposed
  "degraded-network fallback" amendment (GHSA + gists + repo/code search as a working
  GitHub-native primary lane) ahead of its cooling-period application at 2026-W32 — the
  signal is holding, not a one-off.
