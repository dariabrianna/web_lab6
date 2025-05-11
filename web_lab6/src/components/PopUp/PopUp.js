import * as S from "./styles";

const PopUp = ({ onClose }) => {
  return (
    <S.PopUp>
      <img
        src="/images/closing.png"
        className="close"
        onClick={onClose}
        alt="this"
      />
      <h1>Change visibility</h1>

      <ul>
        <li>
          <span>
            <img src="/images/lock.png" alt="this"></img>

            <h2>Private</h2>
          </span>
          <p>Only board members can see and edit this board.</p>
        </li>
        <li>
          <span>
            <img src="/images/people.png" alt="this"></img>
            <h2>Workspace</h2>
          </span>
          <p>
            All members of the admin's workspace can see and edit this board.
          </p>
        </li>
        <li>
          <span>
            <img src="/images/globe.png" alt="this"></img>
            <h2>Public</h2>
          </span>
          <p>
            Anyone on the internet can see this board. Only board members can
            edit it.
          </p>
        </li>
      </ul>
    </S.PopUp>
  );
};

export default PopUp;
