import { getAllProducts } from "@/data";
import Image from "next/image";

export default function ProductDetailsPage({ params }) {
  const { id } = params;
  console.log(id);
  const products = getAllProducts();

  const product = products.find((product) => product?.id?.toString() === id);

  const { title, description, images, category, price } = product;
  return (
    <section className="bg-[#fafaf2] h-full py-20">
      <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
        <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
          <Image
            src={images[0]}
            className="w-[400px] h-[500px] mx-auto object-cover"
            alt=""
            height={100}
            width={100}
          />

          <div className="flex gap-4 mt-4">
            {images.map((img) => (
              <Image
                key={img}
                src={img}
                className=" mx-auto border object-cover"
                alt=""
                width={100}
                height={100}
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
            {title}
          </h1>
          <span className="text-[#919090] my-3">{category}</span>
          <div className="mt-3 flex items-center justify-start gap-1">
            {images.map((img) => (
              <div key={img} className="flex gap-4 mt-4">
                <Image src={img} alt="" width={20} height={20} />
              </div>
            ))}
          </div>
          <hr className="my-5 bg-black" />

          <div>
            <p className="my-3">
              <span className="text-rose-600 opacity-60 line-through">
                $205.00
              </span>
              <span className="font-bold text-2xl">${price}</span>
            </p>
          </div>
          <div>
            <p className="leading-7">{description}</p>

            <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
              Add To Cart - ${price}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
