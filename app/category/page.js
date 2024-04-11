import { getAllProducts } from "@/data";
import Link from "next/link";

export default function CategoryPage() {
  const products = getAllProducts();
  return (
    <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
      <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
        <button className="hover:border-b border-black block h-6 box-border mt-4">
          All
        </button>
        <Link href="/smartphones">
          <button className="hover:border-b border-black block h-6 box-border mt-5">
            Smartphones
          </button>
        </Link>
        <Link href="/laptops">
          <button className="hover:border-b border-black block h-6 box-border mt-5">
            Laptops
          </button>
        </Link>
        <Link href="/fragrances">
          <button className="hover:border-b border-black block h-6 box-border mt-5">
            Fragrances
          </button>
        </Link>
        <button className="hover:border-b border-black block h-6 box-border mt-5">
          Skincare
        </button>
        <button className="hover:border-b border-black block h-6 box-border mt-5">
          Groceries
        </button>
      </div>
      <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
        {products.map((product) => (
          <div key={product.id}>
            <div
              className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform"
              style={{ backgroundImage: `url(${product.thumbnail})` }}
            ></div>
            <h2 className="text-sm lg:text-base mt-2">
              <a className="text-base font-bold" href="./productPage.html">
                {product.title}
              </a>
              <span className="text-[#919090]">
                <a href="./category.html">(Smartphones)</a>
              </span>
            </h2>
            <p className="text-[#919090] text-sm ">
              An apple mobile which is nothing like apple
            </p>

            <p className="text-rose-600 text-sm mt-4">
              <span className="text-[#919090] line-through">$205.00</span>{" "}
              $195.00
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
