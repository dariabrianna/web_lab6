import * as S from "./styles";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const Modal = ({ onClose, onDelete }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  console.log('here');
  return (
    <S.Overlay>
    <OutsideClickHandler onOutsideClick={onClose}>
      <S.Modal>
        <div className="modal-header">
          <h1>List actions</h1>
          <img
            src="/images/closing.png"
            className="close"
            onClick={onClose}
            alt="close"
          />
        </div>

        <div className="modal-body">
          {!confirmDelete ? (
            <ul>
              <li onClick={() => setConfirmDelete(true)}>
                Delete this card
              </li>
            </ul>
          ) : (
            <div className="confirm-delete" style={{marginTop: '15px'}}>
              <p>Are you sure you want to delete this card?</p>
              <button onClick={onDelete} style={{marginRight: '15px'}}>Yes, delete</button>
              <button onClick={onClose}>Cancel</button>
            </div>
          )}
        </div>
      </S.Modal>
    </OutsideClickHandler>
    </S.Overlay>
  );
};

export default Modal;
