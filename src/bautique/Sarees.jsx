import React from "react";

export const Sarees = () => {
  return (
    <div>
      <div className="container-fluid bg-dark" style={{ height: "150px" }}>
        <div style={{ color: "white" }} className="h3 fst-italic">
          SAREES
        </div>
      </div>
      <div className="container-fluid bg-dark">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="..." alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
);
};
