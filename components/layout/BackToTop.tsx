"use client";

import { useEffect, useState } from "react";

import { useLibsReady } from "@/lib/vendor";

const SCROLL_THRESHOLD = 300;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const libsReady = useLibsReady();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (libsReady && window.jQuery) {
      window.jQuery("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      aria-label="Back to top"
      className={`btn btn-secondary btn-square rounded-circle back-to-top${visible ? "" : " d-none"}`}
    >
      <i className="fa fa-arrow-up text-white" />
    </a>
  );
}
