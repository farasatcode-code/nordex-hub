"use client";

import { useEffect, useState } from "react";

import { facts } from "@/lib/data";

const DURATION = 2000;

function CountUp({ value }: { value: number }) {
  // The final value is what gets server-rendered, so the numbers are readable
  // without JavaScript and stay crawlable.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1);
      // Mirrors the `easeInQuad` curve the original jQuery counter used.
      setDisplay(Math.ceil(progress * progress * value));

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return <>{display}</>;
}

export default function FactSection() {
  return (
    <div className="container-fluid bg-secondary py-5">
      <div className="container">
        <div className="row">
          {facts.map((fact) => (
            <div key={fact.label} className="col-lg-3 wow fadeIn" data-wow-delay={fact.delay}>
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">
                  <CountUp value={fact.value} />
                </h1>
                <h5 className="text-white mt-1">{fact.label}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
