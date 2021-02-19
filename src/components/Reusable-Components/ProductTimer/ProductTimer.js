// Modules
import React from "react";

const ProductTimer = () => {
  return (
    <div className="d-flex flex-column text-center mb-3">
      <div>
        <h3 className="h3 mb-3">50% OFF Sale Ends In</h3>
      </div>
      <div className="d-flex justify-content-evenly fs-4 fw-light">
        <div>03</div>
        <div>:</div>
        <div>03</div>
        <div>:</div>
        <div>03</div>
        <div>:</div>
        <div>03</div>
      </div>
      <div className="d-flex justify-content-evenly text-secondary text-uppercase">
        <div>Days</div>
        <div></div>
        <div>Hrs</div>
        <div></div>
        <div>Mins</div>
        <div></div>
        <div>Secs</div>
      </div>
    </div>
  );
};

export default ProductTimer;
