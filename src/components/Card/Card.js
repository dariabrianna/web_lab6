// src/components/Card/Card.jsx
import { useState, useEffect } from "react";
import * as S from "./styles";
import Task from "../Task/Task";
import Modal from "../Modal/Modal";

import { updateCard, deleteCard as deleteCardApi } from "../../services/cardService";
import { createTask as createTaskApi }             from "../../services/taskService";
import {
  updateTask as updateTaskApi,
  deleteTask as deleteTaskApi,
} from "../../services/taskService";

const Card = ({ card, refresh }) => {
  const [editMode, setEditMode]       = useState(false);
  const [localTitle, setLocalTitle]   = useState(card.title);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState(null);

  useEffect(() => {
    setLocalTitle(card.title);
  }, [card.title]);

  // Actualizează titlul listei
  const handleTitleChange = async e => {
    await updateCard(card.id, { title: e.target.value });
    refresh();
  };

  const handleTitleBlur = async () => {
    if (localTitle !== card.title) {
      await updateCard(card.id, { title: localTitle });
      refresh();
    }
    setEditMode(false);
  };

  const handleTitleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.blur();
    }
  };


  // Adaugă un nou task
  const handleAddTask = async () => {
    await createTaskApi(card.id, "New task");
    refresh();
  };

  // Șterge această listă
  const handleDeleteCard = async () => {
    console.log(card.id);
    await deleteCardApi(card.id);
    refresh();
  };

  const handleDelete = async (tasks) => {
    await deleteTaskApi(tasks);
    refresh();
  };

  return (
    <S.Card>
      {/* Titlu listă */}
      <div>
      {editMode ? (
          <input
            value={localTitle}
            onChange={(e) => setLocalTitle(e.target.value)}
            onBlur={handleTitleBlur}
            onKeyDown={handleTitleKeyDown}
            placeholder="Enter list title..."
            autoFocus
          />
        ) : (
          <button onClick={() => setEditMode(true)}>
            {card.title}
          </button>
        )}
        <img
          src="/images/find.png"
          alt="info"
          
          onClick={() => {
            console.log("Click pe puncte!");
            setIsOpenModal(true);
          }}
        />
      </div>

      {/* Task-uri */}
      {card.tasks?.map(task => (
        <Task
          key={task.id}
          task={task}
          refresh={refresh}
          setIsOpenModal={() => setIsOpenModal(task.id)}
        />
      ))}

      <button onClick={handleAddTask}>+ Add new task</button>

      {/* Modal acțiuni listă */}
      {isOpenModal && (
        <Modal
          onClose={() => setIsOpenModal()}
          onDelete={() => handleDelete(isOpenModal)}
        />
      )}
    </S.Card>
  );
};

export default Card;
