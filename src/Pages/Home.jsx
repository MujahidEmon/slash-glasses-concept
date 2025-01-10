import { Link, useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ProductCard from "../Components/ProductCard/ProductCard";
const Home = () => {
  const glasses = useLoaderData()
  return (
    <>
      <div
        className="hero lg:min-h-[600px] min-h-[400px] rounded-xl"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/54jZBZN/Screenshot-2023-09-22-at-11-30-28-PM.png')",
        }}
      >
        <div className="hero-overlay object-cover rounded-xl bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Find Your Best Sunglasses Here....
            </p>
            <Link to={'/Products'} className="btn btn-warning text-white">Start Shopping</Link>
          </div>
        </div>
      </div>
      <div className="mt-9">
        <h1 className="font-bold  text-3xl">Featured Product</h1>
        <div className="mt-6">
          <Marquee pauseOnHover>
            {
              glasses.slice(2,7).map((glass, idx)=> <div key={idx} className="gap-6"><ProductCard  glass={glass}></ProductCard></div>)
            }
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Home;
