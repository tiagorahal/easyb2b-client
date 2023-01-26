import React from "react";
import "./productsList.css";
import Dropdown from 'react-bootstrap/Dropdown';

const ProductsList = () => (
    <div>
        <div className="products-list-bg">
            <div className="d-flex justify-content-center">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-3 col-md-5 bg-white">
                            <img src="assets/logo2.png" className="logo-products-list"/>
                        </div>
                        <div className="col-lg-9 col-md-7">
                            <img src="assets/banner.png" className="banner-products-list" />
                        </div>
                    </div>
                    <div className="row justify-content-end my-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="w-100 h-100 d-flex align-items-center justify-content-end"> 
                                <Dropdown className="product-dropdowns">
                                    <Dropdown.Toggle className="select-grid" align="center" id="dropdown-basic">
                                        <span>16</span>    
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="product-grid-dropdown">
                                        <p>24</p>
                                        <p className="mb-1">36</p>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="product-dropdowns">
                                    <Dropdown.Toggle className="select-grid select2" align="center" id="dropdown-basic">
                                        <span>MAIS VENDIDOS</span>    
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="product-grid-dropdown2">
                                        <p>MENOR PREÇO</p>
                                        <p className="mb-1">MAIS RECENTES</p>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div className="d-flex align-items-center justify-content-around grid-type">
                                    <img src="assets/icons/table-cells-solid.svg" />
                                    <img src="assets/icons/list-ul-solid.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="product-item col-md-4 col-lg-3 col-sm-6">
                            <div className="bg-white w-100 h-100">

                            </div>
                        </div>
                        <div className="product-item col-md-4 col-lg-3 col-sm-6">
                            <div className="bg-white w-100 h-100">

                            </div>
                        </div>
                        <div className="product-item col-md-4 col-lg-3 col-sm-6">
                            <div className="bg-white w-100 h-100">

                            </div>
                        </div>
                        <div className="product-item col-md-4 col-lg-3 col-sm-6">
                            <div className="bg-white w-100 h-100">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default ProductsList