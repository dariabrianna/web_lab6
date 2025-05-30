// src/components/CopyList/styles.js
import styled from "styled-components";

export const CopyList = styled.div`
  width: 100%;
  max-width: 300px;
  max-height: 200px;
  background-color: ${({ theme }) => theme.popupBg};
  border-radius: 8px;
  color: ${({ theme }) => theme.textColor};
  position: absolute;
  border: 1px solid ${({ theme }) => theme.borderColor};
  font-size: 14px;
  left: 260px;
  top: 162px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 20px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  img {
    max-width: 16px;
    height: auto;
    position: absolute;
  }

  img:first-of-type {
    top: -6%;
    right: -6%;
  }

  p {
    padding: 6px;
  }

  button {
    background-color: ${({ theme }) => theme.buttonBg};
    color: ${({ theme }) => theme.buttonText};
    border: none;
    padding: 10px 16px;
    margin: 14px auto 4px;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
  }
`;
