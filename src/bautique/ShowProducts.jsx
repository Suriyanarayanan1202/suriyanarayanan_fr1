import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ShowProducts() {
  const { category } = useParams();
  const [categoryList,setCategoryList]=useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = (data) => {
    axios
      .get("http://localhost:8080/product/findbycategory/" + category)
      .then((res) => {
        console.log("res====>", res.data);
        setCategoryList(res.data);
      })
      .catch((err) => {
        console.log("err====>", err);
      });
  };

  return (
    <div>
      <div className="container">
          <div className='row'>
            {Array.isArray(categoryList) && categoryList.map((post) => (
              <div className="card m-2 col-12 col-sm-6 col-md-4 col-lg-3 border-0" style={{height:"535px",width:"269px"}} key={post.id}>
                <img src={`http://localhost:8080/uploads/${post.image}`} style={{ height: "300px", width: "100%" }} className="card-img-top" alt='beerimage' />
                <div className='card-body'>
                  <p>Name: <b style={{ fontSize: "bold" }}>{post.name}</b></p>
                  <p>Description: <b>{post.description}</b></p>
                  <p>Price: <b>{post.price}</b></p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default ShowProducts;
