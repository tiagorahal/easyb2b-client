import React from "react";
import productsBanner from "../../assets/banner.png";
import logoBig from "../../assets/logo2.png";
import GridOnIcon from "@mui/icons-material/GridOn";
import ViewListIcon from "@mui/icons-material/ViewList";
import ProductRows from "./productRows";
import ProductPagination from "./productPagination";

const ProductsList = () => (
  <div className="bg-[#edf0f5]">
    <div className="w-[80%] m-auto flex flex-col justify-center py-6">
      <div className="flex m-auto justify-center items center h-24 xl:h-44">
        <img
          className="object-contain h-full bg-white px-5"
          src={logoBig}
          alt="Big logo"
        />
        <img
          className="object-contain h-full px-4"
          src={productsBanner}
          alt="Product banner"
        />
      </div>
      <div className="flex justify-end items-end pt-5">
        <div class="flex justify-center space-x-2">
          <select
            data-te-select-init
            className="rounded-full border-none text-gray-400 text-[0.6rem] lg:text-[0.8rem] flex justify-center ring-0"
          >
            <option value="16">16</option>
            <option value="24">24</option>
            <option value="36">36</option>
          </select>
          <select
            data-te-select-init
            className="rounded-full border border-none text-gray-400 text-[0.6rem] lg:text-[0.8rem] flex justify-center ring-0"
          >
            <option value="16">Mais Vendidos</option>
            <option value="24">Menor Preço</option>
            <option value="36">Mais Recentes</option>
          </select>
          <button
            type="button"
            className="flex justify-center items-center rounded-full px-4 text-[0.6rem] lg:text-[0.8rem] flex justify-center ring-0 bg-white text-gray-400"
          >
            <GridOnIcon fontSize="small" />
            <ViewListIcon fontSize="small" />
          </button>
        </div>
      </div>
      <ProductRows />
      <ProductRows />
      <ProductRows />
      <ProductRows />
    </div>
    <ProductPagination />
  </div>
);

export default ProductsList;
