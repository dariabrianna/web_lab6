// src/components/PopUp/styles.js
import styled from "styled-components";

export const PopUp = styled.div`
  font-family: ${({ theme }) => theme.fontFamily || "sans-serif"};
  font-weight: 400;
  position: absolute;
  top: 67px;
  left: 120px;
  z-index: 3;
  width: 332px;
  max-width: 720px;
  max-height: 500px;
  padding: 12px 0 16px;
  background-color: ${({ theme }) => theme.popupBg};
  color: ${({ theme }) => theme.textColor};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  flex-direction: column;
  font-size: 14px;

  h1 {
    font-size: 18px;
    font-weight: 500;
    margin: 0 0 12px;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    padding-bottom: 12px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  /* un singur item din listă */
  li {
    display: flex;
    align-items: flex-start;
    gap: 12px;               /* spaţiu între icon şi text */
    padding: 12px 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s;
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }

  /* icon-ul din stânga */
  li img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    margin-top: 2px;        /* aliniază iconul cu titlul */
    object-fit: contain;
  }

  /* wrapper pentru text (titlu + descriere) */
  li .texts {
    display: flex;
    flex-direction: column;
  }

  /* titlul opţiunii (Private, Workspace, Public) */
  li .label {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 4px;
  }

  /* descrierea scurtă */
  li .desc {
    font-size: 13px;
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.35;
    max-width: 240px;
  }

  /* butonul X */
  .close {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;
