import { useState, useMemo } from "react";
import * as S from "./styles";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";

const Board = () => {
  // carduri demo inițiale
  const [cards, setCards] = useState([
    {
      buttonText: "Enter list title...",
      tasks: ["Enter your task"],
    },
  ]);

  // textul introdus în SearchBar
  const [filter, setFilter] = useState("");

  // filtrare simplă: titlu card sau oricare task conține textul (case-insensitive)
  const visibleCards = useMemo(() => {
    if (!filter.trim()) return cards;
    const q = filter.toLowerCase();
    return cards.filter(
      c =>
        c.buttonText.toLowerCase().includes(q) ||
        c.tasks.some(t => t.toLowerCase().includes(q))
    );
  }, [cards, filter]);

  return (
    <>
      {/* filtrul – îl poți muta în Header dacă preferi */}
      <SearchBar value={filter} onChange={setFilter} />

      <S.Board>
        {visibleCards.map((elem, i) => (
          <Card
            key={i}
            elem={elem}
            cards={cards}
            setCards={setCards}
            index={i}
            className="cards"
            deleteCard={() => {
              cards.length > 1
                ? setCards(cards.filter((_, idx) => idx !== i))
                : setCards([...cards]);
            }}
          />
        ))}
      </S.Board>
    </>
  );
};

export default Board;
