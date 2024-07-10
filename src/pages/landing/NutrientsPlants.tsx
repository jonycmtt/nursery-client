import { useGetProductsQuery } from "../../redux/features/product/productApi";

const NutrientsPlants = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const productData = data;

  return (
    <div className="my-20 max-w-6xl mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold">Welcome To Nutrients Plants</h2>
        <p className="text-slate-600 flex items-center gap-6 justify-center mt-2">
          <span className="w-16 h-[2px] bg-slate-200 block"></span>OURS PLANT
          HOUSE <span className="w-16 h-[2px] bg-slate-200 block"></span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-12">
        {productData?.data.map((item) => (
          <div className="text-center flex flex-col items-center gap-5">
            <img className="w-52" src={item.imageUrl} alt="" />
            <h3 className="font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutrientsPlants;
