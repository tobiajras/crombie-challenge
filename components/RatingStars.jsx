import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";

const RatingStars = ({ rating, starClassName }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <TiStarFullOutline key={`star_full_${i}`} className={starClassName} />
      );
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(
        <TiStarHalfOutline key={`star_half_${i}`} className={starClassName} />
      );
    } else {
      stars.push(
        <TiStarOutline key={`star_empty_${i}`} className={starClassName} />
      );
    }
  }
  return stars;
};

export default RatingStars;
