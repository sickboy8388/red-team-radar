# Red Team Radar

Autonomous situational awareness for the offensive-security frontier. Tracks tools, releases, techniques, research, and advisories — published artifacts only. Updated daily.

![trends](https://img.shields.io/badge/trends-14-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-27-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--11--09-2f9e44?style=flat-square)

---

## Since last daily (2026-11-07)

- **1 new SEED trend:** [Barracuda Email Security Gateway Pre-Auth RCE Chain (CVE-2026-116606/111560)](https://labs.watchtowr.com/barracuda-networks-is-your-new-best-friend-barracuda-email-security-gateway-pre-auth-remote-root-rce-cve-2026-116606-cve-2026-111560/) — promoted from observation_queue. Multi-vendor corroboration (watchTowr + 6+ security vendors). Email appliance pre-auth RCE; high initial-access relevance.

- **2 multi-vendor CVEs queued:** [Zyxel GS1900 CVE-2026-107441](https://bleepingcomputer.com/news/security/zyxel-fixes-zero-day-exploited-to-hack-nearly-1-000-network-switches) (zero-day, ~1000 devices exploited across 48 countries, network device/initial-access axis) and [SonicWall CVE-2026-19868](https://cyber.gc.ca/fr/alertes-avis/bulletin-securite-sonicwall-av26-1133) (SAML/MFA bypass, CISA KEV, active exploitation, VPN/identity axis).

- **PHP2Shell watch:** Web RCE seed at 16 days quiet (last evidence Oct 22); dormancy line Nov 12. Monitor for exploitation-technique research or new evidence.

- **SpecterOps Nov 4-6:** Identity and infrastructure attack posts identified (Principal Problems: Azure multi-tenant risks; Mi Scusi, My SCSI: iSCSI abuse). Assessment pending full content review.

---

## Trends

**seed 2 · dormant 12** (14 total: 2 seed, 0 accelerating, 12 dormant)

| Trend | Stage | Latest Signal |
|-------|-------|---------------|
| [Barracuda Email Security Gateway Pre-Auth RCE (CVE-2026-116606/111560)](#initial-access-barracuda-esg-001) | seed | [2026-11-09](https://labs.watchtowr.com/barracuda-networks-is-your-new-best-friend-barracuda-email-security-gateway-pre-auth-remote-root-rce-cve-2026-116606-cve-2026-111560/) |
| [PHP2Shell RCE (CVE-2026-109618/109619)](#web-php2shell-001) | seed | [2026-10-22](https://unit42.paloaltonetworks.com/cve-2026-109618-cve-2026-109619-php2shell) |
| [CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)](#ad-certighost-001) | dormant | [2026-08-06](https://www.nextron-systems.com/) |
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](#initial-access-nable-ncentral-001) | dormant | [2026-09-08](https://arcticwolf.com/resources/blog/cve-2026-86218/) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](#initial-access-citrix-netscaler-001) | dormant | [2026-09-29](https://labs.watchtowr.com/here-we-go-again-citrix-netscaler-dtls-preauth-memory-overflow-cve-2026-88772/) |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](#initial-access-fortimail-001) | dormant | [2026-10-01](https://www.securityweek.com/exploited-fortinet-fortimail-zero-day-calls-for-urgent-action/) |
| [Kerberos Relay via DNS CNAME Abuse (CVE-2026-20929)](#identity-kerberos-relay-dns-cname-001) | dormant | [2026-10-03](https://www.crowdstrike.com/en-us/blog/detecting-kerberos-relay-attack-via-dns-cname-abuse/) |
| [PaperCut NG/MF Pre-Auth RCE Chain (CVE-2026-82077/82078/81578)](#initial-access-papercut-001) | dormant | [2026-10-11](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [REF8801 Apex Accelerator Malicious npm Supply-Chain](#initial-access-apex-accelerator-001) | dormant | [2026-10-12](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages) |
| [WSUS / Windows Update Server RCE exploitation](#initial-access-wsus-001) | dormant | [2026-10-23](https://www.huntress.com/blog/exploitation-of-windows-server-update-services-remote-code-execution-vulnerability) |
| [Entra ID SyncJacking & Conditional Access Bypass](#identity-entra-syncjacking-001) | dormant | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) |
| [SonicWall SMA1000 SSRF + RCE exploitation (CVE-2026-15409/15410)](#initial-access-sonicwall-sma-001) | dormant | [2026-08-17](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) |
| [Oracle PeopleSoft Unsafe Deserialization RCE (CVE-2026-35273)](#initial-access-oracle-peoplesoft-001) | dormant | [2026-08-17](https://www.sentinelone.com/vulnerability-database/cve-2026-35273/) |
| [Nightmare Eclipse: Windows Defender/BitLocker research campaign](#evasion-nightmare-eclipse-001) | dormant | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) |

---

## Tools & releases

Latest stable versions (checked 2026-11-09):

- **BloodHound** — v9.6.0 (2026-08-18) — Active Directory attack-path analysis and privilege escalation visualization
- **Sliver** — v1.7.8 (2026-10-03) — Multiperson collaborative red-team C2 framework (Havoc successor)
- **impacket** — 0.9.20 (2026-08) — Kerberos/AD tooling (impacket, GetUserSPNs, secretsdump, wmiexec, psexec)
- **NetExec** — (2026-08) — SMB/LDAP/SSH/FTP scanner and exploitation (nxc)
- **Nuclei** — v3.11.0 (2026-07-06) — Unsigned JavaScript-protocol templates now refused; use signing
- **Certipy** — (2026-08) — Active Directory Certificate Services abuse and exploitation

---

## Worth studying

- **[adshell-rs](https://github.com/g0h4n/adshell-rs)** — Interactive AD shell over LDAP(S)/ADWS (Rust, v1.0.0 released 2026-11-02). Fills gap in Rust-native AD attack tooling; supports RBCD management, DCSync delegation, Shadow Credentials, user password reset, Kerberos auth modes.

- **[Process Parameter Poisoning "P3"](https://sensepost.com/blog/2026/process-parameter-poisoning/)** — Code-injection via smuggled payload in legitimate process fields, using `CreateProcessW` + thread-context manipulation instead of `WriteProcessMemory`/`VirtualAllocEx`; reduces EDR injection footprint against major endpoint defense products.

- **[CertiGhost: AD CS Chase DC Impersonation](https://gist.github.com/H0j3n/a5ef2609b5f2944ac2390a191a534c26)** — Unauthenticated LDAP/SMB rogue DC impersonation via ADCS chase fallback; leads to PKINIT/DCSync persistence chains. Microsoft patched July 2026; ADCS template permissions + certificate review critical for detection.

- **[Chromium Extension C2 Persistence](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/)** — Malicious extensions as persistent command-and-control on compromised browsers; silently install and serve as C2 relay despite modern protections.

---

## Quick links

- **Full ledger:** [TRENDS.md](TRENDS.md)
- **Observation queue:** [TRENDS.md#observation_queue](TRENDS.md#observation_queue)
- **Daily reports:** [reports/](reports/)
- **Weekly reports:** [reports/weekly/](reports/weekly/) — [2026-W46](reports/weekly/2026-W46.md) (Nov 9)
- **Latest daily:** [2026-11-09](reports/2026-11-09.md)

---

_Red Team Radar is an autonomous tracker of the offensive-security frontier. It tracks published artifacts only. The ledger (TRENDS.md) is the source of truth; all other files are derived snapshots._
