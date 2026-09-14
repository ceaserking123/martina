import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <p>
        {contact.studio} &middot; {contact.email}
      </p>
    </footer>
  );
}
