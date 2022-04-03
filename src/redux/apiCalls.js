import { publicRequest, userRequest } from "../axios";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {getproductStart,getproductSucess,getProductsFailure,
        deleteproductStart,deleteproductSucess,deleteProductsFailure,
        updateproductStart,updateproductSucess,updateProductsFailure,
        addproductStart,addproductSucess,addProductsFailure
    } from "./ProductRedux";

export  const login = async (dispatch,user)=>{
    dispatch(loginStart());
        try{
            const res = await publicRequest.post("/auth/login",user)
            dispatch(loginSuccess(res.data))


        }catch(err){
            dispatch(loginFailure())
    }
};

export  const getProducts = async (dispatch)=>{
    dispatch(getproductStart());
        try{
            const res = await publicRequest.get("/products")
            dispatch(getproductSucess(res.data))


        }catch(err){
            dispatch(getProductsFailure())
    }
};

export  const deleteProducts = async (id,dispatch)=>{
    dispatch(deleteproductStart());
        try{
            const res = await userRequest.delete(`/products/${id}`)
            dispatch(deleteproductSucess(id))


        }catch(err){
            dispatch(deleteProductsFailure())
    }
};
export  const updateProducts = async (id,product,dispatch)=>{
    dispatch(updateproductStart());
        try{
            
            dispatch(updateproductSucess(id,product))


        }catch(err){
            dispatch(updateProductsFailure())
    }
};
export  const addProducts = async (product,dispatch)=>{
    dispatch(addproductStart());
        try{
            const res = await userRequest.post(`/products`,product)
            dispatch(addproductSucess(res.data))


        }catch(err){
            dispatch(addProductsFailure())
    }
}