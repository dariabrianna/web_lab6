import api from "../api";

/* ──────────── LISTARE / DETALIU ──────────── */

/** Returnează toate board-urile, cu paginare */
export const listBoards = (skip = 0, limit = 20) =>
  api.get("/boards", { params: { skip, limit } });

/** (opţional) Un singur board, după id  */
export const getBoard = id =>
  api.get(`/boards/${id}`);

/* ──────────── CREARE ──────────── */

/** Creează un board nou   body: { title } */
export const createBoard = title =>
  api.post("/boards", { title });

/* ──────────── ACTUALIZARE ──────────── */

/** Update parţial (PATCH)   data: { title?, … } */
export const updateBoard = (id, data) =>
  api.patch(`/boards/${id}`, data);

/* ──────────── ŞTERGERE ──────────── */

/** Şterge definitiv board-ul */
export const deleteBoard = id =>
  api.delete(`/boards/${id}`);
