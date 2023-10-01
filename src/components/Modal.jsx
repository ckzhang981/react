import './Modal.css';

const Modal = ({ children, open, close }) => {
  return (
    <div
      className={`${open ? 'modal modal-show' : 'modal'}`}
      tabIndex="-1"
      role="dialog"
      onClick={(evt) => { if (evt.target === evt.currentTarget) close(); }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h1>Your Course Schedule</h1>
            <button type="button" className="btn-close" aria-label="Close" onClick={close}/>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal;