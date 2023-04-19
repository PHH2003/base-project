import React, { useEffect, useState } from "react";
import { getAll } from "../api/products";
import { IProduct } from "../models";
import { Product } from "../components/products";

const Homepage = () => {
  const [product, setProduct] = useState<IProduct[]>([]);
  const fetchProducts = async () => {
    const { data } = await getAll();
    setProduct(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4  lg:flex py-20 lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Understand User Flow.
            <strong className="font-extrabold text-red-700 sm:block">
              Increase Conversion.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl sm:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Product Collection
          </h2>

          <p className="max-w-md mt-4 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {product.map((product) => (
            <Product data={product} key={product.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Homepage;
