import api from "../lib/axios";

export const getProductsBestSeller = async () => {
  const res = await api.get('/getProductsBestSeller');
  return res.data; 
};

export const getProductsNew = async () => {
  const res = await api.get('/getProductsNew');
  return res.data; 
};

export const getProducts = async () => {
  const res = await api.get('/getProducts');
  return res.data; 
};