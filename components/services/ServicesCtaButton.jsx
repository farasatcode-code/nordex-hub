"use client";

import { useContactModal } from "@/components/contact/contact-modal-context";

export default function ServicesCtaButton({
  children,
  variant = "primary",
  className = "",
  modalTitle,
}) {
  const { openContactModal } = useContactModal();

  return (
    <button
      type="button"
      className={`services-cta services-cta--${variant} ${className}`.trim()}
      onClick={() => openContactModal({ title: modalTitle })}
    >
      <span>{children}</span>
      <i className="fas fa-arrow-right" aria-hidden="true" />
    </button>
  );
}
