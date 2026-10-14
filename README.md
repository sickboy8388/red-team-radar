# Red Team Radar

Persistent autonomous tracker of the offensive-security frontier — tools, releases, techniques, research, advisories. Curated for red team operators. This is *situational awareness*, not a runbook.

![trends](https://img.shields.io/badge/trends-13-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-5-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--10--14-2f9e44?style=flat-square)

---

## Since last scan (2026-10-14)

**New seed trend: REF8801 Apex Accelerator malicious npm supply-chain campaign (3+ independent sources). 1 new research post from Elastic (Oct 12). 3 new single-vendor CVEs identified. Primary blogs quiet; 5 existing seed trends stable, 6 dormant unchanged.**

- **Apex Accelerator REF8801 npm Campaign — NEW SEED TREND.** Web3 venture accelerator impersonation targeting cryptocurrency founders. Delivers malicious npm packages (@apexacc/cli, @apexacc/audit) with cross-platform loaders (Windows UAC bypass, macOS CloudSyncD backdoor). Concrete artifacts: 2 npm packages, 8+ executables, 7+ C&C domains. 3 independent sources verified: Elastic (Oct 12), SafeDep, Jamf. High initial-access relevance for fintech/Web3 red teams. [Elastic](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages)

- **5 seed trends hold (Oct 3–11 seeding, no new evidence Oct 12–14).** N-able N-central (CVSS 10, CISA Sep 8), Citrix NetScaler (CVSS 9.5×2, zero-days, pre-disclosure exploitation), Fortinet FortiMail (CVSS 9.8, active wild exploitation, CISA Oct 1), Kerberos DNS CNAME (CVSS 7.5, persistent ADCS cert theft), PaperCut NG/MF (CVSS 8.8/9.4, multiple pre-auth RCE vectors, CISA KEV, active exploitation).

- **6 dormant trends unchanged.** CertiGhost, WSUS, Entra SyncJacking, SonicWall SMA1000, Oracle PeopleSoft, Nightmare Eclipse all quiet (≥21 days quiet); no re-escalation signals.

- **Observation queue: 5 single-vendor items pending corroboration.** 3 new Oct 14: Collabora Online RCE (CVSS 9.2, active exploitation), Abandoned Cart Pro SQLi (CVSS 9.8, PoC admin escalation), TeamPlus code injection (CVSS 8.6). 2 prior: Atlassian file read, F5 BIG-IP heap-overflow. Threshold for trend: ≥3 independent sources + artifact.

- **1 emerging trend holds.** ADCS abuse & escalation (emerging stage, under 21-day quiet watch).

---

## Trends

**seed 6 · emerging 1 · dormant 6**

| Trend | Stage | Latest Signal |
|-------|-------|---|
| [REF8801 Apex Accelerator npm Campaign](TRENDS.md#id-initial-access-apex-accelerator-001) | seed | [2026-10-12 — Elastic](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages) — malicious @apexacc/cli + @apexacc/audit packages, cross-platform loaders, Web3/crypto ecosystem targeting |
| [PaperCut NG/MF Pre-Auth RCE (CVE-2026-82077/82078/81578)](TRENDS.md#id-initial-access-papercut-001) | seed | [2026-10-09 — watchTowr](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) — pre-auth RCE chain, patch bypasses, print management infrastructure |
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](TRENDS.md#id-initial-access-nable-ncentral-001) | seed | [2026-10-03 — Arctic Wolf](https://arcticwolf.com/resources/blog/cve-2026-86218/) — CVSS 10.0, static code injection, CISA KEV Sep 8 |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](TRENDS.md#id-initial-access-citrix-netscaler-001) | seed | [2026-10-03 — watchTowr Labs](https://labs.watchtowr.com/oh-look-the-foot-gun-went-off-again-citrix-netscaler-preauth-command-injection-cve-2026-88771/) — CVSS 9.5×2, zero-days, active exploitation |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](TRENDS.md#id-initial-access-fortimail-001) | seed | [2026-10-03 — SecurityWeek](https://www.securityweek.com/exploited-fortinet-fortimail-zero-day-calls-for-urgent-action/) — CVSS 9.8, path traversal, active wild exploitation, CISA KEV Oct 1 |
| [Kerberos Relay via DNS CNAME Abuse (CVE-2026-20929)](TRENDS.md#id-identity-kerberos-relay-dns-cname-001) | seed | [2026-10-03 — CrowdStrike](https://www.crowdstrike.com/en-us/blog/detecting-kerberos-relay-attack-via-dns-cname-abuse/) — CVSS 7.5, DNS CNAME spoofing to ADCS cert theft, residual HTTP/LDAP/SMB vulnerability |
| [ADCS abuse & escalation](TRENDS.md#id-ad-adcs-001) | emerging | [Recent — ongoing research] — ESC1–16 template misconfiguration + CA-side trust bugs |
| [CertiGhost AD CS "Chase" DC-Impersonation (CVE-2026-54121)](TRENDS.md#id-ad-certighost-001) | dormant | [2026-08-06 — Kudelski Security](https://kudelskisecurity.com/) — unvalidated chase target, DC impersonation, patched Jul 2026 |
| [WSUS / Windows Update Server RCE](TRENDS.md#id-initial-access-wsus-001) | dormant | [2026-08-05 — SpecterOps](https://specterops.io/blog/2026/08/05/turning-enterprise-update-servers-into-backdoor-factories-part-1/) — unsafe deserialization, 50+ organizations compromised |
| [Entra ID SyncJacking & Conditional Access Bypass](TRENDS.md#id-identity-entra-syncjacking-001) | dormant | [2026-08-06 — Semperis](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) — hard-matching abuse to Global Admin takeover |
| [SonicWall SMA1000 SSRF + RCE (CVE-2026-15409/15410)](TRENDS.md#id-initial-access-sonicwall-sma-001) | dormant | [2026-08-17 — Tenable](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) — CVSS 10.0 SSRF→RCE chain, active wild exploitation |
| [Oracle PeopleSoft Unsafe Deserialization RCE (CVE-2026-35273)](TRENDS.md#id-initial-access-oracle-peoplesoft-001) | dormant | [2026-08-17 — SentinelOne](https://www.sentinelone.com/vulnerability-database/cve-2026-35273/) — CVSS 9.8, /PSEMHUB endpoint, UNC6240 exploitation |
| [Nightmare Eclipse Windows Defender/BitLocker Zero-Day Research](TRENDS.md#id-evasion-nightmare-eclipse-001) | dormant | [2026-07-31 — ProjectNightcrawler](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) — 9 PoCs targeting Defender, BitLocker, kernel drivers |

---

## Tools & Releases

- **Mythic** — **v4.0.0-rc7 (Oct 11, 2026)** — NEW release; command & control framework
- **Sliver C2** — v1.7.8 (Oct 3, 2026): OPFOR CNA BOF scripting, Windows shell improvements, tunnel hardening
- **BloodHound Community Edition** — v9.8.0-rc6 (Oct 6, 2026): XSS mitigations, dependency hardening
- **impacket** — 0.13.1 (May 15, 2026): Python impacket library for AD/network protocols
- **Nuclei** — v3.11.1 (Aug 8, 2026): Vulnerability scanner + YAML templates
- **EDR Evasion tools** — Shroud, DripLoader, EDRSandBlast, Phantom-Evasion; most updated Jan–Jul 2026
- **NetExec, Certipy** — no new releases since Feb–Jun 2026

---

## Worth Studying

- [**Auditing the Auditor: Apex Accelerator**](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages) — REF8801 campaign, malicious npm supply-chain, Web3 targeting, cross-platform C&C
- [**Attack of The Extensions**](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/) — Chromium extensions as persistent C2 infrastructure; silent installation + C2-on-compromised-systems tradecraft
- [**Return of the Cookie Monster**](https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/) — Chrome DevTools Protocol (CDP) authenticated session hijacking
- [**Process Parameter Poisoning P3**](https://sensepost.com/blog/2026/process-parameter-poisoning/) — Windows injection via process startup parameters; evades 4 major EDRs
- [**ConfigManBearPig 2.0**](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/) — SCCM/Configuration Manager attack toolkit (30+ techniques, 9 complete takeover paths)
- [**CRLF-Powered Desync Attacks**](https://portswigger.net/research/crlf-powered-desync-attacks) — HTTP/2-specific desynchronization; request smuggling + cache poisoning

[Full study shelf →](TRENDS.md#study_shelf)

---

## Latest Reports

- [**Daily: 2026-10-14**](reports/2026-10-14.md) — Apex Accelerator REF8801 npm campaign seeded; 3 single-vendor CVEs queued; 6 seed trends
- [**Daily: 2026-10-11**](reports/2026-10-11.md) — PaperCut RCE promoted to seed trend (3+ sources), 5 total seed trends
- [**All reports**](reports/) — Full daily & weekly archive

---

## Reference

- [**Full ledger** (TRENDS.md)](TRENDS.md)
- [**Observation queue**](TRENDS.md#observation_queue) — 5 single-vendor items pending corroboration
- [**Strategy notes**](TRENDS.md#strategy_notes)
- [**Sources** (SOURCES.md)](SOURCES.md) — 18 primary feeds + discovery topics
