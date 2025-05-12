import styled from "styled-components";

export const CopyList = styled.div`
  width: 100%;
  max-height: 200px;
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
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    max-width: 16px;
    height: auto;
    position: absolute;
  }
  img:first-of-type {
    top: -6%;
    right: -6%;
  }
  p {
    padding: 6px;
  }
  button {
    background-color: #0079bf;
    border-width: 0;
    font-weight: inherit;
    line-height: inherit;
    padding: 10px 16px;
    margin-top: 14px;
    width: fit-content;
    border-radius: 6px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
      Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
    margin-bottom: 4px;
    font-size: 15px;
  }
`;
