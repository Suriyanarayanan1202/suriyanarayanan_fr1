// // import { useState } from "react";
// // import ImageUploader from "./ImageUploader";

// // function Product(){
// //     const[data, setData] = useState({
// //         valName: "",
// //         valPrice: "",
// //         valDescription: ""
// //     });
// //     const dataGiven =  (e) => {
// //         const {name, value} = e.target
// //         setData({...data, [name]:value})
// //     }
// //     const submitProduct = () => {
// //         const product = {
// //             name: data.valName,
// //             price: data.valPrice,
// //             description: data.valDescription
// //         }
// //         fetch("http://localhost:8080/product/add", {
// //             headers:{
// //                 "Content-Type": "application/json"
// //             },
// //             method: "post",
// //             body: JSON.stringify(product)
// //         }).then(response => {
// //             console.log("Data Received " + response)
// //         })

// //     }
// //     return (
// //         <div>
// //            <h1>Add a Product</h1>
// //            Name: <input type="text" name="valName" value={data.valName} onChange={dataGiven} /> <br></br>
// //            Description : <input type="text" name="valDescription" value={data.valDescription} onChange={dataGiven} /> <br></br>
// //            Price : <input type="text" name="valPrice" value={data.valPrice} onChange={dataGiven} /> <br></br>
// //            catagory:<input type="catagory"/>
// //            <ImageUploader />
           
// //            <input type="button" value="Add Product" onClick={submitProduct} />
// //         </div>
// //     );
// // }

// // export default Product;
// import React, { useState } from "react";
// import ImageUploader from "./ImageUploader";

// function Product() {
//     const [data, setData] = useState({
//         valName: "",
//         valPrice: "",
//         valDescription: "",
//         valCategory: "" // Adding category field
//     });

//     const dataGiven = (e) => {
//         const { name, value } = e.target;
//         setData({ ...data, [name]: value });
//     };

//     const submitProduct = () => {
//         const product = {
//             name: data.valName,
//             price: data.valPrice,
//             description: data.valDescription,
//             category: data.valCategory // Adding category to product object
//         };

//         fetch("http://localhost:8080/product/addproduct", {
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             method: "post",
//             body: JSON.stringify(product)
//         })
//         .then(response => {
//             console.log("Data Received ", response); // corrected the logging
//         })
//         .catch(error => {
//             console.error("Error adding product:", error);
//         });
//     };

//     return (
//         <div>
//            <h1>Add a Product</h1>
//            Name: <input type="text" name="valName" value={data.valName} onChange={dataGiven} /> <br />
//            Description : <input type="text" name="valDescription" value={data.valDescription} onChange={dataGiven} /> <br />
//            Price : <input type="text" name="valPrice" value={data.valPrice} onChange={dataGiven} /> <br />
//            {/* Category: <input type="text" name="valCategory" value={data.valCategory} onChange={dataGiven} /> <br /> */}
//            <select id="category" value={selectedCategory} onChange={handleSelectChange}>
//             <option value="">Select category...</option>
//             {categories.map(category => (
//               <option key={category.id} value= {category.categoryname}>
//                 {category.categoryname}
//               </option>
//             ))}
//           </select>
//            <ImageUploader />
           
//            <input type="button" value="Add Product" onClick={submitProduct} />
//         </div>
//     );
// }

// export default Product;