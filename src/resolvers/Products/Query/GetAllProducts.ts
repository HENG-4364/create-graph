import { knx } from 'src/connection/CreateKnexConnectios';

export const GetAllProducts = async () => {
  const GetAllProducts = await knx('products');
  const getAllProductCategories = await knx('product_categories');
  return GetAllProducts.map(async (item) => {
    const ProductCategory = getAllProductCategories.find(
      (x) => x.id === item.category_id
    );
    return {
      ...item,
      category: ProductCategory,
    };
  });
};
