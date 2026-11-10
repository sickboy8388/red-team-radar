# Red Team Radar

Persistent state for **Red Team Radar**, an autonomous tracker of the offensive-security frontier — tools, releases, techniques, research and advisories — curated for red team operators. The [TRENDS.md](TRENDS.md) ledger is the single source of truth; this README and reports are derived snapshots.

![trends](https://img.shields.io/badge/trends-14-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-32-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--11--10-2f9e44?style=flat-square)

---

## Since last scan (2026-11-10)

- **CVE-2026-116879** (Apache OFBiz RCE, CVSS 9.9 CRITICAL) — https://github.com/advisories — Unauthenticated remote code execution via unsafe deserialization; queued for secondary vendor analysis.

- **BloodHound v9.10.0-rc1** — https://github.com/SpecterOps/BloodHound/releases — Pre-release with UI overhauls, UUID-based IDs, Prometheus metrics, dependency hardening.

- **Kubernetes kubelet CVE-2026-122410** (CVSS 8.2 HIGH) — https://github.com/advisories — Insecure symlink handling allows privilege escalation on node; cloud/K8s axis.

- **AWS Lambda & OpenStack CVEs** — https://github.com/advisories — CVE-2026-121340 (cache poisoning, CVSS 8.3) and CVE-2026-122501 (priv escalation, CVSS 7.8); cloud platform privilege escalation patterns.

- **Quiet operational period:** 9+ days without new on-axis primary research posts; observation queue at 32 items (over 25-item target); burndown needed next run.

---

## Trends

**seed 1 · dormant 12** (13 total)

| Trend | Stage | Latest Signal |
|-------|-------|---|
| [PHP2Shell RCE (CVE-2026-109618/109619)](TRENDS.md#id-web-php2shell-001--php2shell-rce-cve-2026-109618109619) | seed | [2026-10-22](https://unit42.paloaltonetworks.com/cve-2026-109618-cve-2026-109619-php2shell) — 17 days quiet |
| [CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)](TRENDS.md#id-ad-certighost-001--certighost-ad-cs-chase-dc-impersonation-cve-2026-54121) | dormant | [2026-08-06](https://www.nextron-systems.com/) |
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](TRENDS.md#id-initial-access-nable-ncentral-001--n-able-n-central-pre-auth-rce-cve-2026-86218) | dormant | [2026-10-03](https://arcticwolf.com/resources/blog/cve-2026-86218/) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](TRENDS.md#id-initial-access-citrix-netscaler-001--citrix-netscaler-adcgateway-pre-auth-rce-cve-2026-8877188772) | dormant | [2026-10-03](https://labs.watchtowr.com/oh-look-the-foot-gun-went-off-again-citrix-netscaler-preauth-command-injection-cve-2026-88771/) |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](TRENDS.md#id-initial-access-fortimail-001--fortinet-fortimail-pre-auth-arbitrary-file-write-cve-2026-104286) | dormant | [2026-10-03](https://www.securityweek.com/exploited-fortinet-fortimail-zero-day-calls-for-urgent-action/) |
| [Kerberos Relay via DNS CNAME Abuse (CVE-2026-20929)](TRENDS.md#id-identity-kerberos-relay-dns-cname-001--kerberos-relay-via-dns-cname-abuse-cve-2026-20929) | dormant | [2026-10-03](https://www.crowdstrike.com/en-us/blog/detecting-kerberos-relay-attack-via-dns-cname-abuse/) |
| [PaperCut NG/MF Pre-Auth RCE (CVE-2026-82077/82078/81578)](TRENDS.md#id-initial-access-papercut-001--papercut-ngmf-pre-auth-rce-chain-cve-2026-820778207881578) | dormant | [2026-10-11](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [REF8801 Apex Accelerator Malicious npm Packages](TRENDS.md#id-initial-access-apex-accelerator-001--ref8801-apex-accelerator-malicious-npm-packages) | dormant | [2026-10-12](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages) |
| [WSUS / Windows Update Server RCE exploitation](TRENDS.md#id-initial-access-wsus-001--wsus--windows-update-server-rce-exploitation) | dormant | [2026-10-23](https://www.huntress.com/blog/exploitation-of-windows-server-update-services-remote-code-execution-vulnerability) |
| [Entra ID SyncJacking & Conditional Access Bypass](TRENDS.md#id-identity-entra-syncjacking-001--entra-id-syncjacking--conditional-access-bypass) | dormant | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) |
| [SonicWall SMA1000 SSRF + RCE (CVE-2026-15409/15410)](TRENDS.md#id-initial-access-sonicwall-sma-001--sonicwall-sma1000-ssrf--rce-exploitation-cve-2026-1540915410) | dormant | [2026-08-17](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) |
| [Oracle PeopleSoft Unsafe Deserialization RCE (CVE-2026-35273)](TRENDS.md#id-initial-access-oracle-peoplesoft-001--oracle-peoplesoft-unsafe-deserialization-rce-cve-2026-35273) | dormant | [2026-08-17](https://www.sentinelone.com/vulnerability-database/cve-2026-35273/) |
| [Nightmare Eclipse: Windows Defender/BitLocker research](TRENDS.md#id-evasion-nightmare-eclipse-001--nightmare-eclipse-windows-defenderbitlocker-zero-day-research-campaign) | dormant | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) |

---

## Tools & releases

- **BloodHound** — v9.10.0-rc1 (Nov 9, 2026) — UI overhauls, UUID-based IDs, Prometheus metrics, dependency hardening
- **Sliver** — v1.7.8 (Oct 3, 2026) — Multiperson collaborative red-team C2 framework
- **Nuclei** — v3.11.1 (Aug 8, 2026) — Vulnerability scanning framework
- **NetExec** — v1.5.1 (Feb 23, 2026) — SMB/LDAP/SSH credential assessment
- **Certipy** — v5.0.4 (Nov 22, 2026) — ADCS attack toolkit
- **impacket** — v0.9.20 (May 19, 2026) — Protocol libraries for Kerberos/AD tooling

---

## Worth studying

- **adshell-rs** — https://github.com/g0h4n/adshell-rs — Interactive AD shell over LDAP(S)/ADWS in Rust; fills gap in Rust-native identity attack tooling.

- **Attack of The Extensions** — https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/ — Chromium extensions as persistent C2 infrastructure; browser-based post-exploitation tradecraft.

- **Return of the Cookie Monster** — https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/ — Authenticated browser session compromise via Chrome DevTools Protocol.

- **ConfigManBearPig 2.0** — https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/ — SCCM attack-collection tool; 30+ techniques, 9 takeover paths.

- **Process Parameter Poisoning** — https://sensepost.com/blog/2026/process-parameter-poisoning/ — EDR-evasion code injection via process-startup field smuggling.

- **CRLF-Powered Desync Attacks** — https://portswigger.net/research/crlf-powered-desync-attacks — HTTP/2 desynchronization via CRLF injection; request smuggling & cache poisoning.

---

**Latest**: [Daily reports](reports/) · [Observation queue](TRENDS.md#observation_queue) · [Today (2026-11-10)](reports/2026-11-10.md) · [Weekly (W46)](reports/weekly/2026-W46.md)

**Source**: [TRENDS.md](TRENDS.md) · [SOURCES.md](SOURCES.md)
