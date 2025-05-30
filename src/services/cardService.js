import api from "../api";

export const listCards = (boardId, skip = 0, limit = 20) =>
  api.get("/cards", { params: { boardId, skip, limit } });

export const createCard = (boardId, title) =>
  api.post("/cards", { boardId, title });

export const updateCard = (id, data) =>
  api.patch(`/cards/${id}`, data);

export const deleteCard = id =>
  api.delete(`/cards/${id}`);
