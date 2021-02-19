// Modules
import React from "react";

const ProductSizeDropdown = () => {
  return (
    <select class="form-select border-1 border-dark pt-2 pb-2 mb-3 rounded-0">
      <option selected>Select Size</option>
      <option value="s">S</option>
      <option value="m">M</option>
      <option value="l">L</option>
    </select>
  );
};

export default ProductSizeDropdown;
