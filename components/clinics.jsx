/* Interactive specialist clinic cards */

const CLINICS = [
  {
    id: 'pulmonary',
    n: '01',
    title: 'Pulmonary Hypertension',
    sub: 'Elevated pulmonary arterial pressure',
    body: 'Long-term medical management for adults and children with pulmonary hypertension, including patients with shunt-related, idiopathic, and connective-tissue-driven disease.',
    works: ['Pulmonologists', 'Rheumatologists'],
    accent: 'var(--accent)',
    icon: 'lungs',
  },
  {
    id: 'neuromuscular',
    n: '02',
    title: 'Neuromuscular Disorders',
    sub: 'Cardiac care alongside the neurology team',
    body: 'Cardiomyopathy and conduction surveillance for children and adults with Duchenne, Becker, myotonic dystrophy and related neuromuscular conditions.',
    works: ['Neurologists'],
    accent: 'var(--teal)',
    icon: 'spine',
  },
  {
    id: 'fontan',
    n: '03',
    title: 'Fontan Clinic',
    sub: 'Lifelong follow-up after single-ventricle palliation',
    body: 'Tailored surveillance, exercise prescription and intervention planning for adolescents and adults living with Fontan circulation.',
    works: ['Hepatology', 'Adult cardiology'],
    accent: 'var(--green)',
    icon: 'circuit',
  },
  {
    id: 'sports',
    n: '04',
    title: 'Sports Cardiology',
    sub: 'Pre-participation screening for athletes',
    body: 'ECG, echo and exercise-test pathways for competitive and recreational athletes — including assessment of murmurs, syncope, exertional symptoms, and return-to-play planning after myocarditis or cardiac surgery. The goal is to help patients stay active safely, not restrict activity unnecessarily.',
    works: ['Sports medicine', 'GPs'],
    accent: 'var(--gold)',
    icon: 'pulse',
  },
  {
    id: 'achd',
    n: '05',
    title: 'Adult Congenital Heart Disease',
    sub: 'Lifelong care for adults living with congenital conditions',
    body: 'Many children with congenital heart disease now live well into adulthood but require ongoing specialist care. This clinic provides continuity from paediatric services — covering pregnancy planning, arrhythmia surveillance, re-intervention, transition care and structural follow-up.',
    works: ['Obstetrics', 'Electrophysiology'],
    accent: 'var(--accent-deep)',
    icon: 'adult',
  },
];

const ClinicIcon = ({ kind }) => {
  // tasteful, minimal — drawn with circles/lines only (no figurative SVGs)
  if (kind === 'lungs')   return <svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="20" cy="14" r="2"/><path d="M20 16 v12"/><path d="M20 18 c -8 0 -10 6 -8 14"/><path d="M20 18 c 8 0 10 6 8 14"/></svg>;
  if (kind === 'spine')   return <svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M20 6 v28"/><circle cx="20" cy="10" r="2.4"/><circle cx="20" cy="20" r="2.4"/><circle cx="20" cy="30" r="2.4"/></svg>;
  if (kind === 'circuit') return <svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="20" cy="20" r="12"/><circle cx="20" cy="20" r="3"/><path d="M20 8 v6 M20 26 v6 M8 20 h6 M26 20 h6"/></svg>;
  if (kind === 'pulse')   return <svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M4 22 h10 l3 -8 l4 14 l3 -10 l3 4 h9"/></svg>;
  if (kind === 'adult')   return <svg viewBox="0 0 40 40" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="20" cy="12" r="4"/><path d="M12 34 c 0 -6 4 -10 8 -10 s 8 4 8 10"/></svg>;
  return null;
};

const ClinicCard = ({ clinic, isOpen, onToggle }) => {
  return (
    <article
      className={'clinic-card' + (isOpen ? ' open' : '')}
      onClick={onToggle}
      style={{ ['--card-accent']: clinic.accent }}
      aria-expanded={isOpen}
    >
      <div className="clinic-card-head">
        <div className="mono clinic-num">{clinic.n}</div>
        <div className="clinic-icon"><ClinicIcon kind={clinic.icon} /></div>
      </div>
      <h3 className="serif clinic-title">{clinic.title}</h3>
      <div className="clinic-sub">{clinic.sub}</div>
      <div className="clinic-body">
        <p>{clinic.body}</p>
        <div className="clinic-works">
          <span className="mono">In collaboration with</span>
          <ul>
            {clinic.works.map(w => <li key={w}>{w}</li>)}
          </ul>
        </div>
      </div>
      <div className="clinic-foot">
        <span className="mono">{isOpen ? 'Close' : 'Read more'}</span>
        <span className="clinic-arrow">{isOpen ? '−' : '+'}</span>
      </div>
    </article>
  );
};

const ClinicsSection = () => {
  const [openId, setOpenId] = React.useState('pulmonary');
  return (
    <section className="section clinics-section" id="clinics">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Specialist Clinics · Am. Hospital Dubai</div>
            <h2 className="serif section-title">Five clinics. One coordinated team.</h2>
          </div>
          <p className="section-lede">
            Complex cardiac conditions rarely sit inside one specialty. Dr. Narayanan
            leads multidisciplinary clinics that bring pulmonologists, neurologists,
            hepatologists and electrophysiologists into the same room — so families
            don&apos;t have to coordinate them.
          </p>
        </div>
        <div className="clinics-grid">
          {CLINICS.map(c => (
            <ClinicCard
              key={c.id}
              clinic={c}
              isOpen={openId === c.id}
              onToggle={() => setOpenId(openId === c.id ? null : c.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

window.ClinicsSection = ClinicsSection;
