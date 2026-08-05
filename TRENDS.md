# Red Team Radar — Trend ledger

Single source of truth. The README and reports are derived from this file.
Last updated: 2026-08-05

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

- 2026-07-31 — https://specterops.io/blog/2026/03/24/attack-paths-dont-stop-at-identity-providers/ — SpecterOps/BloodHound Enterprise extends attack-path graphing to Okta/Entra/GitHub identity, beyond on-prem AD — [unverified, found via search, not opened this session]
- 2026-07-31 — https://www.outflank.nl/blog/2026/03/26/introducing-cobalt-strike-research-labs/ — Outflank + Fortra launch "Cobalt Strike Research Labs" (CS:RL), a research-tooling drop channel for Cobalt Strike (UDRLs, sleep masks, UDC2 channels) — [unverified, found via search, not opened this session]
- 2026-07-31 — https://github.com/D7EAD/mkPIVM — mkPIVM: generates polymorphic, position-independent VMs from x86/x64 shellcode for EDR evasion, ships an accompanying research paper (421 stars, active) — [verified, opened 2026-08-01/02, 1 group so far — EDR evasion axis, self-labeled PoC/research-stage, Windows-only]
- 2026-07-31 — https://github.com/JM00NJ/Phantom-Evasion-Loader — Phantom-Evasion-Loader: x64 ASM/SROP injection loader for Linux aimed at modern EDR/XDR + kernel monitors, claims 0/65 on VirusTotal (109 stars) — [verified, opened 2026-08-01/02, 1 group so far — EDR evasion axis]
- 2026-08-01 — https://github.com/entropykit/entropia — entropia: a compiled language purpose-built for Windows position-independent x86-64 shellcode and Beacon Object Files (176 stars, active) — [1 group so far, opened 2026-08-01]
- 2026-08-01 — https://github.com/WKL-Sec/OpenBOF — OpenBOF: new community-maintained BOF collection for red-team ops/research, launched 2026-07-26, growing fast (24 stars in days) — [1 group so far, opened 2026-08-01]
- 2026-08-04 — https://github.com/zhaoxuya520/reverse-skill — "reverse-skill": AI-agent skill-routing framework for reverse engineering / authorized pentest / CTF workflows (Claude Code, Cursor, Cline, etc.), claims scope-gating ("no target ACT until ready") and 16.6k stars — [unverified, 1 group so far, opened 2026-08-04; star count is unusually high for an unknown repo with no visible creation date, treat with caution until independently corroborated]

---

## study_shelf

<!-- 0–2 per day, newest first. A single strong artifact qualifies (no trend bar). -->

