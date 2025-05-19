// src/components/Modal/styles.js
import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  max-width: 300px;
  max-height: 500px;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
   top: 0;
  left: calc(100% + 8px);   /* 8 px spaţiu între card şi pop-up */
transform: none;
  h1 {
    font-size: 14px;
    font-weight: 400;
  }

  img {
    max-width: 16px;
    height: auto;
    position: absolute;
    top: 33%;
    right: 0%;
    cursor: pointer;
  }

  div {
    padding: 6px;
    display: flex;
    flex-direction: column;
    line-height: 20px;
  }

  div:first-child {
    margin: 0 12px 8px;
    position: relative;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    line-height: 40px;
    font-size: 14px;
  }

  .list {
    list-style-type: none;
    line-height: 28px;
    padding: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto 0;
  }

  ul {
    list-style-type: none;
    line-height: 20px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto 0;
  }

  li:hover {
    background-color: var(--ds-background-neutral-hovered, #091e420a);
    cursor: pointer;
  }
`;
