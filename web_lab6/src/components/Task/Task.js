import * as S from "./styles";
import { useEffect, useState } from "react";

const Task = ({
  elem,
  setCards,
  index,
  tasks,
  cards,
  cardIndex,
  deleteTask,
}) => {
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    document.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        setEditMode(false);
      }
    });
  }, []);

  console.log(cards);

  const handleTaskChange = (cardIndex, taskIndex, newTask) => {
    // Copy the cards array
    const newCards = [...cards];

    // Copy the tasks array of the card we're changing
    const newTasks = [...newCards[cardIndex].tasks];

    // Update the task
    newTasks[taskIndex] = newTask;

    // Update the tasks array of the card
    newCards[cardIndex].tasks = newTasks;
    console.log(newCards);
    // Update the state
    setCards(newCards);
  };

  return (
    <S.Task onBlur={() => setEditMode(false)}>
      {editMode ? (
        <input
          className="cardname"
          type="textarea"
          value={elem}
          onChange={(e) => handleTaskChange(cardIndex, index, e.target.value)}
          placeholder="New Task"
        />
      ) : (
        <button onClick={() => setEditMode(true)}>{elem}</button>
      )}
      <img
        src="/images/bin.png"
        alt="informative"
        className="deletetask"
        onClick={() => deleteTask()}
      />
    </S.Task>
  );
};

export default Task;
