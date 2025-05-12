import * as S from "./styles";
import Card from "../Card/Card";
import { useState } from "react";

const Board = () => {
  const [cards, setCards] = useState([
    { buttonText: "Enter list title...", tasks: ["Enter your task"] },
  ]);
  console.log(cards);
  return (
    <S.Board>
      {cards.map((elem, i) => (
        <Card
          key={i}
          elem={elem}
          cards={cards}
          setCards={setCards}
          index={i}
          className="cards"
          deleteCard={() => {
            cards.length > 1
              ? setCards([...cards.filter((elem, index) => i !== index)])
              : setCards([...cards]);
          }}
        />
      ))}
    </S.Board>
  );
};

export default Board;
