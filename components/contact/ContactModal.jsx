"use client";

import { useEffect, useRef } from "react";

import InquiryForm from "@/components/contact/InquiryForm";

export default function ContactModal({ open, onClose, title = "inquiry" }) {
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) {
        return;
      }

      const focusable = Array.from(
        modalRef.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.getClientRects().length > 0);

      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!modalRef.current.contains(document.activeElement)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const isContactTitle = title === "contact";

  return (
    <div
      className="contact-modal-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className={`contact-modal${isContactTitle ? " contact-modal--contact" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="contact-modal-close"
          onClick={onClose}
          aria-label="Close contact form"
        >
          <i className="fa fa-times" aria-hidden="true" />
        </button>

        <div className="contact-modal-header">
          {isContactTitle ? null : (
            <p className="contact-modal-eyebrow">Get in Touch</p>
          )}
          <h2 id="contact-modal-title" className="contact-modal-title">
            {isContactTitle ? "Contact Us" : "Let's Discuss Your Next Project"}
          </h2>
          <p className="contact-modal-text">
            Tell us what you are planning and our leadership team will get back to you.
          </p>
        </div>

        <div className="contact-modal-body">
          <InquiryForm source="contact-modal" compact />
        </div>
      </div>
    </div>
  );
}
