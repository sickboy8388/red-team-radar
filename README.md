# Red Team Radar

Persistent autonomous tracker of the offensive-security frontier — tools, releases, techniques, research, advisories. Curated for red team operators. This is *situational awareness*, not a runbook.

![trends](https://img.shields.io/badge/trends-10-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-3-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--10--08-2f9e44?style=flat-square)

---

## Since last scan (2026-10-08)

**Atlassian CVE escalates to 2-vendor coverage; Citrix DoS variant identified; N-able receives new weaponization evidence. 4 seed trends stable, 6 dormant unchanged.**

- **CVE-2026-21589 (Atlassian Jira/Confluence pre-auth file read) escalates to 2 vendors** — [watchTowr Labs, Oct 6](https://labs.watchtowr.com/you-wont-hear-about-these-even-in-myths-atlassian-jira-confluence-and-more-pre-auth-arbitrary-file-read-cve-2026-21589/) + [Rapid7, Oct 5](https://www.rapid7.com/blog/post/cve-2026-21589-critical-unauthenticated-arbitrary-file-access-in-atlassian-products/) — affects 8 Atlassian Data Center products; CVSS 10.0; approaching 3-vendor threshold for trend bar (1 more needed).
- **CVE-2026-88779 (Citrix NetScaler Memory Overflow DoS)** — [watchTowr Labs](https://labs.watchtowr.com/citrix-netscaler-adc-and-citrix-netscaler-gateway-improper-restriction-of-operations-within-the-bounds-of-a-memory-buffer-vulnerability-cve-2026-88779/), [CISA KEV Oct 4](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) — related to existing CVE-2026-88771/72 RCE trend but separate DoS vector; SAML-auth-only scope; queued pending relationship clarification.
- **N-able CVE-2026-86218 receives weaponization evidence** — [Rapid7 Metasploit Module](https://github.com/rapid7/metasploit-framework/) — confirms active exploitation tooling; does not advance trend stage (secondary research).
- **4 seed trends remain seed.** N-able (CVSS 10), Citrix NetScaler RCE (CVSS 9.5×2, zero-days), FortiMail (CVSS 9.8, active exploitation), Kerberos DNS CNAME (CVSS 7.5). No new evidence since Oct 3.
- **Source health:** 13/13 primary blogs checked (all HTTP 200). Tool releases unchanged (Sliver v1.7.7 Sep 3, BloodHound v9.6.0 Aug 18). Daily report: [2026-10-08](reports/2026-10-08.md).

---

## Trends

**seed 4 · dormant 6**

| Trend | Stage | Latest Signal |
|-------|-------|---|
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

- [**Daily: 2026-10-08**](reports/2026-10-08.md) — Atlassian CVE escalates to 2-vendor, Citrix DoS variant queued, N-able receives weaponization evidence
- [**Daily: 2026-10-07**](reports/2026-10-07.md) — Quiet day; 1 new CVE queued, 4 seed trends stable
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

*Last updated: 2026-10-08*

---

## Observation queue

[3 below-bar items](TRENDS.md#observation_queue) — 2–3 items awaiting 2nd independent source or trend bar assessment.

**Escalating (multi-vendor signals):**
- **CVE-2026-21589 (Atlassian)** (watchTowr + Rapid7 = 2 vendors; needs 1 more for trend bar)

**New findings (single-vendor, pending verification):**
- **CVE-2026-88779 (Citrix NetScaler DoS)** (watchTowr + CISA KEV; relationship to CVE-2026-88771/72 pending)
- **CVE-2026-94127 (F5 BIG-IP)** (watchTowr; awaiting secondary vendor coverage)

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
