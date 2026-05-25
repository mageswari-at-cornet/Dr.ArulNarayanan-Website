/* Main app: composes sections + tweak panel */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "editorial",
  "accent": "#b04a2a",
  "theme": "default",
  "showSecondOpinion": true
}/*EDITMODE-END*/;

const HERO_OPTIONS = [
  { value: 'editorial', label: 'Editorial' },
  { value: 'portrait',  label: 'Portrait' },
  { value: 'stats',     label: 'Stats' },
  { value: 'story',     label: 'Story' },
];

const THEME_OPTIONS = [
  { value: 'default', label: 'Editorial Warm' },
  { value: 'blue',    label: 'Trust Blue' },
  { value: 'teal',    label: 'Teal Clinical' },
  { value: 'green',   label: 'Sage Green' },
  { value: 'neutral', label: 'Soft Pastel' },
  { value: 'dark',    label: 'Premium Dark' },
];

const ACCENT_PALETTE = ['#b04a2a', '#1f4a4a', '#7a3119', '#3f6b3a', '#1a3a5b'];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [modal, setModal] = React.useState({ open: false, kind: 'book' });

  // Apply theme & accent live
  React.useEffect(() => {
    const list = document.documentElement.classList;
    list.remove('theme-blue', 'theme-teal', 'theme-green', 'theme-neutral', 'theme-dark');
    if (t.theme && t.theme !== 'default') {
      list.add(`theme-${t.theme}`);
      document.documentElement.style.removeProperty('--accent');
    } else {
      document.documentElement.style.setProperty('--accent', t.accent);
    }
  }, [t.theme, t.accent]);

  // Wire data-book / data-second-opinion across the page
  React.useEffect(() => {
    const onClick = (e) => {
      const book = e.target.closest('[data-book]');
      const opin = e.target.closest('[data-second-opinion]');
      if (book) { e.preventDefault(); setModal({ open: true, kind: 'book' }); }
      else if (opin) { e.preventDefault(); setModal({ open: true, kind: 'opinion' }); }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const openBook = () => setModal({ open: true, kind: 'book' });

  return (
    <>
      <Nav onBook={openBook} />
      <Hero variant={t.heroVariant} />
      <TrustBand />
      <About />
      <Stats />
      <WhenToSee />
      <ExpertiseSection />
      <MidCTA />
      <ClinicsSection />
      <Testimonials />
      <Credentials />
      <Award />
      <Research />
      <ReferralGuidelines />
      <Locations />
      {t.showSecondOpinion && <SecondOpinion onOpen={() => setModal({ open: true, kind: 'opinion' })} />}
      <Footer />

      <BookingModal
        open={modal.open}
        kind={modal.kind}
        onClose={() => setModal(m => ({ ...m, open: false }))}
      />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Color Palette Theme">
          <TweakRadio
            value={t.theme}
            options={THEME_OPTIONS}
            onChange={(v) => setTweak('theme', v)}
          />
        </TweakSection>
        {t.theme === 'default' && (
          <TweakSection label="Accent colour (Warm)">
            <TweakColor
              value={t.accent}
              options={ACCENT_PALETTE}
              onChange={(v) => setTweak('accent', v)}
            />
          </TweakSection>
        )}
        <TweakSection label="Hero variant">
          <TweakRadio
            value={t.heroVariant}
            options={HERO_OPTIONS}
            onChange={(v) => setTweak('heroVariant', v)}
          />
        </TweakSection>
        <TweakSection label="Second-opinion section">
          <TweakToggle
            label="Show before footer"
            value={t.showSecondOpinion}
            onChange={(v) => setTweak('showSecondOpinion', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
