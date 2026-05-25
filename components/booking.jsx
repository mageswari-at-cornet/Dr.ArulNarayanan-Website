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
            ? 'The second-opinion intake process is being finalised. Please email a brief summary first; the team will confirm what reports are needed and the expected timeline.'
            : 'Online self-booking is being finalised. For now, please contact American Hospital Dubai or email the practice to request an in-person or tele-consultation appointment.'}
        </p>
        <div className="modal-channels">
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
