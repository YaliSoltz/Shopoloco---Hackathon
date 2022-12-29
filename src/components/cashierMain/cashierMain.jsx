import React, { Fragment } from 'react';
import { Route, Routes } from "react-router-dom";
import CashierProduct from '../cashierMain/cashierProduct';
import CashierHome from './cashierHome';
function CashierMain() {

  return (
   <Fragment>
       <Routes>
      
        <Route path='/' element={<CashierHome/>}/>
        <Route path='/product' element={<CashierProduct/>}/>

       </Routes>
        



   </Fragment>
  );
}

export default CashierMain;