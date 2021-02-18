// Modules
import React from "react";
// Components
import FeatureProductsItem from "../FeatureProductsItem/FeatureProductsItem";

const FeatureProducts = () => {
  const featureProductItem = {
    imgSrc: "https://sandas.org.au/wp-content/uploads/2016/01/placeholder-400x400-300x300.png",
    title: "Product title",
    price: "$209.00"
  }
  return (
    <section className="container text-center text-capitalize pt-4 pb-4">
      <div className="row pb-4">
        <div className="col-md-12">
          <h2 className="display-6">Featured Products</h2>
        </div>
      </div>
      <div className="row">
        <FeatureProductsItem featureProductItem={featureProductItem}/>
        <FeatureProductsItem featureProductItem={featureProductItem}/>
        <FeatureProductsItem featureProductItem={featureProductItem}/>
        <FeatureProductsItem featureProductItem={featureProductItem}/>
        <FeatureProductsItem featureProductItem={featureProductItem}/>
        <FeatureProductsItem featureProductItem={featureProductItem}/>
        <FeatureProductsItem featureProductItem={featureProductItem}/>
        <FeatureProductsItem featureProductItem={featureProductItem}/>
        <FeatureProductsItem featureProductItem={featureProductItem}/>
      </div>
    </section>
  );
};

export default FeatureProducts;
