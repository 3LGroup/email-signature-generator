# Changelog

All notable changes to the Three Lines Email Signature Generator will be documented in this file.

## [2.0.0] - 2024-01-31

### Added
- Enhanced typography with larger, bolder name (18px, weight 700)
- Improved title styling (13px with better color contrast)
- Increased icon size from 16px to 18px for better visibility
- Better spacing between all elements
- Subtle opacity effects on icons (0.9) for polished look
- Vision 2030 logo extended to 115px width
- Improved padding in info column (14px/18px)

### Changed
- Updated Outlook icon to new 2024 fluency style
- Switched phone icon to blue (#0072bc) iOS-filled style
- Enhanced icon spacing from 4px to 6px
- Better color contrast for title text (#555555)
- Increased letter-spacing for name (0.5px)
- Improved line heights for better readability

### Technical
- Added opacity styling to all icons
- Enhanced MSO (Outlook) compatibility
- Optimized table-based layout for email clients
- Better vertical alignment across elements

## [1.5.0] - 2024-01-30

### Added
- Vision 2030 logo integration
- Blue vertical divider between logo and info
- Hover tooltips on all icons
- Click actions for all contact icons

### Changed
- Icon size reduced to 16px (from 18px)
- Compact spacing (4px between icons)
- Updated to icon-only design (removed text labels)

### Fixed
- Google Drive logo URL issues (switched to imgbb hosting)
- Icon display issues in various email clients
- Background consistency across all table cells

## [1.0.0] - 2024-01-22

### Added
- Initial release
- Google Sheets integration
- Web app deployment capability
- Email signature generation
- Support for multiple employees
- Copy-to-clipboard functionality
- Outlook usage instructions
- Error handling for invalid emails and missing employees

### Features
- Company logo display
- Employee name and title
- Contact icons (phone, email, location, website, LinkedIn)
- Responsive design
- Email client compatibility (Outlook, Gmail, Apple Mail)

### Technical
- Google Apps Script backend
- HTML/CSS email-compatible markup
- Table-based layout for maximum compatibility
- MSO conditionals for Outlook
- Icons8 CDN for professional icons

---

## Version History Summary

- **2.0.0** - Enhanced design with better typography and spacing
- **1.5.0** - Vision 2030 integration and compact icon layout
- **1.0.0** - Initial production release

## Upgrade Notes

### Upgrading from 1.x to 2.0

1. Replace entire `Code.gs` content with new version
2. No configuration changes needed (CONFIG remains the same)
3. Redeploy with new version number
4. Test with sample employee email
5. Verify icons and logos display correctly

### Breaking Changes

- None (fully backwards compatible)

## Future Roadmap

### Planned for 3.0

- [ ] Multi-language support
- [ ] Multiple signature templates
- [ ] Admin dashboard
- [ ] Bulk signature generation
- [ ] Custom icon uploads
- [ ] Dark mode option

### Under Consideration

- Integration with HR systems
- Automatic signature sync to email clients
- QR code generation for contact info
- Mobile-optimized signature version
- Analytics tracking for signature views

---

Last Updated: January 31, 2024
