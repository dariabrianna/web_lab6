import styled from "styled-components";

export const Task = styled.div`
  background-color: #f5f6fa;
  border-radius: 10px;
  padding: 10px 12px;
  color: ${({ theme }) => theme.textSecondary || "#636e72"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  gap: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e9ecf1;
  }

  .deletetask {
    width: 18px;
    height: 18px;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }

  button {
    background: none;
    border: none;
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor || "#2f3640"};
    cursor: pointer;
    flex-grow: 1;
    text-align: left;
    overflow-wrap: break-word;

    &:hover {
      color: #0984e3;
    }
  }

  input {
    border: 2px solid ${({ theme }) => theme.buttonBg || "#74b9ff"};
    border-radius: 6px;
    padding: 6px 10px;
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor || "#2f3640"};
    flex-grow: 1;
    max-width: 100%;
    outline: none;

    &:focus {
      border-color: #0984e3;
    }
  }
`;
