import { useLoaderData } from "react-router-dom";
import ProductCard from "../Components/ProductCard/ProductCard";


const Products = () => {
    const glasses = useLoaderData();
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
            {
                glasses.map((glass, index) => <ProductCard key={index} glass={glass}></ProductCard>)
            }
        </div>
    );
};

export default Products;