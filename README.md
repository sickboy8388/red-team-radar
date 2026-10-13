# Red Team Radar

Persistent autonomous tracker of the offensive-security frontier — tools, releases, techniques, research, advisories. Curated for red team operators. This is *situational awareness*, not a runbook.

![trends](https://img.shields.io/badge/trends-13-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-2-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--10--13-2f9e44?style=flat-square)

---

## Since last scan (2026-10-13)

**2 new seed trends seeded; 5 existing seed stable; 6 dormant unchanged. Two critical CVSS 10.0 vulnerabilities with active exploitation signals identified Oct 12–13.**

- **Microsoft Entra ID RCE (CVE-2026-69836, CVSS 10.0).** Unauthenticated remote code execution via unsafe deserialization in cloud identity service. ≥6 independent sources (Help Net Security, The Register, Penligent, The Hacker News, Cybersecurity News, SecurityWeek). Identity-axis initial access vector affecting all Entra ID deployments globally. [Help Net Security](https://www.helpnetsecurity.com/2026/10/13/microsoft-entra-id-cve-2026-69836/)

- **Cisco FMC RCE (CVE-2026-20131, CVSS 10.0).** Unauthenticated RCE via unsafe Java deserialization in Firewall Management Center. ≥4 independent sources (Horizon3, Zscaler, Cisco, NVD). Active wild exploitation; affects all FMC and SCC deployments. Infrastructure/network targeting. [Horizon3.ai](https://horizon3.ai/cve-2026-20131/)

- **5 existing seed trends hold (N-able, Citrix, FortiMail, Kerberos relay, PaperCut).** No new evidence Oct 12–13; all stable.

- **6 dormant trends unchanged.** CertiGhost, WSUS, Entra SyncJacking, SonicWall SMA1000, Oracle PeopleSoft, Nightmare Eclipse all quiet (≥21 days).

- **Observation queue: 2 single-vendor pending corroboration.** Atlassian CVE-2026-21589 (pre-auth file read, 7 days old), F5 CVE-2026-94127 (heap overflow RCE, 10 days old). Threshold for trend bar: ≥3 independent sources + concrete artifact.

---

## Trends

**seed 7 · dormant 6**

| Trend | Stage | Latest Signal |
|-------|-------|---|
| [Microsoft Entra ID RCE (CVE-2026-69836)](TRENDS.md#id-identity-entra-rce-001--microsoft-entra-id-rce-via-deserialization-cve-2026-69836) | seed | [2026-10-13 — Help Net Security](https://www.helpnetsecurity.com/2026/10/13/microsoft-entra-id-cve-2026-69836/) — CVSS 10.0, deserialization RCE, cloud identity initial access |
| [Cisco FMC RCE (CVE-2026-20131)](TRENDS.md#id-initial-access-cisco-fmc-001--cisco-fmc-rce-via-unsafe-deserialization-cve-2026-20131) | seed | [2026-10-13 — Horizon3.ai](https://horizon3.ai/cve-2026-20131/) — CVSS 10.0, Java deserialization, active wild exploitation, infrastructure targeting |
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

- [**Daily: 2026-10-13**](reports/2026-10-13.md) — 2 new seed trends seeded (Entra RCE, Cisco FMC); 7 total seed trends
- [**Daily: 2026-10-11**](reports/2026-10-11.md) — PaperCut RCE promoted to seed trend (3+ sources), 5 total seed trends
- [**Daily: 2026-10-10**](reports/2026-10-10.md) — PaperCut RCE identified, 4 seed trends stable
- [**All reports**](reports/) — Full daily & weekly archive

---

## Reference

- **[TRENDS.md](TRENDS.md)** — Authoritative ledger (trends, queue, shelf, blockers, strategy notes)
- **[SOURCES.md](SOURCES.md)** — Primary feeds & discovery topics seed list
- **[AGENTS.md](AGENTS.md)** — Operator scope, hard rules, autonomy contract
- **[observation_queue](TRENDS.md#observation_queue)** — Below-bar signals (~2 items)

---

*Red Team Radar* is a situational-awareness tracker: it points to published artifacts and summarizes their offensive significance. It is not a runbook. Never paste operational payloads, exploit code, or step-by-step attack procedures here; link the primary source instead.

Track, don't reproduce. Evidence line = date—primary URL—one line of context. Max 10 per trend. Published/disclosed work only; no live targets or non-public exploits.

*Last updated: 2026-10-13*
