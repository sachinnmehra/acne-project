import React from "react";
import "./Product.css";

const productSection = () => {
  return (
    <div className="product-section">
      <div className="container">
        <div className="top-wrapper">
          <div className="top-wrapper-left">
            <div className="support-top-details-text">shop products</div>
            <h2 className="support-top-heading">Open 24/7/365.</h2>
          </div>
        </div>
        <div className="product-list-wrapper">
          <div className="product-list-items">
            <div className="product-items">
              <div className="shop-items-wrapper">
                <div className="shop-image-wrapper">
                  <img
                    src="https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg"
                    alt="image-shop"
                  ></img>
                </div>
                <div className="shop-item-name"></div>
                <div className="shop-item-price"></div>
                <div className="shop-item-button"></div>
              </div>
            </div>
            <div className="product-items">
              <div className="shop-items-wrapper">
                <div className="shop-image-wrapper"></div>
                <div className="shop-item-name"></div>
                <div className="shop-item-price"></div>
                <div className="shop-item-button"></div>
              </div>
            </div>
            <div className="product-items">
              <div className="shop-items-wrapper">
                <div className="shop-image-wrapper"></div>
                <div className="shop-item-name"></div>
                <div className="shop-item-price"></div>
                <div className="shop-item-button"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productSection;
