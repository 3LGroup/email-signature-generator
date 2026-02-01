# Quick Start Guide

Get the Three Lines Email Signature Generator up and running in 5 minutes.

## 🚀 Quick Setup (5 Minutes)

### Step 1: Prepare Your Data (2 min)
1. Create a Google Sheet with employee data
2. Add columns: Name, Title, Department, Email, Phone, Mobile, Extension
3. Add at least one test employee
4. Copy the Sheet ID from the URL

### Step 2: Deploy the Script (2 min)
1. Go to [script.google.com](https://script.google.com)
2. Create new project
3. Copy code from `src/Code.gs`
4. Update `CONFIG.SHEET_ID` with your Sheet ID
5. Click Deploy → New deployment → Web app
6. Execute as: **Me**, Who has access: **Anyone**
7. Click Deploy and authorize

### Step 3: Test It (1 min)
1. Open the deployment URL
2. Enter test employee email
3. Click Generate Signature
4. Click Copy Signature
5. Done! ✅

## 📋 Checklist

Before deploying, make sure you have:

- [ ] Google Sheet created with employee data
- [ ] Sheet ID copied
- [ ] Company logo uploaded and URL obtained
- [ ] Vision 2030 logo uploaded and URL obtained (optional)
- [ ] Company details ready (name, website, address, LinkedIn)
- [ ] At least one test employee in the sheet

## 🔧 Minimum Configuration

Only these fields in `CONFIG` are **required**:

```javascript
var CONFIG = {
  SHEET_ID: 'your-sheet-id',           // REQUIRED
  COMPANY_NAME: 'Your Company',        // REQUIRED
  COMPANY_URL: 'https://yoursite.com', // REQUIRED
  LOGO_URL: 'https://your-logo.png',   // REQUIRED

  // Optional but recommended
  ADDRESS: 'Your address',
  LINKEDIN: 'https://linkedin.com/company/yourcompany',
  VISION_2030_URL: 'https://vision-logo.png'
};
```

## 📤 For Employees

Share this link with employees:
```
https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

They can:
1. Enter their company email
2. Click Generate
3. Click Copy
4. Paste in Outlook/Gmail settings

## 🎯 Quick Tips

- **Logo hosting**: Use [imgbb.com](https://imgbb.com) for free image hosting
- **Testing**: Use your own email first to test
- **Updates**: Change Google Sheet data → No redeployment needed
- **Code changes**: Redeploy with "New version" to update

## 🆘 Common Issues

| Problem | Solution |
|---------|----------|
| Employee not found | Check email spelling in Sheet |
| Logo not showing | Verify URL works in browser |
| Can't authorize | Use personal/admin Google account |
| Icons broken | URLs might have changed, update them |

## 📚 Next Steps

- Read [README.md](README.md) for full documentation
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for detailed guide
- Review [EMPLOYEE_DATA_TEMPLATE.md](docs/EMPLOYEE_DATA_TEMPLATE.md) for data format

## 🔗 Useful Links

- Google Sheets: https://sheets.google.com
- Google Apps Script: https://script.google.com
- Image Hosting: https://imgbb.com
- Icons8 (for custom icons): https://icons8.com

---

**Need help?** Contact IT Support

**Ready to deploy?** See [DEPLOYMENT.md](DEPLOYMENT.md)
