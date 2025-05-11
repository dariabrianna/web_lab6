import * as S from "./styles";
import { useEffect, useState } from "react";

const Header = () => {
  const [buttonText, setButtonText] = useState("My Board");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    document.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        setEditMode(false);
      }
    });
  }, []);

  return (
    <>
      <S.Header>
        <div className="board-header">
          <div className="box">
            {editMode ? (
              <input
                className="binput"
                type="text"
                value={buttonText}
                onChange={(e) => setButtonText(e.target.value)}
              />
            ) : (
              <button className="changeText" onClick={() => setEditMode(true)}>
                {buttonText}
              </button>
            )}
          </div>
          <div className="container">
              <img
                src="/images/people.png"
                className="people"
                alt="people"
              ></img>
              <p>Workspace visible</p>

            <button>
              <p>Board</p>
            </button>
          </div>
          <button></button>
        </div>
      </S.Header>
    </>
  );
};

export default Header;
