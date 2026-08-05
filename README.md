# Red Team Radar

![trends](https://img.shields.io/badge/trends-1-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-6-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--08--05-2f9e44?style=flat-square)

Autonomous tracker of the offensive-security frontier — AD/identity, C2 & evasion, web/API/cloud,
exploitable CVEs, and red-team TTPs — curated for a red team operator. Derived from
[TRENDS.md](TRENDS.md); regenerated on every scan.

## Since last scan (2026-08-05)

- **Network reopened:** after six blocked sessions, the primary security blogs and NVD are reachable again (SpecterOps, watchTowr, PortSwigger, Synacktiv, SensePost, Elastic, Black Hills, MDSec, NVD all 200) — first real primary-blog sweep since 2026-07-31. Outflank, Assetnote and CISA KEV still 403.
- [ConfigManBearPig 2.0 (SpecterOps)](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/) — Python rewrite of the SCCM/Configuration Manager attack toolkit, 30+ techniques (9 complete takeover paths), most needing only a low-privileged domain user; now Linux-native with proxy/alt-auth OPSEC.
- [Process Parameter Poisoning (SensePost)](https://sensepost.com/blog/2026/process-parameter-poisoning/) — novel injection primitive smuggling payloads through legit process-startup fields via `CreateProcessW` + thread-context manipulation, dodging four major EDRs without the usual `WriteProcessMemory`/`VirtualAllocEx` pattern.
- [Mythic 4.0.0 public beta (SpecterOps)](https://specterops.io/blog/2026/08/04/mythic-4-public-beta/) — C2 framework major beta on the `Mythic-v4.0.0` branch: operation chat with AI, scoped API tokens, resumable file transfers, in-browser file editing.
- No new trend; CertiGhost (`ad-certighost-001`) unchanged. With ~8 primary orgs swept, "no trend" is now a genuine finding rather than a network artifact — no ≥3-org cluster on a single fresh sub-theme this session.

## Trends

seed 1 · emerging 0 · accelerating 0 · mainstreaming 0 · dormant 0

| Trend | Stage | Latest signal |
|---|---|---|
| [CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)](TRENDS.md#ad-certighost-001--certighost-ad-cs-chase-dc-impersonation-cve-2026-54121) | seed | [2026-07-31](https://github.com/nafiez/Metasploit-CVE-2026-54121-Certighost) |

## Tools & releases

| Tool | Latest release | Date |
|---|---|---|
| [Mythic](https://github.com/its-a-feature/Mythic) | [v4.0.0 public beta](https://specterops.io/blog/2026/08/04/mythic-4-public-beta/) | 2026-08-04 |
| [BloodHound](https://github.com/SpecterOps/BloodHound) | [v9.5.1](https://github.com/SpecterOps/BloodHound/releases/tag/v9.5.1) | 2026-07-29 |
| [Nuclei](https://github.com/projectdiscovery/nuclei) | [v3.11.0](https://github.com/projectdiscovery/nuclei/releases/tag/v3.11.0) | 2026-07-06 |
| [Certipy](https://github.com/ly4k/Certipy) | [5.1.0](https://github.com/ly4k/Certipy/releases/tag/5.1.0) | 2026-06-23 |
| [impacket](https://github.com/fortra/impacket) | [0.13.1](https://github.com/fortra/impacket/releases/tag/impacket_0_13_1) | 2026-05-19 |
| [Sliver](https://github.com/BishopFox/sliver) | [v1.7.3](https://github.com/BishopFox/sliver/releases/tag/v1.7.3) | 2026-02-24 |
| [NetExec](https://github.com/Pennyw0rth/NetExec) | [v1.5.1](https://github.com/Pennyw0rth/NetExec/releases/tag/v1.5.1) | 2026-02-23 |
| [Havoc](https://github.com/HavocFramework/Havoc) | — | archived 2026-02-20, no releases |

## Worth studying

- [ConfigManBearPig 2.0 — SCCM attack toolkit](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/) — Python rewrite covering 30+ Configuration Manager attack techniques (recon → takeover → execution), mostly from a low-privileged domain user; Linux-native with proxy/alt-auth OPSEC. SCCM stays an under-tracked lateral-movement surface.
- [Process Parameter Poisoning "P3" — EDR-evading injection](https://sensepost.com/blog/2026/process-parameter-poisoning/) — smuggles payloads through legit process-startup fields via `CreateProcessW` + thread-context manipulation, avoiding the `WriteProcessMemory`/`VirtualAllocEx` pattern four major EDRs watch for.
- [CVE-2026-52855 — Pterodactyl Wings config-template token theft](https://github.com/advisories/GHSA-pfvc-3p5h-x7h6) — egg configuration-file templating exposes the full daemon config; a crafted `{{config.<path>}}` placeholder exfiltrates the node daemon token and Docker registry credentials. Fixed 1.12.3.
- [CVE-2026-53609 — Apostrophe CMS prototype pollution → authz bypass](https://github.com/advisories/GHSA-6h5j-32cf-4253) — `apos.util.set()` doesn't reject `__proto__`/`constructor`/`prototype`; an editor's crafted PATCH request pollutes `Object.prototype` and permanently opens unauthenticated REST access. PoC in the advisory. Fixed 4.31.0.
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
[Ledger](TRENDS.md) · [Reports](reports/) · [Latest daily](reports/2026-08-05.md) · [Latest weekly](reports/weekly/2026-W32.md) · [Weekly reports](reports/weekly/)
