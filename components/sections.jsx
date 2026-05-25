/* Main content sections for Dr. Arul site */

/* ------------------- Top Nav ------------------- */
const Nav = ({ onBook }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="container-wide nav-inner">
        <a href="#" className="nav-brand">
          <span className="serif nav-brand-mark">A<span className="italic">·</span>N</span>
          <span className="nav-brand-name">
            <span className="nav-brand-line1">Dr. Arul Narayanan</span>
            <span className="nav-brand-line2 mono">Pediatric Cardiology · Dubai</span>
          </span>
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#clinics">Clinics</a>
          <a href="#credentials">Credentials</a>
          <a href="#research">Research</a>
          <a href="#locations">Locations</a>
        </nav>
        <div className="nav-actions">
          <button className="btn btn-sm btn-ghost" onClick={onBook}>Second opinion</button>
          <button className="btn btn-sm" onClick={onBook}>Book consultation</button>
        </div>
      </div>
    </header>
  );
};

/* ------------------- Trust band (logos / institutions) ------------------- */
const TrustBand = () => {
  const items = [
    'Alder Hey Children\u2019s Hospital',
    'Liverpool Heart & Chest Hospital',
    'American Hospital Dubai',
    'GMC · UK Specialist Register',
    'AEPC',
    'BCCA',
    'Royal College of Paediatrics',
  ];
  return (
    <section className="trust-band">
      <div className="container-wide trust-inner">
        <div className="eyebrow trust-label">Affiliations &amp; registrations</div>
        <div className="trust-marquee">
          <div className="trust-track">
            {[...items, ...items].map((it, i) => (
              <span key={i} className="serif trust-item">{it}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------- Philosophy / About ------------------- */
const About = () => (
  <section className="section about-section" id="about">
    <div className="container about-grid">
      <div className="about-side">
        <div className="eyebrow">A note from Dr. Arul</div>
        <div className="serif about-mark">§</div>
      </div>
      <div className="about-main">
        <h2 className="serif about-title">
          Children&apos;s hearts are extraordinarily resilient.
          The families around them deserve the same patience and clarity.
        </h2>
        <p className="about-body">
          Dr. Narayanan trained in India and the United Kingdom — completing
          paediatric, PICU and full paediatric cardiology fellowships at Alder Hey
          Children&apos;s Hospital before advancing to subspecialty interventional
          training in Liverpool and Manchester. After six years leading
          interventional cardiology across the North West Congenital Cardiac
          Network, he now practises at the American Hospital Dubai.
        </p>
        <p className="about-body">
          His career spans high-volume congenital cardiac units in India, a
          heart transplant and ECMO programme in Chennai, and the full spectrum
          of NHS tertiary care. He brings this breadth — over two-and-a-half
          thousand independent interventions — to every consultation.
        </p>
        <p className="about-body">
          His practice is built on a simple conviction: that outstanding clinical
          care and compassionate communication are inseparable. Families are part
          of the clinical team — informed, consulted, and treated with the
          unhurried respect that complex decisions demand.
        </p>
        <div className="about-sign">
          <div className="serif italic about-sign-name">Arul Narayanan</div>
          <div className="mono about-sign-role">MBBS · DCH · MRCPCH · FRCPCH · CCT (Paediatric Cardiology)</div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------- Stats strip ------------------- */
const Stats = () => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(
      (e) => e.forEach(en => en.isIntersecting && setShown(true)),
      { threshold: 0.3 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const stats = [
    { v: '2,500+', l: 'Independent interventional procedures', s: 'Closure of ASD, VSD, PDA · complex structural & cyanotic disease' },
    { v: '25+',    l: 'Years overall medical experience', s: 'From fetal screening through adult congenital care' },
    { v: '14+',    l: 'Years post-CCT consultant practice', s: 'UK Specialist Register · Paediatric Cardiology' },
    { v: '5',      l: 'Specialist multidisciplinary clinics led', s: 'Pulm. Hypertension · Neuromuscular · Fontan · Sports · ACHD' },
  ];
  return (
    <section className={'stats-strip' + (shown ? ' shown' : '')} ref={ref}>
      <div className="container-wide stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat" style={{transitionDelay: `${i*120}ms`}}>
            <div className="serif stat-v">{s.v}</div>
            <div className="stat-l">{s.l}</div>
            <div className="stat-s">{s.s}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ------------------- Expertise grid (conditions + procedures) ------------------- */
const ExpertiseSection = () => {
  const [tab, setTab] = React.useState('interventions');
  const tabs = {
    interventions: {
      title: 'Interventional & structural cardiology',
      lede: 'Catheter-based and minimally-invasive procedures for paediatric and adult congenital heart disease.',
      items: [
        ['Atrial septal defect closure', 'ASD'],
        ['Ventricular septal defect closure', 'VSD'],
        ['Patent ductus arteriosus closure', 'PDA'],
        ['Balloon valvuloplasty', 'Pulmonary · aortic'],
        ['Coarctation stenting', 'Native & re-coarctation'],
        ['Pulmonary artery stenting', 'Branch PA'],
        ['Right-ventricular outflow procedures', 'RVOT'],
        ['Atrial septostomy', 'Rashkind / blade'],
        ['Cyanotic disease palliation', 'Stenting & shunting'],
        ['Re-intervention in ACHD', 'Adult congenital'],
      ],
    },
    diagnostics: {
      title: 'Cardiac diagnostics',
      lede: 'The full spectrum of imaging and functional testing — from infancy to adulthood.',
      items: [
        ['Echocardiography', 'Transthoracic'],
        ['Transoesophageal echo', 'TOE / TEE'],
        ['Fetal echocardiography', 'From 18 weeks'],
        ['ECG interpretation', 'All ages'],
        ['Holter & ambulatory monitoring', '24h–14d'],
        ['Cardiopulmonary exercise testing', 'CPET'],
        ['Cardiac CT', 'Structural & coronary'],
        ['Cardiac MRI', 'Function & flow'],
        ['Stress echo', 'Exercise & dobutamine'],
        ['Newborn cardiac screening', 'Pre- & post-ductal'],
      ],
    },
    conditions: {
      title: 'Conditions managed',
      lede: 'A practice spanning fetal life to adult congenital cardiology.',
      items: [
        ['Congenital heart defects', 'Children & adults'],
        ['Paediatric valve disease', 'Stenosis · regurgitation'],
        ['Cyanotic heart disease', 'Tetralogy · TGA · Ebstein'],
        ['Cardiac murmurs', 'Innocent & pathological'],
        ['Arrhythmias', 'SVT · VT · AV block'],
        ['Heart failure', 'Paediatric & ACHD'],
        ['Hypertension', 'Childhood & adolescent'],
        ['Failure to thrive', 'Cardiac aetiology'],
        ['Exertional syncope', 'Athlete & general'],
        ['Pre-operative cardiac assessment', 'All ages'],
      ],
    },
  };
  const cur = tabs[tab];
  return (
    <section className="section expertise-section" id="expertise">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Clinical expertise</div>
            <h2 className="serif section-title">A complete service. Two-and-a-half thousand procedures&apos; worth of judgement.</h2>
          </div>
        </div>
        <div className="expertise-tabs">
          {Object.entries(tabs).map(([k, v]) => (
            <button
              key={k}
              className={'expertise-tab' + (tab === k ? ' active' : '')}
              onClick={() => setTab(k)}
            >
              <span className="mono expertise-tab-k">{`0${Object.keys(tabs).indexOf(k)+1}`}</span>
              <span className="expertise-tab-l">{v.title}</span>
            </button>
          ))}
        </div>
        <div className="expertise-body">
          <p className="expertise-lede">{cur.lede}</p>
          <div className="expertise-grid">
            {cur.items.map(([name, sub], i) => (
              <div key={i} className="expertise-item">
                <span className="serif expertise-item-name">{name}</span>
                <span className="mono expertise-item-sub">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------- Credentials timeline ------------------- */
const Credentials = () => {
  const rows = [
    ['1997', 'MBBS', 'Madurai Medical College · Tamil Nadu Dr. M.G.R. Medical University'],
    ['2002', 'Diploma in Child Health (DCH)', 'Tamil Nadu Dr. M.G.R. Medical University'],
    ['2004', 'MRCPCH', 'Royal College of Paediatrics & Child Health, UK'],
    ['2005–08', 'Specialist Registrar — Paediatrics & PICU', 'Mersey Deanery · Alder Hey Children\'s Hospital, Liverpool'],
    ['2008–12', 'Paediatric Cardiology Training', 'Alder Hey & Manchester Heart Centre, UK'],
    ['2011', 'CCT — Paediatric Cardiology', 'General Medical Council (GMC), UK'],
    ['2012', 'FRCPCH', 'Royal College of Paediatrics & Child Health, UK'],
    ['2012–14', 'Consultant · Narayana Hrudayalaya', 'Bangalore — one of the world\'s highest-volume congenital cardiac units'],
    ['2014–17', 'Consultant · Fortis Hospitals', 'Chennai & Bangalore — 350 interventions per year'],
    ['2017–19', 'Consultant · Gleneagles Global Health City', 'Chennai — transplant, ECMO & structural intervention programme'],
    ['2019–26', 'Lead Interventional Cardiologist', 'North West Congenital Cardiac Network, UK'],
    ['2026–', 'Consultant Pediatric Cardiologist', 'American Hospital Dubai'],
  ];
  return (
    <section className="section credentials-section" id="credentials">
      <div className="container credentials-grid">
        <div className="credentials-side">
          <div className="eyebrow">Credentials &amp; training</div>
          <h2 className="serif section-title">A long road,<br/>walked carefully.</h2>
          <p className="credentials-note">
            UK paediatric, PICU and full paediatric cardiology fellowships
            completed at Alder Hey — one of Europe&apos;s largest children&apos;s
            hospitals — before subspecialty interventional training.
          </p>
        </div>
        <ol className="credentials-list">
          {rows.map(([year, title, where], i) => (
            <li key={i} className="credentials-item">
              <span className="mono credentials-year">{year}</span>
              <div className="credentials-body">
                <div className="serif credentials-title">{title}</div>
                <div className="credentials-where">{where}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

/* ------------------- Tiny Tickers Award ------------------- */
const Award = () => (
  <section className="section award-section">
    <div className="container award-inner">
      <div className="award-mark serif italic">25</div>
      <div className="award-body">
        <div className="eyebrow">Recognition · 2024</div>
        <h2 className="serif award-title">
          Tiny Tickers 25th Birthday<br/>
          <em className="italic">Thank You</em> Award.
        </h2>
        <p className="award-text">
          To mark its 25th anniversary, the UK charity Tiny Tickers — dedicated to
          improving the detection and treatment of congenital heart defects in
          babies — recognised twenty-five individuals who had made a lasting
          impact in the field. Dr. Narayanan was nominated by a patient&apos;s
          family for his exceptional care, dedication and compassion in treating
          their baby.
        </p>
        <a className="award-link mono" href="https://www.tinytickers.org/2025/11/05/meet-our-25th-birthday-thank-you-award-winners/" target="_blank" rel="noreferrer">
          Read the Tiny Tickers announcement →
        </a>
      </div>
    </div>
  </section>
);

/* ------------------- Research & Publications ------------------- */
const Research = () => {
  const items = [
    { tag: 'Book chapter', title: '"Cardiac Evaluation of Paediatric Liver Transplant Recipients"', sub: 'Published in Paediatric Liver Intensive Care textbook.' },
    { tag: 'Journal · 2015', title: 'Neonatal Aortic Dilatation Secondary to Vitamin A Deficiency', sub: 'PEDIATRICS · Volume 135, Number 5 · May 2015' },
    { tag: 'Journal · 2006', title: 'Giant Atrial Appendage and Absent Pericardium', sub: 'Cardiology for Young · April 2006' },
    { tag: 'Conference · 2025', title: 'PDA device closure in extreme preterm babies', sub: 'World Congress of Pediatric Cardiology & Cardiac Surgery · Hong Kong' },
    { tag: 'Conference · 2025', title: 'Congenital interventions in elderly population', sub: 'World Congress of Pediatric Cardiology & Cardiac Surgery · Hong Kong' },
    { tag: 'Conference · 2024', title: 'Transposition of great arteries and double aortic arch', sub: 'Association of European Paediatric Cardiology · Porto, Portugal' },
    { tag: 'Oral · 2015', title: 'Hyper-Eosinophilic LV Cardiomyopathy Secondary to Strongyloide Infection', sub: 'SCMR/EuroCMR Joint Scientific Sessions' },
    { tag: 'Journal · 2014', title: 'Rare Tetralogy of Fallot with anomalous coronary origin in a 3½-year-old', sub: 'Indian Journal of Practical Paediatrics · July 2014' },
    { tag: 'Society', title: 'European Association for Pediatric and Congenital Cardiology', sub: 'Active member · AEPC' },
    { tag: 'Society', title: 'British Congenital Cardiac Association', sub: 'Active member · BCCA' },
    { tag: 'Society', title: 'Royal College of Paediatrics and Child Health', sub: 'Fellow · FRCPCH' },
  ];
  return (
    <section className="section research-section" id="research">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Research &amp; academic activity</div>
            <h2 className="serif section-title">Evidence shared, knowledge advanced.</h2>
          </div>
          <p className="section-lede">
            A continuing commitment to evidence-based practice and to sharing
            expertise with the wider medical community.
          </p>
        </div>
        <div className="research-list">
          {items.map((it, i) => (
            <div key={i} className="research-row">
              <div className="mono research-tag">{it.tag}</div>
              <div className="serif research-title">{it.title}</div>
              <div className="research-sub">{it.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------- Testimonials ------------------- */
const TESTIMONIALS = [
  {
    quote: 'He sat with us for an hour before he ever mentioned the procedure. By the time we walked into the cath lab, our daughter felt like she was in the hands of family.',
    by: 'Parent of a 14-month-old',
    ctx: 'PDA closure · Alder Hey',
    year: '2024',
  },
  {
    quote: 'I lived with my Fontan circulation for thirty years before anyone explained it to me the way Dr. Arul did. He drew it on a napkin. I cried.',
    by: 'ACHD patient, 32',
    ctx: 'Fontan follow-up · Liverpool',
    year: '2023',
  },
  {
    quote: 'We came for a second opinion and left with a different diagnosis, a clearer plan, and the first proper night&rsquo;s sleep we&rsquo;d had in months.',
    by: 'Parents of a newborn',
    ctx: 'Cyanotic CHD · Dubai',
    year: '2024',
  },
];

const Testimonials = () => {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % TESTIMONIALS.length), 8000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[i];
  return (
    <section className="section testimonials-section">
      <div className="container testimonials-inner">
        <div className="eyebrow testimonials-eyebrow">In the words of families</div>
        <div className="testimonial-stage">
          {TESTIMONIALS.map((tt, idx) => (
            <blockquote
              key={idx}
              className={'testimonial' + (idx === i ? ' active' : '')}
              aria-hidden={idx !== i}
            >
              <div className="serif testimonial-mark">“</div>
              <p className="serif testimonial-text" dangerouslySetInnerHTML={{__html: tt.quote}} />
              <div className="testimonial-meta">
                <span className="mono">{tt.year}</span>
                <span>{tt.by}</span>
                <span className="testimonial-ctx">{tt.ctx}</span>
              </div>
            </blockquote>
          ))}
        </div>
        <div className="testimonial-dots">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              className={'testimonial-dot' + (idx === i ? ' active' : '')}
              onClick={() => setI(idx)}
              aria-label={'Story ' + (idx+1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------- Locations ------------------- */
const Locations = () => (
  <section className="section locations-section" id="locations">
    <div className="container">
      <div className="section-head">
        <div>
          <div className="eyebrow">Locations</div>
          <h2 className="serif section-title">Two practices. One standard of care.</h2>
        </div>
      </div>
      <div className="locations-grid">
        <div className="location-card">
          <div className="ph location-img location-img-american" data-label="AMERICAN HOSPITAL DUBAI EXTERIOR · 16:9"></div>
          <div className="location-body">
            <div className="mono location-flag">UAE · DUBAI · CURRENT PRACTICE</div>
            <h3 className="serif location-title">American Hospital Dubai</h3>
            <p className="location-text">
              Consultant Pediatric Cardiologist &amp; Congenital Cardiac
              Interventionist, leading four specialist multidisciplinary clinics
              across pulmonary hypertension, Fontan, sports
              cardiology and adult congenital heart disease.
            </p>
            <ul className="location-meta">
              <li><span className="mono">Role</span><span>Consultant · Specialist Clinics Lead</span></li>
              <li><span className="mono">Languages</span><span>English · Tamil</span></li>
              <li><span className="mono">Patients</span><span>Paediatric · adult congenital</span></li>
            </ul>
          </div>
        </div>
        <div className="location-card">
          <div className="ph location-img location-img-alder" data-label="ALDER HEY CHILDREN'S HOSPITAL · LIVERPOOL · 16:9"></div>
          <div className="location-body">
            <div className="mono location-flag">UK · NORTH WEST · 2019–2026</div>
            <h3 className="serif location-title">Alder Hey &amp; Liverpool Heart &amp; Chest</h3>
            <p className="location-text">
              Former Lead Interventional Cardiologist for the North West
              Congenital Cardiac Network — six years leading a regional service
              spanning paediatric and adult congenital cardiology across 8.5
              million people.
            </p>
            <ul className="location-meta">
              <li><span className="mono">Role</span><span>Former Lead Interventional Cardiologist · NHS</span></li>
              <li><span className="mono">Period</span><span>November 2019 – January 2026</span></li>
              <li><span className="mono">Scope</span><span>450 catheters · 450 surgeries per year</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------- Second-opinion CTA ------------------- */
const SecondOpinion = ({ onOpen }) => (
  <section className="section second-opinion-section">
    <div className="container second-opinion-inner">
      <div className="eyebrow">A second pair of eyes</div>
      <h2 className="serif second-opinion-title">
        Considering a second opinion?<br/>
        <em className="italic">Send the file. We&apos;ll read it carefully.</em>
      </h2>
      <p className="second-opinion-body">
        Families and referring clinicians are welcome to share imaging,
        catheter reports and clinical summaries for an unhurried review. Most
        responses go out within five working days. There is no obligation to
        proceed with care under Dr. Narayanan.
      </p>
      <div className="second-opinion-actions">
        <button className="btn btn-accent" onClick={onOpen}>Request a second opinion →</button>
        <button className="btn btn-ghost" onClick={onOpen}>For referring clinicians</button>
      </div>
    </div>
  </section>
);

/* ------------------- Footer ------------------- */
const Footer = () => (
  <footer className="footer">
    <div className="container-wide footer-grid">
      <div className="footer-brand">
        <div className="serif footer-mark">A<span className="italic">·</span>N</div>
        <div className="footer-name">Dr. Arul Narayanan</div>
        <div className="mono footer-role">Pediatric Cardiology · Congenital Cardiac Intervention</div>
      </div>
      <div className="footer-col">
        <div className="eyebrow">Practice</div>
        <a href="#about">About</a>
        <a href="#expertise">Clinical expertise</a>
        <a href="#clinics">Specialist clinics</a>
        <a href="#research">Research</a>
      </div>
      <div className="footer-col">
        <div className="eyebrow">Patients</div>
        <a href="#" data-book>Book consultation</a>
        <a href="#" data-second-opinion>Second opinion</a>
        <a href="#locations">Locations</a>
        <a href="#">Tele-consultation</a>
      </div>
      <div className="footer-col">
        <div className="eyebrow">Clinicians</div>
        <a href="#">Refer a patient</a>
        <a href="#research">Publications</a>
        <a href="#">Press &amp; media</a>
        <a href="mailto:dr.arulnarayanan@gmail.com">dr.arulnarayanan@gmail.com</a>
      </div>
      <div className="footer-col">
        <div className="eyebrow">Registered</div>
        <div className="footer-reg">GMC · UK Specialist Register · Paediatric Cardiology</div>
        <div className="footer-reg">Tamil Nadu Medical Council · Reg. 61298 (1998)</div>
      </div>
    </div>
    <div className="container-wide footer-foot">
      <span className="mono">© 2026 Dr. A. Narayanan. All rights reserved.</span>
      <span className="mono" style={{ display: 'inline-flex', gap: '16px', flexWrap: 'wrap' }}>
        <span>Pediatric Cardiology · Congenital Cardiac Intervention · Dubai</span>
        <button 
          onClick={() => window.postMessage({ type: '__activate_edit_mode' }, '*')}
          style={{
            background: 'transparent',
            border: '0',
            color: 'var(--accent)',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            letterSpacing: 'inherit',
            textTransform: 'inherit',
            cursor: 'pointer',
            padding: 0,
            textDecoration: 'underline'
          }}
        >
          [Customize Theme]
        </button>
      </span>
    </div>
  </footer>
);

/* ------------------- When to See a Cardiologist ------------------- */
const WhenToSee = () => {
  const items = [
    ['Known congenital heart disease or heart murmur', 'Any murmur warrants expert evaluation to rule out structural disease.'],
    ['Chest pain, palpitations, or frequent tiredness', 'Especially if symptoms occur during or after physical activity.'],
    ['Exercise-induced fainting or dizziness', 'Exertional syncope is a red flag requiring urgent cardiac assessment.'],
    ['Insufficient weight gain or poor feeding', 'In infants and children, these may signal an underlying cardiac cause.'],
    ['Blue discolouration of lips, fingers, or toes', 'Cyanosis may indicate an undiagnosed congenital heart defect.'],
    ['Family history of heart disease or sudden death', 'Particularly if a family member died suddenly before age 50.'],
    ['Sports cardiology screening', 'Pre-participation evaluation for competitive and recreational athletes.'],
    ['Newborn or fetal cardiac screening', 'Early detection from 18 weeks of pregnancy can be lifesaving.'],
    ['Breathlessness out of proportion to activity', 'Excessive fatigue or dyspnoea that conditioning alone cannot explain.'],
  ];
  return (
    <section className="section when-section" id="when-to-see">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Patient guidance</div>
            <h2 className="serif section-title">When to seek a cardiac evaluation</h2>
          </div>
          <p className="section-lede">
            Early assessment provides reassurance — or timely treatment when needed.
            Consider a cardiac evaluation if you or your child has any of the following.
          </p>
        </div>
        <div className="when-grid">
          {items.map(([title, detail], i) => (
            <div key={i} className="when-item">
              <span className="mono when-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <div className="serif when-title">{title}</div>
                <div className="when-detail">{detail}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="when-cta">
          <button className="btn btn-accent" data-book>Book a consultation →</button>
        </div>
      </div>
    </section>
  );
};

/* ------------------- Mid-page CTA ------------------- */
const MidCTA = () => (
  <section className="mid-cta-section">
    <div className="container mid-cta-inner">
      <h2 className="serif mid-cta-title">
        Have a question about your child&apos;s heart?
      </h2>
      <p className="mid-cta-body">
        Whether you need a first assessment, a second opinion, or sports-clearance
        screening — the first step is a conversation.
      </p>
      <div className="hero-actions">
        <button className="btn btn-accent" data-book>Book a consultation →</button>
        <button className="btn btn-ghost" data-second-opinion>Request a second opinion</button>
      </div>
    </div>
  </section>
);



/* ------------------- Referral Guidelines (for clinicians) ------------------- */
const ReferralGuidelines = () => {
  const [openIdx, setOpenIdx] = React.useState(null);
  const guidelines = [
    { n: '01', title: 'Chest Pain', items: ['Exertional chest pain during or after sports', 'Associated syncope, palpitations, or dyspnoea', 'Radiation to arm, jaw, or back', 'Abnormal ECG in primary care', 'Urgent: chest pain with exertional syncope or family history of SCD < 50 years'] },
    { n: '02', title: 'Syncope / Collapse', items: ['Syncope during exercise', 'Syncope with palpitations or absent prodrome', 'Family history of cardiomyopathy or channelopathy', 'Any athlete with unexplained syncope — withhold from sports pending evaluation'] },
    { n: '03', title: 'Heart Murmurs', items: ['Any type of heart murmur warrants paediatric cardiology evaluation', 'Risk of missed HCM, ARVC, or congenital coronary anomalies', 'Particularly important for children in competitive sports'] },
    { n: '04', title: 'Palpitations / Arrhythmia', items: ['Palpitations during sport or high-intensity activity', 'Associated dizziness, presyncope, or chest pain', 'Resting tachycardia or bradycardia not explained by conditioning', 'Abnormal ECG: PVCs, WPW, prolonged QT, ST/T changes'] },
    { n: '05', title: 'Abnormal ECG or Echocardiogram', items: ['T-wave inversion beyond V1 after age 14', 'ST depression or pathologic Q waves', 'Ventricular pre-excitation', 'Prolonged or short QT interval', 'Echo showing structural abnormality or inconclusive findings'] },
    { n: '06', title: 'Sports Pre-Participation Evaluation', items: ['Any exertional symptoms', 'Prior cardiac diagnosis (ASD/VSD post-repair, Kawasaki, CHD)', 'Hypertension stage 2 or obesity with dyspnoea', 'Exercise stress test for competitive clearance', 'Return-to-play planning after myocarditis, COVID, or surgery'] },
    { n: '07', title: 'Myocarditis / Pericarditis', items: ['Chest pain with elevated troponin or inflammatory markers', 'Post-viral symptoms with exercise intolerance', 'Suspected post-COVID myocardial involvement', 'Return-to-play decision (typically ≥ 3 months restriction)'] },
    { n: '08', title: 'Hypertension', items: ['BP ≥ 95th percentile on 3 separate visits', 'Secondary hypertension suspected', 'Hypertension with LVH on ECG or echo', 'Stage 2 hypertension in athletes'] },
    { n: '09', title: 'Family History of Cardiac Disease', items: ['Sudden cardiac death < 50 years', 'Hypertrophic or dilated cardiomyopathy', 'ARVC, LQTS, CPVT, or Brugada syndrome', 'Premature MI or severe dyslipidaemia'] },
    { n: '10', title: 'Exercise Intolerance', items: ['Poor performance unexplained by conditioning', 'Excessive fatigue or breathlessness out of proportion', 'Dizziness during exercise', 'Cyanosis or suspected shunts'] },
    { n: '11', title: 'Post–Cardiac Surgery / CHD Follow-up', items: ['Any congenital heart disease needing ongoing monitoring', 'Sports clearance post-repair', 'Counselling on safe activity levels for aortic dilation, residual shunts, or valve disease'] },
    { n: '12', title: 'General Congenital Cardiology', items: ['Known congenital heart disease in children and adults', 'Blue discolouration', 'Newborn and fetal screening for congenital heart disease', 'Interventional procedures for children and adults with CHD'] },
  ];
  return (
    <section className="section referral-section" id="referrals">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">For referring clinicians</div>
            <h2 className="serif section-title">When to refer to paediatric cardiology.</h2>
          </div>
          <p className="section-lede">
            Structured referral criteria for GPs, paediatricians, and sports-medicine
            physicians. Identifying the right moment to refer can be lifesaving.
          </p>
        </div>
        <div className="referral-alert">
          <div className="mono referral-alert-label">⚠ Red flag — urgent review required</div>
          <div className="referral-alert-body">
            Exertional syncope · Exercise-induced chest pain · Palpitations with near
            syncope · Resting HR abnormalities not explained by training · Elevated
            troponin with symptoms · ECG findings concerning for cardiomyopathy
          </div>
        </div>
        <div className="referral-list">
          {guidelines.map((g, idx) => (
            <div
              key={idx}
              className={'referral-row' + (openIdx === idx ? ' open' : '')}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <div className="referral-row-head">
                <span className="mono referral-num">{g.n}</span>
                <span className="serif referral-title">{g.title}</span>
                <span className="referral-toggle">{openIdx === idx ? '−' : '+'}</span>
              </div>
              {openIdx === idx && (
                <ul className="referral-items">
                  {g.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, {
  Nav, TrustBand, About, Stats, ExpertiseSection,
  Credentials, Award, Research, Testimonials,
  Locations, SecondOpinion, Footer,
  WhenToSee, MidCTA, HumanitarianWork, ReferralGuidelines
});
