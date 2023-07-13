import React, { useRef, useEffect } from "react";

function ImageSlider() {
  const sliderRef = useRef(null); // Reference to the slider container element

  useEffect(() => {
    const slider = sliderRef.current; // Access the slider container element

    const handleMouseMove = (event) => {
      const sliderWidth = slider.offsetWidth; // Width of the slider container
      const scrollWidth = slider.scrollWidth; // Total scrollable width of the slider content
      const cursorX = event.clientX; // X position of the cursor

      // Calculate the scroll position based on the cursor position and slider dimensions
      const scrollPosition =
        (cursorX / sliderWidth) * (scrollWidth - sliderWidth);

      // Set the scroll position of the slider
      slider.scrollLeft = scrollPosition;
    };

    slider.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when the component unmounts
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