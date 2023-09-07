import { knx } from "src/connection/CreateKnexConnectios"
import { ProductInput } from "src/types/Products";

export const UpdateProduct =async(_,{id,input}:{id:number,input:ProductInput},{})=>{
  const { product_name, image, description, summary, price,status, category_id } = input;
  const updateProduct =await knx("products").update({product_name, image, description, summary, price ,status, category_id}).where({id})
  if(updateProduct){
    return true;
  }else{
    return false;
  }
}