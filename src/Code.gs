/**
 * Three Lines Email Signature Generator
 * Production Version 2.0 - Light Theme with Social Icons
 */

var CONFIG = {
  SHEET_ID: '1aW3iG3VzF0HPT9zygstVeGclAHNQkI_fl0qoTSo_mPg',
  COMPANY_NAME: 'Three Lines',
  COMPANY_WEBSITE: 'www.3lines.com.sa',
  COMPANY_URL: 'https://www.3lines.com.sa',
  LOGO_URL: 'https://i.ibb.co/LLtfRGK/3-Lines-logo-New-page-0001.jpg',
  ADDRESS: 'Office 203, 2nd floor Building #2148, King Abdullah Branch Road, King Faisal Dist. Riyadh 13215, Saudi Arabia',
  PRIMARY_COLOR: '#5c7c3b',
  SECONDARY_COLOR: '#8b8b00',
  // Social Media URLs
  LINKEDIN: 'https://linkedin.com/company/3lines',
  // Vision 2030 Logo
  VISION_2030_URL: 'https://i.ibb.co/7t8PTqKZ/saudi-vision-2030-seeklogo.png'
};

function doGet(e) {
  var email = e.parameter.email ? e.parameter.email.trim() : '';

  if (!email) {
    return HtmlService.createHtmlOutput(getFormPage())
      .setTitle('Email Signature Generator - ' + CONFIG.COMPANY_NAME)
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  if (!isValidEmail(email)) {
    return HtmlService.createHtmlOutput(getErrorPage('Invalid email format.'))
      .setTitle('Error');
  }

  try {
    var user = getUserData(email);
    if (!user) {
      return HtmlService.createHtmlOutput(getErrorPage('Employee not found: ' + email))
        .setTitle('Not Found');
    }

    var signatureHtml = generateSignature(user);
    return HtmlService.createHtmlOutput(getResultPage(signatureHtml, user))
      .setTitle('Your Signature - ' + user.name)
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

  } catch (error) {
    Logger.log('Error: ' + error.message);
    return HtmlService.createHtmlOutput(getErrorPage('System error. Contact IT support.'))
      .setTitle('Error');
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getUserData(email) {
  var sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheets()[0];
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    if (String(data[i][3]).toLowerCase().trim() === email.toLowerCase().trim()) {
      return {
        name: String(data[i][0]).trim(),
        title: String(data[i][1]).trim(),
        department: String(data[i][2]).trim(),
        email: String(data[i][3]).trim(),
        phone: formatPhone(data[i][4]),
        mobile: formatPhone(data[i][5]),
        extension: String(data[i][6]).trim()
      };
    }
  }
  return null;
}

function formatPhone(phone) {
  if (!phone) return '';
  var p = String(phone).trim();
  if (p && !p.startsWith('+') && p.match(/^[0-9]/)) p = '+' + p;
  return p;
}

function generateSignature(user) {
  // Professional Icons (enhanced version)
  var mobileIcon = 'https://img.icons8.com/ios-filled/96/0072bc/phone.png';  // Blue phone icon
  var emailIcon = 'https://img.icons8.com/fluency/96/microsoft-outlook-2019.png';  // New Outlook 2024
  var locationIcon = 'https://img.icons8.com/color/96/google-maps-new.png';  // Google Maps
  var webIcon = 'https://img.icons8.com/ios/96/000000/globe--v1.png';  // Globe with black outline
  var liIcon = 'https://img.icons8.com/color/96/linkedin.png';  // LinkedIn

  // Build address for Google Maps link
  var addressText = CONFIG.ADDRESS;
  var mapsUrl = 'https://maps.google.com/?q=' + encodeURIComponent(addressText);

  return '<!--[if mso]><table cellpadding="0" cellspacing="0" border="0" width="550" bgcolor="#ffffff"><tr><td><![endif]-->' +
    '<table cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;max-width:550px;width:100%;background-color:#ffffff;">' +
    '<tr>' +

    // Logo Column - vertically centered
    '<td width="130" valign="middle" style="padding:12px 15px 12px 0;vertical-align:middle;background-color:#ffffff;">' +
    '<a href="' + CONFIG.COMPANY_URL + '" target="_blank" style="text-decoration:none;">' +
    '<img src="' + CONFIG.LOGO_URL + '" alt="' + CONFIG.COMPANY_NAME + '" width="110" style="display:block;border:0;background-color:#ffffff;">' +
    '</a>' +
    '</td>' +

    // Divider - Brand Blue
    '<td width="2" style="background-color:#0072bc;width:2px;"></td>' +

    // Info Column - Enhanced spacing
    '<td valign="middle" style="padding:14px 0 14px 18px;vertical-align:middle;background-color:#ffffff;">' +

    // Name - Enhanced styling
    '<p style="margin:0 0 3px 0;font-size:18px;font-weight:700;color:#0072bc;font-family:Arial,Helvetica,sans-serif;letter-spacing:0.5px;line-height:1.2;">' + user.name + '</p>' +
    // Title - Better contrast
    '<p style="margin:0 0 12px 0;font-size:13px;color:#555555;font-family:Arial,Helvetica,sans-serif;font-weight:400;line-height:1.4;">' + user.title + '</p>' +

    // Contact Icons Row - Enhanced (18px icons, better spacing)
    '<table cellpadding="0" cellspacing="0" border="0" style="margin-top:2px;">' +
    '<tr>' +
    // Mobile
    (user.mobile ? '<td style="padding-right:6px;">' +
    '<a href="tel:' + user.mobile.replace(/\s/g,'') + '" title="Call: ' + user.mobile + '" style="text-decoration:none;">' +
    '<img src="' + mobileIcon + '" width="18" height="18" alt="Phone" title="' + user.mobile + '" style="border:0;display:block;opacity:0.9;">' +
    '</a></td>' : '') +
    // Email
    '<td style="padding-right:6px;">' +
    '<a href="mailto:' + user.email + '" title="Email: ' + user.email + '" style="text-decoration:none;">' +
    '<img src="' + emailIcon + '" width="18" height="18" alt="Email" title="' + user.email + '" style="border:0;display:block;opacity:0.9;">' +
    '</a></td>' +
    // Location
    '<td style="padding-right:6px;">' +
    '<a href="' + mapsUrl + '" target="_blank" title="Location" style="text-decoration:none;">' +
    '<img src="' + locationIcon + '" width="18" height="18" alt="Location" title="View on Google Maps" style="border:0;display:block;opacity:0.9;">' +
    '</a></td>' +
    // Website
    '<td style="padding-right:6px;">' +
    '<a href="' + CONFIG.COMPANY_URL + '" target="_blank" title="Website: ' + CONFIG.COMPANY_WEBSITE + '" style="text-decoration:none;">' +
    '<img src="' + webIcon + '" width="18" height="18" alt="Website" title="' + CONFIG.COMPANY_WEBSITE + '" style="border:0;display:block;opacity:0.9;">' +
    '</a></td>' +
    // LinkedIn
    '<td>' +
    '<a href="' + CONFIG.LINKEDIN + '" target="_blank" title="Connect on LinkedIn" style="text-decoration:none;">' +
    '<img src="' + liIcon + '" width="18" height="18" alt="LinkedIn" title="LinkedIn" style="border:0;display:block;opacity:0.9;">' +
    '</a></td>' +
    '</tr></table>' +

    // Vision 2030 Logo - enhanced spacing
    '<table cellpadding="0" cellspacing="0" border="0" style="margin-top:10px;">' +
    '<tr><td style="background-color:#ffffff;">' +
    '<img src="' + CONFIG.VISION_2030_URL + '" alt="Saudi Vision 2030" width="115" style="display:block;border:0;opacity:0.95;">' +
    '</td></tr></table>' +

    '</td></tr></table>' +
    '<!--[if mso]></td></tr></table><![endif]-->';
}

function getFormPage() {
  return '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">' +
    '<title>Email Signature Generator</title>' +
    '<style>' +
    '*{box-sizing:border-box;margin:0;padding:0}' +
    'body{font-family:Arial,sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}' +
    '.card{background:#fff;padding:40px;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,0.3);max-width:420px;width:100%;text-align:center}' +
    '.logo{max-width:180px;margin-bottom:20px}' +
    'h1{color:#333;font-size:22px;margin-bottom:8px}' +
    '.sub{color:#666;font-size:14px;margin-bottom:25px}' +
    'input{width:100%;padding:14px;border:2px solid #e0e0e0;border-radius:10px;font-size:15px;margin-bottom:15px;transition:all 0.3s}' +
    'input:focus{outline:none;border-color:#667eea;box-shadow:0 0 0 3px rgba(102,126,234,0.2)}' +
    'button{width:100%;padding:14px;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;border-radius:10px;font-size:16px;font-weight:600;cursor:pointer;transition:transform 0.2s,box-shadow 0.2s}' +
    'button:hover{transform:translateY(-2px);box-shadow:0 5px 20px rgba(102,126,234,0.4)}' +
    '.footer{margin-top:20px;font-size:12px;color:#999}' +
    '</style></head><body>' +
    '<div class="card">' +
    '<img src="' + CONFIG.LOGO_URL + '" class="logo" alt="Logo">' +
    '<h1>Email Signature Generator</h1>' +
    '<p class="sub">Enter your company email to generate your signature</p>' +
    '<form method="get"><input type="email" name="email" placeholder="your.name@3lines.com.sa" required>' +
    '<button type="submit">Generate Signature</button></form>' +
    '<p class="footer">Contact IT if you need help</p>' +
    '</div></body></html>';
}

function getResultPage(sig, user) {
  return '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">' +
    '<title>Your Signature</title>' +
    '<style>' +
    '*{box-sizing:border-box;margin:0;padding:0}' +
    'body{font-family:Arial,sans-serif;background:#f0f2f5;padding:30px 20px}' +
    '.container{max-width:750px;margin:0 auto;background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.1);overflow:hidden}' +
    '.header{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:25px;text-align:center}' +
    '.header h1{font-size:20px;margin-bottom:5px}' +
    '.header p{opacity:0.9;font-size:14px}' +
    '.content{padding:25px}' +
    '.preview{background:#ffffff;border:1px solid #e0e0e0;border-radius:8px;padding:20px;margin:15px 0}' +
    '.btn{display:inline-block;padding:12px 25px;background:#667eea;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;margin-right:10px;text-decoration:none;transition:all 0.3s}' +
    '.btn:hover{background:#5a6fd6}' +
    '.btn.success{background:#28a745}' +
    '.btn-outline{background:#fff;color:#667eea;border:2px solid #667eea}' +
    '.btn-outline:hover{background:#667eea;color:#fff}' +
    '.instructions{background:#f8f9fa;border-radius:8px;padding:20px;margin-top:20px}' +
    '.instructions h3{color:#333;margin-bottom:12px;font-size:15px}' +
    '.instructions ol{padding-left:20px;color:#555;line-height:1.9;font-size:14px}' +
    '.back{display:inline-block;margin-top:15px;color:#667eea;text-decoration:none;font-size:14px}' +
    '</style></head><body>' +
    '<div class="container">' +
    '<div class="header"><h1>Hello, ' + user.name + '!</h1><p>Your signature is ready</p></div>' +
    '<div class="content">' +
    '<p style="font-size:14px;color:#333;margin-bottom:10px;font-weight:600">Preview:</p>' +
    '<div class="preview" id="sig">' + sig + '</div>' +
    '<button class="btn" id="copyBtn" onclick="copyIt()">Copy Signature</button>' +
    '<button class="btn btn-outline" onclick="selectIt()">Select All</button>' +
    '<div class="instructions">' +
    '<h3>How to use in Outlook:</h3>' +
    '<ol><li>Click "Copy Signature" above</li><li>Open Outlook → File → Options → Mail → Signatures</li><li>Click New, name it, then Ctrl+V to paste</li><li>Click OK to save</li></ol>' +
    '</div>' +
    '<a href="?" class="back">← Generate another</a>' +
    '</div></div>' +
    '<script>' +
    'function copyIt(){var s=document.getElementById("sig"),r=document.createRange();r.selectNodeContents(s);var sel=window.getSelection();sel.removeAllRanges();sel.addRange(r);' +
    'try{document.execCommand("copy");var b=document.getElementById("copyBtn");b.textContent="Copied!";b.classList.add("success");setTimeout(function(){b.textContent="Copy Signature";b.classList.remove("success")},2000)}catch(e){alert("Press Ctrl+C")}sel.removeAllRanges()}' +
    'function selectIt(){var s=document.getElementById("sig"),r=document.createRange();r.selectNodeContents(s);var sel=window.getSelection();sel.removeAllRanges();sel.addRange(r)}' +
    '</script></body></html>';
}

function getErrorPage(msg) {
  return '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">' +
    '<style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;background:#f0f2f5;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}' +
    '.card{background:#fff;padding:40px;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.1);max-width:400px;text-align:center}' +
    '.icon{font-size:48px;margin-bottom:15px}h1{color:#dc3545;font-size:20px;margin-bottom:10px}p{color:#666;margin-bottom:20px}' +
    '.btn{display:inline-block;padding:12px 30px;background:#667eea;color:#fff;text-decoration:none;border-radius:8px;font-weight:600}</style></head>' +
    '<body><div class="card"><div class="icon">⚠️</div><h1>Error</h1><p>' + msg + '</p><a href="?" class="btn">Try Again</a></div></body></html>';
}
