import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: -7px;

  &.on {
    color: #000;
  }
  &.off {
    border-color: #000;
    color: white;
  }
`;
