import React, { useState } from "react";
import "./Register.css";
import axios from 'axios'

export const Register = () => {

  const [formData,setformData] = useState({
    fullname :"",
    email :"",
    password : ""
  })

  const handlechange = (event) => {
    const{ className,value } = event.target;
    setformData({...formData,[className]:value})
    console.log(formData)
  }

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const check = {
      fullname :formData.fullname,
      email : formData.email,
      password : formData.password
    }
   axios.post("http://localhost:8080/user/register",check)
      .then((res)=>{
        console.log(res)
        setformData(res.data)
        alert("user is registered")
      })
      .catch((err)=>{
        console.log('err',err)
        alert("this is not entered")
      })
      }
     
  return (
    <div id="register-container">
      <div className="header">
        <h1>SIGN IN</h1>
      </div>
      <div className="typing">
        <div className="names">
          <input type="text" className="fullname" value={formData.fullname} placeholder="First Name" onChange={handlechange} /> 
        </div>
        <div className="emailinput">
          <input type="email" placeholder="E-Mail" value={formData.email}  className="email" onChange={handlechange} />
        </div>
        <div className="emailinput">
          <input type="password" placeholder="Password" value={formData.password} className="password" onChange={handlechange} />
        </div>
      </div>
      <div className="checkbox">
        <input type="checkbox" />
        <span>I accept the Terms of Use & Privacy policy</span>
      </div>
      <button className="signup" onClick={handlesubmit}>Sign Up</button>
    </div>
  );
  };
// import React, { useState } from "react";
// import "./Register.css";
// // import axios from 'axios'

// export const Register = () => {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//     console.log(formData);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     const check = { ...formData }; // No need to create a separate object
//     fetch("http://localhost:8080/register/userregister", {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(check),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => {
//         console.error('Fetch error:', error);
//       });
//   };

//   return (
//     <div id="register-container">
//       <div className="header">
//         <h1>SIGN IN</h1>
//       </div>
//       <div className="typing">
//         <div className="names">
//           <input type="text" name="firstname" value={formData.firstname} placeholder="First Name" onChange={handleChange} />
//           <input type="text" name="lastname" value={formData.lastname} placeholder="Last Name" onChange={handleChange} />
//         </div>
//         <div className="emailinput">
//           <input type="email" name="email" placeholder="E-Mail" value={formData.email} onChange={handleChange} />
//         </div>
//         <div className="emailinput">
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
//         </div>
//       </div>
//       <div className="checkbox">
//         <input type="checkbox" />
//         <span>I accept the Terms of Use & Privacy policy</span>
//       </div>
//       <button className="signup" onClick={handleSubmit}>Sign Up</button>
//     </div>
//   );
// };
