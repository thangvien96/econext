import api from "../lib/axios";

export const getProductsBestSeller = async () => {
  const res = await api.get('/getProductsBestSeller');
  return res.data; 
};

export const getProductsNew = async () => {
  const res = await api.get('/getProductsNew');
  return res.data; 
};

export const getProducts = async (current_page: number, page_size: number) => {
  const res = await api.post('/getProducts', {
    current_page,
    page_size
  });
  return res.data; 
};