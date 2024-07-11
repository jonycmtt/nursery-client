import { Rate } from "antd";
import { useGetProductsQuery } from "../../../redux/features/product/productApi";
import ProductHeader from "./ProductHeader";
import { useAppSelector } from "../../../redux/hooks";

const Products = () => {
  const selectData = useAppSelector((item) => item.product.product);
  const { data, isLoading } = useGetProductsQuery(selectData);
  const productData = data;
  // console.log(productData);
  if (isLoading) {
    return <p>loadding...</p>;
  }
  return (
    <div>
      <ProductHeader title="Products" />
      <div className="my-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-16">
          {productData?.data.map((product) => (
            <div
              key={product._id}
              className="card shadow relative group overflow-hidden transition-all"
            >
              <figure className="relative p-2 py-12 bg-slate-100 rounded-xl">
                <img
                  src={product.imageUrl}
                  alt={product.category}
                  className="w-60"
                />
                <ul className="space-y-4 absolute right-2 bottom-8 hidden group-hover:block">
                  <li className="p-2 rounded-full shadow text-sm  bg-white cursor-pointer hover:bg-green-600 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </li>
                  <li className="p-2 rounded-full shadow text-sm  bg-white cursor-pointer hover:bg-green-600 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </li>
                  <li className="p-2 rounded-full shadow text-sm  bg-white cursor-pointer hover:bg-green-600 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </li>
                </ul>
              </figure>
              <div className="card-body items-center text-center">
                <Rate allowHalf disabled={true} defaultValue={product.rating} />
                <h2 className="text-[#333] text-xl my-1">{product.title}</h2>
                <h3 className="text-lg font-bold text-gray-500">
                  ${product.price}
                </h3>
              </div>
              {/* hover category */}
              <div>
                <p className="absolute top-5 left-5 transition-all font-semibold bg-green-600 px-4  rounded-badge text-white hidden group-hover:block">
                  - 80%
                </p>
                <p className="absolute top-5 right-5 transition-all font-semibold bg-green-600 px-4 uppercase rounded-badge text-white hidden group-hover:block">
                  sale
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
