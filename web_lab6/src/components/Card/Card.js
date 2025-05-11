import * as S from "./styles";
import { useEffect, useState } from "react";
import Task from "../Task/Task";
import Modal from "../Modal/Modal";

const Card = ({ index, setCards, cards, elem, deleteCard }) => {
  const [editMode, setEditMode] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
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
            onClick={() => setIsOpenModal(true)}
          />
        </div>
        {}
        {cards[index]?.tasks &&
          cards[index]?.tasks.map((elem, i) => (
            <Task
              key={i}
              elem={elem}
              tasks={elem?.tasks}
              setCards={setCards}
              cards={cards}
              index={i}
              cardIndex={index}
              className="tasks"
              deleteTask={() => {
                const copyCards = [...cards];
                console.log(elem);
                const copyTasks =
                  copyCards[index].tasks.length > 1
                    ? [
                        ...cards[index].tasks.filter(
                          (element, ind) => i !== ind
                        ),
                      ]
                    : [...cards[index].tasks];

                copyCards[index].tasks = [...copyTasks];
                setCards([...copyCards]);
              }}
            />
          ))}
        <button
          onClick={() => {
            let exCards = [...cards];
            cards[index].tasks = [...cards[index].tasks, "New Task"];
            setCards([...exCards]);
          }}
        >
          + Add new task
        </button>
        {isOpenModal && (
          <Modal
            onClose={() => setIsOpenModal(false)}
            cards={cards}
            setCards={setCards}
            deleteCard={deleteCard}
            index={index}
          />
        )}
      </S.Card>
    </>
  );
};

export default Card;
