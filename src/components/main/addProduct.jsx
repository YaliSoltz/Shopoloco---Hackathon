import React, { Fragment, useState } from "react";
import { ProductsContext } from "../../helpers/context";
import { useContext } from "react";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

//Add new producat form
const AddProduct = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    category: "",
    name: "",
    company: "",
    price: "",
    expiredDate: "",
    quantity: "",
  });

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  //saving the new values and adding it to the products array
  const handleSubmit = (event) => {
    event.preventDefault();
    // create a new object from the form values
    const newProduct = {
      id: v4(),
      category: formValues.category,
      name: formValues.name.toLowerCase(),
      company: formValues.company,
      price: formValues.price,
      expiredDate: formValues.expiredDate,
      quantity: formValues.quantity,
    };

    setProducts([...products, newProduct]);
    console.log(newProduct);
    console.log(products);
    navigate('/')
  };

  return (
    <Fragment>
      <div>
    <form onSubmit={handleSubmit} style={{display: 'flex',flexDirection: 'column' }}>
    <label>Category:</label>
      <select 
        name="category"
        value={formValues.category}
        required
        onChange={handleChange}
      >
        <option value="" disabled>...</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Bakery">Bakery</option>
        <option value="Meat">Meat</option>
        <option value="Frozen">Frozen</option>
      </select>
      <br />
      <label>Name:</label>
      <input
        type="text"
        name="name"
        required
        value={formValues.name}
        onChange={handleChange}
        
      />
      <br />
      <label>Company:</label>
      <input
        type="text"
        name="company"
        required
        value={formValues.company}
        onChange={handleChange}
      />
      <br />
      <label>Price:</label>
      <input
        type="number"
        name="price"
        required
        value={formValues.price}
        onChange={handleChange}
      />
      <br />
      <label>Expired Date:</label>
      <input
        type="date"
        name="expiredDate"
        value={formValues.expiredDate}
        onChange={handleChange}
      />
      <br />
      <label>Quantity:</label>
      <input
        type="number"
        name="quantity"
        required
        value={formValues.quantity}
        onChange={handleChange}
      />
      <br />
       <button className="btn btn-success" type="submit">Add Product</button> 
    </form>
    </div>
    </Fragment>
  );
};

export default AddProduct;