import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  max-height: 500px;
  max-width: 300px;
  background-color: white;
  border-radius: 8px;
  color: #44546f;
  position: absolute;
  border: grey 1px solid;
  font-size: 14px;
  left: 260px;
  top: 162px;
  z-index: 3;
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 20px;
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
    display: flex;
    flex-direction: column;
    line-height: 20px;
    padding: 6px;
  }
  div:first-child {
    margin-bottom: 8px;
    position: relative;
    text-align: center;
    border-bottom: 1px solid var(--ds-border, #091e4221);
    line-height: 40px;
    margin: 0 12px;
    font-size: 14px;
  }

  .list {
    list-style-type: none;
    line-height: 28px;
    padding: 5px;
    border-bottom: 1px solid var(--ds-border, #091e4221);
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
  span {
    padding: 5px;
  }
  li:hover {
    border: 2px;
    cursor: pointer;
    background-color: var(--ds-background-neutral-hovered, #091e420a);
    width: 100%;
  }
`;
