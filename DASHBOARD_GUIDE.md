# Mukasa Transport Service - Dashboard Guide

## What's New

### 1. Updated Landing Page

- **Background Image**: The hero section now features a beautiful car-related background image with opacity overlay
- **Better Visibility**: Text is now clearly visible over the background image
- **Enhanced Design**: The background is fixed and covers the full viewport for a more immersive experience

### 2. Content Management Dashboard

- **Admin Dashboard**: A new `admin-dashboard.html` file for easy content management
- **Easy Editing**: Click "Edit" buttons to modify website content without coding
- **Real-time Preview**: See changes before saving (in development mode)

## How to Use the Dashboard

1. **Access the Dashboard**: Click "Dashboard" in the navigation menu or visit `admin-dashboard.html`

2. **Edit Content**:
   - **Hero Section**: Update main title, subtitle, and call-to-action text
   - **Contact Info**: Change phone, email, and address
   - **Company Info**: Modify company description and details
   - **Settings**: Adjust colors and theme settings

3. **Save Changes**: Click "Save Changes" to apply modifications

## Features

- **Responsive Design**: Works on all devices
- **User-Friendly Interface**: Simple forms for content editing
- **Visual Feedback**: Hover effects and clear navigation
- **Secure Access**: Admin-only access (add authentication as needed)

## Technical Notes

- Background image: High-quality Unsplash image with opacity overlay
- CSS Variables: Easy theme customization
- Modal Interface: Clean editing experience
- Local Storage Ready: Can be extended to save changes locally

## Next Steps

1. Add user authentication for the dashboard
2. Connect to a backend API for persistent storage
3. Add more content sections (testimonials, pricing, etc.)
4. Implement live preview functionality
5. Add backup/restore features

## File Structure

```
Mukasa-Transport-service/
├── index.html              # Main landing page (updated)
├── admin-dashboard.html    # Content management dashboard (new)
├── dashboard.html          # Existing full admin dashboard
├── styles.css              # Updated with background image
└── ...other files
```
