# 📧 EmailJS Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended for personal)
   - **Outlook** 
   - **Yahoo**
   - Or any SMTP service
4. Follow the connection steps
5. **Copy the Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. **Template Name**: `Portfolio Contact Form`
4. **Subject**: `New Portfolio Contact: {{subject}}`
5. **Content**: Use this professional HTML template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Portfolio Contact</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #f9f9f9;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 300;">
                📧 New Portfolio Contact
            </h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
                Someone reached out through your portfolio website
            </p>
        </div>

        <!-- Main Content -->
        <div style="background-color: white; padding: 40px 30px;">
            <!-- Contact Info Card -->
            <div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin-bottom: 30px; border-radius: 0 8px 8px 0;">
                <h2 style="margin: 0 0 15px 0; color: #333; font-size: 20px;">
                    👤 Contact Information
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #555; width: 80px;">Name:</td>
                        <td style="padding: 8px 0; color: #333;">{{from_name}}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #555;">Email:</td>
                        <td style="padding: 8px 0;">
                            <a href="mailto:{{from_email}}" style="color: #667eea; text-decoration: none; font-weight: 500;">
                                {{from_email}}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: 600; color: #555;">Subject:</td>
                        <td style="padding: 8px 0; color: #333; font-weight: 500;">{{subject}}</td>
                    </tr>
                </table>
            </div>

            <!-- Message Content -->
            <div style="margin-bottom: 30px;">
                <h2 style="margin: 0 0 15px 0; color: #333; font-size: 20px;">
                    💬 Message
                </h2>
                <div style="background-color: #ffffff; border: 2px solid #e9ecef; border-radius: 8px; padding: 20px; white-space: pre-wrap; font-size: 16px; line-height: 1.6;">{{message}}</div>
            </div>

            <!-- Quick Actions -->
            <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:{{from_email}}?subject=Re: {{subject}}" 
                   style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);">
                    ✉️ Reply to {{from_name}}
                </a>
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
            <p style="margin: 0; color: #6c757d; font-size: 14px;">
                🌐 This message was sent through your portfolio contact form
            </p>
            <p style="margin: 5px 0 0 0; color: #6c757d; font-size: 12px;">
                Powered by EmailJS • {{Date}}
            </p>
        </div>
    </div>
</body>
</html>
```

**Alternative: Simple but Clean Template** (if you prefer less styling):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #667eea; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea; }
        .message-box { background: white; padding: 20px; border-radius: 8px; border: 1px solid #ddd; white-space: pre-wrap; }
        .reply-btn { background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="header">
        <h1>📧 New Portfolio Contact</h1>
        <p>Someone reached out through your website</p>
    </div>
    
    <div class="content">
        <div class="info-box">
            <h3>👤 Contact Details</h3>
            <p><strong>Name:</strong> {{from_name}}</p>
            <p><strong>Email:</strong> <a href="mailto:{{from_email}}">{{from_email}}</a></p>
            <p><strong>Subject:</strong> {{subject}}</p>
        </div>
        
        <h3>💬 Message:</h3>
        <div class="message-box">{{message}}</div>
        
        <div style="text-align: center;">
            <a href="mailto:{{from_email}}?subject=Re: {{subject}}" class="reply-btn">
                ✉️ Reply to {{from_name}}
            </a>
        </div>
        
        <p style="text-align: center; color: #666; font-size: 12px; margin-top: 30px;">
            🌐 Sent via Portfolio Contact Form
        </p>
    </div>
</body>
</html>
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (e.g., `abcdef123456`)

### Step 5: Update Configuration
Replace the values in `src/config/emailjs.ts`:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'service_abc123',    // Your Service ID
  templateId: 'template_xyz789',  // Your Template ID  
  publicKey: 'abcdef123456',      // Your Public Key
};
```

### Step 6: Test the Form
1. Save the configuration
2. Restart your dev server: `npm run dev`
3. Fill out and submit the contact form
4. Check your email inbox!

## 🎯 Email Template Variables

These variables are automatically filled from your form:
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content

## 🔧 Troubleshooting

**Form shows "EmailJS not configured":**
- Make sure you updated all 3 values in `emailjs.ts`
- Restart your development server

**Emails not arriving:**
- Check spam/junk folder
- Verify email service is connected in EmailJS dashboard
- Test template in EmailJS dashboard first

**"Invalid template ID" error:**
- Double-check your template ID
- Make sure template is published (not draft)

## 📊 Free Tier Limits
- **200 emails/month** - Perfect for portfolio sites
- No credit card required
- Upgrade available if you need more

That's it! Your contact form will now send real emails! 🎉
