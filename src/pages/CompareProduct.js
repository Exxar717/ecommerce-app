import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Meta } from "../components/Meta";
import Color from "../components/Color";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"CompareProduct"} />
      <BreadCrumb title="CompareProduct" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Some Tablet that will break in 6 months
                </h5>
                <h6 className="price mb-3 mt-3">$100.00</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Haval</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Tabletka</p>
                  </div>
                  <div className="product-detail">
                    <h5>SKU:</h5>
                    <p>NFC</p>
                  </div>
                  <div className="product-detail">
                    <h5>Abailability:</h5>
                    <p>maybe</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <p>S M L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Some Tablet that will break in 6 months
                </h5>
                <h6 className="price mb-3 mt-3">$100.00</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Haval</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Tabletka</p>
                  </div>
                  <div className="product-detail">
                    <h5>SKU:</h5>
                    <p>NFC</p>
                  </div>
                  <div className="product-detail">
                    <h5>Abailability:</h5>
                    <p>maybe</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <p>S M L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
