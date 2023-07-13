import React, { useRef, useEffect } from "react";

function ImageSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const handleMouseMove = (event) => {
      const sliderWidth = slider.offsetWidth;
      const scrollWidth = slider.scrollWidth;
      const cursorX = event.clientX;

      const scrollPosition =
        (cursorX / sliderWidth) * (scrollWidth - sliderWidth);

      slider.scrollLeft = scrollPosition;
    };

    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div className="bg-white">
        <h1 className="uppercase py-10 text-center font-semibold">
          see all product
        </h1>
        <div
          className=" max-h-[250px] flex overflow-x-auto"
          ref={sliderRef}
          id="hoverremove"
        >
          <div className=" min-w-[200px] h-[200px] mr-5">
            <img src="/assets/scroll1.jpg" alt="" />
          </div>
          <div className="min-w-[200px] h-[200px] mr-5">
            <img src="/assets/scroll2.jpg" alt="" />
          </div>
          <div className="min-w-[200px] h-[200px] mr-5">
            <img src="/assets/scroll3.jpg" alt="" />
          </div>
          <div className="min-w-[200px] h-[200px] mr-5">
            <img src="/assets/scroll4.jpg" alt="" />
          </div>
          <div className="min-w-[200px] h-[200px] mr-5">
            <img src="/assets/scroll5.jpg" alt="" />
          </div>
          <div className="min-w-[200px] h-[200px] mr-5">
            <img src="/assets/scroll6.jpg" alt="" />
          </div>
          <div className="min-w-[200px] h-[200px] mr-5">
            <img src="/assets/scroll7.jpg" alt="" />
          </div>
          <div className="min-w-[200px] h-[200px] mr-5">
            <img src="/assets/scroll8.jpg" alt="" />
          </div>
          <div className="min-w-[200px] h-[200px] mr-5">
            <img src="/assets/scroll9.jpg" alt="" />
          </div>
          <div className="min-w-[200px] h-[200px] mr-5">
            <img src="/assets/scroll10.jpg" alt="" />
          </div>
          <div className="min-w-[200px] h-[200px] mr-5">
            <img src="/assets/scroll11.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageSlider;