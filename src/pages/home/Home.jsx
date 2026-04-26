import { useSelector } from "react-redux"
import ProductCard from "../products/ProductCard";
import AddProduct from "../products/AddProduct";


const Home = () => {

  const products = useSelector((state) => state.products)
  console.log(products.name);
  
 
  return (
    <div className="py-8">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        <div className="col-span-2">
          <div className="grid lg:grid-cols-2 gap-4 gap-y-8">
            {products.length > 0 ? (
              products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            ) : (
              <h1 className="text-2xl font-bold text-center">
                No products found
              </h1>
            )}
          </div>
        </div>
        
        <div><AddProduct/></div>
      </div>
    </div>
  );
}

export default Home