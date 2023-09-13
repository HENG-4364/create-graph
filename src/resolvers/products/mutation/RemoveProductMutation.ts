import { knx } from 'src/connection/CreateKnexConnectios';

export const RemoveProductMutation = async (_, { id }: { id: number }, {}) => {
  const removeProduct = await knx('products').del().where({ id });
  if (removeProduct) {
    return true;
  } else {
    return false;
  }
};
