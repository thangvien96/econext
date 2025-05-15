'use client'

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutSchema, CheckoutFormData } from '@/app/schemas/checkoutSchema';
import FormCheckOut from "./FormCheckout"

const BillingDetail = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema),
    });

    const onSubmit = (data: CheckoutFormData) => {
        console.log('Dữ liệu gửi:', data);
    };

    return (
        <div className="row">
            <div className="col-lg-7">
                <div className="billing-info-wrap">
                    <h3>Billing Details</h3>
                    
                    <FormCheckOut register={register} handleSubmit={handleSubmit} errors={errors} onSubmit={onSubmit} />

                </div>
            </div>
            <div className="col-lg-5 mt-md-30px mt-lm-30px ">
                <div className="your-order-area">
                    <h3>Your order</h3>
                    <div className="your-order-wrap gray-bg-4">
                        <div className="your-order-product-info">
                            <div className="your-order-top">
                                <ul>
                                    <li>Product</li>
                                    <li>Total</li>
                                </ul>
                            </div>
                            <div className="your-order-middle">
                                <ul>
                                    <li><span className="order-middle-left">Product Name X 1</span> <span className="order-price">$329 </span></li>
                                    <li><span className="order-middle-left">Product Name X 1</span> <span className="order-price">$329 </span></li>
                                </ul>
                            </div>
                            <div className="your-order-bottom">
                                <ul>
                                    <li className="your-order-shipping">Shipping</li>
                                    <li>Free shipping</li>
                                </ul>
                            </div>
                            <div className="your-order-total">
                                <ul>
                                    <li className="order-total">Total</li>
                                    <li>$329</li>
                                </ul>
                            </div>
                        </div>
                        <div className="payment-method">
                            <div className="payment-accordion element-mrg">
                                <div id="faq" className="panel-group">
                                    <div className="panel panel-default single-my-account m-0">
                                        <div className="panel-heading my-account-title">
                                            <h4 className="panel-title"><a data-bs-toggle="collapse" href="#my-account-1" className="collapsed" aria-expanded="true">Direct bank transfer</a>
                                            </h4>
                                        </div>
                                        <div id="my-account-1" className="panel-collapse collapse show" data-bs-parent="#faq">

                                            <div className="panel-body">
                                                <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default single-my-account m-0">
                                        <div className="panel-heading my-account-title">
                                            <h4 className="panel-title"><a data-bs-toggle="collapse" href="#my-account-2" aria-expanded="false" className="collapsed">Check payments</a></h4>
                                        </div>
                                        <div id="my-account-2" className="panel-collapse collapse" data-bs-parent="#faq">

                                            <div className="panel-body">
                                                <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default single-my-account m-0">
                                        <div className="panel-heading my-account-title">
                                            <h4 className="panel-title"><a data-bs-toggle="collapse" href="#my-account-3">Cash on delivery</a></h4>
                                        </div>
                                        <div id="my-account-3" className="panel-collapse collapse" data-bs-parent="#faq">

                                            <div className="panel-body">
                                                <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Place-order mt-25">
                        <a className="btn-hover cursor-pointer" onClick={() => handleSubmit(onSubmit)()}>Place Order</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BillingDetail;