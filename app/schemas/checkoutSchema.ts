import { z } from 'zod';

export const checkoutSchema = z.object({
    name: z.string().min(2, 'Tên quá ngắn'),
    email: z.string().email('Email không hợp lệ'),
    phone: z.string().min(10, 'Số điện thoại không hợp lệ'),
    address: z.string().min(5, 'Địa chỉ không được để trống'),
    province: z.string().min(1, 'Vui lòng chọn tỉnh/thành phố'),
    district: z.string().min(1, 'Vui lòng chọn quận/huyện'),
    ward: z.string().min(1, 'Vui lòng chọn phường/xã'),
    note: z.string().optional(),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
