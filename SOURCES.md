# Sources registry — Red Team Radar

Agent-owned. The radar grows and prunes these lists itself (see routines). Mark verified
entries `[verified YYYY-MM-DD]`. This is a SEED list — replace/extend with your own.

## Primary feeds — swept every run (citable evidence)

Research / vendor security blogs (open the blog index, read new posts). `mirror:` is a
GitHub-native fallback for degraded-network sessions (see routines/daily.md) — only fill one
in after verifying it by opening it this session; never guess/invent a mirror URL, leave
`mirror: none verified yet` until then:
- SpecterOps blog — https://specterops.io/blog/ (mirror: none verified yet)
- Google Project Zero — https://googleprojectzero.blogspot.com/ (mirror: none verified yet)
- watchTowr Labs — https://labs.watchtowr.com/ (mirror: none verified yet)
- Assetnote / Searchlight research — https://slcyber.io/assetnote-security-research-center/ (mirror: none verified yet)
- Outflank blog — https://www.outflank.nl/blog/ (mirror: none verified yet)
- MDSec blog — https://www.mdsec.co.uk/blog/ (mirror: none verified yet)
- Synacktiv publications — https://www.synacktiv.com/en/publications (mirror: none verified yet)
- PortSwigger Research — https://portswigger.net/research (mirror: none verified yet)
- Orange Cyberdefense / SensePost — https://sensepost.com/blog/ (mirror: none verified yet)
- Elastic Security Labs — https://www.elastic.co/security-labs (mirror: none verified yet)

Tool repos & releases (check `<repo>/releases`):
- BloodHound — https://github.com/SpecterOps/BloodHound
- NetExec — https://github.com/Pennyw0rth/NetExec
- Certipy — https://github.com/ly4k/Certipy
- Nuclei — https://github.com/projectdiscovery/nuclei
- Havoc / Sliver / Mythic C2 — https://github.com/HavocFramework/Havoc [archived 2026-02-20, no releases — repo is read-only, keep in list for history but stop expecting releases] · https://github.com/BishopFox/sliver · https://github.com/its-a-feature/Mythic
- impacket — https://github.com/fortra/impacket

## CVE / advisory watch — swept every run
- NVD recent — https://services.nvd.nist.gov/rest/json/cves/2.0
- GitHub Security Advisories — https://github.com/advisories
- CISA KEV catalog — https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- Vendor PSIRTs as they become relevant (Fortinet, Ivanti, Citrix, Palo Alto, Cisco)

## Discovery topics — rotate ≥2 per run (GitHub / package-registry SEARCH, not watch)
- "active directory" attack tool ; kerberos relay ; adcs esc
- edr evasion ; process injection ; shellcode loader
- c2 framework ; beacon object file
- azure ad / entra attack ; kubernetes attack ; aws exploitation
- awesome-red-team lists

## Community pulse — intake only (never evidence, never name individuals)
- r/redteamsec ; r/netsec (top/new)
- Hacker News (front page on-axis check)
- Curated newsletters / conference schedules (DEF CON, Black Hat, Troopers, x33fcon)

## Discovered-source candidates
<!-- auto-staged tally: domain — times seen — last artifact+date — first-seen date -->
_(empty)_
