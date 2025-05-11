import * as S from "./styles";
import Card from "../Card/Card.js";
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
          
        />
      ))}
    </S.Board>
  );
};

export default Board;
