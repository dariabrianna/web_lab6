import * as S from "./styles";
import { useState } from "react";

const StarRating = () => {
  const [isStarWhite, setIsStarWhite] = useState(false);
  return (
    <S.Button
      type="button"
      className={isStarWhite ? "off" : "on"}
      onClick={() => setIsStarWhite(!isStarWhite)}
    >
      <span className="star">&#9733;</span>
    </S.Button>
  );
};

export default StarRating;
