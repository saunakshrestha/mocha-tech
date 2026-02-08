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
  phone: string;
  company: string;
  projectDetails: string;
  message: string;
};

const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  phone: Yup.string(),
  company: Yup.string(),
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
          Contact Us
        </h2>
        <p className="max-w-2xl text-lg text-foreground/65">
          We deliver expert electrical CAD solutions from Nepal to clients across Australia and worldwide. Get in touch with us for project inquiries or quotations.
        </p>

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
                phone: "",
                company: "",
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
                    label="Phone (Optional)"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    error={touched.phone ? errors.phone : undefined}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. +61 400 000 000"
                  />
                  <Field
                    label="Company (Optional)"
                    name="company"
                    value={values.company}
                    error={touched.company ? errors.company : undefined}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your company or organization name"
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
              <CardTitle>Our Locations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-foreground/80">
              <div>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-mocha-orange" />
                  <div>
                    <p className="font-semibold text-mocha-primary">Nepal (Primary Operations & Team)</p>
                    <p className="text-xs text-muted-foreground">Main drafting and design hub</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-mocha-orange" />
                  <div>
                    <p className="font-semibold text-mocha-primary">Australia (Client Coordination)</p>
                    <p className="text-xs text-muted-foreground">Local contact for project alignment and support</p>
                    <p className="mt-1">{founderProfile.contact.location}</p>
                  </div>
                </div>
              </div>
              <div className="border-t pt-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-mocha-orange" />
                  <span>{founderProfile.contact.phone}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-mocha-orange" />
                <span>{founderProfile.contact.email}</span>
              </div>
              <div className="border-t pt-3">
                <p className="text-sm font-medium text-mocha-primary">
                  Get a fast, cost-effective CAD solution today—connect with our team in Nepal or coordinate via our Australian support channel.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-100/50 bg-white shadow-sm">
            <CardHeader>
              <CardTitle>Our Global Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square overflow-hidden rounded-lg border border-border bg-muted">
                  <iframe
                    title="Nepal Operations Hub"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Kathmandu,Nepal&output=embed&z=6"
                    style={{ border: 0 }}
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg border border-border bg-muted">
                  <iframe
                    title="Australia Client Coordination"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Perth,Western+Australia&output=embed&z=8"
                    style={{ border: 0 }}
                  />
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>🇳🇵 Nepal (Operations)</span>
                <span>→</span>
                <span>🇦🇺 Australia (Coordination)</span>
              </div>
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

