import { Link } from "react-router-dom";

const OfferSection = () => {
  return (
    <div className="max-w-7xl min-h-screen mx-auto flex flex-col md:flex-row gap-12">
      <div className="flex-1 inline-flex items-end justify-center  ">
        <img
          className="w-full md:w-2/3 h-[500px] shadow-2xl p-2"
          src="https://i.ibb.co/X75qm0d/cms-img-01.jpg"
          alt="offer"
        />
      </div>
      <div className="flex-1 inline-flex flex-col justify-around">
        <img
          className="w-full"
          src="https://i.ibb.co/Kzr3gPB/video-banner.jpg"
          alt=""
        />
        <div className="text-center">
          <h2 className="text-4xl font-semibold">Nutrients Plant Collection</h2>
          <p>Get 50% Off On This Month</p>
          <Link to="/products">
            <button className="btn btn-neutral mt-4">Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
