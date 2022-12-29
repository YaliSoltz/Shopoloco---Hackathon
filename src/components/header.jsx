import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductsContext } from '../helpers/context';
import '../helpers/appStyles.css'
import logoImg from '../helpers/images/logo-no-background.png'
import changeUserImg from '../helpers/images/change-user.png'

function Header() {
  const {currentState,setCurrentState} = useContext(ProductsContext)
  
  return (
    <Fragment>
       <Link to="/"> <img width={90} src={logoImg} alt="ERROR"/> </Link>
      <Link to="/addNewProduct"> <button id="add_newProduct_btn" className='btn btn-secondary' hidden={currentState==='Cashier'? true:""}> Add new product</button></Link>

      <div style={{display: 'flex'}}>
        <p id='header_user_name'>{currentState==='Cashier' ? 'Cashier':'Manager'}</p>
      <img id='header_user_img' src={changeUserImg} alt="ERROR" onClick={()=>{setCurrentState("Login")}}/>
      </div>
       
        


   </Fragment>
  );
}

export default Header;