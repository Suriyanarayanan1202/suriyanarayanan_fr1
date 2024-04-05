import React from "react";
import { useState } from "react";

import axios from "axios";

export const AddProduct = () => {
  //Set Image
  let uploadimage = null;
    
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState();

  const handleFile = () => {
    console.log("hello world");
    const formData = new FormData();
    formData.append("file", selectedImage);
    axios.post('http://localhost:8080/file/upload',formData)
    .then((res)=>{
      uploadimage=res.data;
      console.log("---Upload Image---",uploadimage);
    })
    .catch((err)=>{

    })

  
  };

  //Add Products
  const [formData, setData] = useState({
    productname: "",
    description: "",
    price: "",
    categoryname: "",
    
  });

  const handleChange = (event) => {
    // setData({...formData,productname:event.target.value})
    const { name, value } = event.target;
    setData({ ...formData, [name]: value });
    console.log(name, value);
  };
  const handleSubmit = (event) => {
    console.log(formData);
    if (formData.productname && formData.description && formData.price === "") {
      console.log("Noooo");
    } else {
      console.log("Category", selectedCategory);
      const SignUp = {
        name: formData.productname,
        description: formData.description,
        price: formData.price,
        category: selectedCategory,
        image: uploadimage,
      };
      console.log("=========Signup========" + JSON.stringify(SignUp));
      fetch("http://localhost:8080/product/addproduct", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(SignUp),
      }).then((response) => {
        console.log("Data received " + response);
      });
    }
    alert("Product Added");
  };

  //To get a category
  const handleSelectChange = (event) => {
    console.log("Selected Category ====>" + event.target.value);
    setSelectedCategory(event.target.value);
  };
  return (
    <div class="container">
      <div>
        {selectedImage && (
          <div>
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            <button onClick={() => setSelectedImage(null)}>Remove</button>
            <button onClick={() => handleFile()}>Upload</button>
          </div>
        )}
        <p>
          Product Name :{" "}
          <input
            type="text"
            placeholder="enter your productname"
            name="productname"
            value={formData.productname}
            onChange={handleChange}
          />
        </p>
        <p>
          Description :{" "}
          <input
            type="text"
            placeholder="enter your description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </p>
        <p>
          Price :{" "}
          <input
            type="number"
            placeholder="enter your price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </p>
        <p>
          Category Name:
          <select value={selectedCategory} onChange={handleSelectChange}>
            <option>category</option>
            <option>SAREES</option>
            <option>SALWAR</option>
            <option>KURTHIS</option>
            <option>LEHENGA</option>
            <option>READYMADE</option>
          </select>
        </p>
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
      </div>
      <button onClick={() => handleSubmit()}>Add</button>
    </div>
  );
};


