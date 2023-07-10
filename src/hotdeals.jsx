const products = [
  {
    id: 1,
    name: "Summer Dress Women Short",
    href: "#",
    imageSrc: "/assets/product1.jpg",
    imageSrc2: "/assets/heart(1).png",
    imageAlt: "Shirt",
    price: "$70.00",
  },
  {
    id: 2,
    name: "Summer Dress Women Short",
    href: "#",
    imageSrc: "/assets/product2.jpg",
    imageSrc2: "/assets/heart(1).png",
    imageAlt: "Shirt",
    price: "$70.00",
  },
  {
    id: 3,
    name: "Summer Dress Women Short",
    href: "#",
    imageSrc: "/assets/product3.jpg",
    imageSrc2: "/assets/heart(1).png",
    imageAlt: "Shirt",
    price: "$70.00",
  },
  {
    id: 4,
    name: "Summer Dress Women Short",
    href: "#",
    imageSrc: "/assets/product4.jpg",
    imageSrc2: "/assets/heart(1).png",
    imageAlt: "Shirt",
    price: "$70.00",
  },
];

export default function HotDeals() {
  return (
    <div className="bg-white -mt-20">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="lg:text-3xl md:text-3xl font-bold tracking-tight text-gray-900 -mt-6 text-center text-3xl md:-pt-10">
          Hot Deals
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          <div className="pt-10 m-auto">
            <h1 className="text-3xl ">Summer Sale</h1>
            <h3 className="text-3xl font-bold mb-4">Up to 60% Off</h3>
            <a className="hover:text-red-600 " href="#">
              VIEW ALL
            </a>
          </div>
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href} className="font-bold">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  <img src={product.imageSrc2} alt="" className="w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
