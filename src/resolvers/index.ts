import { CreateProductCategory } from './Product_Categories/Mutation/CreateProductCategory';
import { GetAllProductCategories } from './Product_Categories/Query/GetAllCategories';
import { GetProductCategoryDetal } from './Product_Categories/Query/GetCategoryDetail';
import { CreateProduct } from './Products/Mutation/CreateProduct';
import { RemoveProduct } from './Products/Mutation/RemoveProduct';
import { UpdateProduct } from './Products/Mutation/UpdateProduct';
import { GetAllProducts } from './Products/Query/GetAllProducts';
import { GetProductDetail } from './Products/Query/GetProductDetail';

export const Resolvers = {
  Query: {
    products: GetAllProducts,
    product: GetProductDetail,
    categories: GetAllProductCategories,
    category: GetProductCategoryDetal,
  },
  Mutation: {
    createProduct: CreateProduct,
    updateProduct: UpdateProduct,
    removeProduct: RemoveProduct,
    createProductCategory: CreateProductCategory,
  },
};
