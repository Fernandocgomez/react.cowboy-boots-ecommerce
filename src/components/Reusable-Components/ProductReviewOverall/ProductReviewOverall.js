// Modules
import React from "react";
import ReactStarts from "react-rating-stars-component";

const ProductReviewOverall = () => {
  const firstExample = {
    size: 30,
    value: 4.2,
    edit: false,
    classNames: "align-self-center",
  };
  return (
    <div className="d-flex flex-column align-items-center pb-4">
      <h2 className="h2 fw-lighter text-center">Customer Reviews</h2>
      <ReactStarts {...firstExample} />
      <p className="text-secondary pt-2">Based on 1 review</p>
    </div>
  );
};

export default ProductReviewOverall;
