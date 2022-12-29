import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../helpers/context';

const ManagerHome = () => {
    const { dailyOrders }  = useContext(ProductsContext)
    return (
        <Fragment>
        <div>
        <div style={{marginLeft: 200, height: 550}}>
      <h1>Welcome, Manager!</h1>
      <p>What would you like to do today?</p>
      <div>
       <Link to='/product'> <button className='mb-2' >Manage Orders</button> </Link>
       <h3 >Daily orders: {dailyOrders.length} </h3>
      </div>
      <div id='manager_orders_table'>
      <table className='table table-hover'>
  <thead>
    <tr>
      <th>Order number</th>
      <th>Name</th>
      <th>Company</th>
      <th>Quantity</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    {dailyOrders.map((order, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{order.name}</td>
        <td>{order.company}</td>
        <td>{order.quantity}</td>
        <td>{order.date} {order.time}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>
        </div>
        </div>
        </Fragment>
    );
}

export default ManagerHome;