import { useEffect, useState, useRef } from "react";
import Data from "./Datas";

const dataLength = Data.length;
export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  function handleNext() {
    setIndex((prevIndex) => {
      if (prevIndex == dataLength - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  }

  function handlePrev() {
    if (index == 0) setIndex(dataLength - 1);
    else {
      setIndex(index - 1);
    }
  }

  useEffect(() => {
    ref.current = setInterval(handleNext, 2000);

    return () => clearInterval(ref.current);
  }, []);

  return (
    <div
      onMouseEnter={() => {
        clearInterval(ref.current);
      }}
      onMouseLeave={() => {
        ref.current = setInterval(handleNext, 2000);
      }}
      className="container"
    >
      <div onClick={handlePrev} className="left-btn">
        {"<"}
      </div>
      <img src={Data[index].url} alt="" />
      <div onClick={handleNext} className="right-btn">
        {">"}
        {console.log(index)}
      </div>
    </div>
  );
}
