import axios from 'axios';
import React, { useState } from 'react'

const Addcategory = () => {

    const[formData,setFormData] = useState({
        categoryname : '',
        categorydescription : ''
    })


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
        console.log(name, value);
      }

    const handlesubmit = (e) => {
        console.log(formData);
        if (formData.categoryname && formData.categorydescription == ''){
            console.log("no")
        }else {
            const category = {
                categoryname : formData.categoryname,
                categorydescription : formData.categorydescription

            }
            axios.post("http://localhost:8080/product/addcategory",category)
            .then((res)=>{
                console.log("data recieved" + res);
            })
        }
    }


  return (
    <div>
        <p>Category Name :  <input type="text"  onChange={handleChange} value={formData.categoryname} name='categoryname' placeholder='enter the category name' /></p>
        <p>category Description :<input type="text" onChange={handleChange} value={formData.categorydescription} name='categorydescription' placeholder='enter the description' /></p>
        <input type="button" placeholder='click me' onClick={handlesubmit}  />
    </div>
  )
}

export default Addcategory
