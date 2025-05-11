import styled from "styled-components";

export const Header = styled.div`
  height: 65px;
  max-height: 100px;
  width: 100%;
  display: flex;
  position: fixed;
  font-family: sans-serif;
  background-color: rgb(128, 128, 128);
  top: 0;
  z-index: 9;

  .board-header {
    display: flex;
    color: white;
    div {
      display: flex;
      align-items: center;
      button {
        margin-left: 16px;
      }
    }
  }

  p {
    font-weight: 300;
    font-size: 16px;
  }

  p:hover {
    border-radius: 6px;
    border: 2px;
    cursor: pointer;
    background-color: rgb(255, 255, 255, 0.5);
    padding: 8px;
  }

  button,
  .changeText {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    text-align: inherit;
    font: inherit;
  }
  .changeText:hover {
    border-radius: 6px;
    border: 2px;
    cursor: pointer;
    background-color: rgb(255, 255, 255, 0.5);
    padding: 8px;
  }

  .changeText {
    font-size: 20px;
    font-weight: 500;
    padding-right: 8px;
    padding-left: 8px;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    margin: 22px 20px;
    border-left: 1px solid var(--dynamic-text-transparent);
    padding: 8px;
  }

  .star {
    max-width: 24px;
    border-right: 1px solid grey;
    padding: 8px;
    margin-right: 8px;
  }
  .people {
    max-width: 36px;
    padding-right: 16px;
  }

  .container {
    display: flex;
    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-right: 1px solid grey;
    }
    p {
      margin-right: 20px;
      padding: 8px;
    }
  }

  .binput {
    width: 100%;
    padding: 8px;
    margin: 10px 10px;
    border-radius: 10px;
    font-family: sans-serif;
  }
`;
