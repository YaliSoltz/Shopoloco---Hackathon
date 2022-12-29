import React, { Fragment } from "react";
import Header from "./header";
import CashierMain from "./cashierMain/cashierMain"
import Footer from "./footer";
import SideBar from "./sideBar"
import "../helpers/appStyles.css"





function Cashier() {
  return (
    <Fragment>
    <div className="header">
    <Header />
    </div>
    
    <div className="container ">

    <div className="middle">
   <div className="sideBar">
    <SideBar />
    </div>

    <div className="main">
    <CashierMain/>
    </div>
    </div>
    <div className="footer">
        
    <Footer />
    </div>
    </div>
    
</Fragment>

  );
}

export default Cashier;