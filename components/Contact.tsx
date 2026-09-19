"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/data";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailReady = !site.email.startsWith("[");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!emailReady) return;
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="bg-charcoal py-20 text-paper md:py-28">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-10">
        <div>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-paper sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-paper/70">
            Open to security operations, CCTV, control room and
            safety-related roles. Recruiters and employers are welcome to
            reach out directly.
          </p>

          <dl className="mt-9 space-y-5">
            <div>
              <dt className="font-mono text-xs text-paper/50">Email</dt>
              <dd className="mt-1 text-base text-paper">
                {emailReady ? (
                  <a
                    href={`mailto:${site.email}`}
                    className="focus-ring mt-1 inline-block rounded-sm bg-paper px-5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:bg-paper/90"
                  >
                    {site.email}
                  </a>
                ) : (
                  <span className="text-paper/60">{site.email}</span>
                )}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-paper/50">LinkedIn</dt>
              <dd className="mt-1 text-base text-paper">
                {!site.linkedin.startsWith("[") ? (
                  <a
                    href={site.linkedin}
                    className="focus-ring mt-1 inline-block rounded-sm border border-paper/30 px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-paper/60"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View LinkedIn profile
                  </a>
                ) : (
                  <span className="text-paper/60">{site.linkedin}</span>
                )}
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm text-paper/70">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="focus-ring mt-2 w-full border border-paper/25 bg-transparent px-4 py-3 text-paper outline-none placeholder:text-paper/35"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-paper/70">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus-ring mt-2 w-full border border-paper/25 bg-transparent px-4 py-3 text-paper outline-none placeholder:text-paper/35"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-paper/70">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="focus-ring mt-2 w-full border border-paper/25 bg-transparent px-4 py-3 text-paper outline-none placeholder:text-paper/35"
              placeholder="Role, opportunity, or question"
            />
          </div>
          <button
            type="submit"
            disabled={!emailReady}
            className="focus-ring w-fit rounded-sm bg-paper px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-paper/90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Send message
          </button>
          {!emailReady ? (
            <p className="text-xs text-paper/45">
              Contact email not yet configured — add a real address in
              lib/data.ts to enable this form.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
