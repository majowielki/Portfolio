# 📧 EmailJS Template Options

Choose one of these professional email templates for your portfolio contact form:

## 🎨 Template 1: Professional Gradient (Recommended)

**Subject**: `New Portfolio Contact: {{subject}}`

**HTML Content**:
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
                Powered by EmailJS
            </p>
        </div>
    </div>
</body>
</html>
```

---

## 🎯 Template 2: Clean & Simple

**Subject**: `Portfolio Contact: {{subject}}`

**HTML Content**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8f9fa; }
        .container { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: #2563eb; color: white; padding: 30px 25px; text-align: center; }
        .content { padding: 30px 25px; }
        .info-section { background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .message-section { background: #ffffff; padding: 20px; border: 2px solid #e2e8f0; border-radius: 8px; white-space: pre-wrap; margin: 20px 0; }
        .reply-button { background: #2563eb; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 25px 0; font-weight: 600; }
        .footer { background: #f8fafc; padding: 20px; text-align: center; color: #64748b; font-size: 14px; }
        .highlight { color: #2563eb; font-weight: 600; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0; font-size: 24px; font-weight: 600;">📬 New Message</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">From your portfolio website</p>
        </div>
        
        <div class="content">
            <div class="info-section">
                <h3 style="margin: 0 0 15px 0; color: #1e293b;">Contact Information</h3>
                <p style="margin: 5px 0;"><strong>Name:</strong> {{from_name}}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:{{from_email}}" class="highlight">{{from_email}}</a></p>
                <p style="margin: 5px 0;"><strong>Subject:</strong> {{subject}}</p>
            </div>
            
            <h3 style="color: #1e293b; margin: 25px 0 10px 0;">Message:</h3>
            <div class="message-section">{{message}}</div>
            
            <div style="text-align: center;">
                <a href="mailto:{{from_email}}?subject=Re: {{subject}}" class="reply-button">
                    Reply to {{from_name}} →
                </a>
            </div>
        </div>
        
        <div class="footer">
            <p style="margin: 0;">Sent via Portfolio Contact Form</p>
        </div>
    </div>
</body>
</html>
```

---

## 🌟 Template 3: Dark Theme

**Subject**: `[Portfolio] {{subject}}`

**HTML Content**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.6; color: #e2e8f0; max-width: 600px; margin: 0 auto; padding: 20px; background: #0f172a; }
        .container { background: #1e293b; border-radius: 16px; overflow: hidden; border: 1px solid #334155; }
        .header { background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 35px 25px; text-align: center; }
        .content { padding: 30px 25px; }
        .info-card { background: #334155; padding: 24px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #6366f1; }
        .message-box { background: #475569; padding: 24px; border-radius: 12px; white-space: pre-wrap; margin: 20px 0; border: 1px solid #64748b; }
        .reply-btn { background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 10px; display: inline-block; margin: 25px 0; font-weight: 600; box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3); }
        .footer { background: #0f172a; padding: 20px; text-align: center; color: #94a3b8; font-size: 14px; }
        .accent { color: #a855f7; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="color: white; margin: 0; font-size: 26px; font-weight: 700;">⚡ New Contact</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0 0;">Portfolio inquiry received</p>
        </div>
        
        <div class="content">
            <div class="info-card">
                <h3 style="margin: 0 0 16px 0; color: #f1f5f9;">📋 Details</h3>
                <p style="margin: 6px 0; color: #cbd5e1;"><span class="accent">Name:</span> {{from_name}}</p>
                <p style="margin: 6px 0; color: #cbd5e1;"><span class="accent">Email:</span> <a href="mailto:{{from_email}}" style="color: #6366f1;">{{from_email}}</a></p>
                <p style="margin: 6px 0; color: #cbd5e1;"><span class="accent">Subject:</span> {{subject}}</p>
            </div>
            
            <h3 style="color: #f1f5f9; margin: 24px 0 12px 0;">💭 Message</h3>
            <div class="message-box">{{message}}</div>
            
            <div style="text-align: center;">
                <a href="mailto:{{from_email}}?subject=Re: {{subject}}" class="reply-btn">
                    🚀 Reply Now
                </a>
            </div>
        </div>
        
        <div class="footer">
            <p style="margin: 0;">🌐 Portfolio Contact System</p>
        </div>
    </div>
</body>
</html>
```

---

## 🎨 Template 4: Minimalist

**Subject**: `{{subject}} - Portfolio Contact`

**HTML Content**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: Georgia, serif; line-height: 1.7; color: #2d3748; max-width: 580px; margin: 0 auto; padding: 40px 20px; background: #fefefe; }
        .header { border-bottom: 2px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 30px; }
        .title { font-size: 28px; color: #1a202c; margin: 0; font-weight: 400; }
        .subtitle { color: #718096; margin: 8px 0 0 0; font-size: 16px; }
        .section { margin: 25px 0; }
        .label { font-weight: 600; color: #4a5568; display: inline-block; min-width: 70px; }
        .value { color: #2d3748; }
        .message { background: #f7fafc; padding: 25px; border-left: 3px solid #4299e1; border-radius: 0 6px 6px 0; white-space: pre-wrap; font-family: 'Courier New', monospace; margin: 20px 0; }
        .reply-link { color: #4299e1; text-decoration: none; font-weight: 600; border-bottom: 1px dotted #4299e1; }
        .footer { border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 40px; text-align: center; color: #a0aec0; font-size: 14px; }
    </style>
</head>
<body>
    <div class="header">
        <h1 class="title">New Portfolio Inquiry</h1>
        <p class="subtitle">You have received a new message</p>
    </div>
    
    <div class="section">
        <p><span class="label">From:</span> <span class="value">{{from_name}}</span></p>
        <p><span class="label">Email:</span> <span class="value"><a href="mailto:{{from_email}}" class="reply-link">{{from_email}}</a></span></p>
        <p><span class="label">Subject:</span> <span class="value">{{subject}}</span></p>
    </div>
    
    <div class="section">
        <h3 style="color: #2d3748; margin-bottom: 10px;">Message:</h3>
        <div class="message">{{message}}</div>
    </div>
    
    <div class="section" style="text-align: center;">
        <a href="mailto:{{from_email}}?subject=Re: {{subject}}" class="reply-link">
            → Reply to this message
        </a>
    </div>
    
    <div class="footer">
        <p>Sent from your portfolio contact form</p>
    </div>
</body>
</html>
```

---

## 🛠️ How to Use

1. **Copy** one of the templates above
2. **Paste** into your EmailJS template editor
3. **Save** and test the template
4. **Enjoy** professional-looking contact emails!

## 💡 Customization Tips

- **Change colors**: Replace hex codes with your brand colors
- **Add your logo**: Insert `<img>` tag in the header
- **Modify layout**: Adjust padding, margins, and structure
- **Brand consistency**: Match your portfolio's design theme

Choose the template that best matches your portfolio's style! 🎨
