export default function RelayMark({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 30V12l12 11 12-11v18"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="10" r="2.5" fill="#D0FF42" />
      <circle cx="32" cy="10" r="2.5" fill="#D0FF42" />
    </svg>
  );
}
