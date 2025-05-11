import * as S from "./styles";
import { useEffect, useState } from "react";


const Card = ({ index, setCards, cards, elem, deleteCard }) => {
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    document.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        setEditMode(false);
      }
    });
  }, []);

  return (
    <>
      <S.Card>
        <div>
          {editMode ? (
            <input
              type="textarea"
              value={elem?.buttonText}
              onChange={(e) => {
                let exCards = [...cards];
                exCards[index].buttonText = e.target.value;
                setCards([...exCards]);
              }}
              placeholder="Enter list title..."
            />
          ) : (
            <button onClick={() => setEditMode(true)}>
              {elem?.buttonText}
            </button>
          )}
          <img
            src="/images/find.png"
            alt="info"
          />
        </div>
        {}
        
        <button
          onClick={() => {
            let exCards = [...cards];
            cards[index].tasks = [...cards[index].tasks, "New Task"];
            setCards([...exCards]);
          }}
        >
          + Add new task
        </button>
        
      </S.Card>
    </>
  );
};

export default Card;
