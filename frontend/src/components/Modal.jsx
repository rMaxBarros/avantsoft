import styles from './Modal.module.css';

function Modal({ message, onClose}) {
    return (
        <div className="styles.overlay">
            <div className="styles.modal">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;