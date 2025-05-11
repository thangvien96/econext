import api from "../lib/axios";

export const fetchPosts = async () => {
  const res = await api.get('/posts');
  return res.data; // danh sách bài viết
};