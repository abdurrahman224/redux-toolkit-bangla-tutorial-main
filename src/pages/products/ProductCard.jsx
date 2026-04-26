import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/carts/cartSlice";


const ProductCard = ({product}) => {
  const { name, img, price, } = product || {};
  
const dispatch = useDispatch();
  const handleAddToCart = () => {
    // console.log(product);
    dispatch(addToCart(product))
   }
  return (
    <div className="card bg-white w-96 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body text-gray-700">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions items-center justify-end">
            <p className="text-xl font-semibold">${price}</p>
          <button onClick={handleAddToCart} className="btn btn-primary bg-indigo-600 text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
