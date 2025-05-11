import styled from "styled-components";

export const Task = styled.div`
  padding: 6px;
  color: grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  gap: 16px;
  .deletetask {
    height: auto;
    width: 20px;
    margin: 12px 8px;
    cursor: pointer;
  }
  .cardname {
    border: 1px solid lightgrey;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 500;
    color: darkslategrey;
    padding: 9px;
    width: 100%;
  }
  &:last-of-type:hover {
    background-color: var(--ds-background-neutral-hovered, #091e420a);
    cursor: pointer;
  }
  button {
    background: none;
    font-size: 22px;
    border: 0;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: #5e6c84;
    max-width: 90%;
    cursor: pointer;
  }
  input {
    border: 2px solid #0492c2;
    border-radius: 4px;
    padding: 4px;
    font-size: 16px;
    font-weight: 600;
    color: darkslategrey;
    max-width: 90%;
  }
`;
