import { useState } from "react";
import emailjs from '@emailjs/browser';
import Button from "@/components/buttons/Button";
import { ContactFormData, ContactFormErrors } from "@/types/types";
import { EMAILJS_CONFIG, EmailTemplateParams } from "@/config/emailjs";
import SectionTitle from "@/components/custom/SectionTitle";

const ContactMe = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateField = (name: keyof ContactFormData, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) return 'Please enter a valid email address';
        }
        return undefined;
      
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 5) return 'Subject must be at least 5 characters';
        return undefined;
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return undefined;
      
      default:
        return undefined;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof ContactFormData;
    
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));

    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: undefined
      }));
    }

    // Real-time validation (optional - you can remove this if you prefer validation only on submit)
    const error = validateField(fieldName, value);
    if (error) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: error
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof ContactFormData>).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Check if EmailJS is configured
      if (EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID') {
        // Show configuration message if not set up
        alert('📧 EmailJS not configured yet!\n\nTo enable email sending:\n1. Go to https://www.emailjs.com/\n2. Create an account\n3. Update src/config/emailjs.ts with your credentials\n\nFor now, check the console to see the form data.');
        console.log('Form data that would be sent:', formData);
        throw new Error('EmailJS not configured');
      }

      // Prepare email template parameters
      const templateParams: EmailTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'your-email@example.com', // Replace with your email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      console.log('Email sent successfully:', response);
      
      // Reset form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitStatus('success');
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-12"
      id="Contact"
    >
      <div className="w-full flex justify-center mb-12 md:mb-16" data-aos="fade-down">
        <SectionTitle>
          Contact <span className="text-main">Me</span>
        </SectionTitle>
      </div>
      
  {/* Constrained container for messages + form */}
  <div className="w-full max-w-[900px] mx-auto space-y-6 px-6 sm:px-8">
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
            ✅ Email sent successfully! I'll get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center">
            ❌ Failed to send email. Please try again or contact me directly.
          </div>
        )}

        <form
          className="relative w-full bg-transparent mt-0 md:mt-2"
          autoComplete="off"
          onSubmit={handleSubmit}
          data-aos="zoom-in"
        >
           {/* Name Field */}
           <div className="mb-5">
             <input
               type="text"
               name="name"
               placeholder="Your name"
               value={formData.name}
               onChange={handleInputChange}
               className={`w-full p-5 border-none outline-none shadow-[0_0_5px_rgb(var(--main-color))] bg-[#2d343f] text-text rounded-lg placeholder:text-other placeholder:text-[15px] transition ${
                 errors.name ? 'shadow-[0_0_5px_#ef4444]' : ''
               }`}
             />
             {errors.name && (
               <p className="text-red-400 text-sm mt-2 ml-2">⚠️ {errors.name}</p>
             )}
           </div>

          {/* Email Field */}
          <div className="mb-5">
            <input
              type="email"
              name="email"
              placeholder="Email Address..."
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full p-5 border-none outline-none shadow-[0_0_5px_rgb(var(--main-color))] bg-[#2d343f] text-text rounded-lg placeholder:text-other placeholder:text-[15px] transition ${
                errors.email ? 'shadow-[0_0_5px_#ef4444]' : ''
              }`}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-2 ml-2">⚠️ {errors.email}</p>
            )}
          </div>

          {/* Subject Field */}
          <div className="mb-5">
            <input
              type="text"
              name="subject"
              placeholder="Subject..."
              value={formData.subject}
              onChange={handleInputChange}
              className={`w-full p-5 border-none outline-none shadow-[0_0_5px_rgb(var(--main-color))] bg-[#2d343f] text-text rounded-lg placeholder:text-other placeholder:text-[15px] transition ${
                errors.subject ? 'shadow-[0_0_5px_#ef4444]' : ''
              }`}
            />
            {errors.subject && (
              <p className="text-red-400 text-sm mt-2 ml-2">⚠️ {errors.subject}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-5">
            <textarea
              name="message"
              cols={30}
              rows={7}
              placeholder="Write Message Here."
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full p-5 border-none outline-none shadow-[0_0_5px_rgb(var(--main-color))] bg-[#2d343f] text-text rounded-lg placeholder:text-other placeholder:text-[15px] transition resize-none ${
                errors.message ? 'shadow-[0_0_5px_#ef4444]' : ''
              }`}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-2 ml-2">⚠️ {errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className={isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></div>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;