- 2026-08-05 — https://github.com/advisories/GHSA-4j8x-x6v7-w9rq — Flowise ≤3.1.2 coordinated 10-CVE disclosure (all fixed 3.1.3, published 2026-08-04). Multiple critical RCE paths: CSVAgent injects Python interpolated from a base64 data-URI and escapes Pyodide's WASM sandbox via the JS bridge to run OS commands as the Flowise process (CVE-2026-69264, CVSS 9.9; trigger is unauthenticated when no API key is set), with sibling variants adding a Unicode-homoglyph validator bypass usable unauthenticated on public chatflows (CVE-2026-70470, 9.5), `pandas.read_pickle` deserialization (CVE-2026-69256), and plain base64 interpolation (CVE-2026-69255); a vm2 sandbox escape chains a `moment` CVE-2022-24785 bypass off broken URL validation in the AgentAsTool node (CVE-2026-69253); and the SQLite Record-Manager node overrides the DB file path so a crafted DB is sourced as shell config when Puppeteer launches Chromium as root (CVE-2026-69259, 9.4). Separately, an unauthenticated OAuth2 token-refresh endpoint returns decrypted access tokens for connected Google/Microsoft accounts given a credential ID (CVE-2026-70478, 9.2). Widely-deployed low-code LLM/AI-agent app builder; PoCs in the advisories. Web/API + emerging AI-agent-framework attack-surface axis.
- 2026-08-05 — https://github.com/advisories/GHSA-v8fg-2rw7-q452 — CVE-2026-69240 (critical, CVSS 9.8): Sequelize <6.37.4 Oracle-dialect SQL injection — `escape()` skips quote-escaping for strings that begin `TO_TIMESTAMP`/`TO_DATE`, so an unauthenticated attacker injects arbitrary SQL through user-supplied params (CWE-89, PoC in the advisory). Oracle-dialect only; carried from 2026-08-04's triage and shelved now on a direct open. Web/API axis.
- 2026-08-04 — https://github.com/advisories/GHSA-pfvc-3p5h-x7h6 — CVE-2026-52855 (critical, CVSS 9.9): Pterodactyl Wings <1.12.3 renders egg configuration-file templates against the daemon's full config without restriction, so a low-privileged server owner/subuser can craft `{{config.<path>}}` placeholders to exfiltrate the node daemon token, Docker registry credentials and token IDs from their own server files — full node compromise. Fixed 1.12.3; admins must rotate daemon tokens post-patch (old tokens stay valid until reset). Widely-deployed game-server hosting panel.
- 2026-08-04 — https://github.com/advisories/GHSA-6h5j-32cf-4253 — CVE-2026-53609 (critical, CVSS 9.1): Apostrophe CMS ≤4.30.0 `apos.util.set()` doesn't reject `__proto__`/`constructor`/`prototype` path segments, so an authenticated editor can pollute `Object.prototype` via a crafted `$pullAll` PATCH request, permanently flipping `publicApiCheck()` to allow unauthenticated access to piece-type REST endpoints for the life of the process. PoC in the advisory. Fixed 4.31.0. Web/API axis, prototype-pollution → authz-bypass pattern.
- 2026-08-03 — https://github.com/advisories/GHSA-r2v3-8gwf-7ghm — CVE-2026-54725 (critical, CVSS 9.6): bank-vaults/vault-secrets-webhook ≤1.22.2 processes an unsanitized `vault.security.banzaicloud.io/vault-addr` pod annotation and makes a synchronous outbound HTTP call during Kubernetes admission review — SSRF, plus the `vault-serviceaccount` mode lets an attacker with ConfigMap/Secret-create rights exfiltrate ServiceAccount JWTs for cluster-wide token theft. Patched in 1.23.1. Kubernetes/cloud axis.
- 2026-08-03 — https://github.com/advisories/GHSA-wcrf-9vrr-854f — CVE-2026-53713 (critical, CVSS 9.1): envoyproxy/gateway's `EnvoyExtensionPolicy` Lua path check (`to_absolute_normalized_path`/`is_critical_path`) fails to collapse redundant `//` separators, so a POSIX-equivalent `//etc/passwd`-style path bypasses the traversal guard — lets Lua code submitted via EnvoyExtensionPolicy read credentials, K8s service-account tokens, TLS certs and env vars out of the gateway controller pod. Fixed in 1.8.1 / 1.7.4. Cloud/API-gateway axis.
- 2026-08-02 — https://github.com/advisories/GHSA-v2vc-rgvq-3pwf — CVE-2026-10520 (critical, CVSS 10.0): Ivanti Sentry pre-auth OS command injection, fixed in R10.5.2/R10.6.2/R10.7.1; resolves the queued watchTowr writeup (blog still 403 under egress block) via a direct GHSA open. WebSearch this week corroborated 6+ independent groups (FortiGuard, CrowdSec, Horizon3, eSentire, CERT-EU) tracking active exploitation and CISA KEV listing — edge-device axis, high offensive relevance.
- 2026-08-02 — https://github.com/ADScanPro/adscan — ADscan: Linux-native CLI consolidating 104 AD attack-chain techniques (Kerberoasting, AS-REP roasting, password spraying, automated ADCS ESC1-16 detection/exploitation, DCSync, BloodHound-compatible attack-path output) into one Dockerized tool, no Windows infra required (506 stars, 56 forks, active). AD/identity axis.
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
- 2026-W32 (agent, weekly) Two separate problems, not one. (1) **Zero daily reports since
  2026-07-31** — the daily routine did not run at all between 2026-08-01 and 2026-08-03, so
  there is no new capture to recalibrate and `logs/source_rotation.md` has no entries for this
  week to diff against `SOURCES.md`. This is a scheduling/execution gap, not a network or
  curator problem — flagged as a new proposal in reports/weekly/2026-W32.md, not amended yet
  (needs next week's signal to confirm it's not a one-off). (2) The non-GitHub egress block
  PERSISTS a third consecutive session: this session's own curl/WebFetch checks confirm
  `labs.watchtowr.com`, `specterops.io`, NVD, CISA KEV, Hacker News, and `example.com` still
  403 at the CONNECT tunnel. NEW this week: this weekly session's own GitHub reach is scoped to
  `sickboy8388/red-team-radar` only — `github.com/advisories` and other repos 403/gate — while
  `raw.githubusercontent.com` and `api.github.com` still answer 200, so the GitHub API/raw
  surface stays open even when the web UI is session-gated. No anchoring warning: 0 evidence
  from 0 daily runs is not a bias signal. Applied this week (all three proposed in 2026-W31,
  signal reconfirmed): `routines/daily.md` degraded-network fallback lane, `SOURCES.md`
  GitHub-mirror annotation convention (left `none verified yet` everywhere — this session had
  no verified GitHub reach outside this repo to populate one, and guessing a mirror URL would
  break the never-invent-a-URL rule), and the self-eval `coverage` opened/degraded split. See
  reports/weekly/2026-W32.md.
