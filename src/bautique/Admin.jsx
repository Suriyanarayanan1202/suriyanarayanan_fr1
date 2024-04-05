import React from "react";
import Product from "./Product";
import AdminDetails from "./AdminDetails";
import { AddProduct } from "./Addproduct";
export const Admin = () => {
  return (
    <div>
      <div className="container text-center bg-info w-50">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Admin Details
            </a>
            <AdminDetails/>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">
              Add Product
            </a>
            <AddProduct/>
            {/* <Product /> */}
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">
              Users List
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disa" aria-disabled="true">
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
