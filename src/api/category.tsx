
import instance from "./instance"

export const getCategory =()=>{
    return instance.get("/categories/")
}