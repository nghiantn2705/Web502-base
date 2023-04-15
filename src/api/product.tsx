import { IProduct } from "../type/product"
import instance from "./instance"

export const getAll =()=>{
    return instance.get("/products/")
}
export const getDetail = (id:IProduct)=>{
    return instance.get(`/products/${id}`)
}
export const RemoveProduct = (id:IProduct)=>{
    return instance.delete(`/products/${id}`)
}
export const addProduct = (product:IProduct)=>{
    return instance.post('/products/',product)
}
export const updateProduct = (product:IProduct)=>{
    return instance.put('/products/'+product.id,product)
}