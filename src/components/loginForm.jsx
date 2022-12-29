import React, { Fragment } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../helpers/context";
import logoImg from '../helpers/images/logo-no-background.png'
import '../helpers/appStyles.css'

const LoginForm = () => {
  const {
    currentState,
    setCurrentState,
    AdminUser,
    AdminPassword,
    CashierPassword,
    CashierUser,
  } = useContext(ProductsContext);
  const [response, setResponse] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === AdminUser && password == AdminPassword) {
      setCurrentState("Manager");
    }
    if (userName === CashierUser && password == CashierPassword) {
      setCurrentState("Cashier");
    } 

    else {
      setResponse("Username or Password is incorrect");
    }
    navigate('/')
  };
  return (
    <Fragment>
      <div className="text-center" id="login">
      <div className=" m-auto" style={{width: 300}}>
    <form onSubmit={handleSubmit} style={{paddingTop: 120}}>
    <img className="mb-4" src={logoImg} alt="ERROR" style={{width:150,height:90}}/>
    <h1 className="h3 mb-3 fw-normal">Please Login</h1>
    <div className="form-floating">
      <input
        // value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        className="form-control" id="user_name"/>
      <label htmlFor="user_name">User Name</label>
      </div>

      
      <div className="form-floating">
      <input
        // value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="form-control" id="user_password"/>

      <label htmlFor="user_password">Password</label>
        </div>
        <div className="checkbox m-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>

       <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
    <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
      <div>{response}</div>
    </form>
    </div>
    </div>
    </Fragment>
  );
};

export default LoginForm;