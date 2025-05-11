import styled from "styled-components";

export const PopUp = styled.div`
  background-color: white;
  border-radius: 8px;
  max-height: 500px;
  max-width: 720px;
  width: 332px;
  display: block;
  color: #44546f;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: white 1px solid;
  font-size: 14px;
  top: 67px;
  left: 120px;
  padding-top: 10px;
  z-index: 3;
  li {
    list-style-type: none;
    span {
      display: flex;
      align-items: center;
    }
  }
  ul {
    padding-left: 0;
    height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin: 0;
  }

  h1 {
    padding-top: 6px;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: #44546f solid 0.5px;
    font-weight: 400;
    font-size: 16px;
    padding-bottom: 12px;
  }
  h2 {
    font-weight: 400;
    font-size: 15px;
    padding-left: 4px;
  }
  p {
    line-height: 160%;
  }
  img {
    max-width: 16px;
    height: auto;
  }
  li {
    padding: 15px;
  }
  li:nth-of-type(2) img {
    max-width: 25px;
    width: 100%;
    height: auto;
  }
  li:nth-of-type(3) img {
    max-width: 17px;
    width: 100%;
    height: auto;
  }
  .close {
    position: absolute;
    right: 2%;
    top: 2%;
    cursor: pointer;
  }
  li:hover {
    background-color: var(--ds-background-neutral-hovered, #091e420a);
    cursor: pointer;
  }
`;
