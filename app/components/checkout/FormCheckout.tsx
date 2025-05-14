'use client'

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutSchema, CheckoutFormData } from '@/app/schemas/checkoutSchema';

const FormCheckOut = () => {
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
        <>  
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="billing-info mb-20px">
                            <label>Họ và tên</label>
                            <input type="text" {...register('name')} />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="billing-select mb-20px">
                            <label>Tỉnh/Thành phố</label>
                            <select {...register('province')}>
                                <option>Select a country</option>
                                <option>Hà Nội</option>
                                <option>Hồ Chí Minh</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="billing-info mb-20px">
                            <label>Quận/huyện</label>
                            <input type="text" {...register('district')} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20px">
                            <label>Phường xã</label>
                            <input type="text" {...register('ward')} />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="billing-info mb-20px">
                            <label>Địa chỉ nhà</label>
                            <input placeholder="..." type="text" {...register('address')} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20px">
                            <label>Số điện thoại liên hệ</label>
                            <input type="text" {...register('phone')} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20px">
                            <label>Địa chỉ Email</label>
                            <input type="text" {...register('email')} />
                        </div>
                    </div>
                </div>
                <div className="additional-info-wrap">
                    <h4>Additional information</h4>
                    <div className="additional-info">
                        <label>Order notes</label>
                        <textarea {...register('note')} placeholder="Notes about your order, e.g. special notes for delivery. " name="message"></textarea>
                    </div>
                </div>
                
                <button type="submit" className="bg-blue-600 px-4 py-2 rounded">
                        Gửi đơn hàng
                </button>

            </form>
        </>
    )
}

export default FormCheckOut;