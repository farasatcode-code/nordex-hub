"use client";

import { createContext, useContext } from "react";

/**
 * @typedef {Object} ContactModalContextValue
 * @property {boolean} isContactModalOpen
 * @property {(options?: { title?: "contact" | "inquiry" }) => void} openContactModal
 * @property {() => void} closeContactModal
 */

/** @type {import("react").Context<ContactModalContextValue | null>} */
export const ContactModalContext = createContext(null);

/**
 * @returns {ContactModalContextValue}
 */
export function useContactModal() {
  const context = useContext(ContactModalContext);

  if (!context) {
    throw new Error("useContactModal must be used within a ContactModalProvider.");
  }

  return context;
}
