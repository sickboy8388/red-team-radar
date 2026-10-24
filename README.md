# Red Team Radar — Offensive Security Trend Tracker

Persistent situational awareness for offensive-security operators. Autonomous tracker of the active frontier: tools, releases, techniques, research, and advisories on Active Directory, C2/evasion, web/API/cloud, exploitable CVEs, and threat TTPs.

![trends](https://img.shields.io/badge/trends-13-3266ad?style=flat-square)
![accelerating](https://img.shields.io/badge/accelerating-0-e8590c?style=flat-square)
![watchlist](https://img.shields.io/badge/watchlist-28-6c757d?style=flat-square)
![updated](https://img.shields.io/badge/updated-2026--10--24-2f9e44?style=flat-square)

---

## Since 2026-10-24

- **NTLM-style LDAP Signing Bypass** (SpecterOps, Oct 23) — [Novel bypass technique](https://specterops.io/blog/2026/10/23/ldap-signing-bypass-ntlm-relay/) showing residual vulnerability in domain authentication despite signing enforcement. Identity/AD attack-surface expansion.
- **China APT (Storm-0940) using ARTEX AI pentest tool in ConnectWise attacks** (SecurityWeek, Oct 23) — Autonomous reconnaissance and exfiltration via open-source agentic AI framework; targeted hundreds with privileged persistence achieved at multiple organizations. C2/supply-chain axis. Multiple vendor corroboration (Microsoft, Reuters, Japan, South Korea).
- **Mirai botnet collaboration with PHP2Shell web-shell attacks** (SecurityWeek, Oct 23) — ASLR bypass exploits emerging in botnet-web-shell hybrid attacks. Web/evasion axis.
- **Zimbra CVE-2026-73570 PoC variation analysis** (Elastic Security Labs, Oct 23) — Confirmation of active-exploitation persistence on pre-auth SNMP-triggered command injection. Multiple vendor coverage ongoing.
- **New tool releases** — BloodHound v9.9.0-rc3 (Oct 21); no major releases from Sliver, NetExec, impacket, Certipy, Nuclei.

---

## Trends

**seed 6 · emerging 1 · dormant 6** (13 total: 6 seed, 1 emerging, 0 accelerating, 0 mainstreaming, 6 dormant)

| Trend | Stage | Latest Signal |
|-------|-------|---------------|
| [N-able N-central Pre-Auth RCE (CVE-2026-86218)](#initial-access-nable-ncentral-001) | seed | [2026-10-03](https://arcticwolf.com/resources/blog/cve-2026-86218/) |
| [Citrix NetScaler ADC/Gateway Pre-Auth RCE (CVE-2026-88771/88772)](#initial-access-citrix-netscaler-001) | seed | [2026-10-03](https://labs.watchtowr.com/oh-look-the-foot-gun-went-off-again-citrix-netscaler-preauth-command-injection-cve-2026-88771/) |
| [Fortinet FortiMail Pre-Auth Arbitrary File Write (CVE-2026-104286)](#initial-access-fortimail-001) | seed | [2026-10-03](https://www.securityweek.com/exploited-fortinet-fortimail-zero-day-calls-for-urgent-action/) |
| [Kerberos Relay via DNS CNAME Abuse (CVE-2026-20929)](#identity-kerberos-relay-dns-cname-001) | seed | [2026-10-03](https://www.crowdstrike.com/en-us/blog/detecting-kerberos-relay-attack-via-dns-cname-abuse/) |
| [PaperCut NG/MF Pre-Auth RCE Chain (CVE-2026-82077/82078/81578)](#initial-access-papercut-001) | seed | [2026-10-11](https://labs.watchtowr.com/death-by-a-thousand-papercuts-papercut-pre-auth-rce-chain-and-patch-bypasses-wt-2026-0141-0144-cve-2026-82077-cve-2026-82078-cve-2026-81578/) |
| [REF8801 Apex Accelerator Malicious npm Supply-Chain](#initial-access-apex-accelerator-001) | seed | [2026-10-12](https://www.elastic.co/security-labs/threat-command/apex-accelerator-malicious-npm-packages) |
| [ADCS Abuse & Escalation](#ad-adcs-001) | emerging | [2026-10-03](https://www.crowdstrike.com/) |
| [CertiGhost AD CS "chase" DC-impersonation (CVE-2026-54121)](#ad-certighost-001) | dormant | [2026-08-06](https://github.com/advisories/GHSA-64qv-2ffq-h4w6) |
| [WSUS / Windows Update Server RCE exploitation](#initial-access-wsus-001) | dormant | [2026-10-23](https://www.huntress.com/blog/exploitation-of-windows-server-update-services-remote-code-execution-vulnerability) |
| [Nightmare Eclipse: Windows Defender/BitLocker research campaign](#evasion-nightmare-eclipse-001) | dormant | [2026-07-31](https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive) |
| [SonicWall SMA1000 SSRF + RCE exploitation (CVE-2026-15409/15410)](#initial-access-sonicwall-sma-001) | dormant | [2026-08-17](https://www.tenable.com/blog/cve-2026-15409-cve-2026-15410-sonicwall-sma-1000-zero-day-vulnerabilities-exploited-in-the) |
| [Oracle PeopleSoft Unsafe Deserialization RCE (CVE-2026-35273)](#initial-access-oracle-peoplesoft-001) | dormant | [2026-08-17](https://www.sentinelone.com/vulnerability-database/cve-2026-35273/) |
| [Entra ID SyncJacking & Conditional Access Bypass](#identity-entra-syncjacking-001) | dormant | [2026-08-06](https://www.semperis.com/blog/syncjacking-azure-ad-account-takeover/) |

---

## Tools & Releases

- **BloodHound** v9.9.0-rc3 (Oct 21, 2026) — [SpecterOps/BloodHound](https://github.com/SpecterOps/BloodHound) — Active Directory attack-path analysis.
- **Sliver C2** v1.7.8 (Oct 3, 2026) — [BishopFox/sliver](https://github.com/BishopFox/sliver) — Lightweight command-and-control framework.
- **Mythic** v3.4 (Oct 10, 2026) — [its-a-feature/Mythic](https://github.com/its-a-feature/Mythic) — Multi-agent C2 platform.
- **Nuclei** v3.11.1 (Aug 8, 2026) — [projectdiscovery/nuclei](https://github.com/projectdiscovery/nuclei) — Template-driven vulnerability scanner.
- **Certipy** v5.1.0 (Jun 23, 2026) — [ly4k/Certipy](https://github.com/ly4k/Certipy) — AD CS exploitation tool.
- **NetExec** v1.3.0 (Oct 13, 2026) — [Pennyw0rth/NetExec](https://github.com/Pennyw0rth/NetExec) — Network post-exploitation tool.

---

## Worth Studying

- **[Signed, Sealed, and Relayed, NTLM-style: Bypassing LDAP Signing Through Reauthentication](https://specterops.io/blog/2026/10/23/ldap-signing-bypass-ntlm-relay/)** (SpecterOps, Oct 23) — Novel bypass of LDAP/SMB signing protection against NTLM relay attacks on domain authentication. 21-minute read.
- **[How CVE-2026-73570 turns a Zimbra log file into remote code execution](https://www.elastic.co/security-labs/threat-command/command-injection-zimbra-cve-2026-73570)** (Elastic Security Labs, Oct 23) — Reproduction and PoC variation analysis of pre-auth SNMP RCE. Confirms active-exploitation persistence.
- **[Attack of The Extensions](https://specterops.io/blog/2026/08/13/chromium-extension-c2-persistence/)** (SpecterOps, Aug 13) — Chromium extensions as persistent C2 infrastructure; silent install and command-and-control on compromised systems. Browser post-exploitation.
- **[Return of the Cookie Monster](https://specterops.io/blog/2026/08/13/chrome-devtools-protocol-cookie-theft/)** (SpecterOps, Aug 13) — Authenticated browser session compromise via Chrome DevTools Protocol. Post-exploitation session hijacking.
- **[CRLF-Powered Desync Attacks: Beheading HTTP Streams](https://portswigger.net/research/crlf-powered-desync-attacks)** (PortSwigger Research, Aug 5) — HTTP/2-specific desynchronization via CRLF injection; request smuggling and cache poisoning. Web/API protocol edge case.
- **[ConfigManBearPig 2.0](https://specterops.io/blog/2026/08/03/configmanbearpig-2-0/)** (SpecterOps) — Python rewrite of SCCM/Microsoft Configuration Manager attack-collection tool; 30+ techniques across recon, credential theft, coercion, elevation, takeover. SCCM lateral-movement/priv-esc under-tracked surface.
- **[Process Parameter Poisoning "P3"](https://sensepost.com/blog/2026/process-parameter-poisoning/)** (SensePost, Jul 6) — Novel code-injection technique via process-startup fields; reduces injection footprint against major EDRs. Fresh primary-source injection primitive.

---

## More

- [**Full ledger (TRENDS.md)**](TRENDS.md) — All 13 trends, 28-item watchlist, and strategy notes.
- [**Observation queue**](TRENDS.md#observation_queue) — Unverified signals below the trend bar (25–28 items).
- [**Daily reports**](reports/) — Full execution logs per run.
- [**Latest daily**](reports/2026-10-24.md) — Oct 24 scan report.
- [**Latest weekly**](reports/weekly/) — Calibration and weekly amendments (weekly runs only).
