import { CreateProductCategoryMutation } from "./product_categories/mutation/CreateProductCategoryMutation";
import { ProductCategoriesQuery } from "./product_categories/query/CategoriesQuery";
import { ProductCategoryDetalQuery } from "./product_categories/query/CategoryDetailQuery";
import { CreateProductMutation } from "./products/mutation/CreateProductMutation";
import { RemoveProductMutation } from "./products/mutation/RemoveProductMutation";
import { UpdateProductMutation } from "./products/mutation/UpdateProductMutation";
import { ProductDetailQuery } from "./products/query/ProductDetailGuery";
import { ProductsQuery } from "./products/query/ProductsQuery";

export const Resolvers = {
  Query: {
    products: ProductsQuery,
    product: ProductDetailQuery,
    categories: ProductCategoriesQuery,
    category: ProductCategoryDetalQuery,
  },
  Mutation: {
    createProduct: CreateProductMutation,
    updateProduct: UpdateProductMutation,
    removeProduct: RemoveProductMutation,
    createProductCategory: CreateProductCategoryMutation,
  },
};
