import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="hero min-h-screen rounded-xl"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay rounded-xl bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Find Your Best Sunglasses Here....
          </p>
          <Link to={'/Products'} className="btn btn-warning">Start Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
