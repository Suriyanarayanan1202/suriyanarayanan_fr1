import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid ">
        <div className="row me-3">
          <div className="col lg-5 me-2 ">
            <Link to="/">
              {" "}
              <img
                style={{
                  height: "100px",
                  width: "200px",
                  borderRadius: "30px",
                }}
                src="https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149577874.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1710374400&semt=ais"
                alt=""
              />
            </Link>
          </div>
          <div className="col lg-8 mt-3 me-3 ">
            <nav className="navbar">
              <ul className="d-flex gap-5 list-unstyled mt-3">
                <Link to="/product/SAREES" style={{textDecoration:"none"}}>
                  <li className="text-dark h5">SAREES</li>
                </Link>
                <Link to="/product/SALWAR" style={{textDecoration:"none"}}>
                  {" "}
                  <li className="text-dark h5">SALWAR</li>
                </Link>
                <Link to="/product/kurthis" style={{textDecoration:"none"}}>
                  {" "}
                  <li className="text-dark h5">KURTHIS</li>
                </Link>
                <Link to="/product/Lehangas" style={{textDecoration:"none"}}>
                  {" "}
                  <li className="text-dark h5">LEHENGA</li>
                </Link>
                <Link to="/product/ReadyMade" style={{textDecoration:"none"}}  >
                  {" "}
                  <li className="text-dark h5">READYMADE</li>
                </Link>
              </ul>
            </nav>
          </div>
          <div className="col lg-2 mt-3 ">
            <div className="row mx-5 ">
              <div className="col lg-4 text-center h3 mt-3">
                <Link to="/Cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="40"
                    fill="red"
                    class="bi bi-bag-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                  </svg>
                </Link>
              </div>
              <div className="col lg-4 text-center mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="40"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
              <div className="col lg-4 text-center h3 mt-3">
                <Link to="/login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="40"
                    fill="red"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Navbar
