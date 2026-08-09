import api from "./api";

// get products with pagination
export const getProducts = (limit = 12, skip = 0) => {
  return api.get(`/products?limit=${limit}&skip=${skip}`);
};

// get single product
export const getProductById = (id) => {
  return api.get(`/products/${id}`);
};

// search product
export const searchProducts = (query) => {
  return api.get(`/products/search?q=${query}`);
};

// get product by category with pagination
export const getProductByCategory = (category, limit = 20, skip = 0) => {
  return api.get(`/products/category/${category}?limit=${limit}&skip=${skip}`);
};

// sort products
export const sortProducts = (sortBy, order = "asc") => {
  return api.get(`/products?sortBy=${sortBy}&order=${order}`);
};
