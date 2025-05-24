import { useDispatch } from "react-redux";

import { addProduct } from "@/app/store/orderSlice";
import { useEffect, useRef, useState } from "react";
import FlyToCartAnimation from "../cart/FlyToCartAnimation";
import { triggerShake } from '@/app/store/cartUI';
import { IProduct } from "@/app/types";

const AddToCartButton = ({ product } : {product : IProduct}) => {
    const dispatch = useDispatch();

    const btnRef = useRef<HTMLButtonElement>(null);
    const cartIconRef = useRef<HTMLElement | null>(null);
    const [animating, setAnimating] = useState(false);
    const [fromTo, setFromTo] = useState<{ from: DOMRect; to: DOMRect } | null>(null);
     // Gán ref cho icon giỏ hàng từ ID
    useEffect(() => {
        cartIconRef.current = document.getElementById('cart-icon');
    }, []);

    const handleAddToCart = () => {
        dispatch(addProduct({...product, quantity: 1}));

        if (!btnRef.current || !cartIconRef.current) return;
        const from = btnRef.current.getBoundingClientRect();
        const to = cartIconRef.current.getBoundingClientRect();
        setFromTo({ from, to });
        setAnimating(true);
    }

    const flyToCartComplete = () => {
        setAnimating(false);
        dispatch(triggerShake());
    }

    return (
        <>
            <button ref={btnRef} title="Add To Cart" className="add-to-cart" onClick={handleAddToCart}>
            Add To Cart
            </button>

            {
                animating && fromTo && (
                    <FlyToCartAnimation
                    imageUrl={`${process.env.NEXT_PUBLIC_URL_BASE_API}${product.image[0].url}`}
                    from={fromTo.from}
                    to={fromTo.to}
                    onComplete={flyToCartComplete}
                    />
                )
            }
        </>
    )
}

export default AddToCartButton;