"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "nordexhub-intro-seen";

export default function IntroSplash() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [skipping, setSkipping] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const close = useCallback(() => {
    setSkipping(true);
    setLeaving(true);
  }, []);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {}

    if (seen) return;

    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReducedMotion(true);
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  useEffect(() => {
    if (!visible || leaving) return;

    const delay = reducedMotion ? 1200 : 3500;
    const timer = setTimeout(() => setLeaving(true), delay);
    return () => clearTimeout(timer);
  }, [visible, leaving, reducedMotion]);

  useEffect(() => {
    if (!leaving) return;

    const duration = skipping || reducedMotion ? 250 : 900;
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [leaving, skipping, reducedMotion]);

  const handleTransitionEnd = (event) => {
    if (event.target === event.currentTarget && event.propertyName === "opacity") {
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <div
      className={`intro-overlay${leaving ? " is-leaving" : ""}${skipping ? " is-skipping" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to NordexHub"
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="intro-stage">
        <div className="intro-character" aria-hidden="true">
          <svg viewBox="0 0 220 300" xmlns="http://www.w3.org/2000/svg">
            <g className="intro-figure">
              <g className="intro-leg intro-leg--back">
                <rect x="88" y="214" width="22" height="62" rx="11" fill="#1d3557" />
                <ellipse cx="96" cy="278" rx="18" ry="9" fill="#0f2027" />
              </g>
              <g className="intro-leg intro-leg--front">
                <rect x="120" y="214" width="22" height="62" rx="11" fill="#244966" />
                <ellipse cx="132" cy="278" rx="18" ry="9" fill="#0f2027" />
              </g>

              <rect x="68" y="138" width="94" height="96" rx="30" fill="#e63946" />
              <rect x="44" y="156" width="28" height="68" rx="14" fill="#f1c27d" transform="rotate(12 58 190)" />

              <g className="intro-arm-wave">
                <rect x="148" y="148" width="24" height="66" rx="12" fill="#f1c27d" />
                <circle cx="160" cy="218" r="14" fill="#f1c27d" />
              </g>

              <circle cx="116" cy="98" r="48" fill="#f1c27d" />
              <circle cx="70" cy="102" r="9" fill="#f1c27d" />
              <circle cx="162" cy="102" r="9" fill="#f1c27d" />
              <circle cx="101" cy="92" r="5" fill="#0f2027" />
              <circle cx="132" cy="92" r="5" fill="#0f2027" />
              <path d="M102 116 Q116 130 130 116" fill="none" stroke="#0f2027" strokeWidth="5" strokeLinecap="round" />

              <path d="M62 66 Q116 18 170 66 Z" fill="#2c5364" />
              <rect x="54" y="62" width="124" height="14" rx="7" fill="#0f2027" />
              <rect x="96" y="38" width="40" height="28" rx="6" fill="#e63946" />
            </g>
          </svg>
        </div>

        <div className="intro-board" role="status" aria-live="polite">
          Welcome to <strong>NordexHub</strong> 👋
        </div>
      </div>

      <button type="button" className="intro-skip" onClick={close} aria-label="Skip welcome intro">
        Skip
      </button>

      <style jsx>{`
        .intro-overlay {
          position: fixed;
          inset: 0;
          z-index: 100000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: clamp(16px, 4vw, 48px);
          background: linear-gradient(135deg, #0f2027 0%, #2c5364 100%);
          opacity: 1;
          transition: opacity 0.8s ease;
        }

        .intro-overlay.is-leaving {
          opacity: 0;
          pointer-events: none;
        }

        .intro-overlay.is-skipping {
          transition-duration: 0.2s;
        }

        .intro-stage {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: clamp(12px, 3vw, 36px);
          width: min(100%, 900px);
        }

        .intro-character {
          width: clamp(150px, 26vw, 260px);
          flex: 0 0 auto;
          animation: introWalk 1.15s cubic-bezier(0.22, 0.8, 0.25, 1) both;
        }

        .intro-character svg {
          display: block;
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .intro-figure {
          animation: introBob 0.32s ease-in-out 4;
        }

        .intro-leg {
          transform-box: fill-box;
          transform-origin: 50% 0%;
          animation: introStep 0.32s ease-in-out 4;
        }

        .intro-leg--back {
          animation-delay: 0.16s;
        }

        .intro-arm-wave {
          transform-box: view-box;
          transform-origin: 160px 150px;
          animation: introWave 0.55s ease-in-out 1.2s 3;
        }

        .intro-board {
          position: relative;
          flex: 1 1 220px;
          max-width: min(100%, 460px);
          padding: clamp(14px, 2.5vw, 24px) clamp(18px, 3vw, 32px);
          color: #0f2027;
          font-family: "Saira", sans-serif;
          font-size: clamp(1.1rem, 3vw, 1.75rem);
          font-weight: 700;
          line-height: 1.3;
          text-align: center;
          background: #ffffff;
          border-radius: 18px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
          opacity: 0;
          transform: translateY(16px) scale(0.86);
          animation: introPop 0.45s cubic-bezier(0.2, 0.9, 0.3, 1.25) 1.45s forwards;
        }

        .intro-board::before {
          position: absolute;
          top: 50%;
          left: -10px;
          width: 0;
          height: 0;
          margin-top: -10px;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 11px solid #ffffff;
          content: "";
        }

        .intro-board strong {
          color: #e63946;
        }

        .intro-skip {
          position: fixed;
          right: clamp(14px, 3vw, 32px);
          bottom: clamp(14px, 3vw, 32px);
          padding: 8px 18px;
          color: #ffffff;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.75rem, 2vw, 0.9rem);
          font-weight: 600;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.45);
          border-radius: 999px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .intro-skip:hover,
        .intro-skip:focus {
          background: rgba(255, 255, 255, 0.24);
          transform: translateY(-1px);
        }

        @keyframes introWalk {
          0% {
            opacity: 0;
            transform: translateX(-130vw);
          }
          12% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes introBob {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes introStep {
          0%,
          100% {
            transform: rotate(-12deg);
          }
          50% {
            transform: rotate(12deg);
          }
        }

        @keyframes introWave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          20%,
          60% {
            transform: rotate(-120deg);
          }
          40%,
          80% {
            transform: rotate(-160deg);
          }
        }

        @keyframes introPop {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.86);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .intro-overlay {
            transition-duration: 0.2s;
          }

          .intro-character {
            display: none;
          }

          .intro-board {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
