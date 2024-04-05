import axios from "axios";
import React, { useState } from "react";
// import axios from 'axios'

export const Lehangas = () => {
  const [data, setdata] = useState();

  const handlechange = (event) => {};

  return (
    <div>
      <div className="container">
        <div className="row">
          {/* {Array.isArray(post) && posts.map((post)=>{
            <div className="card col-lg-3 border-0" style={{height:"540px",widows:"250px"}}>
              <img src={`http://localhost:8080/uploads/${post.image}`} style={{height:"300px",width:"100%"}} className="card-img-top" alt="Lehangas" />
              <div className="card-body">
                <p>Name : <b style={{fontSize:"bold"}}>{post.name}</b></p>
                <p>Descrition : <b>{post.description}</b></p>
                <p>price : <b>{post.price}</b></p>
              </div>
            </div>
          })} */}
        </div>
      </div>
    </div>
  );
};
