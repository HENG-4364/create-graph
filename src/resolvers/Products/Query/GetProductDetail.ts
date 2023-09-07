import { knx } from 'src/connection/CreateKnexConnectios';

export const GetProductDetail = async (_, { id }: { id: number }, {}) => {
  const getProductDerail = await knx('products').where({ id }).first();
  return getProductDerail;
};
