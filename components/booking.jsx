/* Booking & second-opinion modal (stub) */

const BookingModal = ({ open, kind, onClose }) => {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const isOpinion = kind === 'opinion';
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-eyebrow eyebrow">
          {isOpinion ? 'Second opinion · Coming soon' : 'Booking · Coming soon'}
        </div>
        <h3 className="serif modal-title">
          {isOpinion
            ? <>The second-opinion intake is being<br/>finalised.</>
            : <>Online booking opens shortly.</>}
        </h3>
        <p className="modal-body">
          {isOpinion
            ? 'You will be able to securely upload imaging and reports for a written review by Dr. Narayanan, with most responses returned within five working days.'
            : 'Patients will be able to schedule in-person and tele-consultation appointments at Liverpool or Dubai directly through this site, with availability shown live.'}
        </p>
        <div className="modal-channels">
          <div className="modal-channel">
            <span className="mono modal-channel-k">Liverpool, UK</span>
            <span className="modal-channel-v">Practice secretary · +44 (0) 151 — — — —</span>
          </div>
          <div className="modal-channel">
            <span className="mono modal-channel-k">Dubai, UAE</span>
            <span className="modal-channel-v">American Hospital · +971 58 571 2349</span>
          </div>
          <div className="modal-channel">
            <span className="mono modal-channel-k">Email</span>
            <span className="modal-channel-v">dr.arulnarayanan@gmail.com</span>
          </div>
        </div>
        <div className="modal-actions">
          <button className="btn btn-accent" onClick={onClose}>Got it</button>
          <a className="btn btn-ghost" href="mailto:dr.arulnarayanan@gmail.com">Email instead</a>
        </div>
      </div>
    </div>
  );
};

window.BookingModal = BookingModal;
