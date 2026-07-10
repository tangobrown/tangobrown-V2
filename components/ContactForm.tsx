"use client";

import { useState } from "react";
import ArrowUpRight from "./ArrowUpRight";

// Formspree endpoint — swap the ID here if a different form is provisioned.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkoldveb";

type Note = { text: string; ok: boolean } | null;

export default function ContactForm() {
  const [note, setNote] = useState<Note>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();
    const gotcha = String(data.get("_gotcha") || ""); // honeypot (bots fill hidden fields)
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailOk || !message) {
      setNote({
        text: "Please add your name, a valid email and a short message.",
        ok: false,
      });
      return;
    }
    // If the honeypot is filled, silently succeed — don't tip bots off.
    if (gotcha) {
      setNote({
        text: `Thanks ${name}! Your message is on its way — I'll be in touch shortly.`,
        ok: true,
      });
      form.reset();
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          service,
          message,
          _subject: `New enquiry from ${name}${service ? ` (${service})` : ""}`,
          _replyto: email,
        }),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as {
          errors?: { message: string }[];
        };
        const firstError = j.errors?.[0]?.message;
        setNote({
          text: firstError || "Something went wrong — please try again.",
          ok: false,
        });
      } else {
        setNote({
          text: `Thanks ${name}! Your message is on its way — I'll be in touch shortly.`,
          ok: true,
        });
        form.reset();
      }
    } catch {
      setNote({ text: "Network error — please try again.", ok: false });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="border-2 border-border p-9">
      <div className="flex flex-col gap-6">
        {/* Honeypot — hidden from users, bots tend to fill it and get silently blocked */}
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <Field label="Name" name="name" placeholder="Your name" required />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@company.com"
          required
        />
        <Field
          label="Service"
          name="service"
          placeholder="Website Design, SEO…"
        />
        <div>
          <label className="text-[13px] font-semibold text-[#3a3a38] block mb-2">
            About your project
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="A few lines about what you need…"
            required
            className="w-full border-2 border-border-input p-3 text-base text-ink bg-transparent outline-none resize-y focus:border-ink"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className={[
            "font-heading italic font-bold text-[15px] text-white bg-ink",
            "[background-image:linear-gradient(#ff751f,#ff751f)] bg-no-repeat bg-left [background-size:0%_100%]",
            "hover:[background-size:100%_100%] transition-[background-size] duration-[180ms] ease-linear",
            "flex items-center justify-center gap-2 py-4 px-4 uppercase",
            submitting ? "opacity-70 cursor-wait" : "",
          ].join(" ")}
        >
          {submitting ? "Sending…" : "Send message"}
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </button>
        {note && (
          <p
            role="status"
            aria-live="polite"
            className={[
              "text-sm font-semibold",
              note.ok ? "text-ink" : "text-[#c33]",
            ].join(" ")}
          >
            {note.text}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[13px] font-semibold text-[#3a3a38] block mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border-0 border-b-2 border-border-input py-2.5 px-0.5 text-base text-ink bg-transparent outline-none focus:border-ink"
      />
    </div>
  );
}
