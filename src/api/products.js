import Products from "./products.json";
export const getAll = () => {
  return Promise.resolve(Products);
};

export const getById = (id) => {
  const product = Products.find((item) => item.id === id);
  return Promise.resolve(product);
};
export default {
  getAll,
  getById,
};
