# Red Team Radar

Autonomous tracker of the offensive-security frontier — tools, releases, techniques, research and advisories. Curated for red team operators.

![trends](https://img.shields.io/badge/trends-14-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-26-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--10--30-2f9e44?style=flat-square)

---

## Since 2026-10-27

- **BloodHound CE v9.9.0 released (Oct 26)** — Major version bump from v9.6.0 (Aug 18). Check release notes for feature additions. [BloodHound v9.9.0](https://github.com/SpecterOps/BloodHound/releases/tag/v9.9.0-ce)
- **15+ new CRITICAL CVEs (Oct 29–30)** — GHSA advisories: ServiceNow sandbox escape, IBM Langflow RCE, Progress WS_FTP Server 5-flaw cluster, Zoho Flow object injection, multiple PHP CMS vulnerabilities. All single-vendor at this hour; monitoring for independent corroboration. [GHSA](https://github.com/advisories)
- **No new trends seeded.** All existing seed/dormant trends stable with no new multi-vendor signals Oct 27–30.
- **observation_queue stable at ~20 items.** Oldest entries (Oct 14–15, 15–16 days old) approaching 21-day burndown line (Nov 4–5).
- **Full primary sweep completed.** 13/13 blogs + GHSA + NVD + discovery topics + community pulse. No access blockers; egress open.

---

## Trends

**seed 3 · dormant 11**

| Trend | Stage | Latest Signal |
|-------|-------|---|
| [PHP2Shell RCE (CVE-2026-109618/109619)](TRENDS.md#id-web-php2shell-001--php2shell-rce-cve-2026-109618109619) | seed | [2026-10-22](https://unit42.paloaltonetworks.com/cve-2026-109618-cve-2026-109619-php2shell) |
| [PaperCut NG/MF Pre-Auth RCE Chain (CVE-2026-82077/82078/81578)](TRENDS.md#id-initial-access-papercut-001--papercut-ngmf-pre-auth-rce-chain-cve-2026-820778207881578) | seed | [2026-10-11](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [REF8801 Apex Accelerator Malicious npm Packages](TRENDS.md#id-initial-access-apex-accelerator-001--ref8801-apex-accelerator-malicious-npm-packages) | seed | [2026-10-12](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages) |
| [CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)](TRENDS.md#id-ad-certighost-001--certighost-ad-cs-chase-dc-impersonation-cve-2026-54121) | dormant | [2026-08-06](https://github.com/advisories/GHSA-64qv-2ffq-h4w6) |
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](TRENDS.md#id-initial-access-nable-ncentral-001--n-able-n-central-pre-auth-rce-cve-2026-86218) | dormant | [2026-10-03](https://arcticwolf.com/resources/blog/cve-2026-86218/) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](TRENDS.md#id-initial-access-citrix-netscaler-001--citrix-netscaler-adcgateway-pre-auth-rce-cve-2026-8877188772) | dormant | [2026-10-03](https://labs.watchtowr.com/oh-look-the-foot-gun-went-off-again-citrix-netscaler-preauth-command-injection-cve-2026-88771/) |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](TRENDS.md#id-initial-access-fortimail-001--fortinet-fortimail-pre-auth-arbitrary-file-write-cve-2026-104286) | dormant | [2026-10-03](https://www.securityweek.com/exploited-fortinet-fortimail-zero-day-calls-for-urgent-action/) |
| [Kerberos Relay via DNS CNAME Abuse (CVE-2026-20929)](TRENDS.md#id-identity-kerberos-relay-dns-cname-001--kerberos-relay-via-dns-cname-abuse-cve-2026-20929) | dormant | [2026-10-03](https://www.crowdstrike.com/en-us/blog/detecting-kerberos-relay-attack-via-dns-cname-abuse/) |
| [WSUS / Windows Update Server RCE exploitation (CVE-2025-59287, CVE-2026-20856)](TRENDS.md#id-initial-access-wsus-001--wsus--windows-update-server-rce-exploitation) | dormant | [2026-08-05](https://specterops.io/blog/2026/08/05/turning-enterprise-update-servers-into-backdoor-factories-part-1/) |
| [Nightmare Eclipse: Windows Defender/BitLocker zero-day research campaign](TRENDS.md#id-evasion-nightmare-eclipse-001--nightmare-eclipse-windows-defenderbitlocker-zero-day-research-campaign) | dormant | [2026-07-31](https://www.theregister.com/) |
| [SonicWall SMA1000 SSRF + RCE exploitation (CVE-2026-15409/15410)](TRENDS.md#id-initial-access-sonicwall-sma-001--sonicwall-sma1000-ssrf--rce-exploitation-cve-2026-154091541) | dormant | [2026-08-17](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) |
| [Oracle PeopleSoft Unsafe Deserialization RCE (CVE-2026-35273)](TRENDS.md#id-initial-access-oracle-peoplesoft-001--oracle-peoplesoft-unsafe-deserialization-rce-cve-2026-35273) | dormant | [2026-08-17](https://www.sentinelone.com/vulnerability-database/cve-2026-35273/) |
| [Entra ID SyncJacking & Conditional Access Bypass](TRENDS.md#id-identity-entra-syncjacking-001--entra-id-syncjacking--conditional-access-bypass) | dormant | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) |

---

## Tools & releases

- **[BloodHound](https://github.com/SpecterOps/BloodHound)** — v9.9.0-ce (Oct 26) · Active Directory attack-path analysis and lateral movement mapping.
- **[Sliver](https://github.com/BishopFox/sliver)** — v1.7.8 (Oct 3) · Cross-platform C2 framework, implant-centric design.
- **[NetExec](https://github.com/Pennyw0rth/NetExec)** — v1.6.0+ (Aug–Sep 2026) · Active Directory exploitation and recon tool.
- **[Certipy](https://github.com/ly4k/Certipy)** — Latest release Sep 2026 · ADCS enumeration and exploitation toolkit.
- **[Nuclei](https://github.com/projectdiscovery/nuclei)** — v3.11.0+ (Jul 2026) · Vulnerability scanner; unsigned JavaScript-protocol templates now rejected.
- **[impacket](https://github.com/fortra/impacket)** — v0.9.20+ (Aug 2026) · SMB/Kerberos/LDAP/RPC low-level protocol library.

---

## Worth studying

- **[Return of the Cookie Monster (SpecterOps, 2026-08-13)](https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/)** — Authenticated browser session compromise via Chrome DevTools Protocol (CDP); cookie theft and authenticated browser abuse tradecraft.
- **[Attack of The Extensions (SpecterOps, 2026-08-13)](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/)** — Chromium extensions as persistent C2 infrastructure; silently install extensions to serve as command-and-control.
- **[CRLF-Powered Desync Attacks: Beheading HTTP Streams (PortSwigger Research, 2026-08-05)](https://portswigger.net/research/crlf-powered-desync-attacks)** — HTTP/2-specific desynchronization attack via CRLF injection in header values; request smuggling and cache poisoning.
- **[ConfigManBearPig 2.0 (SpecterOps, 2026-08-03)](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/)** — Python rewrite of SCCM/Microsoft Configuration Manager attack-collection tool covering 30+ techniques; 9 complete takeover paths.
- **[Process Parameter Poisoning "P3" (SensePost, 2026-07-06)](https://sensepost.com/blog/2026/process-parameter-poisoning/)** — Code-injection technique using legitimate process-startup fields + `CreateProcessW` thread-context manipulation; reduces injection footprint against major EDRs.

---

---

## Links

- **[TRENDS.md](TRENDS.md)** — Full ledger: all trends, evidence, dormancy tracking, blockers.
- **[Watchlist](TRENDS.md#observation_queue)** — Below-bar / unverified signals (cap ~25).
- **[Daily reports](reports/)** — Scan summaries and major findings (newest first).
- **[Latest daily](reports/2026-10-30.md)** — 2026-10-30.
- **[Latest weekly](reports/weekly/)** — Recalibration reports.
- **[Source registry](SOURCES.md)** — Primary feeds, discovery topics, community pulse.

---

_Autonomous radar. [AGENTS.md](AGENTS.md) · [Schedule & procedures](routines/)_
