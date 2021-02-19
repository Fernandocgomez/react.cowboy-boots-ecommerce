// Modules
import React from "react";

const ProductQuantity = () => {
  return (
    <div>
      <p className="fw-bold mb-0">QTY:</p>
      <div class="input-group inline-group w-35 pb-4">
        <div class="input-group-prepend">
          <button class="btn btn-minus border-1 rounded-0 border-end-0 border-secondary fw-bold text-dark pt-2 pb-2">
          &#8722;
          </button>
        </div>
        <input
          class="form-control quantity border-1 border-secondary pt-2 pb-2 border-start-0 border-end-0"
          value="1"
          type="text"
        />
        <div class="input-group-append">
          <button class="btn btn-plus border-1 rounded-0 border-start-0 border-secondary fw-bold text-dark pt-2 pb-2">
          &#43;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductQuantity;
