'use client'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { removeProduct, updateQuantity } from '@/app/store/orderSlice';
import { CircleX } from 'lucide-react';

const TableCart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.order.items);

    return (
        <div className="table-content table-responsive cart-table-content">
            <table>
                <thead>
                    <tr>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá bán</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((prd) => {
                            return (
                                <tr key={prd.id}>
                                    <td className="product-thumbnail">
                                        <a href="#"><img className="img-responsive ml-15px" src={prd.images[0]} alt="" /></a>
                                    </td>
                                    <td className="product-name"><a href="#">{prd.name}</a></td>
                                    <td className="product-price-cart"><span className="amount">${prd.price}</span></td>
                                    <td className="product-quantity">
                                        <div className="cart-plus-minus">
                                            <div className="dec qtybutton"
                                             onClick={() => dispatch(updateQuantity({id: prd.id, quantity: prd.quantity - 1}))}
                                            >-</div>
                                            <input 
                                                className="cart-plus-minus-box" 
                                                type="text" 
                                                name="qtybutton" 
                                                value={prd.quantity}
                                                onChange={(e) => dispatch(updateQuantity({id: prd.id, quantity: +e.target.value}))}
                                            />
                                            <div className="inc qtybutton"
                                            onClick={() => dispatch(updateQuantity({id: prd.id, quantity: prd.quantity + 1}))}
                                            >+</div>
                                        </div>
                                    </td>
                                    <td className="product-subtotal">${prd.price*prd.quantity}</td>
                                    <td className="product-remove">
                                        {/* <a href="#"><i className="icon-pencil"></i></a>
                                        <a href="#"><i className="icon-close"></i></a> */}
                                        <a className="flex justify-center" onClick={() => dispatch(removeProduct(prd.id))}>
                                            <CircleX />
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default TableCart;