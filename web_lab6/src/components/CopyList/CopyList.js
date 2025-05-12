import { useState } from "react";
import * as S from "./styles";

const CopyList = ({ onClose, copyCardList, onCloseList }) => {
  const [newTitle, setNewTitle] = useState("");
  return (
    <S.CopyList>
      <div>
        <h1>Copy List</h1>
        <img src="/images/closing.png" alt="close" onClick={onClose} />
      </div>
      <p>Name</p>
      <input
        type="textarea"
        placeholder=""
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button
        onClick={() => {
          copyCardList(newTitle);
          onCloseList();
          onClose();
        }}
      >
        {" "}
        Create List
      </button>
    </S.CopyList>
  );
};

export default CopyList;
