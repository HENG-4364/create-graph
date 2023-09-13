import { knx } from 'src/connection/CreateKnexConnectios';

export const ProductCategoriesQuery = async () => {
  const getAllProductCategories = await knx('product_categories');
  return getAllProductCategories;
};
