"use client";

import { useState, type FormEvent } from "react";

const classes = [
  "Prep", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
  "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
];

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full border border-pips-border bg-pips-white px-4 py-3 text-body text-pips-charcoal placeholder:text-pips-mid-grey focus:border-pips-green";

export default function AdmissionsForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-pips-green bg-pips-mint p-8 text-center" role="status">
        <p className="font-display text-h3 font-semibold text-pips-green-dark">
          Inquiry received — thank you.
        </p>
        <p className="mt-3 text-body text-pips-charcoal">
          Our admissions office will contact you within one working day. For
          anything urgent, call 0345-6657057.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      <div>
        <label htmlFor="parentName" className="mb-1.5 block font-mono text-label uppercase text-pips-charcoal">
          Parent / Guardian Name *
        </label>
        <input id="parentName" name="parentName" required autoComplete="name" className={inputClass} placeholder="Muhammad Ahmad" />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block font-mono text-label uppercase text-pips-charcoal">
          Phone *
        </label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="03xx-xxxxxxx" />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block font-mono text-label uppercase text-pips-charcoal">
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" className={inputClass} placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="childName" className="mb-1.5 block font-mono text-label uppercase text-pips-charcoal">
          Child&apos;s Name *
        </label>
        <input id="childName" name="childName" required className={inputClass} placeholder="Child's full name" />
      </div>
      <div>
        <label htmlFor="applyingClass" className="mb-1.5 block font-mono text-label uppercase text-pips-charcoal">
          Class Applying For *
        </label>
        <select id="applyingClass" name="applyingClass" required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a class
          </option>
          {classes.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="previousSchool" className="mb-1.5 block font-mono text-label uppercase text-pips-charcoal">
          Previous School
        </label>
        <input id="previousSchool" name="previousSchool" className={inputClass} placeholder="If transferring" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block font-mono text-label uppercase text-pips-charcoal">
          Message
        </label>
        <textarea id="message" name="message" rows={4} className={inputClass} placeholder="Anything you'd like us to know" />
      </div>

      {status === "error" && (
        <p className="text-small text-red-700 sm:col-span-2" role="alert">
          Something went wrong sending your inquiry. Try again, or call us at
          0345-6657057.
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-pips-gold px-8 py-3.5 font-semibold text-white transition-colors hover:bg-pips-green-dark disabled:opacity-60"
          style={{ borderRadius: 0 }}
        >
          {status === "sending" ? "Sending…" : "Submit Inquiry"}
        </button>
      </div>
    </form>
  );
}
