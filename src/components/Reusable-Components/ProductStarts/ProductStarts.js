// Modules
import React from "react";
import ReactStarts from 'react-rating-stars-component';


const ProductStarts = () => {
    const firstExample = {
        size: 20,
        value: 4.2,
        edit: false,
        classNames: "mb-2"
    };
  return (
    <div className="d-flex">
      {/* https://snyk.io/advisor/npm-package/react-rating-stars-component */}
      <ReactStarts {...firstExample} />
      <p className="pt-1 ps-2">{firstExample.value}</p>
      <p className="pt-1 ps-2 text-uppercase">Write a review</p>
    </div>
  );
};

export default ProductStarts;
