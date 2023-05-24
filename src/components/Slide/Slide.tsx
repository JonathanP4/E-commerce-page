import img1 from "/images/image-product-1.jpg";
import img2 from "/images/image-product-2.jpg";
import img3 from "/images/image-product-3.jpg";
import img4 from "/images/image-product-4.jpg";

import "./Slide.scss";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Slide() {
  return (
    <>
      <Splide options={{ type: "loop", pagination: false, autoplay: true }}>
        <SplideSlide>
          <img src={img1} alt="image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={img2} alt="image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={img3} alt="image 3" />
        </SplideSlide>
        <SplideSlide>
          <img src={img4} alt="image 4" />
        </SplideSlide>
      </Splide>
      <Splide>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button className="splide__arrow splide__arrow--next">
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </Splide>
    </>
  );
}
