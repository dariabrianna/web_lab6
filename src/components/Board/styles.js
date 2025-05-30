import styled from "styled-components";

export const Board = styled.div`
  display: flex;
  align-items: flex-start; // asigură alinierea la partea de sus
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.boardBg || "#f0f2f5"};
  overflow-x: auto;
  min-height: calc(100vh - 65px); /* umple tot ecranul sub header */
  box-sizing: border-box;
`;

// în Board/styles.js sau un nou styled component
export const AddListCard = styled.button`
  background-color: #f7f9fb;
  border: 2px dashed #ccc;
  border-radius: 16px;
  min-width: 250px;
  min-height: 200px; // 🔥 asigură alinierea cu celelalte carduri
  font-weight: bold;
  font-size: 1rem;
  color: #2f3640;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e1e2e6;
  }
`;


export const BoardHeader = styled.div`
  padding: 16px 20px 0 20px;
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  background-color: ${({ theme }) => theme.boardBg || "#f0f2f5"};
`;
