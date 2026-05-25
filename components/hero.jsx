/* Hero variants for Dr. Arul site */

const ECGLine = ({ accent = 'var(--accent)' }) => {
  // single horizontal line with one PQRST bump, animated to "draw" left-to-right and pulse
  // path is intentionally subtle, one heartbeat
  return (
    <svg className="ecg-line" viewBox="0 0 1200 80" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="ecg-fade" x1="0" x2="1">
          <stop offset="0" stopColor={accent} stopOpacity="0" />
          <stop offset="0.08" stopColor={accent} stopOpacity="0.8" />
          <stop offset="0.92" stopColor={accent} stopOpacity="0.8" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 40 L 380 40 L 410 40 L 425 32 L 445 48 L 460 18 L 475 62 L 495 36 L 515 40 L 560 40 L 575 34 L 590 46 L 610 40 L 1200 40"
        fill="none"
        stroke="url(#ecg-fade)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ecg-path"
      />
      <circle r="3" fill={accent} className="ecg-pulse">
        <animateMotion
          dur="6s"
          repeatCount="indefinite"
          path="M0 40 L 380 40 L 410 40 L 425 32 L 445 48 L 460 18 L 475 62 L 495 36 L 515 40 L 560 40 L 575 34 L 590 46 L 610 40 L 1200 40"
        />
      </circle>
      <style>{`
        .ecg-path {
          stroke-dasharray: 1500;
          stroke-dashoffset: 1500;
          animation: ecgDraw 6s linear infinite;
        }
        @keyframes ecgDraw {
          0% { stroke-dashoffset: 1500; }
          60% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -1500; }
        }
        .ecg-pulse { filter: drop-shadow(0 0 6px ${accent}); opacity: 0.85; }
      `}</style>
    </svg>
  );
};

/* ------------------- Variant: Editorial (default) ------------------- */
const HeroEditorial = () => (
  <section className="hero hero-editorial">
    <div className="container hero-grid">
      <div className="hero-copy">
        <div className="eyebrow">Pediatric Cardiology · Congenital Cardiac Intervention</div>
        <h1 className="serif hero-title">
          Where complex hearts <em className="italic">find</em> calm.
        </h1>
        <p className="hero-lede">
          Dr. Arul Narayanan is a UK-certified pediatric cardiologist and congenital
          cardiac interventionist, now practising at American Hospital Dubai.
          Twenty-five years of experience, two-and-a-half thousand interventions,
          one philosophy: clinical precision and unhurried, plain-spoken care.
        </p>
        <div className="hero-actions">
          <button className="btn btn-accent" data-book>Book a consultation →</button>
          <button className="btn btn-ghost" data-second-opinion>Request a second opinion</button>
        </div>
        <div className="hero-meta">
          <div><span className="mono hero-meta-k">UAE</span><span className="hero-meta-v">American Hospital Dubai</span></div>
          <div><span className="mono hero-meta-k">UK</span><span className="hero-meta-v">Trained at Alder Hey · Liverpool Heart &amp; Chest</span></div>
          <div><span className="mono hero-meta-k">GMC</span><span className="hero-meta-v">Specialist Register · Paediatric Cardiology</span></div>
        </div>
      </div>
      <div className="hero-portrait-wrap">
        <div className="ph hero-portrait" data-label="PORTRAIT — DR. ARUL NARAYANAN · 4:5"></div>
        <div className="hero-portrait-caption mono">
          <span>FIG. 01</span>
          <span>Dr. A. Narayanan, MBBS · DCH · MRCPCH · FRCPCH · CCT</span>
        </div>
      </div>
    </div>
    <ECGLine />
  </section>
);

