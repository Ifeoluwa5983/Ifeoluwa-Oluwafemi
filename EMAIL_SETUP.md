# 📧 Email Setup Instructions

Your contact form is now fully functional with email sending! Here's how to set it up:

## Setup Steps

### 1. Get Resend API Key (Free)
1. Visit https://resend.com/signup
2. Sign up for a free account (100 emails/day free)
3. Go to API Keys section
4. Create a new API key
5. Copy your API key

### 2. Add API Key to Environment
Open `.env.local` and replace:
```
RESEND_API_KEY=your_resend_api_key_here
```
With your actual key:
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```

### 3. Restart Dev Server
```bash
# Stop current server (Ctrl+C)
npm run dev
```

### 4. Test the Form
- Visit http://localhost:3000
- Scroll to Contact section
- Fill out and submit the form
- You'll receive emails at: **o.ifeoluwah@gmail.com**

## Features Implemented ✅
- ✉️ Email sending via Resend API
- ✅ Form validation (required fields, email format)
- 🎨 Styled email templates (black & brown theme)
- ⏳ Loading state with spinner animation
- ✅ Success/Error messages with icons
- 🔄 Auto-reset after 5 seconds
- 📧 Reply-to functionality (recipients can reply directly)

## Alternative: Use Custom Domain (Optional)
For production, verify your domain in Resend:
1. Add your domain in Resend dashboard
2. Add DNS records
3. Update `from:` in `/app/api/contact/route.ts` to `Portfolio <contact@yourdomain.com>`

## No API Key Yet?
The form still works! It will show validation errors and UI feedback. Add the API key when ready to actually send emails.

---
**Current recipient**: o.ifeoluwah@gmail.com
