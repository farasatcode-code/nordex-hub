"use client";

import { useId, useState } from "react";

import {
  CONTACT_INFO,
  INQUIRY_SERVICES,
  createEmptyInquiry,
  submitInquiry,
} from "@/lib/inquiry";

export default function InquiryForm({ source = "contact-modal", compact = false }) {
  const formId = useId();
  const [values, setValues] = useState(() => createEmptyInquiry(source));
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const updateField = (field) => (event) => {
    const { value } = event.target;

    setValues((current) => ({ ...current, [field]: value }));
    setError("");

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!values.email.trim() || !values.phone.trim()) {
      setError("Email Address and Phone / WhatsApp Number are required.");
      return;
    }

    setStatus("sending");
    setError("");

    await submitInquiry({ ...values, source });

    setStatus("sent");
    setValues(createEmptyInquiry(source));
  };

  return (
    <form
      className={`inquiry-form${compact ? " inquiry-form--compact" : ""}`}
      onSubmit={handleSubmit}
    >
      {status === "sent" ? (
        <div className="inquiry-alert inquiry-alert--success" role="status">
          <i className="fa fa-check-circle me-2" aria-hidden="true" />
          Thank you. WhatsApp should open with your inquiry details. If it does
          not, message us directly at {CONTACT_INFO.phone}.
        </div>
      ) : null}

      {error ? (
        <div className="inquiry-alert inquiry-alert--error" role="alert">
          <i className="fa fa-exclamation-circle me-2" aria-hidden="true" />
          {error}
        </div>
      ) : null}

      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label inquiry-label" htmlFor={`${formId}-name`}>
            Full Name
          </label>
          <input
            id={`${formId}-name`}
            type="text"
            className="form-control inquiry-control"
            name="fullName"
            autoComplete="name"
            placeholder="Your full name"
            value={values.fullName}
            onChange={updateField("fullName")}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label inquiry-label" htmlFor={`${formId}-organization`}>
            Organization / Company Name
          </label>
          <input
            id={`${formId}-organization`}
            type="text"
            className="form-control inquiry-control"
            name="organization"
            autoComplete="organization"
            placeholder="Your organization or company"
            value={values.organization}
            onChange={updateField("organization")}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label inquiry-label" htmlFor={`${formId}-email`}>
            Email Address <span className="inquiry-required">*</span>
          </label>
          <input
            id={`${formId}-email`}
            type="email"
            className="form-control inquiry-control"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            value={values.email}
            onChange={updateField("email")}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label inquiry-label" htmlFor={`${formId}-phone`}>
            Phone / WhatsApp Number <span className="inquiry-required">*</span>
          </label>
          <input
            id={`${formId}-phone`}
            type="tel"
            className="form-control inquiry-control"
            name="phone"
            autoComplete="tel"
            placeholder="0311 8608350"
            required
            value={values.phone}
            onChange={updateField("phone")}
          />
        </div>

        <div className="col-12">
          <label className="form-label inquiry-label" htmlFor={`${formId}-service`}>
            Service Required
          </label>
          <select
            id={`${formId}-service`}
            className="form-select inquiry-control"
            name="service"
            value={values.service}
            onChange={updateField("service")}
          >
            <option value="">Select a service</option>
            {INQUIRY_SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12">
          <label className="form-label inquiry-label" htmlFor={`${formId}-details`}>
            Project Details / Scope Description
          </label>
          <textarea
            id={`${formId}-details`}
            className="form-control inquiry-control"
            name="details"
            rows={5}
            placeholder="Describe your goals, requirements, timeline, or procurement details"
            value={values.details}
            onChange={updateField("details")}
          />
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn inquiry-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Official Inquiry"}
          </button>
        </div>
      </div>
    </form>
  );
}
