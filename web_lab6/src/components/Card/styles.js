// src/components/Card/styles.js
import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 3px;
  position: relative;
  margin: 12px;
  max-width: 272px;
  min-height: 150px;
  padding: 15px;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.borderColor};
  height: fit-content;

  button {
    background: none;
    border: 0;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColor};
    padding: 6px 0;
    text-align: left;
    cursor: pointer;
  }

  input {
    border: 2px solid ${({ theme }) => theme.buttonBg};
    border-radius: 4px;
    padding: 4px;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.textColor};
  }

  & > div:first-of-type {
    display: flex;
    align-items: center;
  }

  & > div:first-of-type > img {
    width: 12px;
    height: auto;
    margin-left: auto;
    margin-top: 8px;
    cursor: pointer;
  }

  .cardname {
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 4px;
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.textSecondary};
    padding: 9px;
    width: 100%;
    margin-top: 8px;
  }

  & > div:last-of-type > img {
    height: auto;
    margin: 12px 8px;
  }
`;
