import { z } from 'zod';

export const checkoutSchema = z.object({
    name: z.string().min(2, 'Tên quá ngắn'),
    email: z.string().email('Email không hợp lệ'),
    phone: z.string().min(10, 'Số điện thoại không hợp lệ'),
    address: z.string().min(5, 'Địa chỉ không được để trống'),
    province: z.string(),
    district: z.string(),
    ward: z.string(),
    note: z.string().optional(),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
