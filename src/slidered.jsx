import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function SliderIndicatorsControlsInside() {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 2000,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Slider with indicators & controls inside --> */}
      <div className="relative w-full glide-03">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <div className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <div className="flex justify-between">
              <div className="pl-5 md:pt-36 lg:pt-36 pt-32">
                <h1 className="font-bold  text-xs md:text-2xl xl:text-red-700">
                  _______ NEW ARRIVAL
                </h1>
                <h1 className=" font-bold text-xs md:text-7xl">Night Spring</h1>
                <h1 className=" font-bold text-4xl">Dresses</h1>
                <a
                  className=" font-bold text-2xl hover:underline hover:text-red-700 cursor-pointer"
                  href="#"
                >
                  Shop Now
                </a>
              </div>
              <div>
                <img
                  src="/assets/img1.png"
                  className="w-[900px] h-[377px]  m-auto  mt-10 md:w-[250px] md:h-[400px] lg:h-[500px]"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="pl-5 md:pt-36 lg:pt-36 pt-32">
                <h1 className="font-bold  text-xs md:text-2xl xl:text-red-700">
                  _______ NEW ARRIVAL
                </h1>
                <h1 className=" font-bold text-xs md:text-7xl">Summer Sale</h1>
                <h1 className=" font-bold text-4xl">T-Shirt</h1>
                <a
                  className=" font-bold text-2xl hover:underline hover:text-red-700 cursor-pointer"
                  href="#"
                >
                  Shop Now
                </a>
              </div>
              <div>
                <img
                  src="/assets/img2.png"
                  className="w-[900px]  m-auto  mt-10 md:w-[250px] md:h-[400px] lg:h-[500px]"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="pl-5 md:pt-36 lg:pt-36 pt-32">
                <h1 className="font-bold  text-xs md:text-2xl xl:text-red-700">
                  _______ NEW ARRIVAL
                </h1>
                <h1 className=" font-bold text-xs md:text-7xl">Night Spring</h1>
                <h1 className=" font-bold text-4xl">Blazers</h1>
                <a
                  className=" font-bold text-2xl hover:underline hover:text-red-700 cursor-pointer"
                  href="#"
                >
                  Shop Now
                </a>
              </div>
              <div>
                <img
                  src="/assets/img4.png"
                  className="w-[900px] h-[377px]  m-auto  mt-10 md:w-[250px] md:h-[400px] lg:h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex items-center justify-center w-full gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Slider with indicators & controls inside --> */}
    </>
  );
}