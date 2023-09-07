import { knx } from 'src/connection/CreateKnexConnectios';
import { ProductInput } from 'src/types/Products';

export const CreateProduct = async (_, { input }: { input: ProductInput }, {}) => {
  const { product_name, image, description, summary, price,status, category_id } =
    input;
  const createProduct = await knx('products').insert({
    product_name,
    image,
    description,
    summary,
    price,
    status,
    category_id,
  });
  if (createProduct) {
    return true;
  } else {
    return false;
  }
};
