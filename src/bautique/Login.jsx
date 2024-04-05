import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const check={
      fullname: formData.fullname,
      password: formData.password
    }
    
    axios.post(`http://localhost:8080/user/logincheck`, check) 
      .then((res)=> {
        console.log("====login====", res);
        if(res.data.fullname === formData.fullname && res.data.password === formData.password){
          alert("WELCOME  "+formData.fullname);
          navigate("/");
        } else {
          alert("Please enter valid login details");
        }
      })
      .catch(error => {
        console.error("Login error: ", error);
      });
  };

  return (
    <div>
      <div className="back">
        <div id="login-container">
          <div className="heading">
            <h2>LOGIN</h2>
          </div>
          <div className="input">
            <input
              className="username"
              type="text"
              placeholder="Full Name"
              name="fullname"
              required
              onChange={handleChange}
              value={formData.fullname}
            />
            <input
              className="password"
              type="password"
              placeholder="PASSWORD"
              name="password"
              required
              onChange={handleChange}
              value={formData.password}
            />
            <button className="submit" onClick={handleSubmit}>LOG IN</button>
            <Link to='/register'><button className="submit">SIGN UP</button></Link>
          </div>
          <div>
            <p className="forgot">
              Forgot password <span className="click">CLICK HERE !</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
