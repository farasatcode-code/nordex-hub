"use client";

import { useCallback, useMemo, useState } from "react";

import ContactModal from "@/components/contact/ContactModal";
import { ContactModalContext } from "@/components/contact/contact-modal-context";

export default function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("inquiry");

  const openContactModal = useCallback((options = {}) => {
    setModalTitle(options?.title === "contact" ? "contact" : "inquiry");
    setIsOpen(true);
  }, []);
  const closeContactModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({
      isContactModalOpen: isOpen,
      openContactModal,
      closeContactModal,
    }),
    [isOpen, openContactModal, closeContactModal],
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal open={isOpen} onClose={closeContactModal} title={modalTitle} />
    </ContactModalContext.Provider>
  );
}
