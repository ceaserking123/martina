// The recurring "registration mark" motif used across placeholders — a nod to
// printmaking plate registration marks, tying every empty-image state back to the subject.
export default function PlateIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="104" height="104" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <line x1="8" y1="60" x2="112" y2="60" stroke="currentColor" strokeWidth="1" />
      <line x1="60" y1="8" x2="60" y2="112" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
