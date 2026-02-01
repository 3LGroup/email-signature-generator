# Employee Data Template

This document explains the required format for the employee data Google Sheet.

## Sheet Structure

### Column Headers (Row 1)

| Column | Header | Required | Format | Example |
|--------|--------|----------|--------|---------|
| A | Name | Yes | Full Name | Abdul Rafay |
| B | Title | Yes | Job Title | Software Engineer |
| C | Department | Yes | Department Name | IT Department |
| D | Email | Yes | Email Address | abdulrafay@3lines.com.sa |
| E | Phone | No | Phone with country code | +966112345678 |
| F | Mobile | No | Mobile with country code | +966501234567 |
| G | Extension | No | Extension number | 101 |

### Data Rows (Row 2 onwards)

Add one employee per row starting from Row 2.

## Field Specifications

### Name (Column A)
- **Required**: Yes
- **Format**: Full name as it should appear in signature
- **Example**: `Abdul Rafay`, `Mohammed Al-Saud`
- **Notes**: Will be displayed in 18px bold blue text

### Title (Column B)
- **Required**: Yes
- **Format**: Official job title
- **Example**: `Software Engineer`, `Senior Project Manager`, `CEO`
- **Notes**: Displayed below name in 13px gray text

### Department (Column C)
- **Required**: Yes
- **Format**: Department or division name
- **Example**: `IT Department`, `Sales`, `Human Resources`
- **Notes**: Currently stored but not displayed in signature (reserved for future use)

### Email (Column D)
- **Required**: Yes
- **Format**: Valid email address
- **Example**: `abdulrafay@3lines.com.sa`
- **Notes**:
  - Must be unique (used as lookup key)
  - Must match company domain
  - Will be clickable in signature (mailto link)

### Phone (Column E)
- **Required**: No
- **Format**: International format with + and country code
- **Example**: `+966112345678`
- **Notes**:
  - If empty, phone icon won't appear in signature
  - Will be clickable (tel link)
  - Auto-formats if missing +

### Mobile (Column F)
- **Required**: No
- **Format**: International format with + and country code
- **Example**: `+966501234567`
- **Notes**:
  - Most employees should have this
  - Displays as phone icon in signature
  - Will be clickable (tel link)
  - Auto-formats if missing +

### Extension (Column G)
- **Required**: No
- **Format**: Numeric extension
- **Example**: `101`, `2543`
- **Notes**: Currently stored but not displayed (reserved for future use)

## Sample Data

```
Name             | Title                | Department  | Email                          | Phone           | Mobile          | Extension
Abdul Rafay      | Software Engineer    | IT          | abdulrafay@3lines.com.sa      | +966112345678   | +966501234567   | 101
Mohammed Ali     | Senior Developer     | IT          | mohammed.ali@3lines.com.sa    |                 | +966509876543   | 102
Sarah Ahmed      | Project Manager      | Operations  | sarah.ahmed@3lines.com.sa     | +966112345679   | +966505555555   | 201
Fahad Khan       | HR Manager           | HR          | fahad.khan@3lines.com.sa      | +966112345680   | +966501111111   | 301
```

## Important Notes

### Phone Number Format
- Always include country code
- Use + prefix
- No spaces, dashes, or parentheses
- Format: `+966XXXXXXXXX` for Saudi numbers
- System auto-adds + if missing

### Email Addresses
- Must be exact match (case-insensitive)
- No trailing/leading spaces
- Must be company email domain
- Used as unique identifier

### Empty Fields
- Leave cell completely empty if no data
- Don't use "-", "N/A", or other placeholders
- Optional fields: Phone, Mobile, Extension
- Required fields: Name, Title, Department, Email

## Google Sheet Setup

### Step 1: Create Sheet
1. Go to Google Sheets
2. Create new spreadsheet
3. Name it "Employee Signature Data" or similar

### Step 2: Add Headers
1. In Row 1, add column headers exactly as shown above
2. Format Row 1:
   - Bold text
   - Background color (optional)
   - Freeze row (View → Freeze → 1 row)

### Step 3: Add Data
1. Start adding employee data from Row 2
2. Fill all required columns
3. Optional columns can be left empty

### Step 4: Set Permissions
1. Click Share button
2. Set to "Anyone with the link can view"
3. Copy the Sheet ID from URL

### Step 5: Get Sheet ID
From the URL:
```
https://docs.google.com/spreadsheets/d/1aW3iG3VzF0HPT9zygstVeGclAHNQkI_fl0qoTSo_mPg/edit
                                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                       This is your SHEET_ID
```

## Data Maintenance

### Adding New Employees
1. Add new row at bottom of sheet
2. Fill in all required fields
3. Save (auto-saves in Google Sheets)
4. No redeployment needed - changes take effect immediately

### Updating Employee Information
1. Locate employee row
2. Update desired fields
3. Save
4. Employee should regenerate signature to see changes

### Removing Employees
- **Option 1**: Delete entire row
- **Option 2**: Move to separate "Inactive" sheet
- **Recommended**: Keep data in archive sheet for records

### Best Practices
- Regularly review and update data
- Remove employees who leave the company
- Standardize title formats
- Keep phone numbers in consistent format
- Backup sheet regularly (File → Make a copy)

## Troubleshooting

### "Employee not found" Error
- Check email spelling in sheet
- Verify no extra spaces
- Ensure email is in Column D
- Check Sheet ID in CONFIG

### Phone Icon Not Showing
- Verify Mobile field (Column F) has data
- Check phone number format (+966...)
- Leave empty if no mobile number

### Special Characters in Names
- Arabic characters: ✅ Supported
- Apostrophes, hyphens: ✅ Supported
- Emojis: ❌ Not recommended

## Security Considerations

- Don't include sensitive data (salaries, personal info)
- Use view-only sharing
- Regularly audit who has access
- Don't share Sheet ID publicly
- Consider separate sheet for external contractors

---

For more help, see [DEPLOYMENT.md](../DEPLOYMENT.md)
