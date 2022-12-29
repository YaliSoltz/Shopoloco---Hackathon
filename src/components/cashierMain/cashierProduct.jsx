import React, { Fragment, useContext } from 'react';
import { ProductsContext } from '../../helpers/context';


const Products = () => {
    const {mainObj,products, setProducts} = useContext(ProductsContext)
    return (
        <Fragment>
        <div>
            <div id='cashier_product'>
            <h2 className="alert alert-primary" role="alert">{mainObj.name} - {mainObj.company}</h2>
            <h3 className="alert alert-primary" role="alert">Quantity: {mainObj.quantity}</h3>
            <h3 className="alert alert-primary" role="alert">Price: {mainObj.price}</h3>
       
            <br />
            <div>
            <br />
            <button disabled={products.find(p=>p.id===mainObj.id && p.quantity<=0 ? 'disabled':'')} onClick={()=>{products.map(p=>{if(p.id===mainObj.id)p.quantity--});setProducts([...products])}}>Purchase</button>
            
            </div>
            </div>
        </div>
        </Fragment>
    );
}

export default Products;