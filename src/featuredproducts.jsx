const products = [
  {
    id: 1,
    name: "Kirbby T-Shirt",
    href: "#",
    imageSrc: "/assets/pro1.jpg",
    imageSrc2: "/assets/heart(1).png",
    imageAlt: "Shirt",
    price: "$40.00",
  },
  {
    id: 2,
    name: "Neck Casual Short Zessi",
    href: "#",
    imageSrc: "/assets/pro2.jpg",
    imageSrc2: "/assets/heart(1).png",
    imageAlt: "Shirt",
    price: "$50.00",
  },
  {
    id: 3,
    name: "Women Blazzer",
    href: "#",
    imageSrc: "/assets/pro3.jpg",
    imageSrc2: "/assets/heart(1).png",
    imageAlt: "Shirt",
    price: "$80.00",
  },
  {
    id: 4,
    name: "Boy T-Shirt",
    href: "#",
    imageSrc: "/assets/pro4.jpg",
    imageSrc2: "/assets/heart(1).png",
    imageAlt: "Shirt",
    price: "$80.00",
    color: "red",
    CancelAmount: "$98.00",
  },
  {
    id: 5,
    name: "Men's 3-Pack V Neck T-Shirt",
    href: "#",
    imageSrc: "/assets/pro5.jpg",
    imageSrc2: "/assets/heart(1).png",
    imageAlt: "Shirt",
    price: "$80.00",
    color: "red",
    CancelAmount: "$110.00",
  },
  {
    id: 6,
    name: "Dress Short with Pocket",
    href: "#",
    imageSrc: "/assets/pro6.jpg",
    imageSrc2: "/assets/heart(1).png",
    imageAlt: "Shirt",
    price: "$80.00",
    color: "red",
    CancelAmount: "$98.00",
  },
  {
    id: 7,
    name: "Summer Dress Women Short Sleeve",
    href: "#",
    imageSrc: "/assets/pro7.jpg",
    imageSrc2: "/assets/heart(1).png",
    imageAlt: "Shirt",
    price: "$80.00",
    color: "red",
    CancelAmount: "$70.00",
  },
  {
    id: 8,
    name: "",
    href: "#",
    imageSrc: "/assets/pro8.jpg",
    imageSrc2: "/assets/heart(1).png",
    imageAlt: "Shirt",
    price: "$80.00",
    color: "red",
    CancelAmount: "$98.00",
  },
];

export default function FeaturedProduct() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="lg:text-3xl md:text-3xl font-bold tracking-tight text-gray-900 -mt-6 text-center text-3xl md:-pt-10">
          Featured Products
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) => (
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
                  <p className="mt-1 text-sm text-gray-500">
                    {index === products.length - 1 ? (
                      <div>
                        <span className="mr-2">
                          <s>{product.CancelAmount}</s>
                        </span>
                        <span className="text-red-600">{product.price}</span>
                      </div>
                    ) : (
                      product.price
                    )}
                  </p>
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