/* ------------------- Variant: Portrait-led ------------------- */
const HeroPortrait = () => (
  <section className="hero hero-portrait-variant">
    <div className="container-wide hero-portrait-grid">
      <div className="ph hero-portrait-large" data-label="PORTRAIT — DR. ARUL NARAYANAN · FULL-BLEED · 3:4"></div>
      <div className="hero-portrait-side">
        <div className="eyebrow">Consultant · UK Specialist Register</div>
        <h1 className="serif hero-portrait-name">
          Dr. Arul<br/>
          <em className="italic">Narayanan</em>
        </h1>
        <div className="hero-portrait-role serif">
          Pediatric Cardiologist &amp;<br/>
          Congenital Cardiac Interventionist
        </div>
        <p className="hero-portrait-bio">
          Consultant Pediatric Cardiologist at American Hospital Dubai.
          Formerly Director of Congenital Cardiac Intervention for the
          North-West England congenital cardiology partnership. Caring for
          hearts from fetal screening through adulthood.
        </p>
        <div className="hero-actions">
          <button className="btn btn-accent" data-book>Book a consultation →</button>
        </div>
      </div>
    </div>
    <ECGLine />
  </section>
);

/* ------------------- Variant: Stats-led ------------------- */
const HeroStats = () => (
  <section className="hero hero-stats">
    <div className="container">
      <div className="eyebrow hero-stats-eyebrow">Dr. Arul Narayanan · A practice in numbers</div>
      <div className="hero-stats-grid">
        <div className="hero-stat">
          <div className="serif hero-stat-num">2,500<span className="hero-stat-plus">+</span></div>
          <div className="hero-stat-label">Independent interventional procedures performed</div>
        </div>
        <div className="hero-stat">
          <div className="serif hero-stat-num">25<span className="hero-stat-plus">+</span></div>
          <div className="hero-stat-label">Years in medicine, fetal screening to adult congenital care</div>
        </div>
        <div className="hero-stat">
          <div className="serif hero-stat-num">14<span className="hero-stat-plus">+</span></div>
          <div className="hero-stat-label">Years post-CCT consultant practice, UK & Dubai</div>
        </div>
        <div className="hero-stat">
          <div className="serif hero-stat-num">5</div>
          <div className="hero-stat-label">Specialist multidisciplinary clinics led at Am. Hospital Dubai</div>
        </div>
      </div>
      <div className="hero-stats-foot">
        <p className="hero-stats-tag serif italic">
          “Outstanding clinical care and compassionate communication
          are inseparable.”
        </p>
        <div className="hero-actions">
          <button className="btn btn-accent" data-book>Book a consultation →</button>
          <button className="btn btn-ghost" data-second-opinion>Request a second opinion</button>
        </div>
      </div>
    </div>
    <ECGLine />
  </section>
);

/* ------------------- Variant: Story-led ------------------- */
const HeroStory = () => (
  <section className="hero hero-story">
    <div className="container hero-story-grid">
      <div className="hero-story-quote">
        <div className="serif hero-story-mark">“</div>
        <blockquote className="serif hero-story-text">
          He sat with us for an hour before he ever mentioned the procedure.
          By the time we walked into the cath lab, our daughter felt
          like she was in the hands of family.
        </blockquote>
        <div className="hero-story-attribution">
          <div className="mono hero-story-by">— PARENT, ALDER HEY · 2024</div>
          <div className="hero-story-context">Patent ductus arteriosus closure, age 14 months</div>
        </div>
      </div>
      <div className="hero-story-side">
        <div className="ph hero-story-portrait" data-label="PORTRAIT — DR. ARUL · CLINIC · 4:5"></div>
        <div className="hero-story-meta">
          <div className="eyebrow">Dr. Arul Narayanan</div>
          <div className="serif hero-story-role">Pediatric Cardiologist · Congenital Cardiac Interventionist</div>
          <div className="hero-actions">
            <button className="btn btn-accent" data-book>Book a consultation →</button>
          </div>
        </div>
      </div>
    </div>
    <ECGLine />
  </section>
);

const Hero = ({ variant = 'editorial' }) => {
  if (variant === 'portrait') return <HeroPortrait />;
  if (variant === 'stats') return <HeroStats />;
  if (variant === 'story') return <HeroStory />;
  return <HeroEditorial />;
};

window.Hero = Hero;
window.ECGLine = ECGLine;
