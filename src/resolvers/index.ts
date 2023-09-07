import { CreateProduct } from './Products/Mutation/CreateProduct';
import { RemoveProduct } from './Products/Mutation/RemoveProduct';
import { UpdateProduct } from './Products/Mutation/UpdateProduct';
import { GetAllProducts } from './Products/Query/GetAllProducts';
import { GetProductDetail } from './Products/Query/GetProductDetail';

export const Resolvers = {
  Query: {
    products: GetAllProducts,
    product: GetProductDetail,
  },
  Mutation: {
    createProduct: CreateProduct,
    updateProduct: UpdateProduct,
    removeProduct: RemoveProduct,
  },
};
