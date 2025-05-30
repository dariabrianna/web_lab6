// src/components/Task/Task.jsx
import { useState, useEffect } from "react";
import * as S from "./styles";

import {
  updateTask as updateTaskApi,
  deleteTask as deleteTaskApi,
} from "../../services/taskService";

const Task = ({ task, refresh, setIsOpenModal, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [localText, setLocalText] = useState(task.text);

  // Keep localText in sync if task.text changes from above
  useEffect(() => {
    setLocalText(task.text);
  }, [task.text]);

  // Save when input loses focus
  const handleBlur = async () => {
    if (localText !== task.text) {
      await updateTaskApi(task.id, { text: localText });
      refresh();
    }
    setEditMode(false);
  };

  // Also save & exit edit mode on Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.blur();
    }
  };

  // Trigger the parent‐provided delete handler (e.g. open modal)
  const handleDeleteClick = () => {
    setIsOpenModal(true);
    onDelete?.();
  };

  return (
    <S.Task>
      {editMode ? (
        <input
          className="cardname"
          value={localText}
          onChange={(e) => setLocalText(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder="New Task"
          autoFocus
        />
      ) : (
        <button onClick={() => setEditMode(true)}>
          {task.text}
        </button>
      )}

      <img
        src="/images/bin.png"
        alt="delete"
        className="deletetask"
        onClick={setIsOpenModal}
      />
    </S.Task>
  );
};

export default Task;
