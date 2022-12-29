import React, { Fragment, useContext,useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../helpers/context';
import jsPDF from 'jspdf';
import { useNavigate } from 'react-router-dom';
import '../../helpers/appStyles.css'
const Products = () => {
    const {mainObj, order, setOrder, dailyOrders, setDailyOrders, products, setProducts, date, time} = useContext(ProductsContext)
    const x = []
    const navigate = useNavigate()
    const [divHider,setDivHider]=useState("true")
    for(let i=1; i<=100; i++){
        x.push(i)

    }
   
    const generatePDF = () => {
        let doc = new jsPDF("p", "pt", "a4");
        doc.html(document.getElementById("PDF"), {
          callback: function (pdf) {
            pdf.save("OrderRecepiet.pdf");
          },
        });
      };

     const handleOrder=()=>{
        setDivHider(false)
        {generatePDF()}
        setTimeout(()=>navigate('/'),1)

        }
        
   
     
    return (
        <Fragment>
        <div>
            <div id='mainObj_display'>
            <h2 className="alert alert-primary" role="alert">{mainObj.name} <span style={{fontSize: 16}}>{mainObj.company}</span></h2>
            <h3 className="alert alert-primary" role="alert">Quantity: {mainObj.quantity} </h3>
            <h3 className="alert alert-primary" role="alert">Price: {mainObj.price}</h3>
            

        <div hidden={divHider==='true'?true:""} className='PDF' id='PDF'>
            <h1 style={{textAlign: 'center'}}>{mainObj.company} Order</h1>
            <p style={{margin: '20px'}}>inventory refill order:.</p>
            <table style={{borderCollapse: 'collapse'}}>
                <thead>
                <tr>
                    <th style={{border: '1px solid black'}}>Name</th>
                    <th style={{border: '1px solid black'}}>Company</th>
                    <th style={{border: '1px solid black'}}>Quantity</th>
                    <th style={{border: '1px solid black'}}>Date</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={{border: '1px solid black'}}>{mainObj.name}</td>
                    <td style={{border: '1px solid black'}}>{mainObj.company}</td>
                    <td style={{border: '1px solid black'}}>{order}</td>
                    <td style={{border: '1px solid black'}}>{date}  -  {time}</td>
                </tr>
                </tbody>
            </table>
                    </div>

            <br />
            <div>
            <input onChange={(e)=>setOrder(e.target.value)} type="number" />
          <button className='btn btn-primary' onClick={()=>{const newOrder1 = {name: mainObj.name, company: mainObj.company, quantity: parseInt(order), date, time};
                setDailyOrders(
                [...dailyOrders, newOrder1
                ]);handleOrder() }}>Order</button>
            <br />
            
            <label htmlFor="auto_order">Auto order:</label>
            <select name='auto_order' onChange={(e)=>{products.find(p=>p.id===mainObj.id).autoOrder=parseInt(e.target.value);setProducts([...products]);e.target.value=mainObj.autoOrder}} defaultValue={mainObj.autoOrder}>
             {x.map((num, index)=> <option key={index} value={num}>{num}</option>)}
            </select>
            <br />
                
            <Link to='/'><button className='btn btn-danger mt-2' onClick={()=>{setProducts(products.filter(p=>p.id !== mainObj.id)); alert('Product removed from storage')}}>Remove product</button> </Link>
            <br />
            </div>
            </div>
        </div>
        </Fragment>
    );
}

export default Products;