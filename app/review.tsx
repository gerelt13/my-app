import "../public/Avatar.jpg";
import {Star} from "./components/star.tsx";

export const Review = {{ name, starcount, avater, text }} => {
    const array = [1,2,3,4,6];
  
    return (
  
      <div style ={{ width: "373px, ", height: "366px", backgroundColor: "white", display: "flex, gap: 2px"}}>
        {new Array (starcount || 0).fill(1).map(() => {
          return <Star />;
        })}
      </div>
    );
  };