"use client";

import { useState, type FormEvent } from "react";
import { CONTACT } from "@/content/social";
import { SplitHeading } from "@/components/ui/SplitText";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    projectType: CONTACT.interests[0],
    message: "",
  });
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const errors = {
    name: form.name.trim().length < 2 ? "Please enter your name." : "",
    email: !EMAIL_RE.test(form.email) ? "Please enter a valid email." : "",
    message: form.message.trim().length < 10 ? "Tell us a bit more (10+ characters)." : "",
  };

  const valid = !errors.name && !errors.email && !errors.message;

  const set = (key: keyof FormState) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const blur = (key: keyof FormState) => () =>
    setTouched((t) => ({ ...t, [key]: true }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!valid) return;

    setStatus("submitting");

    // Honeypot field — bots fill it, humans never see it
    const honeypot = (document.getElementById("company") as HTMLInputElement)?.value;
    if (honeypot) {
      setStatus("success"); // silently drop
      return;
    }

    try {
      if (CONTACT.endpoint) {
        const res = await fetch(CONTACT.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, honeypot }),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        // mailto fallback until an endpoint is configured
        window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
          `[${form.projectType}] ${form.name}`
        )}&body=${encodeURIComponent(form.message)}`;
        await new Promise((r) => setTimeout(r, 400));
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "peer w-full border-b border-white/[0.12] bg-transparent px-0 py-3 text-[15px] text-syn-text placeholder-transparent outline-none transition-colors focus:border-syn-cyan";
  const labelCls =
    "pointer-events-none absolute left-0 top-3 text-[15px] text-syn-text-muted transition-all duration-300 peer-focus:-top-3.5 peer-focus:text-[11px] peer-focus:tracking-[0.15em] peer-[:not(:placeholder-shown)]:-top-3.5 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:tracking-[0.15em]";

  return (
    <section
      id="contact"
      className="syn-section relative border-t border-white/[0.06] bg-syn-surface"
      aria-labelledby="contact-heading"
    >
      <div className="container-syn grid gap-16 py-28 lg:grid-cols-2 lg:gap-24 lg:py-40">
        <div>
          <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
            {CONTACT.eyebrow}
          </p>
          <SplitHeading
            as="h2"
            text="Research with us."
            mode="lines"
            stagger={0.1}
            className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
          />
          <p className="mt-8 max-w-md text-base leading-relaxed text-syn-text-secondary">
            Collaboration, technical discussion, open-source contribution, or
            research inquiry — the lab reads everything.
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="mono link-line mt-8 inline-block text-[13px] tracking-[0.18em] text-syn-cyan"
          >
            {CONTACT.email}
          </a>
        </div>

        <form onSubmit={onSubmit} noValidate className="space-y-8">
          {/* Honeypot */}
          <input
            type="text"
            id="company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="relative">
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={set("name")}
              onBlur={blur("name")}
              placeholder="Name"
              className={inputCls}
              aria-describedby={touched.name && errors.name ? "name-err" : undefined}
            />
            <label htmlFor="name" className={labelCls}>NAME</label>
            {touched.name && errors.name && (
              <p id="name-err" role="alert" className="mt-2 text-xs text-red-300">{errors.name}</p>
            )}
          </div>

          <div className="relative">
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={set("email")}
              onBlur={blur("email")}
              placeholder="Email"
              className={inputCls}
              aria-describedby={touched.email && errors.email ? "email-err" : undefined}
            />
            <label htmlFor="email" className={labelCls}>EMAIL</label>
            {touched.email && errors.email && (
              <p id="email-err" role="alert" className="mt-2 text-xs text-red-300">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <select
              id="projectType"
              value={form.projectType}
              onChange={set("projectType")}
              className="w-full border-b border-white/[0.12] bg-transparent py-3 text-[15px] text-syn-text outline-none transition-colors focus:border-syn-cyan"
            >
              {CONTACT.interests.map((i) => (
                <option key={i} value={i} className="bg-syn-surface text-syn-text">
                  {i}
                </option>
              ))}
            </select>
            <label
              htmlFor="projectType"
              className="mono absolute -top-3.5 left-0 text-[11px] tracking-[0.15em] text-syn-text-muted"
            >
              INQUIRY TYPE
            </label>
          </div>

          <div className="relative">
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={set("message")}
              onBlur={blur("message")}
              placeholder="Message"
              className={inputCls}
              aria-describedby={touched.message && errors.message ? "msg-err" : undefined}
            />
            <label htmlFor="message" className={labelCls}>MESSAGE</label>
            {touched.message && errors.message && (
              <p id="msg-err" role="alert" className="mt-2 text-xs text-red-300">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mono w-full cursor-pointer border border-white/20 py-4 text-[11px] tracking-[0.3em] text-syn-text transition-colors duration-300 hover:border-syn-cyan hover:text-syn-cyan disabled:cursor-wait disabled:opacity-50"
          >
            {status === "submitting" ? "SENDING…" : "SEND INQUIRY"}
          </button>

          <p aria-live="polite" className="mono min-h-[1.25rem] text-[11px] tracking-[0.15em]">
            {status === "success" && <span className="text-emerald-300">✓ RECEIVED — WE'LL BE IN TOUCH.</span>}
            {status === "error" && <span className="text-red-300">✗ SOMETHING WENT WRONG. TRY EMAIL INSTEAD.</span>}
          </p>
        </form>
      </div>
    </section>
  );
}
