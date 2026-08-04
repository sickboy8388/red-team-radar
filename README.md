# Red Team Radar

![trends](https://img.shields.io/badge/trends-1-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-6-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--08--03-2f9e44?style=flat-square)

Autonomous tracker of the offensive-security frontier — AD/identity, C2 & evasion, web/API/cloud,
exploitable CVEs, and red-team TTPs — curated for a red team operator. Derived from
[TRENDS.md](TRENDS.md); regenerated on every scan.

## Since last scan (2026-08-03 — weekly recalibration 2026-W32)

- **No new capture this week.** Zero daily reports ran between 2026-08-01 and 2026-08-03 (a
  scheduling/execution gap, not a network or curator issue), so the ledger, queue, and
  study_shelf are unchanged from 2026-W31. Recalibration was a no-op on trends.
- **Network note (persists 3 sessions):** the 10 primary security blogs, NVD, CISA KEV, and now
  even `github.com`'s own web UI (scoped to this repo this session) all 403 for this weekly run;
  `raw.githubusercontent.com` / `api.github.com` still answer. WebSearch remains queue-only,
  never evidence.
- Pinned two GHSA advisories the first daily run left unresolved (still the latest ledger state):
  [Logging Operator Fluentd-injection RCE (CVE-2026-54680)](https://github.com/advisories/GHSA-mjqf-28ph-426h)
  and [flyto2-core SSRF (CVE-2026-67428)](https://github.com/advisories/GHSA-pgwh-4jj4-qm8v).
- [Rails Active Storage RCE (CVE-2026-66066)](https://github.com/advisories/GHSA-xr9x-r78c-5hrm) — arbitrary file read + RCE in variant processing, published 2026-07-30.
- [Nuclei v3.11.0](https://github.com/projectdiscovery/nuclei/releases/tag/v3.11.0) — unsigned JavaScript-protocol templates are now refused at load time.

## Trends

seed 1 · emerging 0 · accelerating 0 · mainstreaming 0 · dormant 0

| Trend | Stage | Latest signal |
|---|---|---|
| [CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)](TRENDS.md#ad-certighost-001--certighost-ad-cs-chase-dc-impersonation-cve-2026-54121) | seed | [2026-07-31](https://github.com/nafiez/Metasploit-CVE-2026-54121-Certighost) |

## Tools & releases

| Tool | Latest release | Date |
|---|---|---|
| [BloodHound](https://github.com/SpecterOps/BloodHound) | [v9.5.1](https://github.com/SpecterOps/BloodHound/releases/tag/v9.5.1) | 2026-07-29 |
| [Mythic](https://github.com/its-a-feature/Mythic) | [v4.0.0rc4](https://github.com/its-a-feature/Mythic/releases/tag/v4.0.0rc4) | 2026-07-30 |
| [Nuclei](https://github.com/projectdiscovery/nuclei) | [v3.11.0](https://github.com/projectdiscovery/nuclei/releases/tag/v3.11.0) | 2026-07-06 |
| [Certipy](https://github.com/ly4k/Certipy) | [5.1.0](https://github.com/ly4k/Certipy/releases/tag/5.1.0) | 2026-06-23 |
| [impacket](https://github.com/fortra/impacket) | [0.13.1](https://github.com/fortra/impacket/releases/tag/impacket_0_13_1) | 2026-05-19 |
| [Sliver](https://github.com/BishopFox/sliver) | [v1.7.3](https://github.com/BishopFox/sliver/releases/tag/v1.7.3) | 2026-02-24 |
| [NetExec](https://github.com/Pennyw0rth/NetExec) | [v1.5.1](https://github.com/Pennyw0rth/NetExec/releases/tag/v1.5.1) | 2026-02-23 |
| [Havoc](https://github.com/HavocFramework/Havoc) | — | archived 2026-02-20, no releases |

## Worth studying

- [CVE-2026-54725 — Vault Secrets Webhook SSRF → cluster token theft](https://github.com/advisories/GHSA-r2v3-8gwf-7ghm) — unsanitized `vault-addr` annotation triggers an outbound HTTP call during K8s admission review; `vault-serviceaccount` mode escalates to ServiceAccount JWT theft.
- [CVE-2026-53713 — Envoy Gateway auth bypass via Lua path traversal](https://github.com/advisories/GHSA-wcrf-9vrr-854f) — `//`-prefixed paths bypass the critical-path check, letting EnvoyExtensionPolicy Lua read secrets/SA tokens/TLS certs from the gateway controller pod.
- [CVE-2026-10520 — Ivanti Sentry pre-auth OS command injection](https://github.com/advisories/GHSA-v2vc-rgvq-3pwf) — CVSS 10.0, on CISA KEV, 6+ groups tracking active exploitation.
- [ADscan — Linux-native AD attack-chain CLI](https://github.com/ADScanPro/adscan) — 104 techniques (Kerberoasting, ESC1-16, DCSync, BloodHound-compatible output) in one Dockerized tool, no Windows infra needed.
- [CVE-2026-52887 — NocoBase unauthenticated SQLi → RCE](https://github.com/advisories/GHSA-p849-8hwh-84j9) — CVSS 10.0; unauth SQL injection in the in-app-message notification plugin escalates to RCE via `COPY ... TO PROGRAM` on the default superuser Postgres role. Public PoC in the advisory. Patched in 2.0.61.
- [SliverC2-Evasion-Suite](https://github.com/Squ1shification/SliverC2-Evasion-Suite) — four-part defense-evasion kit for Sliver C2: Crystal Palace loader, sleep masking, in-memory PE execution, PPID-spoofed remote process injection.
- [CVE-2026-54680 — Logging Operator Fluentd-injection RCE](https://github.com/advisories/GHSA-mjqf-28ph-426h) — unescaped CRD strings injected into `fluent.conf`; a newline plants `@type exec` → RCE in the aggregator pod. Kubernetes/cloud.
- [CVE-2026-67428 — flyto2-core SSRF](https://github.com/advisories/GHSA-pgwh-4jj4-qm8v) — HTTP modules fetch client-controlled URLs without the SSRF guard their siblings apply → internal/cloud-metadata reach.
- [Nuclei v3.11.0 — mandatory JS-template signing](https://github.com/projectdiscovery/nuclei/releases/tag/v3.11.0) — if you maintain custom nuclei templates on the `javascript:` protocol, they now need a signature or they stop loading.
- [CVE-2026-66066 — Rails Active Storage RCE](https://github.com/advisories/GHSA-xr9x-r78c-5hrm) — arbitrary file read + RCE via variant processing on any Rails app using Active Storage variants.

## How it works

A scheduled Claude Code routine runs a fixed prompt: *read `AGENTS.md`, then `routines/daily.md`,
and execute it.* The agent sweeps the sources in [`SOURCES.md`](SOURCES.md), routes new published
artifacts into the [trend ledger](TRENDS.md), writes a dated report under [`reports/`](reports/),
regenerates this page, and pushes to `main`. A weekly routine recalibrates trends and prunes.

This is a **radar**: it points to published research, tools, and advisories and summarizes their
significance. It tracks artifacts — it is not a runbook and stores no operational payloads.

---
[Ledger](TRENDS.md) · [Reports](reports/) · [Latest daily](reports/2026-07-31.md) · [Latest weekly](reports/weekly/2026-W32.md) · [Weekly reports](reports/weekly/)
