"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error" | "unconfigured">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };
    if (!data.name || !data.email || !data.message) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status === 503) {
        setStatus("unconfigured");
        return;
      }
      if (!res.ok) throw new Error("failed");
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cname">Name</label>
        <input id="cname" name="name" type="text" required />
      </div>
      <div>
        <label htmlFor="cemail">Email</label>
        <input id="cemail" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="cmsg">Message</label>
        <textarea id="cmsg" name="message" required />
      </div>
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "ok" && (
        <p className="formNote ok">Message sent — thank you. She replies personally to every inquiry.</p>
      )}
      {status === "unconfigured" && (
        <p className="formNote">
          This form isn&rsquo;t connected to an email service yet — please email martinaokoro562@gmail.com
          directly. (See README.md → &ldquo;Wiring up the contact form&rdquo;.)
        </p>
      )}
      {status === "error" && (
        <p className="formNote">Something went wrong sending that. Please email martinaokoro562@gmail.com directly.</p>
      )}
    </form>
  );
}
