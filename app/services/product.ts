import api from "../lib/axios";
import { IProductGroup } from "../types";

export const getProductGroup = async () => {
  const res = await api.get('/product-groups');
  return res.data; 
};

export const getCategoryWithProductGroup = async (product_group: string) => {
  const res = await api.get(`/product-categories?filters[product_group][slug][$eq]=${product_group}`);
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

export const getProductsWithCategory = async (slug: string,current_page: number, page_size: number) => {
  const res = await api.get(`/products?filters[product_category][slug][$eq]=${slug}&populate=image`);
  return res.data;
};

export const getDetailProducts = async (slug: string) => {
  const res = await api.get(`/products?filters[slug][$eq]=${slug}&populate=image`);
  return res.data; 
};