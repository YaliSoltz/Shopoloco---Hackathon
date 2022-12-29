import React, { Fragment } from 'react';
import '../helpers/appStyles.css'
import Products from './main/products';
import { Route, Routes } from "react-router-dom";
import AddProduct from './main/addProduct';
import ManagerHome from './main/managerHome';
function Main() {

  return (
   <Fragment>
       <Routes>

        <Route path='/' element={<ManagerHome/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/addNewProduct' element={<AddProduct/>}/>

       </Routes>
        



   </Fragment>
  );
}

export default Main;