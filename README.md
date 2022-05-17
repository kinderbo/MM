# Fun-with-words
The Django web app version of Word Challenge

This repository hosts the code for a web application written in Python, using the Django framework. The application is an implementation 
of the Facebook game Word Challenge, which has been discontinued. When complete, the game can be played at http://fun-with-words.appspot.com
The website is hosted by Google App Engine.

Authors: Catalina Ionescu, Lam Nguyen

# How to deploy with docker-compose

1. Copy the file `template.env` to `.env`.

2. Adjust database settings in `.env`. At least generate a secure password and assign in to `MARIADB_PASSWORD`.

3. Run `docker-compose up` and wait until services start, i.e. a line similar to the following appears on the screen:
```
web_1  | Server URL         : http://localhost:8000/
```

4. Access the application by using the URL shown above.

# How to scan the project for security issues

1. Install two required tools:
- [Trivy](https://aquasecurity.github.io/trivy/v0.28.0/getting-started/installation/)
- [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner/-/releases)

2. Run the scanning:

```
▪ gitlab-runner-linux-amd64 exec shell sast
Runtime platform                                    arch=amd64 os=linux pid=48786 revision=16ae0625 version=14.8.3
Using Shell executor...
Executing "step_script" stage of the job script
$ trivy fs --exit-code=1 .
2022-05-17T23:44:11.610+0200	INFO	Number of language-specific files: 1
2022-05-17T23:44:11.610+0200	INFO	Detecting pip vulnerabilities...

requirements.txt (pip)
======================
Total: 5 (UNKNOWN: 0, LOW: 0, MEDIUM: 4, HIGH: 0, CRITICAL: 1)

┌─────────┬────────────────┬──────────┬───────────────────┬────────────────────────┬──────────────────────────────────────────────────────────┐
│ Library │ Vulnerability  │ Severity │ Installed Version │     Fixed Version      │                          Title                           │
├─────────┼────────────────┼──────────┼───────────────────┼────────────────────────┼──────────────────────────────────────────────────────────┤
│ Django  │ CVE-2019-19844 │ CRITICAL │ 1.10.4            │ 1.11.27, 2.2.9         │ Django: crafted email address allows account takeover    │
│         │                │          │                   │                        │ https://avd.aquasec.com/nvd/cve-2019-19844               │
├─────────┼────────────────┼──────────┼───────────────────┼────────────────────────┼──────────────────────────────────────────────────────────┤
│ Django  │ CVE-2017-12794 │ MEDIUM   │ 1.10.4            │ 1.10.8, 1.11.5         │ python-django: Possible XSS in traceback section of      │
│         │                │          │                   │                        │ technical 500 debug page                                 │
│         │                │          │                   │                        │ https://avd.aquasec.com/nvd/cve-2017-12794               │
│         ├────────────────┤          │                   ├────────────────────────┼──────────────────────────────────────────────────────────┤
│         │ CVE-2017-7233  │          │                   │ 1.10.7, 1.9.13, 1.8.18 │ python-django: Open redirect and possible XSS attack via │
│         │                │          │                   │                        │ user-supplied numeric redirect URLs...                   │
│         │                │          │                   │                        │ https://avd.aquasec.com/nvd/cve-2017-7233                │
│         ├────────────────┤          │                   │                        ├──────────────────────────────────────────────────────────┤
│         │ CVE-2017-7234  │          │                   │                        │ python-django: Open redirect vulnerability in            │
│         │                │          │                   │                        │ django.views.static.serve()                              │
│         │                │          │                   │                        │ https://avd.aquasec.com/nvd/cve-2017-7234                │
├─────────┼────────────────┼──────────┼───────────────────┼────────────────────────┼──────────────────────────────────────────────────────────┤
│ Django  │ CVE-2021-33203 │ MEDIUM   │ 1.10.4            │ 2.2.24, 3.1.12, 3.2.4  │ django: Potential directory traversal via ``admindocs``  │
│         │                │          │                   │                        │ https://avd.aquasec.com/nvd/cve-2021-33203               │
└─────────┴────────────────┴──────────┴───────────────────┴────────────────────────┴──────────────────────────────────────────────────────────┘
ERROR: Job failed: exit status 1

FATAL: exit status 1                               
```

The `sast` (Static Application Security Testing) job fails because Django dependency contains known vulnerabilities. Notification is displayed on the console. For that reason I don't introduce any other changes.