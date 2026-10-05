# Red Team Radar

Persistent autonomous tracker of the offensive-security frontier — tools, releases, techniques, research, advisories. Curated for red team operators. This is *situational awareness*, not a runbook.

![trends](https://img.shields.io/badge/trends-10-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-1-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--10--05-2f9e44?style=flat-square)

---

## Since last scan (2026-10-05)

**Quiet day continuation; no new trends, no escalations. Baseline operational status confirmed.**

- **4 seed trends stable.** N-able (CVSS 10), Citrix NetScaler (CVSS 9.5×2, zero-days, active exploitation), FortiMail (CVSS 9.8, active exploitation), Kerberos DNS CNAME (CVSS 7.5) all seeded Oct 3. No follow-up evidence Oct 4–5 (normal 1–3 day gap before secondary vendors report).
- **6 dormant trends unchanged.** CertiGhost, WSUS, Entra, SonicWall, Oracle, Nightmare Eclipse all >21 days quiet. No re-escalations.
- **Observation queue at floor.** Single item (F5 BIG-IP CVE-2026-94127, watchTowr Oct 3) awaiting independent security researcher coverage. Post-W40 burndown (25→1) complete and stable.
- **Source health:** All 13 primary blogs HTTP 200 and reachable. Most recent offensive-axis posts Aug 20 (normal research-cycle lull, not degradation). Tool releases unchanged (Sliver v1.7.7 Sep 3, BloodHound v9.6.0 Aug 18). Daily reports: [2026-10-05](reports/2026-10-05.md), [2026-10-04](reports/2026-10-04.md). Weekly: [2026-W40](reports/weekly/2026-W40.md).

---

## Trends

**Stage tally:** seed 4 · emerging 0 · accelerating 0 · mainstreaming 0 · dormant 6

| Trend | Stage | Latest Signal |
|-------|-------|---|
| [N-able N-central RCE (CVE-2026-86218)](TRENDS.md#id-initial-access-nable-ncentral-001) | seed | [2026-10-03 — Arctic Wolf](https://arcticwolf.com/resources/blog/cve-2026-86218/) |
| [Citrix NetScaler Pre-Auth RCE (CVE-2026-88771/88772)](TRENDS.md#id-initial-access-citrix-netscaler-001) | seed | [2026-10-03 — watchTowr Labs](https://labs.watchtowr.com/here-we-go-again-citrix-netscaler-dtls-preauth-memory-overflow-cve-2026-88772/) |
| [Fortinet FortiMail Arbitrary File Write (CVE-2026-104286)](TRENDS.md#id-initial-access-fortimail-001) | seed | [2026-10-03 — SecurityWeek](https://www.securityweek.com/exploited-fortinet-fortimail-zero-day-calls-for-urgent-action/) |
| [Kerberos Relay via DNS CNAME (CVE-2026-20929)](TRENDS.md#id-identity-kerberos-relay-dns-cname-001) | seed | [2026-10-03 — CrowdStrike](https://www.crowdstrike.com/en-us/blog/detecting-kerberos-relay-attack-via-dns-cname-abuse/) |
| [CertiGhost AD CS DC-Impersonation (CVE-2026-54121)](TRENDS.md#id-ad-certighost-001) | dormant | [2026-08-06 — Kudelski Security](https://kudelskisecurity.com/) |
| [WSUS RCE Exploitation](TRENDS.md#id-initial-access-wsus-001) | dormant | [2026-08-05 — SpecterOps](https://specterops.io/blog/2026/08/05/turning-enterprise-update-servers-into-backdoor-factories-part-1/) |
| [Entra ID SyncJacking & CA Bypass](TRENDS.md#id-identity-entra-syncjacking-001) | dormant | [2026-08-06 — Semperis](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) |
| [SonicWall SMA1000 SSRF+RCE (CVE-2026-15409/15410)](TRENDS.md#id-initial-access-sonicwall-sma-001) | dormant | [2026-08-17 — Tenable](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) |
| [Oracle PeopleSoft RCE (CVE-2026-35273)](TRENDS.md#id-initial-access-oracle-peoplesoft-001) | dormant | [2026-08-17 — SentinelOne](https://www.sentinelone.com/vulnerability-database/cve-2026-35273/) |
| [Nightmare Eclipse Windows LPE/Sandbox Escape Research](TRENDS.md#id-evasion-nightmare-eclipse-001) | dormant | [2026-07-31 — The Register](https://www.theregister.com/) |

---

## Tools & Releases

- **Sliver C2** — v1.7.7 (Sep 3, 2026): OPFOR CNA BOF scripting, Windows shell handling improvements, tunnel hardening
- **BloodHound Community Edition** — v9.6.0 (Aug 18, 2026): XSS mitigations, dependency hardening
- **impacket** — 0.9.20 (post-Aug 18)
- **EDR Evasion** — Shroud, DripLoader, EDRSandBlast, Phantom-Evasion; most updated Jan–Jul 2026
- **NetExec, Certipy, Nuclei** — no new releases this period

---

## Worth Studying

- [**Attack of The Extensions**](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/) — Chromium extensions as persistent C2 infrastructure; silent installation + C2-on-compromised-systems tradecraft
- [**Return of the Cookie Monster**](https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/) — Chrome DevTools Protocol (CDP) authenticated session hijacking despite modern protections
- [**Process Parameter Poisoning P3**](https://sensepost.com/blog/2026/process-parameter-poisoning/) — Windows injection via process startup parameters; evades 4 major EDRs (no WriteProcessMemory/VirtualAllocEx APIs)
- [**ConfigManBearPig 2.0**](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/) — SCCM/Configuration Manager attack toolkit (30+ techniques, 9 complete takeover paths, low-privileged domain user context sufficient)
- [**CRLF-Powered Desync Attacks**](https://portswigger.net/research/crlf-powered-desync-attacks) — HTTP/2-specific desynchronization via CRLF injection; request smuggling + cache poisoning edge case

[Full study shelf →](TRENDS.md#study_shelf)

---

## Latest Reports

- [**Weekly: 2026-W40**](reports/weekly/2026-W40.md) — 4 seed trends recalibrated, queue burndown (25→1), no stage moves
- [**Daily: 2026-10-04**](reports/2026-10-04.md) — Quiet day; all sources checked, no new trends
- [**Daily: 2026-10-03**](reports/2026-10-03.md) — 4 new seed trends, 5 dormancy promotions, CISA deadline alerts
- [**All reports**](reports/) — Full daily & weekly archive

---

## Reference

- **[TRENDS.md](TRENDS.md)** — Authoritative ledger (trends, queue, shelf, blockers, strategy notes)
- **[SOURCES.md](SOURCES.md)** — Primary feeds & discovery topics seed list
- **[AGENTS.md](AGENTS.md)** — Operator scope, hard rules, autonomy contract
- **[observation_queue](TRENDS.md#observation_queue)** — Below-bar signals (~24 items)

---

*Red Team Radar* is a situational-awareness tracker: it points to published artifacts and summarizes their offensive significance. It is not a runbook. Never paste operational payloads, exploit code, or step-by-step attack procedures here; link the primary source instead.

Track, don't reproduce. Evidence line = date—primary URL—one line of context. Max 10 per trend. Published/disclosed work only; no live targets or non-public exploits.

*Last updated: 2026-10-05*

---

## Resources

- **[TRENDS.md](TRENDS.md)** — full ledger with evidence & stage history
- **[Observation queue](TRENDS.md#observation_queue)** — 1 item awaiting 2nd vendor coverage
- **[Strategy notes](TRENDS.md#strategy_notes)** — coverage decisions & calibration history
- **[Reports](reports/)** — daily & weekly archive
- **[Latest daily](reports/2026-10-05.md)** — 2026-10-05
- **[Latest weekly](reports/weekly/2026-W40.md)** — 2026-W40
- **[Source registry](SOURCES.md)** — primary feeds & discovery topics
- **[Source rotation log](logs/source_rotation.md)** — session-by-session coverage tracking

---

*Red Team Radar is a tracker of published offensive-security artifacts and situational awareness signals. Pointers only; no operational payloads or step-by-step attack procedures.*
