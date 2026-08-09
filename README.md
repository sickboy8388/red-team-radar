# Red Team Radar

Persistent state for the offensive-security frontier — tools, releases, techniques, research and advisories — curated for red team operators. Track published artifacts and situational awareness signals.

![trends](https://img.shields.io/badge/trends-3-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-29-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--08--09-2f9e44?style=flat-square)

---

## Since last scan (2026-08-08)

- **Single-vendor CVE cascade** — GHSA sweep found 6 new CRITICAL/HIGH advisories (Aug 7–9): [crypto-js insufficient entropy](TRENDS.md#observation_queue) (CRITICAL, npm supply chain); [CodeIgniter 4 validation bypass](TRENDS.md#observation_queue) + [SQL injection](TRENDS.md#observation_queue) (both CRITICAL); [GitPython multi-issue batch](TRENDS.md#observation_queue) (4× HIGH, git option guards + config injection + template option + file overwrite); [go-git symlink following](TRENDS.md#observation_queue) (HIGH). All single-vendor, awaiting independent corroboration.
- **Study shelf extended** — [PortSwigger CRLF-Powered Desync Attacks](https://portswigger.net/research/crlf-powered-desync-attacks) (Aug 5) added: HTTP/2 request smuggling via header injection.
- **Elastic security research continues** — 4 new articles (Aug 4–7) on agentic C2 (LaunchAgent persistence), npm supply-chain detection evasion, CHAINDROP worm update, LLM threat modeling.
- **Existing trends stable** — CertiGhost emerging (7 days quiet), WSUS seed (4 days quiet), Entra SyncJacking seed (3 days quiet).
- **Network degradations persist** — Outflank (403), Black Hills (403), MDSec (522); observation_queue at policy cap (29 items, limit ~25); burndown prioritized next run.

---

## Trends

**Status tally:** emerging 1 · seed 2

| Trend | Stage | Latest signal |
|-------|-------|---|
| [CertiGhost AD CS DC-impersonation (CVE-2026-54121)](TRENDS.md#id-ad-certighost-001--certighost-ad-cs-chase-dc-impersonation-cve-2026-54121) | emerging | [2026-08-06](https://fieldeffect.com/) — FieldEffect DC impersonation analysis |
| [Entra ID SyncJacking & Conditional Access Bypass](TRENDS.md#id-identity-entra-syncjacking-001--entra-id-syncjacking--conditional-access-bypass) | seed | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) — Semperis re-confirmation & guidance |
| [WSUS / Windows Update Server RCE exploitation](TRENDS.md#id-initial-access-wsus-001--wsus--windows-update-server-rce-exploitation) | seed | [2026-08-05](https://specterops.io/blog/2026/08/05/turning-enterprise-update-servers-into-backdoor-factories-part-1/) — SpecterOps comprehensive chain writeup |

---

## Worth studying

Current study shelf — technique writeups, novel primitives, and published research of immediate red-team relevance:

- [**PortSwigger: CRLF-Powered Desync Attacks**](https://portswigger.net/research/crlf-powered-desync-attacks) (Aug 5, 2026) — HTTP/2 desynchronization via header CRLF injection; request smuggling & cache poisoning.
- [**Elastic: Living off the coding agent**](https://www.elastic.co/security-labs) (Aug 7, 2026) — LaunchAgent + reverse-tunnel abuse for autonomous agent C2 persistence; detection evasion in real-time.
- [**SpecterOps: ConfigManBearPig 2.0**](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/) (Aug 3, 2026) — SCCM/Configuration Manager attack-collection tool; 30+ techniques, 9 takeover paths.
- [**SensePost: Process Parameter Poisoning**](https://sensepost.com/blog/2026/process-parameter-poisoning/) (Jul 6, 2026) — Novel injection primitive using `CreateProcessW` + thread-context manipulation; EDR evasion.
- [**ADscan**](https://github.com/ADScanPro/adscan) (2026) — Linux-native AD attack-chain consolidation; 104 techniques; Docker-based, no Windows infra required.
- [**SpecterOps: Mythic 4.0.0 public beta**](https://specterops.io/blog/2026/08/04/introducing-mythic-4-0-0/) (Aug 4, 2026) — C2 framework release.

[See full study shelf →](TRENDS.md#study_shelf)

---

## Tools & releases

Latest tracked releases (checked 2026-08-09):

- **BloodHound** v9.5.1 (July 29, 2026)
- **Nuclei** v3.11.0 (July 6, 2026) — JavaScript-protocol template signing enforcement (breaking change)
- **Sliver** v1.7.3 (Feb 2026)
- **NetExec**, **Certipy**, **impacket** (pre-2025, no recent updates)

---

## Watchlist & queue

[29 below-bar items in observation_queue](TRENDS.md#observation_queue) — awaiting 2nd independent source or concrete evidence.

**Highlights (awaiting secondary coverage):**
- **crypto-js CVE-2026-71851** (CRITICAL, insufficient entropy, npm supply chain)
- **CodeIgniter 4 CVE-2026-63223 & 63221** (CRITICAL validation bypass + SQL injection, Aug 7)
- **GitPython batch** (4× HIGH, unsafe git options + config injection + template option + file overwrite, Aug 7)
- **go-git CVE-2026-71556** (HIGH, symlink following, Aug 7)
- **TeamCity CVE-2026-63077** (CRITICAL, CVSS 9.8, CISA KEV, federal deadline Aug 8)
- **Langflow CVE-2026-9198** (CRITICAL, CVSS 9.8, CISA KEV, federal deadline passed)
- **CHAINDROP npm worm** (400+ packages, 1.3B downloads, Elastic report)

---

## Resources

- **[TRENDS.md](TRENDS.md)** — full ledger
- **[Observation queue](TRENDS.md#observation_queue)** — 29 items awaiting promotion or burndown
- **[Reports](reports/)** — daily & weekly recalibrations
- **[Latest report](reports/2026-08-09.md)** — daily summary for 2026-08-09
- **[Source registry](SOURCES.md)** — primary feeds & discovery lanes

---

*Red Team Radar tracks and points to published offensive-security artifacts. It is a tracker, not a runbook — links only, no operational payloads.*
