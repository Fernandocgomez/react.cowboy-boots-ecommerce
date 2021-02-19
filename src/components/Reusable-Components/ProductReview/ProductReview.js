// Modules
import React from "react";
import ReactStarts from 'react-rating-stars-component';


const ProductReview = () => {
    const firstExampleReview = {
        size: 20,
        value: 4.2,
        edit: false,
        classNames: "align-self-center"
    };
  return (
    <div className="row pt-4 border-top border-2 pb-4">
      <div className="col-md-3">
        <p className="fw-normal mb-0">Deb B.</p>
        <p className="fw-bold text-success">Verified Buyer</p>
      </div>
      <div className="col-md-9">
        <div className="d-flex justify-content-between">
          <ReactStarts {...firstExampleReview} />
          <p className="text-secondary">2 months ago</p>
        </div>
        <p className="fw-bold">Best Boots Ever</p>
        <p className="text-secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
          earum! Quidem qui expedita dolore id alias recusandae. Similique illum
          eos repudiandae recusandae sint saepe! Inventore quisquam aliquam
          numquam odit consectetur! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Odit porro doloremque dignissimos aliquam incidunt
          magni ut sunt, officiis tempora voluptate assumenda in hic. Modi atque
          beatae quos eos explicabo deserunt.
        </p>
      </div>
    </div>
  );
};

export default ProductReview;
