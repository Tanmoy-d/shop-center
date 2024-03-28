import { getAllProducts } from "@/data";

export default function ProductDetailsPage({ params }) {
  const { id } = params;
  const products = getAllProducts();

  // console.log(products);

  const product = products.find((product) => product?.id?.toString() === id);
  console.log(" product", product);

  // const { title, description } = product;
  return (
    <section className="bg-[#fafaf2] h-full py-20">
      {/* <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
        <div className="w-full lg:w-5/12">
          <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
            iPhone 9
          </h1>
          <span className="text-[#919090] my-3">Smartphone</span>

          <hr className="my-5 bg-black" />

          <div>
            <p className="my-3">
              <span className="text-rose-600 opacity-60 line-through">
                $205.00
              </span>
              <span className="font-bold text-2xl">$195.00</span>
            </p>
          </div>
          <div>
            <p className="leading-7">
              Enhance your dining space with this sleek, contemporary dining
              table, crafted from high-quality solid wood with a warm finish.
              Its sturdy construction and minimalist design make it a perfect
              addition for any home looking for a touch of elegance.
              Accommodates up to six guests comfortably and includes a striking
              fruit bowl centerpiece. The overhead lighting is not included.
            </p>

            <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
              Add To Cart - $195
            </button>
          </div>
        </div>
      </div> */}
      {/* <h1>{title}</h1>
      <p>{description}</p> */}
    </section>
  );
}
