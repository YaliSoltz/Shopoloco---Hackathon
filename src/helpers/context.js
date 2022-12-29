import { dataBase } from "./dataBase";
import React, { createContext, useEffect, useState } from 'react';
export const ProductsContext = createContext()
const Context = (props) => {
    const {children} = props
    const [mainObj, setMainObj] = useState({}) //the product who displayed
    const [order, setOrder] = useState(0) //amount of order
    const [dailyOrders, setDailyOrders] = useState([]) //array of all orders
    const AdminUser = "Admin"; //admin name
    const AdminPassword = "12345"; //admin password
    const CashierUser = "Cashier"; //cashier user name
    const CashierPassword = "12345"; //admin password
    const [currentState, setCurrentState] = useState("Login");
    const [products, setProducts] = useState(dataBase) //the products
    const date = new Date().toLocaleDateString(); //today date
    const time = new Date().toLocaleTimeString(); //time right now
    

    useEffect(()=>{
        //automatic order
        products.map(p=>{if(p.quantity===p.autoOrder){const newOrder = {name: p.name, company: p.company, quantity: 50, date, time};
        setDailyOrders(
        [...dailyOrders, newOrder
        ]); console.log(newOrder)}})
        },[products]
    )
    return (
       <ProductsContext.Provider value={
        {   products,
            setProducts,
            mainObj,
            setMainObj,
            order,
            setOrder,
            dailyOrders,
            setDailyOrders,
            AdminUser,
            AdminPassword,
            CashierUser,
            CashierPassword,
            currentState,
            setCurrentState,
            date,
            time
        }
       }>
        {children}
       </ProductsContext.Provider>
    );
}

export default Context;
