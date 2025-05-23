import api from "../lib/axios";

export const getProductGroup = async () => {
  const res = await api.get('/product-groups');
  return res.data; 
};

export const getProductsBestSeller = async () => {
  const res = await api.get('/products?filters[isFeatured][$eq]=true&populate=*');
  return res.data; 
};

export const getProductsNew = async () => {
  const res = await api.get('/products?filters[isFeatured][$eq]=true&populate=*');
  return res.data; 
};

export const getProducts = async (current_page: number, page_size: number) => {
  const res = await api.get('/products');
  return res.data; 
};

export const getDetailProducts = async (productId: string | null) => {
  const res = await api.post('/getDetailProducts', {
    productId
  });
  return res.data; 
};