- 2026-08-01 (agent) Egress block PERSISTS a third session (blogs, NVD, CISA KEV, Reddit, HN
  all still 403; `github.com`, raw/gist/API subdomains, and the `mcp__github__*` search tools
  all reachable). Unlike the first two sessions this run still produced a full trend: GitHub
  Security Advisories, gist writeups, and GitHub repo/code search together carried enough
  independent-source diversity to clear the trend bar for CVE-2026-54121 ("CertiGhost", AD CS
  DC-impersonation) without opening a single blog. This validates the weekly's proposed
  "degraded-network fallback" amendment (GHSA + gists + repo/code search as a working
  GitHub-native primary lane) ahead of its cooling-period application at 2026-W32 — the
  signal is holding, not a one-off.
- 2026-08-02 (agent, daily) Egress block PERSISTS a fourth session: all 10 primary blogs,
  NVD, CISA KEV, old.reddit.com and news.ycombinator.com all still 403 at the proxy;
  github.com (repos, releases.atom, GHSA, code/repo search) fully reachable. The
  GitHub-native redirect proposed at 2026-W31 paid off again today: the queued Ivanti Sentry
  CVE-2026-10520 was resolved off a directly-opened GHSA advisory (GHSA-v2vc-rgvq-3pwf)
  without needing the blocked watchTowr blog, and both queued EDR-evasion repos (mkPIVM,
  Phantom-Evasion-Loader) were independently re-opened and verified. No new trend seeded
  today (CertiGhost from 2026-08-01 remains the only one) — the ≥3-independent-source bar
  still needs blog diversity this radar can't reach under the current egress policy.
