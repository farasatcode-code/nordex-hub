"use client";

import { useEffect, useState } from "react";

/**
 * Reproduces the template's pre-load spinner: it renders with the `show`
 * class and drops it almost immediately, letting `style.css` play the fade-out
 * while the element stays in the DOM.
 */
export default function Spinner() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="spinner"
      className={`${show ? "show " : ""}position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center`}
    >
      <div className="spinner-grow text-primary" role="status" />
    </div>
  );
}
