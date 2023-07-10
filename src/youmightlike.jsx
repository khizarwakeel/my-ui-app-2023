const products = [
  {
    id: 1,
    name: "Men Jeans",
    href: "#",
    imageSrc: "/assets/menjean.jpg",
    title: "Men Jeans",
  },
  {
    id: 2,
    name: "Women Clothes",
    href: "#",
    imageSrc: "/assets/pics2.jpg",
    title: "Women Clothes",
  },
  {
    id: 3,
    name: "Women Pants",
    href: "#",
    imageSrc: "/assets/pics3.jpg",
    title: "Women Pants",
  },
  {
    id: 4,
    name: "Women Tops",
    href: "#",
    imageSrc: "/assets/pics4.png",
    title: "Women Tops",
  },
  {
    id: 5,
    name: "Men Shirts",
    href: "#",
    imageSrc: "/assets/menshirts.jpg",
    title: "Men Shirts",
  },
  {
    id: 6,
    name: "Men Shoes",
    href: "#",
    imageSrc: "/assets/menshoes.jpg",
    title: "Men Shoes",
  },
  {
    id: 7,
    name: "Women Dresses",
    href: "#",
    imageSrc: "/assets/womendresses.jpg",
    title: "Women Dresses",
  },
  {
    id: 8,
    name: "Kid Tops",
    href: "#",
    imageSrc: "/assets/kidtops.jpg",
    title: "Kid Tops",
  },
];

export default function YouMightLike() {
  return (
    <div className="bg-white ml-10 mr-10 rounded-t-2xl text-center">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center md:m-auto">
          You Might Like
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-8 pr-20 md:m-auto md:ml-10">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-[200px] overflow-hidden rounded-md lg:aspect-none group-hover:opacity-90 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-[100px] w-[100px] object-cover object-center mt-10 m-auto"
                />
                <p className="text-sm font-medium mt-4">{product.title}</p>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
