# Three Lines Email Signature Generator

Professional email signature generator built with Google Apps Script that creates standardized, branded email signatures for all employees.

## Features

- 🎨 **Modern Design** - Clean, professional light theme with brand colors
- 📱 **Responsive** - Works across all email clients (Outlook, Gmail, Apple Mail)
- 🔗 **Interactive Icons** - Clickable phone, email, location, website, and LinkedIn icons
- 🌐 **Google Sheets Integration** - Employee data managed centrally
- ⚡ **Easy Deployment** - Simple web app deployment via Google Apps Script
- 🇸🇦 **Vision 2030 Branding** - Includes Saudi Vision 2030 logo

## Preview

The signature includes:
- Employee name and title
- Company logo with vertical blue divider
- Contact icons (phone, email, location, website, LinkedIn)
- Saudi Vision 2030 logo

## Technology Stack

- **Google Apps Script** - Backend logic and web app hosting
- **Google Sheets** - Employee data storage
- **HTML/CSS** - Email-compatible markup
- **Icons8** - Professional icon set

## Getting Started

### Prerequisites

- Google account with access to Google Sheets and Apps Script
- Company employee data in the required format

### Installation

1. **Clone this repository**
   ```bash
   git clone https://github.com/your-org/signature-generator.git
   cd signature-generator
   ```

2. **Create a Google Sheet** with employee data
   - Required columns: Name, Title, Department, Email, Phone, Mobile, Extension

3. **Set up Google Apps Script**
   - Go to [script.google.com](https://script.google.com)
   - Create a new project
   - Copy contents from `src/Code.gs`
   - Update the `CONFIG` object with your company details

4. **Deploy as Web App**
   - Click **Deploy** → **New deployment**
   - Select **Web app** as deployment type
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**

For detailed setup instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

## Configuration

Edit the `CONFIG` object in `src/Code.gs`:

```javascript
var CONFIG = {
  SHEET_ID: 'your-google-sheet-id',
  COMPANY_NAME: 'Your Company',
  COMPANY_WEBSITE: 'www.yourcompany.com',
  COMPANY_URL: 'https://www.yourcompany.com',
  LOGO_URL: 'https://your-logo-url.com/logo.png',
  ADDRESS: 'Your company address',
  LINKEDIN: 'https://linkedin.com/company/yourcompany',
  VISION_2030_URL: 'https://vision-2030-logo-url.png'
};
```

## Usage

### For Employees

1. Go to the deployment URL: `https://script.google.com/macros/s/YOUR_ID/exec`
2. Enter your company email address
3. Click **Generate Signature**
4. Click **Copy Signature**
5. Paste into Outlook/Gmail signature settings

### For Administrators

- Update employee data in the Google Sheet
- Changes reflect immediately for all new signature generations
- No need to redeploy after data updates

## Project Structure

```
SignatureGenerator/
├── src/
│   ├── Code.gs              # Main Google Apps Script file
│   └── appsscript.json      # Apps Script configuration
├── docs/
│   └── DEPLOYMENT.md        # Detailed deployment guide
├── assets/
│   └── screenshots/         # Screenshots for documentation
├── README.md                # This file
└── .gitignore              # Git ignore file
```

## Email Client Compatibility

✅ Microsoft Outlook (Desktop & Web)
✅ Gmail (Web & Mobile)
✅ Apple Mail
✅ Thunderbird
✅ Most modern email clients

## Customization

### Icons
Icons are sourced from Icons8. Update icon URLs in the `generateSignature()` function.

### Colors
- Primary blue: `#0072bc`
- Text colors: `#555555` for titles
- Modify in the HTML template within `generateSignature()`

### Layout
All layout modifications are in the `generateSignature()` function using table-based HTML for maximum email client compatibility.

## Support

For issues or questions:
- Contact IT Support
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for troubleshooting

## License

Internal use only - Three Lines Advanced Technologies Company

## Version

**Version 2.0** - Enhanced Production Release
- Modern icon set
- Improved typography
- Better spacing and layout
- Vision 2030 branding integrated

---

Made with ❤️ by Three Lines IT Team
