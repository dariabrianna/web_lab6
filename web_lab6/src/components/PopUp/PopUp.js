import React from "react";
import * as S from "./styles";

/**
 * Vizibilitățile disponibile și metadatele lor
 * (înlocuiește căile spre imagini cu cele reale din proiectul tău)
 */
const VISIBILITY_OPTIONS = [
  {
    id: "private",
    icon: "/images/lock.png",
    title: "Private",
    description: "Only board members can see and edit this board.",
  },
  {
    id: "workspace",
    icon: "/images/people.png",
    title: "Workspace",
    description:
      "All members of the admin's workspace can see and edit this board.",
  },
  {
    id: "public",
    icon: "/images/globe.png",
    title: "Public",
    description:
      "Anyone on the internet can see this board. Only board members can edit it.",
  },
];

/**
 * Pop-up pentru schimbarea vizibilității unui board.
 *
 * Props:
 *  – onClose   → funcție care închide fereastra
 *  – onSelect  → (opțional) primește `id`-ul opțiunii selectate
 */
const PopUp = ({ onClose, onSelect }) => {
  return (
    <S.PopUp>
      {/* Buton X pentru închidere */}
      <img
        src="/images/closing.png"
        alt="close"
        className="close"
        onClick={onClose}
      />

      <h1>Change visibility</h1>

      <ul>
        {VISIBILITY_OPTIONS.map(({ id, icon, title, description }) => (
          <li
            key={id}
            onClick={() => {
              onSelect?.(id);
              onClose();
            }}
          >
            <img src={icon} alt="" />
            <span>
              <strong>{title}</strong>
              <p>{description}</p>
            </span>
          </li>
        ))}
      </ul>
    </S.PopUp>
  );
};

export default PopUp;
