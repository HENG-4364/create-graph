import { knx } from "src/connection/CreateKnexConnectios"
import { InputProductCategory } from "src/types/ProductCategory"

export const CreateProductCategory =async(_,{input}:{input:InputProductCategory},{})=>{
  const {category_name}=input
  const createProductCategory =await knx("product_categories").insert({category_name})
  if(createProductCategory){
    return true;
  }else{
    return false;
  }
}