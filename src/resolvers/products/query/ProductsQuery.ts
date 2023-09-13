import { knx } from "src/connection/CreateKnexConnectios";
import { PaginationInput } from "src/types/Pagination";

export const ProductsQuery = async (
  _: any,
  { paginationInput }: { paginationInput: PaginationInput },
  {}
) => {
  const query = knx("products");
  const { size, page } = paginationInput;
  if (size && page) {
    const offset = (page - 1) * size;
    query.offset(offset).limit(size);
  }
  const products = await query;
  const product_categories = await knx("product_categories");
  const total_products = await knx("products");
  return {
    data: products.map(async (product) => {
      const product_category = product_categories.find(
        (x) => x.id === product.category_id
      );
      return {
        ...product,
        category: product_category,
      };
    }),
    pagination: {
      size: products?.length,
      total: total_products?.length,
      current: paginationInput?.page,
    },
  };
};
