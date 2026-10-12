# Red Team Radar

Persistent autonomous tracker of the offensive-security frontier — tools, releases, techniques, research, advisories. Curated for red team operators. This is *situational awareness*, not a runbook.

![trends](https://img.shields.io/badge/trends-11-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-2-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--10--12-2f9e44?style=flat-square)

---

## Since last scan (2026-10-12)

**Weekly recalibration complete. 5 seed trends (PaperCut promoted Oct 11); 6 dormant unchanged. No new evidence Oct 6–12. SOC Prime added to primary feeds.**

- **PaperCut NG/MF pre-auth RCE remains seed.** CVE-2026-82077/82078/81578; 3 independent sources (watchTowr Oct 9, FieldEffect Aug 31, SOC Prime). Multiple vectors + patch bypasses. Widely-deployed print management (Hive); CISA KEV; active exploitation. [watchTowr](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/)

- **4 seed trends hold (Oct 3 seeding, no new evidence Oct 6–12).** N-able N-central (CVSS 10, CISA Sep 8), Citrix NetScaler (CVSS 9.5×2, zero-days, pre-disclosure exploitation), Fortinet FortiMail (CVSS 9.8, active wild exploitation, CISA Oct 1 deadline passed), Kerberos DNS CNAME (CVSS 7.5, persistent ADCS cert theft, HTTP/LDAP/SMB vulnerable).

- **6 dormant trends unchanged.** CertiGhost, WSUS, Entra SyncJacking, SonicWall SMA1000, Oracle PeopleSoft, Nightmare Eclipse all quiet (≥21 days); no re-escalation signals.

- **Observation queue: 2 single-vendor pending corroboration.** Atlassian Jira/Confluence pre-auth file read CVE-2026-21589 (watchTowr Oct 6), F5 BIG-IP heap-overflow RCE CVE-2026-94127 (watchTowr Oct 3). Threshold for trend: ≥3 independent sources + artifact.

- **Source discovery: SOC Prime promoted to primary feeds.** Recurrence across 2 runs (Certighost Aug 6 + PaperCut Oct 11). Detection rules + threat intelligence on exploitable CVEs. [SOC Prime](https://socprime.com/). Weekly report: [2026-W42](reports/weekly/2026-W42.md).

---

## Trends

**seed 5 · dormant 6**

| Trend | Stage | Latest Signal |
|-------|-------|---|
| [PaperCut NG/MF Pre-Auth RCE (CVE-2026-82077/82078/81578)](TRENDS.md#id-initial-access-papercut-001--papercut-ngmf-pre-auth-rce-chain-cve-2026-820778257881578) | seed | [2026-10-09 — watchTowr](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) — pre-auth RCE chain, patch bypasses, Hive print management |
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](TRENDS.md#id-initial-access-nable-ncentral-001) | seed | [2026-10-03 — Arctic Wolf](https://arcticwolf.com/resources/blog/cve-2026-86218/) — CVSS 10.0, static code injection, pre-auth RCE, CISA KEV Sep 8 |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](TRENDS.md#id-initial-access-citrix-netscaler-001) | seed | [2026-10-03 — watchTowr Labs](https://labs.watchtowr.com/oh-look-the-foot-gun-went-off-again-citrix-netscaler-preauth-command-injection-cve-2026-88771/) — CVSS 9.5×2, zero-days, active exploitation |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](TRENDS.md#id-initial-access-fortimail-001) | seed | [2026-10-03 — SecurityWeek](https://www.securityweek.com/exploited-fortinet-fortimail-zero-day-calls-for-urgent-action/) — CVSS 9.8, path traversal, active wild exploitation, CISA KEV Oct 1 |
| [Kerberos Relay via DNS CNAME Abuse (CVE-2026-20929)](TRENDS.md#id-identity-kerberos-relay-dns-cname-001) | seed | [2026-10-03 — CrowdStrike](https://www.crowdstrike.com/en-us/blog/detecting-kerberos-relay-attack-via-dns-cname-abuse/) — CVSS 7.5, DNS CNAME spoofing to ADCS cert theft |
| [CertiGhost AD CS "Chase" DC-Impersonation (CVE-2026-54121)](TRENDS.md#id-ad-certighost-001) | dormant | [2026-08-06 — Kudelski Security](https://kudelskisecurity.com/) — unvalidated chase target DC impersonation, patched Jul 2026 |
| [WSUS / Windows Update Server RCE](TRENDS.md#id-initial-access-wsus-001) | dormant | [2026-08-05 — SpecterOps](https://specterops.io/blog/2026/08/05/turning-enterprise-update-servers-into-backdoor-factories-part-1/) — unsafe deserialization + input validation flaws, 50+ orgs compromised |
| [Entra ID SyncJacking & Conditional Access Bypass](TRENDS.md#id-identity-entra-syncjacking-001) | dormant | [2026-08-06 — Semperis](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) — hard-matching abuse to global admin takeover |
| [SonicWall SMA1000 SSRF + RCE (CVE-2026-15409/15410)](TRENDS.md#id-initial-access-sonicwall-sma-001) | dormant | [2026-08-17 — Tenable](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) — CVSS 10.0 SSRF→RCE chain, active wild exploitation |
| [Oracle PeopleSoft Unsafe Deserialization RCE (CVE-2026-35273)](TRENDS.md#id-initial-access-oracle-peoplesoft-001) | dormant | [2026-08-17 — SentinelOne](https://www.sentinelone.com/vulnerability-database/cve-2026-35273/) — CVSS 9.8, /PSEMHUB endpoint, UNC6240 exploitation |
| [Nightmare Eclipse Windows Defender/BitLocker Zero-Day Research](TRENDS.md#id-evasion-nightmare-eclipse-001) | dormant | [2026-07-31 — ProjectNightcrawler](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) — 9 PoCs targeting Defender, BitLocker, kernel drivers; deliberately post-Patch-Tuesday timing |

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

- [**Daily: 2026-10-12**](reports/2026-10-12.md) — Continuity check post-W42 weekly, all trends stable
- [**Daily: 2026-10-11**](reports/2026-10-11.md) — PaperCut RCE promoted to seed trend (3+ sources), 5 total seed trends
- [**Daily: 2026-10-10**](reports/2026-10-10.md) — PaperCut RCE identified, 4 seed trends stable
- [**Weekly: 2026-W42**](reports/weekly/2026-W42.md) — Recalibration Oct 6–12, all trends held
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

*Last updated: 2026-10-12 UTC. Coverage: 23/24 sources (21 opened, 2 degraded, 1 intake-only).*

---

## Observation queue

[28 below-bar items](TRENDS.md#observation_queue) — awaiting 2nd independent source or burndown by age (checked 2026-08-20).

**Multi-vendor escalations:**
- **Microsoft August 2026 Patch Tuesday** (400+ CVEs, 3 zero-days; multi-org analyst coverage; on-axis: Azure Service Bus RCE, Azure SQL EoP, Windows AD CS RCE)
- **TeamCity CVE-2026-63077** (6 independent sources; CISA KEV; watch for attack-chain research)
- **Langflow CVE-2026-9198** (5 independent sources; CISA KEV; watch for post-compromise analysis)

**Single-vendor signals (awaiting corroboration):**
- **Citrix NetScaler CVE-2026-8452** (watchTowr Aug 14; pre-auth SAML RCE; queued for secondary)
- **ARM64 Stack Obfuscation Research** (MDSec Aug 15; EDR evasion on Apple Silicon)
- **Cisco Firewall CVE-2026-20349** (unauthenticated RCE; awaiting PoC/secondary analysis)
- **GHSA Advisory Stream** (13+ HIGH-severity CVEs, Aug 14–15; all single-vendor)

---

## Resources

- **[TRENDS.md](TRENDS.md)** — full ledger with evidence & stage history
- **[Observation queue](TRENDS.md#observation_queue)** — 28 items awaiting promotion or age-based burndown
- **[Strategy notes](TRENDS.md#strategy_notes)** — coverage decisions & calibration history
- **[Reports](reports/)** — daily & weekly recalibrations
- **[Latest daily](reports/2026-08-20.md)** — 2026-08-20
- **[Latest weekly](reports/weekly/2026-W33.md)** — 2026-W33
- **[Source registry](SOURCES.md)** — primary feeds & discovery topics
- **[Source rotation log](logs/source_rotation.md)** — session-by-session coverage tracking

---

*Red Team Radar is a tracker of published offensive-security artifacts and situational awareness signals. Pointers only; no operational payloads or step-by-step attack procedures.*
