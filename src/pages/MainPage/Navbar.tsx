import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-white text-black py-4 absolute  transition-all">
      <ul className="max-w-6xl mx-auto flex items-center gap-8 text-lg">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Product</Link>
        </li>
        <li>
          <Link to="/payment">Payment</Link>
        </li>

        <li>
          <Link to="/payment">Product and Category Management</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
