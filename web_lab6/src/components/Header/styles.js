// src/components/Header/styles.js
import styled from "styled-components";

export const Header = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 9;
  background-color: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.textColor};
  font-family: sans-serif;

  .board-header {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 24px;  

    .box {
      display: flex;
      align-items: center;
       gap: 12px;  
    }
  }

  button,
  .changeText {
    background: transparent;
    border: none;
    font: inherit;
    cursor: pointer;
    color: ${({ theme }) => theme.textColor};
     padding: 0 12px;
  }

  .changeText:hover,
  p:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    padding: 8px;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    margin-right: 20px;
  }

  .container {
    display: flex;
    align-items: center;

  /* iconița „people” din dreapta */
  .people {
    width: 24px;      /* lățimea dorită */
    height: 24px;     /* înălțimea dorită */
    object-fit: contain;   /* păstrează proporțiile */
    margin-right: 8px;
  }


    button {
      display: flex;
      align-items: center;
      border-right: 1px solid ${({ theme }) => theme.borderColor};
    }
  }

  .binput {
    width: 100%;
    padding: 8px;
    margin: 10px;
    border-radius: 10px;
    font-family: sans-serif;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.popupBg};
    border: 1px solid ${({ theme }) => theme.borderColor};
  }
`;
