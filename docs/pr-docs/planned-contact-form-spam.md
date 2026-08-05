# PR planned: Reduce contact form spam

Status: planned
Branch: `fix/contact-form-spam`

## Goal

Reduce unsolicited employment messages from the static contact form without changing the site's hosting architecture.

## Summary

- [x] Re-enable FormSubmit's built-in spam protection.
- [x] Add FormSubmit's honeypot and a short recruitment-message blacklist.
- [x] Remove file attachments while ClinPharmStats is not hiring.
- [x] Clearly state that employment inquiries are not accepted.
- [x] Add a focused regression test and verify the production build.

This change intentionally keeps the existing static GitHub Pages/FormSubmit architecture.

