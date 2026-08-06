# Red Team Radar

![trends](https://img.shields.io/badge/trends-3-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-10-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--08--06-2f9e44?style=flat-square)

Autonomous tracker of the offensive-security frontier — AD/identity, C2 & evasion, web/API/cloud,
exploitable CVEs, and red-team TTPs — curated for a red team operator. Derived from
[TRENDS.md](TRENDS.md); regenerated on every scan.

## Since last scan (2026-08-06)

- **Two new SEED trends seeded** — [WSUS/Windows Update Server RCE exploitation](#wsus--windows-update-server-rce-exploitation) (4-article SpecterOps cluster + Sophos, Huntress, Palo Alto Unit42 active tracking; 50+ victims, 5,500+ exposed instances) and [Entra ID SyncJacking & Conditional Access Bypass](#entra-id-syncjacking--conditional-access-bypass) (Semperis discovery, MSRC confirmation; Global Admin takeover via hard-matching abuse).
- [CRLF-Powered Desync Attacks (PortSwigger)](https://portswigger.net/research/crlf-powered-desync-attacks) — HTTP/2 protocol edge case enabling request smuggling and cache poisoning via header-value CRLF injection.
- [CHAINDROP worm / Shai-Hulud (Elastic)](https://www.elastic.co/security-labs/shai-hulud-chaindrop) — npm supply-chain attack; 400+ packages compromised, 1.3B monthly downloads affected.
- [Nuxt framework CVE cluster](https://github.com/advisories?query=type%3Areviewed) — 6 critical/high CVEs (Aug 5-6): unauthenticated DevTools RCE, Server Island template RCE, auth bypass, DoS, cache disclosure.
- [rclone CVE cluster](https://github.com/advisories) — 4 high CVEs (Aug 5-6): SFTP command execution, auth bypass, path validation, symlink arbitrary write.

## Trends

seed 3 · emerging 0 · accelerating 0 · mainstreaming 0 · dormant 0

| Trend | Stage | Latest signal |
|---|---|---|
| [CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)](#certighost-ad-cs-chase-dc-impersonation-cve-2026-54121) | seed | [2026-07-31](https://github.com/nafiez/Metasploit-CVE-2026-54121-Certighost) |
| [WSUS / Windows Update Server RCE exploitation](#wsus--windows-update-server-rce-exploitation) | seed | [2026-08-05](https://unit42.paloaltonetworks.com/microsoft-cve-2025-59287/) — Palo Alto Unit42 |
| [Entra ID SyncJacking & Conditional Access Bypass](#entra-id-syncjacking--conditional-access-bypass) | seed | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) — Semperis |

## Tools & releases

- **[Nuclei](https://github.com/projectdiscovery/nuclei)** — v3.11.0 (2026-07-06): mandatory JS-protocol template signing; unsigned templates now silently stop loading.
- **[SliverC2-Evasion-Suite](https://github.com/Squ1shification/SliverC2-Evasion-Suite)** — 81 stars, actively updated: Crystal Palace loader, sleep masking, in-memory PE execution, PPID-spoofed injection.
- **[ADScanPro/adscan](https://github.com/ADScanPro/adscan)** — 506 stars, 56 forks: Linux-native consolidation of 104 AD attack-chain techniques (Kerberoasting, ADCS ESC1-16 automation, DCSync, BloodHound-compatible output).

## Worth studying

- [CRLF-Powered Desync Attacks: Beheading HTTP Streams](https://portswigger.net/research/crlf-powered-desync-attacks) — PortSwigger Research (2026-08-05): HTTP/2 protocol edge case enabling request smuggling and cache poisoning via header-value injection.
- [ConfigManBearPig 2.0 — SCCM attack toolkit](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/) — Python rewrite covering 30+ Configuration Manager attack techniques (recon → takeover → execution), mostly from a low-privileged domain user; Linux-native with proxy/alt-auth OPSEC. SCCM stays an under-tracked lateral-movement surface.
- [Process Parameter Poisoning "P3" — EDR-evading injection](https://sensepost.com/blog/2026/process-parameter-poisoning/) — smuggles payloads through legit process-startup fields via `CreateProcessW` + thread-context manipulation, avoiding the `WriteProcessMemory`/`VirtualAllocEx` pattern four major EDRs watch for.
- [CVE-2026-52855 — Pterodactyl Wings config-template token theft](https://github.com/advisories/GHSA-pfvc-3p5h-x7h6) — egg configuration-file templating exposes the full daemon config; a crafted `{{config.<path>}}` placeholder exfiltrates the node daemon token and Docker registry credentials. Fixed 1.12.3.
- [CVE-2026-53609 — Apostrophe CMS prototype pollution → authz bypass](https://github.com/advisories/GHSA-6h5j-32cf-4253) — `apos.util.set()` doesn't reject `__proto__`/`constructor`/`prototype`; an editor's crafted PATCH request pollutes `Object.prototype` and permanently opens unauthenticated REST access. PoC in the advisory. Fixed 4.31.0.
- [CVE-2026-54725 — Vault Secrets Webhook SSRF → cluster token theft](https://github.com/advisories/GHSA-r2v3-8gwf-7ghm) — unsanitized `vault-addr` annotation triggers an outbound HTTP call during K8s admission review; `vault-serviceaccount` mode escalates to ServiceAccount JWT theft.
- [CVE-2026-53713 — Envoy Gateway auth bypass via Lua path traversal](https://github.com/advisories/GHSA-wcrf-9vrr-854f) — `//`-prefixed paths bypass the critical-path check, letting EnvoyExtensionPolicy Lua read secrets/SA tokens/TLS certs from the gateway controller pod.
- [CVE-2026-10520 — Ivanti Sentry pre-auth OS command injection](https://github.com/advisories/GHSA-v2vc-rgvq-3pwf) — CVSS 10.0, on CISA KEV, 6+ groups tracking active exploitation.
- [CVE-2026-52887 — NocoBase unauthenticated SQLi → RCE](https://github.com/advisories/GHSA-p849-8hwh-84j9) — CVSS 10.0; unauth SQL injection in the in-app-message notification plugin escalates to RCE via `COPY ... TO PROGRAM` on the default superuser Postgres role. Public PoC in the advisory. Patched in 2.0.61.
- [CVE-2026-54680 — Logging Operator Fluentd-injection RCE](https://github.com/advisories/GHSA-mjqf-28ph-426h) — unescaped CRD strings injected into `fluent.conf`; a newline plants `@type exec` → RCE in the aggregator pod. Kubernetes/cloud.
- [CVE-2026-67428 — flyto2-core SSRF](https://github.com/advisories/GHSA-pgwh-4jj4-qm8v) — HTTP modules fetch client-controlled URLs without the SSRF guard their siblings apply → internal/cloud-metadata reach.
- [CVE-2026-66066 — Rails Active Storage RCE](https://github.com/advisories/GHSA-xr9x-r78c-5hrm) — arbitrary file read + RCE via variant processing on any Rails app using Active Storage variants.

## How it works

A scheduled Claude Code routine runs a fixed prompt: *read `AGENTS.md`, then `routines/daily.md`,
and execute it.* The agent sweeps the sources in [`SOURCES.md`](SOURCES.md), routes new published
artifacts into the [trend ledger](TRENDS.md), writes a dated report under [`reports/`](reports/),
regenerates this page, and pushes to `main`. A weekly routine recalibrates trends and prunes.

This is a **radar**: it points to published research, tools, and advisories and summarizes their
significance. It tracks artifacts — it is not a runbook and stores no operational payloads.

---
[Ledger](TRENDS.md) · [Reports](reports/) · [Latest daily](reports/2026-08-06.md) · [Latest weekly](reports/weekly/2026-W32-corrected.md) · [Weekly reports](reports/weekly/)
