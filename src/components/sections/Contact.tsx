"use client";

import * as React from "react";
import { useMutation } from "@tanstack/react-query";
import { Formik } from "formik";
import * as Yup from "yup";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

import { founderProfile } from "@/lib/data";
import { Section } from "@/components/sections/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ContactPayload = {
  name: string;
  email: string;
  projectDetails: string;
  message: string;
};

const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  projectDetails: Yup.string(),
  message: Yup.string().required("Message is required"),
});

export function ContactSection() {
  const reduceMotion = useReducedMotion();
  const mutation = useMutation({
    mutationFn: async (payload: ContactPayload) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Failed to submit");
      }
      return data;
    },
  });

  return (
    <Section id="contact" className="bg-gradient-to-b from-white to-orange-50/40">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-3"
      >
        <h2 className="font-[var(--font-heading)] text-3xl font-bold text-[#2d1f1a] sm:text-4xl lg:text-5xl">
          Contact
        </h2>
        <p className="max-w-2xl text-lg text-foreground/65">
          Send your brief and we’ll respond with a tailored quote. (AI-ready hint:
          include deliverables, deadlines, and standards.)        </p>      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card className="border-orange-100/50 bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Request a Quote</CardTitle>
          </CardHeader>
          <CardContent>
            <Formik<ContactPayload>
              initialValues={{
                name: "",
                email: "",
                projectDetails: "",
                message: "",
              }}
              validationSchema={schema}
              onSubmit={async (values, { resetForm }) => {
                await mutation.mutateAsync(values);
                resetForm();
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Field
                    label="Name"
                    name="name"
                    value={values.name}
                    error={touched.name ? errors.name : undefined}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    error={touched.email ? errors.email : undefined}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Field
                    label="Project Details"
                    name="projectDetails"
                    value={values.projectDetails}
                    error={touched.projectDetails ? errors.projectDetails : undefined}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. drawings needed, standards, deadline, site location"
                  />
                  <Field
                    label="Message"
                    name="message"
                    value={values.message}
                    error={touched.message ? errors.message : undefined}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    textarea
                    placeholder="Tell us what you need. The more specifics, the faster the quote."
                  />

                  <div className="flex items-center gap-3">
                    <Button type="submit" disabled={mutation.isPending}>
                      {mutation.isPending ? "Sending…" : "Send Message"}
                    </Button>
                    {mutation.isSuccess ? (
                      <p className="text-sm text-mocha-primary">
                        Sent. We’ll get back to you soon.
                      </p>
                    ) : null}
                    {mutation.isError ? (
                      <p className="text-sm text-red-600">
                        {String(mutation.error?.message ?? "Failed")}
                      </p>
                    ) : null}
                  </div>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-orange-100/50 bg-white shadow-sm">
            <CardHeader>
              <CardTitle>Direct details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-mocha-orange" />
                <span>{founderProfile.contact.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-mocha-orange" />
                <span>{founderProfile.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-mocha-orange" />
                <span>{founderProfile.contact.email}</span>
              </div>
              <div className="pt-3 text-xs text-muted-foreground">
                Book a Call (Calendly placeholder)
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-100/50 bg-white shadow-sm">
            <CardHeader>
              <CardTitle>Perth map</CardTitle>
            </CardHeader>
            <CardContent>
              {/* No API key needed for a basic embed; swap to @react-google-maps/api for full control. */}
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-muted">
                <iframe
                  title="Perth map"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Perth%20WA&output=embed"
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Refactor suggestion (production): use `@react-google-maps/api` with a restricted key
                and load it only when this section is in-view to keep performance high.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  value,
  error,
  onChange,
  onBlur,
  type = "text",
  textarea,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  error?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  type?: string;
  textarea?: boolean;
  placeholder?: string;
}) {
  const base =
    "w-full rounded-2xl border border-border bg-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring";
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium" htmlFor={name}>
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          rows={5}
          className={base}
        />
      ) : (
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          type={type}
          className={base}
        />
      )}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </div>
  );
}

