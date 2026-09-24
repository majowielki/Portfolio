import { ChangeEvent, FocusEvent } from "react";

type FieldElement = HTMLInputElement | HTMLTextAreaElement;

interface FormFieldProps {
  name: string;
  label: string;
  value: string;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  multiline?: boolean;
  onChange: (event: ChangeEvent<FieldElement>) => void;
  onBlur: (event: FocusEvent<FieldElement>) => void;
}

const FormField = ({ name, label, error, multiline = false, type = "text", ...props }: FormFieldProps) => {
  const id = `contact-${name}`;
  const errorId = `${id}-error`;
  const fieldProps = {
    id,
    name,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
    className: `w-full rounded-xl border bg-bg/60 px-4 py-3.5 text-text outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-other/40 focus:border-main focus:ring-4 focus:ring-main/15 ${
      error ? "border-red-400/70" : "border-white/10 hover:border-white/20"
    }`,
    ...props,
  };

  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-mono text-xs uppercase tracking-wider text-other">
        {label}
      </label>
      {multiline ? <textarea rows={6} {...fieldProps} className={`${fieldProps.className} resize-none`} /> : <input type={type} {...fieldProps} />}
      {error && (
        <p id={errorId} className="mt-2 flex items-center gap-1.5 text-sm text-red-400">
          <i className="ri-error-warning-line" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
