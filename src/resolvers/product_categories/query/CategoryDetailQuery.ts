import { knx } from "src/connection/CreateKnexConnectios"

export const ProductCategoryDetalQuery = async(_,{id}:{id:number},{})=>{
  const getProductCategoryDetail = await knx("product_categories").where({id:id}).first();
  const getAllProducts= await knx("products").where({category_id:getProductCategoryDetail?.id})
console.log(getAllProducts)
  return {
    ...getProductCategoryDetail,
     products:getAllProducts
 }
}