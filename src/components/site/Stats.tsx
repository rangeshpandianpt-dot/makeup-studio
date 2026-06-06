import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Makeup Sessions" },
  { value: 2500, suffix: "+", label: "Happy Followers" },
  { value: 300, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const dur = 1800;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.floor(eased * end));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="py-20 bg-charcoal text-ivory">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-5xl md:text-6xl shimmer-text mb-2">
              <Counter end={s.value} suffix={s.suffix} />
            </p>
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-ivory/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
