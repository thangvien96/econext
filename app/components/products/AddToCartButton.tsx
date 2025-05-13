import { useDispatch } from "react-redux";
import { IProduct } from "./ProductGridHome"; 
import { addProduct } from "@/app/store/orderSlice";

const AddToCartButton = ({ product } : {product : IProduct}) => {
    const dispatch = useDispatch();

    return (
        <button title="Add To Cart" className="add-to-cart" onClick={() => dispatch(addProduct({...product, quantity: 1}))}>
            Add To Cart
        </button>
    )
}

export default AddToCartButton;