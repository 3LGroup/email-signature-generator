# Deployment Guide

Detailed instructions for deploying the Three Lines Email Signature Generator.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Google Sheets Setup](#google-sheets-setup)
3. [Google Apps Script Setup](#google-apps-script-setup)
4. [Deployment](#deployment)
5. [Testing](#testing)
6. [Troubleshooting](#troubleshooting)

## Prerequisites

- Google account with organizational access
- Administrator permissions for Google Workspace
- Employee data prepared in the correct format

## Google Sheets Setup

### Step 1: Create Employee Data Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Employee Signature Data"
3. Set up columns in **Row 1** (headers):

| Name | Title | Department | Email | Phone | Mobile | Extension |
|------|-------|------------|-------|-------|--------|-----------|

4. Add employee data starting from **Row 2**

### Example Data

```
Abdul Rafay | Software Engineer | IT | abdulrafay@3lines.com.sa | +966123456789 | +966501234567 | 101
```

### Step 2: Get Sheet ID

1. Open your Google Sheet
2. Copy the ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/[THIS_IS_YOUR_SHEET_ID]/edit
   ```
3. Save this ID for the configuration step

### Step 3: Set Permissions

1. Click **Share** button
2. Set to "Anyone with the link can view"
3. Or grant specific access to the Apps Script service account

## Google Apps Script Setup

### Step 1: Create New Project

1. Go to [script.google.com](https://script.google.com)
2. Click **New Project**
3. Rename project to "Three Lines Signature Generator"

### Step 2: Add Code Files

1. **Delete** the default `Code.gs` content
2. Copy content from `src/Code.gs` in this repository
3. Paste into the Apps Script editor

### Step 3: Configure Settings

Update the `CONFIG` object at the top of `Code.gs`:

```javascript
var CONFIG = {
  SHEET_ID: 'your-sheet-id-here',              // From Step 2 of Sheets Setup
  COMPANY_NAME: 'Three Lines',
  COMPANY_WEBSITE: 'www.3lines.com.sa',
  COMPANY_URL: 'https://www.3lines.com.sa',
  LOGO_URL: 'https://your-logo-url.com',       // Host logo on imgbb.com or similar
  ADDRESS: 'Your full office address',
  LINKEDIN: 'https://linkedin.com/company/3lines',
  VISION_2030_URL: 'https://your-vision-logo-url.png'
};
```

### Step 4: Save Project

1. Click **File** → **Save**
2. Or press `Ctrl+S` (Windows) / `Cmd+S` (Mac)

## Deployment

### Step 1: Create Deployment

1. Click **Deploy** → **New deployment**
2. Click gear icon ⚙️ → Select **Web app**
3. Configure:
   - **Description**: "Production Deployment v1.0"
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**

### Step 2: Authorize

1. Click **Authorize access**
2. Select your Google account
3. Click **Advanced** → **Go to project (unsafe)**
4. Click **Allow**

### Step 3: Copy Deployment URL

1. Copy the **Web app URL**
2. Format: `https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec`
3. Save this URL for distribution

## Testing

### Test 1: Form Page

1. Open deployment URL in browser
2. Should see signature generator form
3. Verify company logo loads

### Test 2: Generate Signature

1. Enter a test employee email (must exist in Google Sheet)
2. Click **Generate Signature**
3. Verify signature displays correctly:
   - Name and title appear
   - All icons load
   - Vision 2030 logo shows
   - Company logo displays

### Test 3: Copy Functionality

1. Click **Copy Signature**
2. Button should show "Copied!" briefly
3. Paste into a text editor to verify HTML copied

### Test 4: Email Client Test

1. Copy signature
2. Paste into Outlook:
   - File → Options → Mail → Signatures
   - Click **New**
   - Paste with `Ctrl+V`
3. Send test email to verify appearance

### Test 5: Different Employees

1. Test with multiple employee emails
2. Verify different data displays correctly
3. Test with missing phone numbers (should hide phone icon)

## Updating the Deployment

### Code Changes

1. Make changes in Apps Script editor
2. Click **Deploy** → **Manage deployments**
3. Click edit icon (pencil) next to current deployment
4. Change **Version** to "New version"
5. Add description of changes
6. Click **Deploy**

**Note**: URL remains the same, no need to redistribute

### Data Changes

1. Update Google Sheet directly
2. Changes take effect immediately
3. No redeployment needed

## Troubleshooting

### Logo Not Displaying

**Problem**: Company logo or Vision 2030 logo not showing

**Solution**:
- Verify logo URLs are publicly accessible
- Use imgbb.com or similar image hosting
- Avoid Google Drive links (unreliable in emails)
- Check URL in browser first

### Employee Not Found Error

**Problem**: "Employee not found" message appears

**Solution**:
- Verify email exists in Google Sheet (Row 2+)
- Check for extra spaces in email address
- Ensure email column is Column D (4th column)
- Verify Sheet ID in CONFIG is correct

### Icons Not Loading

**Problem**: Broken image icons appear

**Solution**:
- Icons8 URLs may change - update icon URLs
- Check internet connectivity
- Verify icon URLs load in browser
- Consider hosting icons yourself

### Permission Errors

**Problem**: "Authorization required" or access denied

**Solution**:
- Re-authorize the script
- Check Google Sheet sharing settings
- Verify "Anyone with link" has view access
- Check Apps Script execution permissions

### Outlook Compatibility

**Problem**: Signature looks broken in Outlook

**Solution**:
- Use table-based layout (already implemented)
- Avoid CSS that Outlook doesn't support
- Test in Outlook Desktop and Web
- Use MSO conditionals (already in code)

## Security Notes

- Sheet ID is public in code - ensure sensitive data isn't in sheet
- Use view-only access for the Google Sheet
- Deployment URL is public - consider authentication if needed
- Employee data should not include sensitive information

## Best Practices

1. **Version Control**
   - Keep track of deployment versions
   - Document changes in deployment descriptions

2. **Testing**
   - Always test in deployment environment before rolling out
   - Test across multiple email clients

3. **Backups**
   - Keep backup of Google Sheet
   - Export Code.gs regularly

4. **Documentation**
   - Update README when making changes
   - Document custom modifications

## Support

For additional help:
- Contact: IT Support Team
- Email: it@3lines.com.sa
- Internal Wiki: [Add your wiki link]

---

Last Updated: January 2024
