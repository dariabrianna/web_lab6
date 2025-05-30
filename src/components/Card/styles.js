import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg || "#fff"};
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 16px;
  margin: 12px;
  max-width: 260px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor || "#ddd"};
  height: fit-content;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }

  button {
    background: none;
    border: none;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColor || "#2f3640"};
    padding: 4px 0;
    text-align: left;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #0984e3;
    }
  }

  input {
    border: 2px solid ${({ theme }) => theme.buttonBg || "#74b9ff"};
    border-radius: 8px;
    padding: 6px 10px;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColor || "#2f3640"};
    outline: none;

    &:focus {
      border-color: #0984e3;
    }
  }

  & > div:first-of-type {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & > div:first-of-type > img {
    width: 14px;
    height: 14px;
    margin-left: auto;
    margin-top: 2px;
    cursor: pointer;
    opacity: 0.6;
     z-index: 1;

    &:hover {
      opacity: 1;
    }
  }

  .cardname {
    border: 1px solid ${({ theme }) => theme.borderColor || "#dcdde1"};
    border-radius: 6px;
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.textSecondary || "#636e72"};
    padding: 10px;
    width: 100%;
    margin-top: 8px;
    background: #f8f9fa;
  }

  & > div:last-of-type > img {
    height: auto;
    margin: 12px 8px;
  }
`;
