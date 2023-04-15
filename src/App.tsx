import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import HomePage from './page/HomePage'
import ProductDetail from './page/ProductDetail'
import ProductPage from './page/ProductPage'
import DashBoard from './page/admin/DashBoard'
import ProductAdd from './page/admin/ProductAdd'
import ProductUpdate from './page/admin/ProductUpdate'
import Signup from './page/admin/signup'
import Signin from './page/admin/signin'
import { RemoveProduct, getAll } from './api/product'
import { IProduct } from './type/product'
import { getCategory } from './api/category'

function App() {
  const [products, setProducts] = useState([])
  const [categorys,setCategory] = useState([])
  useEffect(()=>{
    getAll().then(({data})=>setProducts(data))
  },[])
  useEffect(()=>{
    getCategory().then(({data})=>setCategory(data))
  },[])
  const removeProduct = (id:number)=>{
    RemoveProduct(id).then(()=>getAll().then(({data})=>setProducts(data)))
  }
  return (
    <div className="App">
     <Routes>
        <Route  path="/">
        <Route path="signup" element={<Signup/>}/>
        <Route path='signin' element={<Signin/>}/>
          <Route index element={<HomePage/>}/>
          <Route path='product'>
              <Route index element={<ProductPage products={products}/>}/>
              <Route path=':id' element={<ProductDetail products={products}/>} />
          </Route>
        
          <Route path='admin/product'>
              <Route index element={<DashBoard products={products} categorys={categorys} onRemove={removeProduct}/>}/>
              <Route path='add' element={<ProductAdd/>} />
              <Route path=':id/update' element={<ProductUpdate/>} />
          </Route>
        </Route>
     </Routes>
    </div>
  )
}

export default App
