import Manager from "./Manager";
import LoginForm from "./loginForm";
import Cashier from "./Cashier"
import { useContext } from "react";
import { ProductsContext } from "../helpers/context";


function App() {
    const { currentState} =useContext(ProductsContext);
   
  return (
    <div className="App">
        
           {currentState==='Login'&& <LoginForm/>}
           {currentState==='Manager'&& <Manager/>}
           {currentState==='Cashier'&& <Cashier/>}
            
        
      
    </div>
  );
}

export default App;