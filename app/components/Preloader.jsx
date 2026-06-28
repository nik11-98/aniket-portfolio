"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Preloader.module.css";

// "Hello" across languages — shown once per session on first load.
const GREETINGS = ["Hello", "Bonjour", "नमस्ते", "こんにちは"];

export default function Preloader() {
  // Render the cover on first paint to avoid a flash of the page.
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const seen = sessionStorage.getItem("introSeen");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduce) {
      setShow(false);
      return;
    }

    document.documentElement.classList.add("intro-lock");
    let i = 0;
    const tick = setInterval(() => {
      i += 1;
      if (i >= GREETINGS.length) {
        clearInterval(tick);
        setLeaving(true);
        setTimeout(() => {
          setShow(false);
          document.documentElement.classList.remove("intro-lock");
          sessionStorage.setItem("introSeen", "1");
        }, 800);
      } else {
        setIndex(i);
      }
    }, 1300);

    return () => clearInterval(tick);
  }, []);

  if (!show) return null;

  return (
    <div className={`${styles.wrap} ${leaving ? styles.leaving : ""}`} aria-hidden="true">
      <span key={index} className={styles.word}>
        {GREETINGS[index]}
      </span>
      <span className={styles.loader} />
    </div>
  );
}
