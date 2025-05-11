import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  border-radius: 10px;
  position: relative;
  background-color: #f7f8f9;
  margin: 12px;
  max-width: 272px;
  min-height: 150px;
  padding: 15px;
  justify-content: space-between;
  border: 1px grey;
  border-radius: 3px;
  height: fit-content;
  button {
    background: none;
    font-size: 22px;
    border: 0;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: black;
    padding: 6px 0;
    text-align: left;
    cursor: pointer;
  }
  input {
    border: 2px solid #0492c2;
    border-radius: 4px;
    padding: 4px;
    font-size: 16px;
    font-weight: 600;
    color: darkslategrey;
  }
  & > div:first-of-type {
    display: flex;
    align-items: center;
  }
  & > div:first-of-type > img {
    max-width: 12px;
    width: 12px;
    height: auto;
    margin-left: auto;
    margin-top: 8px;
    cursor: pointer;
  }
  span:nth-child(2) {
    padding: 6px;
    color: grey;
    display: flex;
  }
  & > div:last-of-type > img {
    height: auto;
    margin: 0;
    margin: 12px 8px;
  }
  .cardname {
    border: 1px solid lightgrey;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 500;
    color: darkslategrey;
    padding: 9px;
    width: 100%;
    margin-top: 8px;
  }
  /* & > div:last-of-type:hover {
    background-color: var(--ds-background-neutral-hovered, #091e420a);
    cursor: pointer;
  } */
  .tasks {
    border: 1px grey;
    border-radius: 2px;
  }
`;
