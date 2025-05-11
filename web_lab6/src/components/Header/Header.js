import * as S from "./styles";
import { useEffect, useState } from "react";
import StarRating from "../StarComponent/StarComponent";
import PopUp from "../PopUp/PopUp";



const Header = () => {
  const [buttonText, setButtonText] = useState("My Board");
  const [editMode, setEditMode] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);


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
                        <StarRating />

          </div>
          <div className="container">
          <button onClick={() => setIsOpenModal(true)}>

              <img
                src="/images/people.png"
                className="people"
                alt="people"
              ></img>
              <p>Workspace visible</p>
            </button>
            <button>
              <p>Board</p>
            </button>
          </div>
          <button></button>
        </div>
      </S.Header>
      {isOpenModal && <PopUp onClose={() => setIsOpenModal(false)} />}

    </>
  );
};

export default Header;
