// src/services/taskService.js
import api from "../api";

export const createTask  = (cardId, text = "New task") =>
  api.post("/tasks", { cardId, text });

export const updateTask  = (id, data) =>
  api.patch(`/tasks/${id}`, data);

export const deleteTask  = id =>
  api.delete(`/tasks/${id}`);
