"use client";

import { useContactModal } from "@/components/contact/contact-modal-context";

export default function HomeModalButton({
  children,
  variant = "primary",
  className = "",
}) {
  const { openContactModal } = useContactModal();

  return (
    <button
      type="button"
      className={`home-cta home-cta--${variant} ${className}`.trim()}
      onClick={() => openContactModal()}
    >
      <span>{children}</span>
      <i className="fas fa-arrow-right" aria-hidden="true" />
    </button>
  );
}
