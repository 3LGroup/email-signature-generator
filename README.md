# Three Lines Email Signature Generator

## What This Is

This project automates the creation and enforcement of standardized email signatures across all Three Lines employees. Before this system existed, signatures were inconsistent — different fonts, missing logos, no Vision 2030 branding, some employees had no signature at all.

The solution has two layers:
1. A **self-service web app** (Google Apps Script) where employees enter their email and get a ready-to-paste signature
2. A **server-side enforcement rule** in Microsoft 365 that automatically appends the signature to every outgoing email — even if the employee never set one up

---

## Background: The Problem

The company needed a unified email signature for all employees that:
- Showed the employee's name, title, phone, and email
- Displayed the Three Lines company logo
- Included the Saudi Vision 2030 logo (required for branding compliance)
- Had clickable icons for phone, email, location, website, and LinkedIn
- Worked correctly in Microsoft Outlook without broken images

The challenge was **image hosting**. Free image hosts like imgbb.com are blocked by corporate firewalls and Microsoft's Safe Links policy. Any image hosted there shows as a broken placeholder in Outlook. This was the main technical hurdle — solved by hosting images directly in this GitHub repository and serving them via `raw.githubusercontent.com`, which is trusted by Outlook and corporate networks.

---

## Architecture

```
Google Sheets                   GitHub Repo
(Employee Data)                 (Image CDN)
      |                              |
      |                    logo-removebg-preview.png
      |                    saudi-vision-2030.png
      |                              |
      v                             v
Google Apps Script Web App  --------+
(Code.gs)
      |
      | generates HTML signature
      v
Employee copies signature
      |
      v
Outlook Signature Settings   <-- Option 1: Manual per employee
      OR
Microsoft 365 Exchange       <-- Option 2: Auto-enforced on ALL outgoing mail
Transport Rule
```

---

## How the Web App Works

1. Employee visits the web app URL (Google Apps Script deployment)
2. Enters their company email (e.g. `john.doe@3lines.com.sa`)
3. The script looks up their row in the Google Sheet
4. Generates a personalized HTML signature with their name, title, phone, etc.
5. Employee clicks **Copy Signature** and pastes it into Outlook

The entire app lives in one file: `Code.gs`. It is deployed as a Google Apps Script Web App — no servers, no hosting costs.

---

## How the Exchange Transport Rule Works

In **Microsoft 365 Admin Center → Exchange → Mail flow → Rules**, a transport rule was created that:
- Triggers on: all outgoing mail from the organization
- Action: append an HTML disclaimer to the bottom of the email

The disclaimer HTML uses Exchange's built-in variables that are automatically replaced with the sender's real data at send time:

| Exchange Variable | Replaced With |
|-------------------|---------------|
| `%%DisplayName%%` | Employee's full name |
| `%%Title%%` | Job title from Active Directory |
| `%%PhoneNumber%%` | Phone number |
| `%%EmailAddress%%` | Email address |

This means **every email sent by every employee gets the correct signature automatically**, even employees who never configured one themselves. The rule is enforced at the server level — it cannot be bypassed by the employee.

---

## Repository Structure

```
SignatureGenerator/
├── Code.gs                    # Full Google Apps Script source code
├── logo-removebg-preview.png  # Three Lines company logo
├── saudi-vision-2030.png      # Saudi Vision 2030 logo
├── SampleEmployeeData.csv     # Template for the Google Sheet
├── DEPLOYMENT.md              # Step-by-step deployment guide
├── QUICK_START.md             # Quick reference for admins
├── CHANGELOG.md               # Version history
└── LICENSE
```

---

## Google Sheet Structure

The web app reads employee data from a Google Sheet. The Sheet ID is hardcoded in `Code.gs` under `CONFIG.SHEET_ID`.

Row 1 must be headers. Data starts from row 2. Column order:

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| Name | Title | Department | Email | Phone | Mobile | Extension |

See `SampleEmployeeData.csv` for an example. To add or update an employee, just edit the sheet — no redeployment needed.

---

## Configuration (Code.gs)

All company-specific settings live in the `CONFIG` object at the top of `Code.gs`:

```javascript
var CONFIG = {
  SHEET_ID:        '1aW3iG3VzF0HPT9zygstVeGclAHNQkI_fl0qoTSo_mPg',
  COMPANY_NAME:    'Three Lines',
  COMPANY_WEBSITE: 'www.3lines.com.sa',
  COMPANY_URL:     'https://www.3lines.com.sa',
  LOGO_URL:        'https://raw.githubusercontent.com/3LGroup/email-signature-generator/main/logo-removebg-preview.png',
  VISION_2030_URL: 'https://raw.githubusercontent.com/3LGroup/email-signature-generator/main/saudi-vision-2030.png',
  ADDRESS:         'Office 203, 2nd floor Building #2148, King Abdullah Branch Road, King Faisal Dist. Riyadh 13215, Saudi Arabia',
  LINKEDIN:        'https://linkedin.com/company/3lines'
};
```

---

## Why Images Are Hosted on GitHub

Early versions hosted images on imgbb.com (a free image host). These images consistently failed to load in Outlook — showing a blue "image not found" placeholder — because:

- imgbb.com is blocked by Microsoft's Safe Links scanning
- Corporate firewalls block free image hosting domains due to phishing abuse
- Outlook tries to download and embed images at paste time; if the domain is blocked, the image is lost permanently

**The fix:** commit the actual PNG files to this GitHub repository. GitHub's raw content CDN (`raw.githubusercontent.com`) is a trusted domain that passes corporate firewalls and Outlook's security checks. The image URLs never change as long as the filenames stay the same.

> Important: The repository must remain **public** for the raw URLs to be accessible without authentication.

To update a logo: replace the PNG file, commit, and push. The URL stays the same.

---

## Deploying the Google Apps Script Web App

If the web app ever needs to be redeployed (new account, new project, etc.):

1. Go to [script.google.com](https://script.google.com) and create a new project
2. Paste the full contents of `Code.gs` into the editor
3. In the function dropdown, select `authorize` and click **Run** — this grants the script access to Google Sheets (required once per deployment)
4. Click **Deploy** → **New deployment**
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy and save the deployment URL

> Critical: Every time you change the code, you must deploy a **new version** (Deploy → Manage deployments → Edit → New version → Deploy). Just saving the script does NOT update the live URL. The live URL always serves a frozen version until explicitly updated.

---

## Lessons Learned / Known Pitfalls

| Problem | Cause | Solution |
|---------|-------|----------|
| Images broken in Outlook | imgbb.com blocked by firewall / Safe Links | Host images on GitHub raw CDN |
| Web app showing blank page | Script not authorized to access Google Sheets | Run `authorize()` function once in GAS editor |
| Web app not updating after code change | GAS serves a frozen deployment version | Deploy a new version every time code changes |
| Raw GitHub URL returning 404 | Repository was private | Repository must be public for raw URLs to work |
| `e.parameter` error in GAS editor | `doGet(e)` called without a request object when run manually | Defensive check: `(e && e.parameter && e.parameter.email)` |

---

## Current Live Status

- Web app: deployed on Google Apps Script (URL shared with IT team)
- Exchange rule: active in Microsoft 365, enforced on all outgoing mail
- All employees: covered by the server-side rule regardless of manual setup

---

## Contact

For questions about this system, contact the IT team. For employee data changes, update the Google Sheet directly.