- 2026-08-03 (agent, daily) **Continuity repair.** This session found the 2026-08-01 and
  2026-08-02 daily updates had never landed on `main` — each ran on its own throwaway branch
  (`claude/jolly-ramanujan-3u6lpb`, `claude/jolly-ramanujan-5o9raf`), unaware of the other, and
  only 2026-08-01's sat behind an open, unmerged PR (#3); 2026-08-02's had no PR at all. `main`
  was still frozen at 2026-07-31. Reconciled both by hand into this session's branch (content was
  additive/non-conflicting) before doing today's own scan, so no captured evidence was lost — see
  today's report for the full incident note. Separately, an unmerged `2026-W32` weekly branch
  (`claude/loving-faraday-hazr3d`) was found: it applied the three routine amendments proposed at
  2026-W31 (all independently re-verified as still motivated by the persisting egress block, safe
  to treat as decided), but its own diagnosis — "zero daily reports ran 08-01→08-03" — was wrong
  (it simply couldn't see the two orphaned daily branches from `main`), and its calibration line
  (`2026-W32 — ... coverage 0/21 ...`) is built on that wrong premise. Left that branch unmerged
  rather than writing a known-bad line into the append-only `logs/calibration.md`; a future weekly
  run should redo the W32 evaluation with accurate history and decide what to do with that branch.
  Egress block PERSISTS a fifth session: all 10 blogs + NVD/CISA KEV still 403; `github.com`
  reachable but repo/code search (`github.com/search`) hit a 429 rate-limit mid-run (Retry-After
  3600s) — first time that lane itself degraded rather than the proxy; logged in source_rotation.
  Two new CVEs (Vault Secrets Webhook SSRF→token-theft, Envoy Gateway Lua path-traversal→secret
  disclosure) resolved via direct GHSA opens → study_shelf. No new trend; CertiGhost unchanged.
- 2026-08-04 (agent, daily) Egress block PERSISTS a sixth consecutive session: directly re-tested
  6 of the 10 primary blogs (SpecterOps, watchTowr, Assetnote, MDSec, PortSwigger) plus NVD and
  CISA KEV — all still 403 at the proxy; `old.reddit.com` now fails outright (fetch refused, not
  even a 403) rather than returning a policy error. `github.com` (releases.atom, GHSA, repo
  search) fully reachable, no rate-limit this time (unlike 2026-08-03's 429). GHSA-first fallback
  again carried the day: two new critical advisories (Pterodactyl Wings config-templating token
  theft CVE-2026-52855, Apostrophe CMS prototype-pollution→authz-bypass CVE-2026-53609) opened
  directly and shelved. A third (Sequelize Oracle-dialect SQLi, CVE-2026-69240, GHSA-v8fg-2rw7-q452,
  CVSS 9.8) was triaged but not shelved today under the 0–2/day cap — narrower attack surface
  (Oracle dialect + specific function-prefixed input only) made it the weaker of the three; worth
  a look next session if still fresh. Discovery-topic rotation ("adcs esc", "kubernetes attack")
  completed this time (no 429) but both lanes were thin — nothing cleared the bar for
  queueing except one off-axis exploration-slot find (`reverse-skill`, an AI-agent security
  skill-router claiming 16.6k stars) queued unverified with a star-inflation caution flag rather
  than taken at face value. No new trend; CertiGhost (`ad-certighost-001`) unchanged, no new
  evidence surfaced for it today.
- 2026-08-05 (agent, daily) Egress block PERSISTS a seventh consecutive session (NVD, SpecterOps, CISA
  KEV all curl `000`/time out; `github.com` web UI 403 to curl but reachable via WebFetch). NEW
  constraint this session: the `mcp__github__*` tools are hard-scoped to `sickboy8388/red-team-radar`
  only — every external repo (`list_releases` on BloodHound/NetExec/Certipy/Sliver/Mythic/impacket/
  nuclei) returns "Access denied … not configured for this session", and the session rules forbid
  using search/list tools to reach outside that scope. So the tool-release and GitHub tool-discovery
  lanes are CLOSED this run (logged degraded, not circumvented). The **GHSA advisory surface via
  WebFetch stayed open and carried the whole capture** — the `github.com/advisories` index and
  individual GHSA pages fetch fine, confirming WebFetch's github path is unaffected by the MCP repo
  scoping. Top find: a coordinated 10-CVE Flowise ≤3.1.2 disclosure (multiple unauth RCE + OAuth token
  theft) → study_shelf; Sequelize Oracle SQLi carried from 08-04 also shelved. No new trend. Watch
  theme forming: **AI-agent / LLM app-builder framework attack surface** — two independent signals now
  (`reverse-skill` queued 08-04, Flowise mass-RCE today); not yet ≥3 independent groups on one
  sub-theme, so it stays a note, not a seed — flag for the next weekly to assess as a candidate axis.
