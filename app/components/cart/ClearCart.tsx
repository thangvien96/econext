'use client'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import { clearOrder } from '@/app/store/orderSlice';


const ClearCart = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleClearCart = () => {
        dispatch(clearOrder());
        router.push('/products')
    }

    return (
        <div className="cart-clear">
            <a className="cursor-pointer" onClick={handleClearCart}>Xóa giỏ hàng</a>
        </div>
    )
}

export default ClearCart;