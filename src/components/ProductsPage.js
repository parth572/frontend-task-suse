import React, { useState, useEffect } from "react";
import productsData from "./../products.json";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isDetail, setIdDetail] = useState(false);
  const [, setDetailId] = useState("");
  const [details, setDetails] = useState([]);
  useEffect(() => {
    setProducts(productsData);
  }, []);

  const onDetailClick = (event) => {
    const targetarray = products.filter((item) => item.id == event.target.id);
    if (targetarray.length > 0) {
      setDetails(targetarray);
      setIdDetail(true);
      setDetailId(event.target.id);
      document.getElementById("container-fluid-id").style.display = "none";
    }
  };

  const onBacklClick = (event) => {
    setIdDetail(false);
    setDetailId("");
    document.getElementById("container-fluid-id").style.display = "block";
  };

  if (!isDetail) {
    return (
      <div>
        <h1 className="container-header-style">Available Products</h1>
        <div className="container" onClick={(e) => onDetailClick(e)}>
          {products.map((product) => (
            <div className="container-child" key={product.id}>
              <div className="container-header">{product.name}</div>
              <div className="container-content">{product.description}</div>
              <div className="container-indicator-d-flex">
                <div className="container-indicator" id={product.id}>
                  Show details
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="container-indicator-d-back">
          <div
            className="container-indicator container-indicator-back"
            onClick={(e) => onBacklClick(e)}
          >
            ◀ Back
          </div>
          <div className="container-indicator container-indicator-back detail-name">
            Product and Repository Information
          </div>
        </div>
        {details.map((item, index) => (
          <div className="container-detail-main container-header " key={index}>
            <div className="container-detail container-repo">
              <div className="container-detail-name">Product Name : </div>
              <div>{item.name}</div>
            </div>
            <div className="container-detail container-repo">
              <div className="container-detail-name">Product Description :</div>
              <div>{item.description}</div>
            </div>
            {item.repositories.map((res, index) => (
              <div className="container-repo" key={index}>
                <div className="container-detail">
                  <div className="container-detail-name container-repo-desc">
                    Repository Name : {index + 1}
                  </div>
                  <div>{res.name}</div>
                </div>
                <div className="container-detail">
                  <div className="container-detail-name container-repo-desc">
                    Repository Description : {index + 1}
                  </div>
                  <div>{res.description}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default ProductsPage;
