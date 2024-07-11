import { TCart } from "../../redux/features/cart/cartSlice";
import { useAppSelector } from "../../redux/hooks";
import ProductHeader from "./Product/ProductHeader";

const Checkout = () => {
  const cartData = useAppSelector((cart) => cart.cart.cart);

  const totalCharge = cartData.reduce((acc, item) => {
    return acc + item.totalPrice;
  }, 0);

  console.log(totalCharge);
  return (
    <div>
      <ProductHeader title="Shopping Cart" />
      <div className="my-16 max-w-6xl mx-auto ">
        <table className="border w-full text-center">
          <thead>
            <tr>
              <td className="border p-2">Image</td>
              <td className="border p-2">Product Title</td>
              <td className="border p-2">Category</td>
              <td className="border p-2">Quantity</td>
              <td className="border p-2">Unit Price</td>
              <td className="border p-2">Total</td>
            </tr>
          </thead>
          <tbody>
            {cartData?.map((cart: any) => (
              <tr key={cart._id}>
                <td className="p-1 border flex justify-center items-center">
                  <img className="w-12" src={cart.imageUrl} alt="" />
                </td>
                <td className="border p-1">{cart.title}</td>
                <td className="border p-1">{cart.category}</td>
                <td className="border p-1">{cart.quantity}</td>
                <td className="border p-1">${cart.price}.00</td>
                <td className="border p-1">${cart.totalPrice}.00</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="my-16">
          <h2 className="text-2xl font-semibold">
            What would you like to do next?
          </h2>
          <p className="text-slate-500">
            Choose if you have a discount code or reward points you want to use
            or would like to estimate your delivery cost.
          </p>
          <div className="max-w-xl ms-auto border my-6">
            <div className="flex">
              <td className="p-5 border w-full text-end">Delivery Charge </td>
              <td className="p-5 border w-full text-end">$50.00</td>
            </div>
            <div className="flex">
              <td className="p-5 border w-full text-end">Total Charge</td>
              <td className="p-5 border w-full text-end">
                ${totalCharge + 50}.00
              </td>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
