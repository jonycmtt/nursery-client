import { useGetProductsQuery } from "../../redux/api/baseApi";
import { TProducts } from "../../types/productType";

const ProductList = () => {
  const { data } = useGetProductsQuery(undefined);
  const productData = data?.data;
  return (
    <div>
      <h2>This is ProductList component</h2>
      {productData.map((item: TProducts) => (
        <h2>{item.title}</h2>
      ))}
    </div>
  );
};

export default ProductList;
