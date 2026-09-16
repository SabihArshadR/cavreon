type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.88 9.88 0 0 0 12.04 2Zm0 1.82c2.17 0 4.2.84 5.74 2.38a8.07 8.07 0 0 1 2.38 5.76c0 4.5-3.66 8.14-8.14 8.14a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.1.8.82-3.02-.2-.3a8.1 8.1 0 0 1-1.24-4.3c0-4.5 3.66-8.14 8.22-8.14Zm-2.4 4.06c-.18 0-.46.06-.7.32-.24.26-.92.9-.92 2.18s.94 2.52 1.08 2.7c.14.18 1.84 2.82 4.48 3.86.62.26 1.1.42 1.48.54.62.2 1.2.17 1.64.1.5-.07 1.54-.62 1.76-1.24.22-.62.22-1.14.16-1.25-.07-.11-.25-.18-.52-.31-.26-.14-1.54-.76-1.78-.85-.24-.09-.42-.13-.6.13-.17.26-.67.85-.83 1.03-.15.18-.3.2-.56.07-.27-.14-1.12-.42-2.14-1.33-.79-.7-1.32-1.57-1.48-1.84-.15-.26-.01-.4.12-.53.12-.12.26-.31.4-.46.13-.16.17-.27.26-.45.09-.18.05-.34-.02-.48-.07-.13-.6-1.44-.82-1.97-.21-.51-.43-.44-.6-.45h-.4Z"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect {...base} x="2.75" y="4.75" width="18.5" height="14.5" rx="2.5" />
      <path {...base} d="m3.5 7 7.4 5.4a2 2 0 0 0 2.2 0L20.5 7" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...base} d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...base} d="M3.5 7h17M3.5 12h17M3.5 17h17" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...base} d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...base} d="m4.5 12.5 4.5 4.5 10.5-11" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        {...base}
        d="M6.2 3.5h2.3l1.6 4-2 1.4a12.5 12.5 0 0 0 6 6l1.4-2 4 1.6v2.3a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z"
      />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...base} d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle {...base} cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function FactoryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...base} d="M3 20V10.5l5.5 3.5V10.5L14 14V7l7 4v9z" />
      <path {...base} d="M3 20h18" />
    </svg>
  );
}
