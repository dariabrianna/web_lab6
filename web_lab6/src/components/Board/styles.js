// src/components/Board/styles.js
import styled from "styled-components";

export const Board = styled.div`
  margin-top: 65px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.boardBg};
`;
