import img1 from "/images/image-product-1.jpg";
import img2 from "/images/image-product-2.jpg";
import img3 from "/images/image-product-3.jpg";
import img4 from "/images/image-product-4.jpg";
import styles from "./Slide.module.scss";
import { useRef, useState } from "react";

export default function Slide() {
  const slideContainer = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(1);

  function slideTo(val: "NEXT" | "PREVIOUS") {
    const n = val === "NEXT" ? -count : count;

    if (slideContainer.current) {
      slideContainer.current.style.transform = `translateX(${n * 100}%)`;
    }
    setCount((count) => count + 1);
    if (count === 3) {
      setCount(0);
    }
  }
  return (
    <div className={styles.slide}>
      <div className="relative">
        <div ref={slideContainer} className={styles["slides-container"]}>
          <img src={img1} alt="image 1" />
          <img src={img2} alt="image 2" />
          <img src={img3} alt="image 3" />
          <img src={img4} alt="image 4" />
        </div>
        <div onClick={() => slideTo("PREVIOUS")} className={styles.previous}>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div onClick={() => slideTo("NEXT")} className={styles.next}>
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
