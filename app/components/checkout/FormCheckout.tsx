'use client'

interface Iprops {
    register: any,
    handleSubmit: any,
    errors: any,
    onSubmit: any,
}

const FormCheckOut = ({ register, handleSubmit,errors,onSubmit  } : Iprops) => {

    return (
        <>  
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="billing-info mb-20px">
                            <label>Họ và tên</label>
                            <input type="text" {...register('name')} />
                            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="billing-select mb-20px">
                            <label>Tỉnh/Thành phố</label>
                            <select {...register('province')}>
                                <option value="">Select a country</option>
                                <option value="Hà Nội">Hà Nội</option>
                                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
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
                            {errors.address && <p className="text-red-600">{errors.address.message}</p>}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20px">
                            <label>Số điện thoại liên hệ</label>
                            <input type="text" {...register('phone')} />
                            {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20px">
                            <label>Địa chỉ Email</label>
                            <input type="text" {...register('email')} />
                            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
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
            </form>
        </>
    )
}

export default FormCheckOut;