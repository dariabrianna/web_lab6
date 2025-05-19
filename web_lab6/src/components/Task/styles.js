// src/components/Task/styles.js
import styled from "styled-components";

export const Task = styled.div`
  padding: 6px;
  color: ${({ theme }) => theme.textSecondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  gap: 16px;

  .deletetask {
    width: 20px;
    cursor: pointer;
  }

  button {
    background: none;
    border: 0;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.textSecondary};
    cursor: pointer;
    max-width: 90%;
  }

  input {
    border: 2px solid ${({ theme }) => theme.buttonBg};
    border-radius: 4px;
    padding: 4px;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColor};
    max-width: 90%;
  }

  &:last-of-type:hover {
    background-color: var(--ds-background-neutral-hovered, #091e420a);
    cursor: pointer;
  }
`;
