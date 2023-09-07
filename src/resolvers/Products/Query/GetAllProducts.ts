import { knx } from "src/connection/CreateKnexConnectios"

export const GetAllProducts = async()=>{
const products=await knx("products")
return products;
}