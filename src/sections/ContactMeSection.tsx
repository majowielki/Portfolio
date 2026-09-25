import { ChangeEvent, CSSProperties, FocusEvent, FormEvent, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/Button";
import CopyButton from "@/components/ui/CopyButton";
import FormField from "@/components/ui/FormField";
import SectionHeading from "@/components/ui/SectionHeading";
import { EMAILJS_CONFIG, EmailTemplateParams } from "@/config/emailjs";
import { profile, socials } from "@/content/profile";
import { useLocalTime } from "@/hooks/useLocalTime";
import { ContactFormData, ContactFormErrors } from "@/types/types";
import { trackGlow } from "@/utils/glow";

type SubmitStatus = "idle" | "success" | "error";
type FieldElement = HTMLInputElement | HTMLTextAreaElement;

const emptyForm: ContactFormData = { name: "", email: "", subject: "", message: "" };

const validateField = (name: keyof ContactFormData, value: string): string | undefined => {
  const trimmed = value.trim();

  switch (name) {
    case "name":
      if (!trimmed) return "Name is required";
      if (trimmed.length < 2) return "Name must be at least 2 characters";
      return undefined;
    case "email":
      if (!trimmed) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address";
      return undefined;
    case "subject":
      if (!trimmed) return "Subject is required";
      if (trimmed.length < 5) return "Subject must be at least 5 characters";
      return undefined;
    case "message":
      if (!trimmed) return "Message is required";
      if (trimmed.length < 10) return "Message must be at least 10 characters";
      return undefined;
  }
};

interface ContactRowProps {
  icon: string;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  copyValue?: string;
}

const ContactRow = ({ icon, label, value, href, external, copyValue }: ContactRowProps) => (
  <li className="group relative flex items-center gap-4 px-4 py-4 transition-colors duration-300 first:rounded-t-3xl last:rounded-b-3xl hover:bg-line/[0.025] sm:px-5">
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-main/10 text-xl text-main ring-1 ring-inset ring-main/20">
      <i className={icon} aria-hidden="true" />
    </span>
    <span className="min-w-0 flex-1">
      <span className="block font-mono text-[11px] uppercase tracking-wider text-other/70">{label}</span>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="block truncate font-medium transition-colors after:absolute after:inset-0 group-hover:text-main"
        >
          {value}
        </a>
      ) : (
        <span className="block truncate font-medium">{value}</span>
      )}
    </span>
    {copyValue && <CopyButton value={copyValue} label={label.toLowerCase()} />}
    {external && (
      <i
        className="ri-arrow-right-up-line pointer-events-none text-lg text-other transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-main"
        aria-hidden="true"
      />
    )}
  </li>
);

const ContactMeSection = () => {
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const statusTimeout = useRef<number>();
  const localTime = useLocalTime(profile.timeZone);

  useEffect(() => () => window.clearTimeout(statusTimeout.current), []);

  const showStatus = (status: SubmitStatus) => {
    window.clearTimeout(statusTimeout.current);
    setSubmitStatus(status);
    statusTimeout.current = window.setTimeout(() => setSubmitStatus("idle"), 6000);
  };

  const setFieldError = (name: keyof ContactFormData, value: string) =>
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));

  const handleChange = (event: ChangeEvent<FieldElement>) => {
    const name = event.target.name as keyof ContactFormData;
    const { value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (wasSubmitted || errors[name]) {
      setFieldError(name, value);
    }
  };

  const handleBlur = (event: FocusEvent<FieldElement>) => {
    const name = event.target.name as keyof ContactFormData;
    if (wasSubmitted || event.target.value.trim()) {
      setFieldError(name, event.target.value);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setWasSubmitted(true);

    const newErrors: ContactFormErrors = {};
    (Object.keys(formData) as (keyof ContactFormData)[]).forEach((field) => {
      newErrors[field] = validateField(field, formData[field]);
    });
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setIsSubmitting(true);
    try {
      const templateParams: EmailTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };
      await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams, EMAILJS_CONFIG.publicKey);

      setFormData(emptyForm);
      setWasSubmitted(false);
      showStatus("success");
    } catch (error) {
      console.error("Email sending failed:", error);
      showStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldProps = (name: keyof ContactFormData) => ({
    name,
    value: formData[name],
    error: errors[name],
    onChange: handleChange,
    onBlur: handleBlur,
  });

  const professionalSocials = socials.filter((social) => social.label !== "Facebook");

  return (
    <section id="Contact" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading index="04" label="Contact">
          Contact <span className="text-main">Me</span>
        </SectionHeading>

        <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div data-reveal>
            <h3 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Let’s build something <span className="text-main">together</span>.
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-other">
              Have a project in mind, a job opportunity or just want to say hi? Send me a message or reach out
              directly.
            </p>

            <ul
              data-glow
              onPointerMove={trackGlow}
              className="glow-card mt-10 divide-y divide-line/[0.07] rounded-3xl border border-line/10 bg-card/50"
            >
              <ContactRow
                icon="ri-mail-line"
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
                copyValue={profile.email}
              />
              <ContactRow
                icon="ri-phone-line"
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                copyValue={profile.phone}
              />
              <ContactRow icon="ri-map-pin-line" label="Location" value={`${profile.location} · ${localTime}`} />
              {professionalSocials.map((social) => (
                <ContactRow
                  key={social.label}
                  icon={social.icon}
                  label={social.label}
                  value={decodeURIComponent(social.href.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, ""))}
                  href={social.href}
                  external
                />
              ))}
            </ul>
          </div>

          <form
            noValidate
            onSubmit={handleSubmit}
            onPointerMove={trackGlow}
            data-glow
            data-reveal
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
            className="glow-card space-y-5 self-start rounded-3xl border border-line/10 bg-card/50 p-6 shadow-[0_0_48px_-18px_rgb(var(--main-color)/0.45)] md:p-8"
          >
            <p className="eyebrow flex items-center gap-3">
              <span className="accent-dash" aria-hidden="true" />
              Send a message
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              <FormField label="Name" placeholder="John Doe" autoComplete="name" {...fieldProps("name")} />
              <FormField
                label="Email"
                type="email"
                placeholder="john@example.com"
                autoComplete="email"
                {...fieldProps("email")}
              />
            </div>
            <FormField label="Subject" placeholder="What is it about?" {...fieldProps("subject")} />
            <FormField label="Message" placeholder="Tell me about your idea…" multiline {...fieldProps("message")} />

            <div className="flex flex-col-reverse gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <div role="status" aria-live="polite" className="text-sm">
                {submitStatus === "success" && (
                  <p className="flex items-center gap-2 text-emerald-400">
                    <i className="ri-checkbox-circle-line text-lg" aria-hidden="true" />
                    Message sent! I’ll get back to you soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="flex items-center gap-2 text-red-400">
                    <i className="ri-error-warning-line text-lg" aria-hidden="true" />
                    Sending failed. Please try again or email me directly.
                  </p>
                )}
                {submitStatus === "idle" && (
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-other/60">
                    Goes straight to my inbox
                  </p>
                )}
              </div>

              <Button type="submit" disabled={isSubmitting} className="shrink-0">
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <i
                      className="ri-send-plane-2-line group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMeSection;
