import Link from "next/link";
import styles from "./CaseStudy.module.css";

function pad(n) {
  return String(n + 1).padStart(2, "0");
}

export default function CaseStudy({ project, next }) {
  const cs = project.caseStudy;
  const accentStyle = cs.accent ? { "--cs-accent": cs.accent } : undefined;

  return (
    <article className={`page ${styles.wrap}`} style={accentStyle}>
      <div className="shell shell--wide">
        <Link href="/#work" className={`${styles.back} reveal`}>
          ← Selected work
        </Link>

        <header className={`${styles.head} reveal`}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.tagline}>{cs.tagline || project.description}</p>

          <dl className={styles.meta}>
            <div><dt>Role</dt><dd>{cs.role}</dd></div>
            <div><dt>Timeline</dt><dd>{cs.timeline}</dd></div>
            <div><dt>Platform</dt><dd>{cs.platform}</dd></div>
            {cs.screens && <div><dt>Scope</dt><dd>{cs.screens}</dd></div>}
          </dl>
        </header>

        {cs.hero && (
          <figure className={`${styles.hero} reveal`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cs.hero} alt={`${project.title} — cover`} />
          </figure>
        )}

        {cs.sections.map((s, i) => (
          <section key={i} className={`${styles.section} reveal`}>
            <div className={styles.copy}>
              <div className={styles.sectionHead}>
                <h2 className={styles.h2}>{s.title}</h2>
              </div>

              {s.type === "quote" ? (
                <blockquote className={styles.quote}>{s.body}</blockquote>
              ) : (
                <p className={styles.body}>{s.body}</p>
              )}

              {s.note && <p className={styles.note}>{s.note}</p>}

              {s.type === "stats" && (
                <dl className={styles.stats}>
                  {s.stats.map((st) => (
                    <div key={st.l}>
                      <dt>{st.v}</dt>
                      <dd>{st.l}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {s.type === "chips" && (
                <ul className={styles.chips}>
                  {s.chips.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              )}

              {s.type === "steps" && (
                <ol className={styles.steps}>
                  {s.steps.map((step, j) => (
                    <li key={step}>
                      <span className={styles.stepNum}>{j + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              )}
            </div>

            {s.type === "image" && (
              <figure className={styles.figure}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.src} alt={s.alt} loading="lazy" />
              </figure>
            )}

            {s.type === "gallery" && (
              <div className={styles.gallery}>
                {s.images.map((src, j) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={j} src={src} alt={`${s.title} ${j + 1}`} loading="lazy" />
                ))}
              </div>
            )}

            {s.frames && (
              <ol className={styles.frames}>
                {s.frames.map((f, j) => (
                  <li key={j}>
                    {f.img && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img className={styles.frameImg} src={f.img} alt={f.t} loading="lazy" />
                    )}
                    <div className={styles.frameBody}>
                      <span className={styles.frameNum}>{j + 1}</span>
                      <h3 className={styles.frameTitle}>{f.t}</h3>
                      <p className={styles.frameDesc}>{f.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </section>
        ))}

        {cs.prototype && (
          <div className={`${styles.proto} reveal`}>
            <a href={cs.prototype} target="_blank" rel="noreferrer" className="btn btn--primary">
              View the prototype ↗
            </a>
          </div>
        )}

        {next && (
          <Link href={next.href} className={`${styles.next} reveal`}>
            <span className={styles.nextLabel}>Next project</span>
            <span className={styles.nextTitle}>{next.title} →</span>
          </Link>
        )}
      </div>
    </article>
  );
}
