# Red Team Radar

Autonomous tracker of the offensive-security frontier. Situational awareness: tools, releases, techniques, research, advisories.

![trends](https://img.shields.io/badge/trends-14-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-29-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--11--02-2f9e44?style=flat-square)

---

## Since last scan (2026-11-02)

- **Cisco SD-WAN Critical Zero-Days** — [CVE-2026-20127](https://www.cyber.gc.ca/en/alerts-advisories/al26-004-critical-vulnerability-affecting-cisco-catalyst-sd-wan-cve-2026-20127) (auth bypass), [CVE-2026-20129](https://www.cisco.com/c/en/us/support/docs/csa/cisco-sa-sdwan-authbp-qwCX8D4v.html) (CVSS 9.8 RCE), [CVE-2026-20245](https://labs.cloudsecurityalliance.org/research/csa-research-note-cisco-sdwan-cve-2026-20245-zero-day-202606) (CVSS 7.8 command injection) — 7th zero-day in SD-WAN this year, actively exploited, rogue peers in production. Awaiting secondary researcher coverage for trend promotion.
- **Flowise RCE** — [CVE-2026-40933](https://www.securityweek.com/exploit-code-published-for-critical-flowise-rce-vulnerability/) (MCP adapter unsafe deserialization, CVSS critical). Public PoC published, affects <3.1.0.
- **Citrix NetScaler Memory Overread** — [CVE-2026-3055](https://labs.watchtowr.com) (sequel to CVE-2026-88771/88772). watchTowr technical analysis pending.
- **Ivanti EPMM Pre-Auth RCEs** — [CVE-2026-1281, CVE-2026-1340](https://labs.watchtowr.com) (mobile MDM pre-auth RCEs). watchTowr detection published.
- **PaperCut Dormancy Decision** — Seeded Oct 11, 21+ days quiet as of Nov 1. Demotion to dormant on next weekly (2026-W46) if silence continues.

---

## Trends

**seed 3 · emerging 1 · dormant 10** (14 total: 3 seed, 1 emerging, 0 accelerating, 0 mainstreaming, 10 dormant)

| Trend | Stage | Latest |
|-------|-------|--------|
| [web-php2shell-001 — PHP2Shell RCE (CVE-2026-109618/109619)](TRENDS.md#id-web-php2shell-001--php2shell-rce-cve-2026-109618109619) | seed | [2026-10-22](https://www.elastic.co/security-labs/threat-command/php2shell-assessing-elastic-detection-coverage) |
| [initial-access-apex-accelerator-001 — REF8801 Apex Accelerator Malicious npm](TRENDS.md#id-initial-access-apex-accelerator-001--ref8801-apex-accelerator-malicious-npm-packages) | seed | [2026-10-12](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages) |
| [initial-access-papercut-001 — PaperCut NG/MF Pre-Auth RCE Chain](TRENDS.md#id-initial-access-papercut-001--papercut-ngmf-pre-auth-rce-chain-cve-2026-82077820788156578) | seed | [2026-10-11](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [ad-adcs-001 — ADCS abuse & escalation](TRENDS.md#id-ad-adcs-001--adcs-abuse--escalation) | emerging | [2026-08-06](https://kudelskisecurity.com/) |
| [ad-certighost-001 — CertiGhost AD CS "chase" DC-impersonation](TRENDS.md#id-ad-certighost-001--certighost-ad-cs-chase-dc-impersonation-cve-2026-54121) | dormant | [2026-08-06](https://www.dataminr.com/) |
| [identity-kerberos-relay-dns-cname-001 — Kerberos Relay via DNS CNAME](TRENDS.md#id-identity-kerberos-relay-dns-cname-001--kerberos-relay-via-dns-cname-abuse-cve-2026-20929) | dormant | [2026-10-03](https://github.com/rapid7/metasploit-framework/issues/21693) |
| [initial-access-fortimail-001 — Fortinet FortiMail Pre-Auth RCE](TRENDS.md#id-initial-access-fortimail-001--fortinet-fortimail-pre-auth-arbitrary-file-write-cve-2026-104286) | dormant | [2026-10-03](https://daily.dev/posts/fortinet-sounds-the-alarm-over-actively-exploited-fortimail-zero-day-dkwlg7a1e) |
| [initial-access-citrix-netscaler-001 — Citrix NetScaler Pre-Auth RCE](TRENDS.md#id-initial-access-citrix-netscaler-001--citrix-netscaler-adcgateway-pre-auth-rce-cve-2026-88771887772) | dormant | [2026-10-03](https://www.bleepingcomputer.com/news/security/citrix-admins-warned-to-shut-down-netscalers-over-2-exploited-zero-days/) |
| [initial-access-nable-ncentral-001 — N-able N-central Pre-Auth RCE](TRENDS.md#id-initial-access-nable-ncentral-001--n-able-n-central-pre-auth-rce-cve-2026-86218) | dormant | [2026-10-03](https://horizon3.ai/attack-research/vulnerabilities/cve-2026-86218/) |
| [initial-access-oracle-peoplesoft-001 — Oracle PeopleSoft RCE](TRENDS.md#id-initial-access-oracle-peoplesoft-001--oracle-peoplesoft-unsafe-deserialization-rce-cve-2026-35273) | dormant | [2026-08-17](https://www.oracle.com/security-alerts/alert-cve-2026-35273.html) |
| [initial-access-sonicwall-sma-001 — SonicWall SMA1000 SSRF + RCE](TRENDS.md#id-initial-access-sonicwall-sma-001--sonicwall-sma1000-ssrf--rce-exploitation-cve-2026-1540915410) | dormant | [2026-08-17](https://labs.beazley.security/advisories/BSL-A1189) |
| [identity-entra-syncjacking-001 — Entra ID SyncJacking](TRENDS.md#id-identity-entra-syncjacking-001--entra-id-syncjacking--conditional-access-bypass) | dormant | [2026-08-06](https://cybersecuritynews.com/azure-ad-conditional-access-bypassed/) |
| [initial-access-wsus-001 — WSUS RCE exploitation](TRENDS.md#id-initial-access-wsus-001--wsus--windows-update-server-rce-exploitation) | dormant | [2026-08-05](https://specterops.io/blog/2026/08/05/turning-enterprise-update-servers-into-backdoor-factories-part-1/) |
| [evasion-nightmare-eclipse-001 — Nightmare Eclipse research](TRENDS.md#id-evasion-nightmare-eclipse-001--nightmare-eclipse-windows-defenderbitlocker-zero-day-research-campaign) | dormant | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) |

---

## Tools & releases

- **Sliver** (C2 framework) — [v1.7.8](https://github.com/BishopFox/sliver/releases) (Oct 3, 2026)
- **BloodHound** (AD attack-path discovery) — [v9.6.0](https://github.com/SpecterOps/BloodHound/releases) (Aug 18, 2026)
- **NetExec** (multi-protocol post-exploitation) — [latest](https://github.com/Pennyw0rth/NetExec) (Aug 18, 2026)
- **Nuclei** (vulnerability scanner) — [latest](https://github.com/projectdiscovery/nuclei) (Aug 2026)
- **impacket** (protocol implementation suite) — [latest](https://github.com/fortra/impacket) (Aug 2026)
- **Certipy** (ADCS enumeration & exploitation) — [latest](https://github.com/ly4k/Certipy) (Aug 2026)

---

## Worth studying

- **Process Parameter Poisoning (P3)** ([SensePost](https://sensepost.com/blog/2026/process-parameter-poisoning/), 2026-07-06) — Novel code-injection technique smuggling payloads through process-startup fields (`CreateProcessW` + thread-context manipulation), reduces EDR footprint against four major vendors. C2/evasion axis.
- **ConfigManBearPig 2.0** ([SpecterOps](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/), 2026-08-03) — Python rewrite covering 30+ SCCM/Configuration Manager attack techniques (9 TAKEOVER paths), low-privilege domain-user context sufficient, adds Linux + OPSEC gains. AD/identity axis.
- **CRLF-Powered Desync Attacks** ([PortSwigger Research](https://portswigger.net/research/crlf-powered-desync-attacks), 2026-08-05) — HTTP/2 desynchronization via CRLF injection in headers; request smuggling + cache poisoning. Web/API axis.
- **Chromium Extensions as C2 Persistence** ([SpecterOps](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/), 2026-08-13) — Malicious extensions silently install and persist as C2 infrastructure. Browser-based post-exploitation persistence.
- **Chrome DevTools Protocol (CDP) Cookie Theft** ([SpecterOps](https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/), 2026-08-13) — Authenticated browser session compromise via CDP; cookie-theft techniques bypass modern protections. Post-exploitation session hijacking.

---

## References

- **Trend ledger** — [TRENDS.md](TRENDS.md)
- **Observation queue** — [Below-bar unverified items](TRENDS.md#observation_queue)
- **Reports** — [daily](reports/) · [weekly](reports/weekly/)
- **Latest daily** — [2026-11-02](reports/2026-11-02.md)
- **Latest weekly** — [2026-W45](reports/weekly/2026-W45.md)
- **Source registry** — [SOURCES.md](SOURCES.md)

---

_Red Team Radar is a tracker, not a runbook. All evidence lines link primary sources only. No exploit code, payloads, or step-by-step attack procedures. For operational context and ATT&CK mappings, see full trend entries._
