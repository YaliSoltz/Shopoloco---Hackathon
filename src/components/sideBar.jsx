import React, { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../helpers/appStyles.css";
import { ProductsContext } from "../helpers/context";

function SideBar() {
  const navigate = useNavigate();
  const { products, setMainObj } = useContext(ProductsContext);
  const dairyCat = []; //array of all dairy products
  const produceCat = []; //array of all produce products
  const bakeryCat = []; //array of all bakery products
  const meatCat = []; //array of all meat products
  const frozenCat = []; //array of all frozen products

  // add product to array by category
  products.map((p) => {
    switch (p.category) {
      case "Dairy":
        dairyCat.push(p);
        break;
      case "Produce":
        produceCat.push(p);
        break;
      case "Bakery":
        bakeryCat.push(p);
        break;
      case "Meat":
        meatCat.push(p);
        break;
      case "Frozen":
        frozenCat.push(p);
        break;
    }
  });

  //sort the catagories by name
  dairyCat.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  produceCat.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  bakeryCat.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  meatCat.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  frozenCat.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  
  return (
    <Fragment>
      <div className="custom-dropdown">
        <button className="sider_category">Dairy</button>
        <div className="custom-dropdown-content">
          <div className="products_scroll">
            {dairyCat.map((product, index) => (
              <button
                className="sider_product"
                onClick={() => {
                  navigate("/product");
                  setMainObj(dairyCat[index]);
                }}
                key={index}
              >
                {product.name} - {product.company}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="custom-dropdown">
        <button className="sider_category">Produce</button>
        <div className="custom-dropdown-content">
          <div className="products_scroll">
            {produceCat.map((product, index) => (
              <button
                className="sider_product"
                onClick={() => {
                  navigate("/product");
                  setMainObj(produceCat[index]);
                }}
                key={index}
              >
                {product.name} - {product.company}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="custom-dropdown">
        <button className="sider_category">Bakery</button>
        <div className="custom-dropdown-content">
          <div className="products_scroll">
            {bakeryCat.map((product, index) => (
              <button
                className="sider_product"
                onClick={() => {
                  navigate("/product");
                  setMainObj(bakeryCat[index]);
                }}
                key={index}
              >
                {product.name} - {product.company}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="custom-dropdown">
        <button className="sider_category">Meat</button>
        <div className="custom-dropdown-content">
          <div className="products_scroll">
            {meatCat.map((product, index) => (
              <button
                className="sider_product"
                onClick={() => {
                  navigate("/product");
                  setMainObj(meatCat[index]);
                }}
                key={index}
              >
                {product.name} - {product.company}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="custom-dropdown">
        <button className="sider_category">Frozen</button>
        <div className="custom-dropdown-content">
          <div className="products_scroll">
            {frozenCat.map((product, index) => (
              <button
                className="sider_product"
                onClick={() => {
                  navigate("/product");
                  setMainObj(frozenCat[index]);
                }}
                key={index}
              >
                {product.name} - {product.company}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SideBar;
