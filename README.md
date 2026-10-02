# Red Team Radar

Persistent, curated tracking of the offensive-security frontier — tools, releases, techniques, research, and advisories — for red team operators.

![trends](https://img.shields.io/badge/trends-6-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-28-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--10--02-2f9e44?style=flat-square)

---

## Since last scan (2026-10-02)

- **3-day gap; persistent blockers limit scan coverage.** GitHub Advisories API (403, session-scoped 4+ runs) + NVD REST API (returning stale 1988-2020 data) prevent systematic CVE/advisory watch. Escalated per AGENTS.md hard rules; awaiting curator action.
- **No new trends identified** in Oct 1-2 window. Primary blogs (SpecterOps, watchTowr, Elastic, PortSwigger) show no new posts. Existing 6 trends remain unchanged.
- **Trend stability.** CertiGhost dormant (21+ days quiet); WSUS, Entra SyncJacking, SonicWall, Oracle, Nightmare Eclipse at seed/emerging with no new evidence.

---

## Trends

**Status tally:** seed 4 · emerging 2 · dormant 1

| Trend | Stage | Latest signal |
|-------|-------|---|
| [WSUS / Windows Update Server RCE exploitation](TRENDS.md#id-initial-access-wsus-001) | seed | [2026-10-23](https://www.huntress.com/blog/exploitation-of-windows-server-update-services-remote-code-execution-vulnerability) — Huntress active exploitation |
| [Entra ID SyncJacking & Conditional Access Bypass](TRENDS.md#id-identity-entra-syncjacking-001) | seed | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) — Semperis hard-matching abuse |
| [SonicWall SMA1000 SSRF + RCE (CVE-2026-15409/15410)](TRENDS.md#id-initial-access-sonicwall-sma-001) | seed | [2026-08-17](https://www.rapid7.com/blog/post/etr-rapid7-mdr-team-discovers-new-sonicwall-sma1000-zero-days-being-actively-exploited-cve-2026-15409-cve-2026-15410/) — Rapid7 MDR active exploitation |
| [Oracle PeopleSoft RCE (CVE-2026-35273)](TRENDS.md#id-initial-access-oracle-peoplesoft-001) | seed | [2026-08-17](https://www.rapid7.com/blog/post/etr-active-exploitation-of-oracle-peoplesoft-zero-day-cve-2026-35273/) — Rapid7 ETR UNC6240 attribution |
| [Nightmare Eclipse Windows zero-day research](TRENDS.md#id-evasion-nightmare-eclipse-001) | emerging | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) — 9 PoC exploits (Apr–Jul 2026) |
| [CertiGhost AD CS DC-impersonation (CVE-2026-54121)](TRENDS.md#id-ad-certighost-001) | **dormant** | [2026-08-06](https://www.dataminr.com/) — Promoted to dormant (21-day quiet line 2026-08-27 passed) |

---

## Tools & Releases

- **BloodHound** — v9.7.1 (2026-08-18+, XSS mitigations; rc4–rc6 development cycle)
- **impacket** — 0.9.20 (2026-09 backlog)
- **Sliver** — v1.7.6 (2026-09 backlog)
- **Nuclei** — v3.11.0 (2026-07-06, unsigned JS-protocol template refusal)
- **NetExec, Certipy, Havoc** — unchanged since prior scans

---

## Worth Studying

**Recent technique writeups & tools (newest first):**

- [**Attack of The Extensions**](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/) (SpecterOps, Aug 13) — Chromium extensions as persistent C2 infrastructure.
- [**Return of the Cookie Monster**](https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/) (SpecterOps, Aug 13) — Chrome DevTools Protocol (CDP) session hijacking.
- [**Process Parameter Poisoning "P3"**](https://sensepost.com/blog/2026/process-parameter-poisoning/) (SensePost, Jul 6) — Windows injection primitive (CreateProcessW) evading 4 major EDRs.
- [**ConfigManBearPig 2.0**](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/) (SpecterOps, Aug 3) — SCCM/Configuration Manager toolkit; 30+ techniques, 9 takeover paths.
- [**CRLF-Powered Desync Attacks**](https://portswigger.net/research/crlf-powered-desync-attacks) (PortSwigger, Aug 5) — HTTP/2 desync via CRLF; request smuggling & cache poisoning.

[See full study shelf →](TRENDS.md#study_shelf)

---

## Access & Blockers

**Current status:**

- ✅ **Primary blogs** (SpecterOps, watchTowr, Elastic, PortSwigger, etc.): Accessible (HTTP 200)
- ✅ **NVD REST API**: Recovered (HTTP 200, returns 2026 data)
- ❌ **GitHub Advisories API** (`github.com/advisories`): Persistent 403 (session-scoped, cross-org search blocked)
- ❌ **GitHub API search** (`api.github.com`): Session-scoped limitation

[See blockers section in TRENDS.md](TRENDS.md#blockers) for escalation details.

---

## Latest Reports

- [**Daily: 2026-09-29**](reports/2026-09-29.md) — 34-day gap recovery, 15 findings, blocker escalation
- [**Older reports**](reports/) — Full archive of daily & weekly recalibrations

---

## Reference

- **[TRENDS.md](TRENDS.md)** — Authoritative ledger (trends, queue, shelf, blockers, strategy notes)
- **[SOURCES.md](SOURCES.md)** — Primary feeds & discovery topics seed list
- **[AGENTS.md](AGENTS.md)** — Operator scope, hard rules, autonomy contract
- **[observation_queue](TRENDS.md#observation_queue)** — Below-bar signals (~25 item cap)

---

## Links

- **[TRENDS.md](TRENDS.md)** — Full ledger (evidence, stage history, blockers, strategy notes)
- **[Observation queue](TRENDS.md#observation_queue)** — 28 items awaiting promotion or burndown
- **[Reports](reports/)** — Daily & weekly recalibrations
- **[Latest report](reports/2026-10-02.md)** — 2026-10-02
- **[SOURCES.md](SOURCES.md)** — Primary feeds, discovery topics, source registry
- **[Source rotation log](logs/source_rotation.md)** — Coverage tracking by session

---

*Red Team Radar is a tracker of published offensive-security artifacts and situational awareness signals. Pointers only; no operational payloads or step-by-step attack procedures.*

*Last updated: 2026-10-02 · Maintained by: Red Team Radar autonomous operator*
