import img1 from "/images/image-product-1.jpg";
import img2 from "/images/image-product-2.jpg";
import img3 from "/images/image-product-3.jpg";
import img4 from "/images/image-product-4.jpg";

import thumbnail1 from "/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "/images/image-product-4-thumbnail.jpg";
const images = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

import "./Slide.scss";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";

export default function Slide(props: { className?: string }) {
  function changeArrows(splide: any) {
    console.log(splide);
    splide.Components.Pagination.items.forEach((item: any, i: number) => {
      item.button.innerHTML = `<img src="${images[i]}" alt="thumbnail-${i}"/>`;
    });
  }

  const [isMobile, setIsMobile] = useState(true);

  const io = new ResizeObserver((el) => {
    const [element] = el;
    const width = element.contentBoxSize[0].inlineSize;

    if (width > 1048) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  });

  io.observe(document.body);

  return (
    <div className={props.className || ""}>
      <Splide
        onPaginationMounted={changeArrows}
        options={{
          type: "loop",
          pagination: !isMobile,
          autoplay: true,
          classes: {
            pagination: "splide__pagination--custom",
          },
        }}
      >
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
    </div>
  );
}
