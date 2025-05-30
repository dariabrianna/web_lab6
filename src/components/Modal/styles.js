import styled from "styled-components";

export const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: rgba(0,0,0,0.5);
`

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 260px;
  background-color: ${({ theme }) => theme.popupBg};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  color: ${({ theme }) => theme.textColor};
  z-index: 999;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 14px;
    margin-bottom: 10px;
  }

  img.close {
    max-width: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 8px;
    border-radius: 6px;
    transition: background 0.2s;
  }

  li:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }
`;
