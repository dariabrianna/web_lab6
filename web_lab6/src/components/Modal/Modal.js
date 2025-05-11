import * as S from "./styles";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const Modal = ({ onClose, cards, setCards, deleteCard, index }) => {
  const [isOpenList, setIsOpenList] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => onClose()}>
      <S.Modal>
        <div>
          <h1>List actions</h1>
          <img
            src="/images/closing.png"
            className="close"
            onClick={onClose}
            alt="this"
          />
        </div>
        <div>
          <ul className="list">
            <li
              onClick={() => {
                setCards([
                  ...cards,
                  {
                    buttonText: "Enter list title...",
                    tasks: ["Enter your task"],
                  },
                ]);
                onClose();
              }}
            >
              Add card...
            </li>
            <li onClick={() => setIsOpenList(true)}>Copy card...</li>
          </ul>

          <ul>
            <li
              onClick={() => {
                deleteCard();
                onClose();
              }}
            >
              Delete this card
            </li>
          </ul>
        </div>
        
      </S.Modal>
    </OutsideClickHandler>
  );
};

export default Modal;
