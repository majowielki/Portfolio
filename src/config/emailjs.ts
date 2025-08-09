// EmailJS Configuration
// You can use environment variables (recommended) or hardcode the values

export const EMAILJS_CONFIG = {
  serviceId: 'service_exx2pmb',
  templateId: 'template_jsmmwmn',
  publicKey: 's-tIYmiE1BAWVcJic',
};

// Template variables that will be sent to EmailJS
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email?: string; // Optional: specify recipient email
}
