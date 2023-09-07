import { knx } from 'src/connection/CreateKnexConnectios';

export const GetAllProductCategories = async () => {
  const getAllProductCategories = await knx('product_categories');
  return getAllProductCategories;
};
