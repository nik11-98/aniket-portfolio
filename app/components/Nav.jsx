"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "../data/site";
import Logo from "./Logo";
import styles from "./Nav.module.css";

// Internal links are absolute so they resolve from any route (e.g. /about).
const links = [
  { label: "Work", href: "/work" },
  { label: "Mementos", href: "/mementos" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={styles.nav}>
      <nav className={styles.pill} aria-label="Primary">
        <Link href="/" className={styles.brand} aria-label="Home" onClick={close}>
          <Logo size={40} />
        </Link>

        <div className={styles.links}>
          {links.map((l) => (
            <Link key={l.label} href={l.href} className={styles.item}>
              {l.label}
            </Link>
          ))}
        </div>

        <a href={site.resume} className={`btn btn--primary btn--shimmer ${styles.resume}`} download>
          Download Resume
        </a>

        <button
          type="button"
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`${styles.menu} ${open ? styles.menuOpen : ""}`}
      >
        {links.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className={styles.menuItem}
            onClick={close}
          >
            {l.label}
          </Link>
        ))}
        <a
          href={site.resume}
          className={`btn btn--primary btn--shimmer ${styles.menuResume}`}
          download
          onClick={close}
        >
          Download Resume
        </a>
      </div>
    </header>
  );
}
