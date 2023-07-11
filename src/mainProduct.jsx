const products = [
  {
    id: 1,
    href: "#",
    imageSrc: "/assets/MainProduct1.jpg",
    imageAlt: "Girl Image.",
    heading: "Blazer",
    subHeading: "SHOP NOW",
  },
  {
    id: 2,
    href: "#",
    imageSrc: "/assets/MainProduct2.jpg",
    imageAlt: "Girl Image.",
    heading: "Sportswear",
    subHeading: "SHOP NOW",
  },
];

export default function MainProduct() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className=" w-full mx-auto  rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <div
                className=" bg-white w-[80%] left-[10%] right-0 text-center py-5 absolute bottom-0 rounded-t-lg"
              >
                <h1 className="text-xl md:text-2xl font-bold xl:text-4xl">
                  {product.heading}
                </h1>
                <h2 className="text-xs md:text-xs">{product.subHeading}</h2>
              </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}