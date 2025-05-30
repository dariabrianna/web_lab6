import React, { useState, useEffect } from "react";
import * as S from "./styles"; // include și AddListCard, BoardHeader etc.

import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import { listCards, createCard } from "../../services/cardService";

const BOARD_ID = 1;

const Board = () => {
  const [cards, setCards]     = useState([]);
  const [filter, setFilter]   = useState("");
  const [loading, setLoading] = useState(true);

  const limit = 50;
  const skip  = 0;

  const refresh = async () => {
    setLoading(true);
    try {
      const res = await listCards(BOARD_ID, skip, limit);
      const data = res.data;

      if (Array.isArray(data)) {
        setCards(data);
      } else if (Array.isArray(data.cards)) {
        setCards(data.cards);
      } else {
        console.error("Eroare: res.data nu este un array.");
        setCards([]);
      }
    } catch (err) {
      console.error("Eroare la încărcarea cardurilor:", err);
      setCards([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  const handleAddList = async () => {
    try {
      await createCard(BOARD_ID, "Untitled list");
      refresh();
    } catch (err) {
      console.error("Eroare la adăugarea cardului:", err);
    }
  };

  return (
    <>
      <S.BoardHeader>
        <SearchBar filter={filter} setFilter={setFilter} />
      </S.BoardHeader>

      <S.Board>
        {!loading &&
          Array.isArray(cards) &&
          cards
            .filter(card => card.title.toLowerCase().includes(filter.toLowerCase()))
            .map(card => (
              <Card key={card.id} card={card} refresh={refresh} />
            ))}

        <S.AddListCard onClick={handleAddList}>
          + Add list
        </S.AddListCard>
      </S.Board>
    </>
  );
};


export default Board;
