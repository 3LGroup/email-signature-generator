# Three Lines Email Signature Generator

Automated email signature system for Three Lines Advanced Technologies. Generates standardized, branded HTML signatures from employee data stored in Google Sheets, deployed as a Google Apps Script web app and enforced company-wide via a Microsoft 365 Exchange transport rule.

---

## How It Works

1. Employee data is stored in a Google Sheet (name, title, department, email, phone, mobile, extension)
2. Employees visit the web app URL and enter their company email
3. The app looks up their data and generates a personalized HTML signature
4. They copy and paste it into Outlook
5. Alternatively, the Exchange transport rule automatically appends signatures to all outgoing mail at the server level

---

## Signature Design

- Company logo with vertical blue divider
- Employee name (bold, brand blue `#0072bc`) and job title
- Clickable contact icons: phone, email, Google Maps location, website, LinkedIn
- Saudi Vision 2030 logo
- Table-based HTML for compatibility with Outlook, Gmail, and Apple Mail

---

## Repository Structure

```
SignatureGenerator/
├── Code.gs                    # Google Apps Script — full web app source
├── logo-removebg-preview.png  # Company logo (hosted on GitHub CDN)
├── saudi-vision-2030.png      # Saudi Vision 2030 logo (hosted on GitHub CDN)
├── SampleEmployeeData.csv     # Google Sheet template for employee data
├── DEPLOYMENT.md              # Step-by-step deployment guide
├── QUICK_START.md             # Quick reference for admins
├── CHANGELOG.md               # Version history
└── LICENSE                    # License
```

---

## Configuration

All settings are in the `CONFIG` object at the top of `Code.gs`:

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

## Google Sheet Format

The sheet must have these columns in order (row 1 = headers, data from row 2):

| A: Name | B: Title | C: Department | D: Email | E: Phone | F: Mobile | G: Extension |
|---------|----------|---------------|----------|----------|-----------|--------------|

See `SampleEmployeeData.csv` for a template.

---

## Deployment (Google Apps Script)

1. Go to [script.google.com](https://script.google.com) and open the project
2. Paste the full content of `Code.gs`
3. Run the `authorize` function once to grant Sheets access
4. Click **Deploy** → **New deployment** → **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the deployment URL — share it with employees

> After any code change, always deploy a **new version** (Deploy → Manage deployments → Edit → New version). Saving the script alone does not update the live URL.

See [DEPLOYMENT.md](DEPLOYMENT.md) for full details and troubleshooting.

---

## Microsoft 365 Exchange Transport Rule

Signatures are also enforced server-side via an Exchange transport rule in Microsoft 365 Admin Center. The rule appends an HTML disclaimer to all outgoing mail using Exchange variables:

| Variable | Value |
|----------|-------|
| `%%DisplayName%%` | Employee full name |
| `%%Title%%` | Job title |
| `%%PhoneNumber%%` | Phone number |
| `%%EmailAddress%%` | Email address |

This ensures every outbound email carries a signature even if the employee did not set one manually.

---

## Image Hosting

Both logo images are committed to this public GitHub repository and served via `raw.githubusercontent.com`. This CDN is trusted by Outlook and corporate firewalls, unlike free image hosts (e.g. imgbb.com) which are typically blocked.

To update an image:
1. Replace the PNG file in this repo
2. Commit and push — the CDN URL stays the same

---

## Support

Contact IT for access issues or to add/update employee data in the Google Sheet.
