/**
 * Sample Configuration File
 *
 * Copy this file and update with your company details
 * This is for reference only - actual config is in src/Code.gs
 */

var CONFIG = {
  // Google Sheet ID containing employee data
  SHEET_ID: 'your-google-sheet-id-here',

  // Company Information
  COMPANY_NAME: 'Your Company Name',
  COMPANY_WEBSITE: 'www.yourcompany.com',
  COMPANY_URL: 'https://www.yourcompany.com',

  // Logo URLs (must be publicly accessible)
  LOGO_URL: 'https://i.ibb.co/your-logo-url.jpg',

  // Office Address
  ADDRESS: 'Office Number, Floor, Building, Street, District, City, Postal Code, Country',

  // Brand Colors
  PRIMARY_COLOR: '#0072bc',      // Main brand color
  SECONDARY_COLOR: '#8b8b00',    // Secondary color

  // Social Media
  LINKEDIN: 'https://linkedin.com/company/yourcompany',

  // Additional Branding
  VISION_2030_URL: 'https://i.ibb.co/your-vision-logo.png'  // Optional
};

/**
 * Icon Configuration
 * These are the icons used in the signature
 */
var ICONS = {
  // Phone icon (blue, iOS style)
  phone: 'https://img.icons8.com/ios-filled/96/0072bc/phone.png',

  // Email icon (Outlook logo)
  email: 'https://img.icons8.com/fluency/96/microsoft-outlook-2019.png',

  // Location icon (Google Maps)
  location: 'https://img.icons8.com/color/96/google-maps-new.png',

  // Website icon (Globe)
  website: 'https://img.icons8.com/ios/96/000000/globe--v1.png',

  // LinkedIn icon
  linkedin: 'https://img.icons8.com/color/96/linkedin.png'
};

/**
 * Styling Configuration
 */
var STYLES = {
  // Icon sizes
  iconSize: 18,            // Icon width/height in pixels
  iconSpacing: 6,          // Space between icons in pixels

  // Typography
  nameSize: 18,            // Name font size
  titleSize: 13,           // Title font size
  nameWeight: 700,         // Name font weight
  titleWeight: 400,        // Title font weight

  // Colors
  nameColor: '#0072bc',    // Name text color
  titleColor: '#555555',   // Title text color
  dividerColor: '#0072bc', // Vertical divider color

  // Spacing
  nameTitleGap: 3,         // Gap between name and title (px)
  titleIconsGap: 12,       // Gap between title and icons (px)
  iconsLogoGap: 10,        // Gap between icons and Vision logo (px)

  // Vision 2030 Logo
  vision2030Width: 115,    // Width in pixels
  vision2030Opacity: 0.95  // Opacity (0-1)
};
