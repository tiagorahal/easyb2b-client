import React from "react";
import productsBanner from "../../assets/banner.png";
import logoBig from "../../assets/logo2.png";

const ProductsList = () => (
  <div className="bg-[#edf0f5]">
    <div className="w-[80%] m-auto flex justify-center py-6">
      <img
        className="object-contain max-h-[150px] bg-white px-5"
        src={logoBig}
        alt="Big logo"
      />
      <img className="object-contain h-[150px] px-4" src={productsBanner} alt="Product banner" />
    </div>
  </div>
);

export default ProductsList;
