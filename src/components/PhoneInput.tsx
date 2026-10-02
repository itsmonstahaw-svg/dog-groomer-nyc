import * as React from "react";
import { Input, type InputProps } from "@/components/ui/input";

// Digits only, shown as (718) 555-0000 while typing. Exactly 10 digits are required when the field has a value.
export const formatPhone = (raw: string) => {
  let digits = raw.replace(/\D/g, "");
  digits = digits.replace(/^1/, ""); // US area codes never start with 1, so a leading 1 is the country code ("+1 718 ...")
  digits = digits.slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

// US number in E.164 ("+17185550123") so the CRM always stores it as a United States number.
// Returns "" when there aren't exactly 10 digits (after dropping a leading country code 1).
export const toUSE164 = (raw: string) => {
  const digits = raw.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
  return digits.length === 10 ? `+1${digits}` : "";
};

const MESSAGE ="Enter a 10-digit phone number, like (718) 555-0000.";

export const PhoneInput = React.forwardRef<HTMLInputElement, Omit<InputProps, "type" | "value" | "onChange" | "defaultValue">>(
  ({ onInput, ...props }, ref) => {
    const [value, setValue] = React.useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = formatPhone(e.target.value);
      // Reset the field right away so a rejected character never lingers. No maxLength on purpose: it would cut a
      // pasted "+1 (718) 555-0000" short before we get to strip it down to 10 digits.
      e.target.value = formatted;
      setValue(formatted);
      // A partial number is invalid; an empty optional field or a full number is fine.
      e.target.setCustomValidity(formatted && formatted.length !== 14 ? MESSAGE : "");
    };

    return (
      <Input
        {...props}
        ref={ref}
        type="tel"
        inputMode="numeric"
        autoComplete="tel-national"
        pattern="\(\d{3}\) \d{3}-\d{4}"
        title={MESSAGE}
        value={value}
        onChange={handleChange}
        onInput={onInput}
      />
    );
  }
);
PhoneInput.displayName = "PhoneInput";
