import React from "react";
import "./productsList.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const ProductsList = () => (
  <div>
    <div className="products-list-bg">
      <div className="d-flex justify-content-center">
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-3 col-md-5 bg-white">
              <img src="assets/logo2.png" className="logo-products-list" />
            </div>
            <div className="col-lg-9 col-md-7">
              <img src="assets/banner.png" className="banner-products-list" />
            </div>
          </div>
          <div className="row justify-content-end my-4">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="w-100 h-100 d-flex align-items-center justify-content-end">
                <Dropdown className="product-dropdowns">
                  <Dropdown.Toggle
                    className="select-grid"
                    align="center"
                    id="dropdown-basic"
                  >
                    <span>16</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="product-grid-dropdown">
                    <p>24</p>
                    <p className="mb-1">36</p>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="product-dropdowns">
                  <Dropdown.Toggle
                    className="select-grid select2"
                    align="center"
                    id="dropdown-basic"
                  >
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
          {/* FIRST PRODUCTS ROW */}
          <div className="row">
            <div className="product-item col-md-4 col-lg-3 col-sm-6">
              <div className="bg-white w-100 h-100">
                <div className="row">
                  <div className="col-12 p-3 d-flex justify-content-center">
                    <img src="assets/produto_0.png" className="product-img" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 product-line"></div>
                </div>
                <div className="row label-row min-label-height">
                  <div className="col-12 d-flex justify-content-center product-tag">
                    <p className="m-0 p-0">PROMOÇÃO</p>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-center p-0">
                    <Link to="" className="product-description-link">
                      <span>PAPEL CHAMEX A4 LASER 75G PACOTE 500 FOLHAS</span>
                    </Link>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-start p-0">
                    <div className="col">
                      <p className="p-0 m-0 old-price">R$22,75</p>
                      <p className="p-0 m-0 un">Unidade</p>
                    </div>
                    <div className="col">
                      <p className="product-price">R$14,75</p>
                    </div>
                  </div>
                </div>
                <div className="product-list-footer p-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <p className="product-amount m-0 p-0">
                        <div
                          className="col-3 d-flex justify-content-between align-items-center px-5"
                          style={{ fontSize: "1rem" }}
                        >
                          <div className="px-2">-</div>
                          <div
                            className="border border-secondary text-center px-2 bg-white"
                            style={{ fontSize: "0.9rem" }}
                          >
                            1
                          </div>
                          <div className="px-2">+</div>
                        </div>
                      </p>
                    </div>
                    <div className="col-7 p-0">
                      <button className="btn-add-cart">
                        INCLUIR NO CARRINHO
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end product-footer-icons">
                      <Link>
                        <img src="assets/icons/eye-solid.svg" />
                      </Link>
                      <button className="favorite">
                        <img src="assets/icons/heart-regular.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item col-md-4 col-lg-3 col-sm-6">
              <div className="bg-white w-100 h-100">
                <div className="row">
                  <div className="col-12 p-3 d-flex justify-content-center">
                    <img src="assets/produto1.jpg" className="product-img" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 product-line"></div>
                </div>
                <div className="row label-row min-label-height"></div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-center p-0">
                    <Link to="" className="product-description-link">
                      <span>PAPEL CHAMEX A4 LASER 75G PACOTE 500 FOLHAS</span>
                    </Link>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-start p-0">
                    <div className="col">
                      <p className="p-0 m-0 old-price">R$22,75</p>
                      <p className="p-0 m-0 un">Unidade</p>
                    </div>
                    <div className="col">
                      <p className="product-price">R$14,75</p>
                    </div>
                  </div>
                </div>
                <div className="product-list-footer p-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <p className="product-amount m-0 p-0">
                        <div
                          className="col-3 d-flex justify-content-between align-items-center px-5"
                          style={{ fontSize: "1rem" }}
                        >
                          <div className="px-2">-</div>
                          <div
                            className="border border-secondary text-center px-2 bg-white"
                            style={{ fontSize: "0.9rem" }}
                          >
                            1
                          </div>
                          <div className="px-2">+</div>
                        </div>
                      </p>
                    </div>
                    <div className="col-7 p-0">
                      <button className="btn-add-cart">
                        INCLUIR NO CARRINHO
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end product-footer-icons">
                      <Link>
                        <img src="assets/icons/eye-solid.svg" />
                      </Link>
                      <button className="favorite">
                        <img src="assets/icons/heart-regular.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item col-md-4 col-lg-3 col-sm-6">
              <div className="bg-white w-100 h-100">
                <div className="row">
                  <div className="col-12 p-3 d-flex justify-content-center">
                    <img src="assets/produto2.jpg" className="product-img" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 product-line"></div>
                </div>
                <div className="row label-row min-label-height">
                  <div className="col-12 d-flex justify-content-center product-tag">
                    <p className="m-0 p-0">PROMOÇÃO</p>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-center p-0">
                    <Link
                      to="/Description"
                      className="product-description-link"
                    >
                      <span>PAPEL CHAMEX A4 LASER 75G PACOTE 500 FOLHAS</span>
                    </Link>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-start p-0">
                    <div className="col">
                      <p className="p-0 m-0 old-price">R$22,75</p>
                      <p className="p-0 m-0 un">Unidade</p>
                    </div>
                    <div className="col">
                      <p className="product-price">R$14,75</p>
                    </div>
                  </div>
                </div>
                <div className="product-list-footer p-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <p className="product-amount m-0 p-0">
                        <div
                          className="col-3 d-flex justify-content-between align-items-center px-5"
                          style={{ fontSize: "1rem" }}
                        >
                          <div className="px-2">-</div>
                          <div
                            className="border border-secondary text-center px-2 bg-white"
                            style={{ fontSize: "0.9rem" }}
                          >
                            1
                          </div>
                          <div className="px-2">+</div>
                        </div>
                      </p>
                    </div>
                    <div className="col-7 p-0">
                      <button className="btn-add-cart">
                        INCLUIR NO CARRINHO
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end product-footer-icons">
                      <Link>
                        <img src="assets/icons/eye-solid.svg" />
                      </Link>
                      <button className="favorite">
                        <img src="assets/icons/heart-regular.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item col-md-4 col-lg-3 col-sm-6">
              <div className="bg-white w-100 h-100">
                <div className="row">
                  <div className="col-12 p-3 d-flex justify-content-center">
                    <img src="assets/produto3.png" className="product-img" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 product-line"></div>
                </div>
                <div className="row label-row min-label-height"></div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-center p-0">
                    <Link to="" className="product-description-link">
                      <span>PAPEL CHAMEX A4 LASER 75G PACOTE 500 FOLHAS</span>
                    </Link>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-start p-0">
                    <div className="col">
                      <p className="p-0 m-0 old-price">R$22,75</p>
                      <p className="p-0 m-0 un">Unidade</p>
                    </div>
                    <div className="col">
                      <p className="product-price">R$14,75</p>
                    </div>
                  </div>
                </div>
                <div className="product-list-footer p-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <p className="product-amount m-0 p-0">
                        <div
                          className="col-3 d-flex justify-content-between align-items-center px-5"
                          style={{ fontSize: "1rem" }}
                        >
                          <div className="px-2">-</div>
                          <div
                            className="border border-secondary text-center px-2 bg-white"
                            style={{ fontSize: "0.9rem" }}
                          >
                            1
                          </div>
                          <div className="px-2">+</div>
                        </div>
                      </p>
                    </div>
                    <div className="col-7 p-0">
                      <button className="btn-add-cart">
                        INCLUIR NO CARRINHO
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end product-footer-icons">
                      <Link>
                        <img src="assets/icons/eye-solid.svg" />
                      </Link>
                      <button className="favorite">
                        <img src="assets/icons/heart-regular.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SECOND PRODUCTS ROW */}
          <div className="row">
            <div className="product-item col-md-4 col-lg-3 col-sm-6">
              <div className="bg-white w-100 h-100">
                <div className="row">
                  <div className="col-12 p-3 d-flex justify-content-center">
                    <img src="assets/produto_0.png" className="product-img" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 product-line"></div>
                </div>
                <div className="row label-row min-label-height">
                  <div className="col-12 d-flex justify-content-center product-tag">
                    <p className="m-0 p-0">PROMOÇÃO</p>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-center p-0">
                    <Link to="" className="product-description-link">
                      <span>PAPEL CHAMEX A4 LASER 75G PACOTE 500 FOLHAS</span>
                    </Link>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-start p-0">
                    <div className="col">
                      <p className="p-0 m-0 old-price">R$22,75</p>
                      <p className="p-0 m-0 un">Unidade</p>
                    </div>
                    <div className="col">
                      <p className="product-price">R$14,75</p>
                    </div>
                  </div>
                </div>
                <div className="product-list-footer p-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <p className="product-amount m-0 p-0">
                        <div
                          className="col-3 d-flex justify-content-between align-items-center px-5"
                          style={{ fontSize: "1rem" }}
                        >
                          <div className="px-2">-</div>
                          <div
                            className="border border-secondary text-center px-2 bg-white"
                            style={{ fontSize: "0.9rem" }}
                          >
                            1
                          </div>
                          <div className="px-2">+</div>
                        </div>
                      </p>
                    </div>
                    <div className="col-7 p-0">
                      <button className="btn-add-cart">
                        INCLUIR NO CARRINHO
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end product-footer-icons">
                      <Link>
                        <img src="assets/icons/eye-solid.svg" />
                      </Link>
                      <button className="favorite">
                        <img src="assets/icons/heart-regular.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item col-md-4 col-lg-3 col-sm-6">
              <div className="bg-white w-100 h-100">
                <div className="row">
                  <div className="col-12 p-3 d-flex justify-content-center">
                    <img src="assets/produto1.jpg" className="product-img" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 product-line"></div>
                </div>
                <div className="row label-row min-label-height"></div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-center p-0">
                    <Link to="" className="product-description-link">
                      <span>PAPEL CHAMEX A4 LASER 75G PACOTE 500 FOLHAS</span>
                    </Link>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-start p-0">
                    <div className="col">
                      <p className="p-0 m-0 old-price">R$22,75</p>
                      <p className="p-0 m-0 un">Unidade</p>
                    </div>
                    <div className="col">
                      <p className="product-price">R$14,75</p>
                    </div>
                  </div>
                </div>
                <div className="product-list-footer p-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <p className="product-amount m-0 p-0">
                        <div
                          className="col-3 d-flex justify-content-between align-items-center px-5"
                          style={{ fontSize: "1rem" }}
                        >
                          <div className="px-2">-</div>
                          <div
                            className="border border-secondary text-center px-2 bg-white"
                            style={{ fontSize: "0.9rem" }}
                          >
                            1
                          </div>
                          <div className="px-2">+</div>
                        </div>
                      </p>
                    </div>
                    <div className="col-7 p-0">
                      <button className="btn-add-cart">
                        INCLUIR NO CARRINHO
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end product-footer-icons">
                      <Link>
                        <img src="assets/icons/eye-solid.svg" />
                      </Link>
                      <button className="favorite">
                        <img src="assets/icons/heart-regular.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item col-md-4 col-lg-3 col-sm-6">
              <div className="bg-white w-100 h-100">
                <div className="row">
                  <div className="col-12 p-3 d-flex justify-content-center">
                    <img src="assets/produto2.jpg" className="product-img" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 product-line"></div>
                </div>
                <div className="row label-row min-label-height">
                  <div className="col-12 d-flex justify-content-center product-tag">
                    <p className="m-0 p-0">PROMOÇÃO</p>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-center p-0">
                    <Link
                      to="/Description"
                      className="product-description-link"
                    >
                      <span>PAPEL CHAMEX A4 LASER 75G PACOTE 500 FOLHAS</span>
                    </Link>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-start p-0">
                    <div className="col">
                      <p className="p-0 m-0 old-price">R$22,75</p>
                      <p className="p-0 m-0 un">Unidade</p>
                    </div>
                    <div className="col">
                      <p className="product-price">R$14,75</p>
                    </div>
                  </div>
                </div>
                <div className="product-list-footer p-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <p className="product-amount m-0 p-0">
                        <div
                          className="col-3 d-flex justify-content-between align-items-center px-5"
                          style={{ fontSize: "1rem" }}
                        >
                          <div className="px-2">-</div>
                          <div
                            className="border border-secondary text-center px-2 bg-white"
                            style={{ fontSize: "0.9rem" }}
                          >
                            1
                          </div>
                          <div className="px-2">+</div>
                        </div>
                      </p>
                    </div>
                    <div className="col-7 p-0">
                      <button className="btn-add-cart">
                        INCLUIR NO CARRINHO
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end product-footer-icons">
                      <Link>
                        <img src="assets/icons/eye-solid.svg" />
                      </Link>
                      <button className="favorite">
                        <img src="assets/icons/heart-regular.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item col-md-4 col-lg-3 col-sm-6">
              <div className="bg-white w-100 h-100">
                <div className="row">
                  <div className="col-12 p-3 d-flex justify-content-center">
                    <img src="assets/produto3.png" className="product-img" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 product-line"></div>
                </div>
                <div className="row label-row min-label-height"></div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-center p-0">
                    <Link to="" className="product-description-link">
                      <span>PAPEL CHAMEX A4 LASER 75G PACOTE 500 FOLHAS</span>
                    </Link>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-start p-0">
                    <div className="col">
                      <p className="p-0 m-0 old-price">R$22,75</p>
                      <p className="p-0 m-0 un">Unidade</p>
                    </div>
                    <div className="col">
                      <p className="product-price">R$14,75</p>
                    </div>
                  </div>
                </div>
                <div className="product-list-footer p-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <p className="product-amount m-0 p-0">
                        <div
                          className="col-3 d-flex justify-content-between align-items-center px-5"
                          style={{ fontSize: "1rem" }}
                        >
                          <div className="px-2">-</div>
                          <div
                            className="border border-secondary text-center px-2 bg-white"
                            style={{ fontSize: "0.9rem" }}
                          >
                            1
                          </div>
                          <div className="px-2">+</div>
                        </div>
                      </p>
                    </div>
                    <div className="col-7 p-0">
                      <button className="btn-add-cart">
                        INCLUIR NO CARRINHO
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end product-footer-icons">
                      <Link>
                        <img src="assets/icons/eye-solid.svg" />
                      </Link>
                      <button className="favorite">
                        <img src="assets/icons/heart-regular.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* THIRD PRODUCTS ROW */}
          <div className="row">
            <div className="product-item col-md-4 col-lg-3 col-sm-6">
              <div className="bg-white w-100 h-100">
                <div className="row">
                  <div className="col-12 p-3 d-flex justify-content-center">
                    <img src="assets/produto_0.png" className="product-img" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 product-line"></div>
                </div>
                <div className="row label-row min-label-height">
                  <div className="col-12 d-flex justify-content-center product-tag">
                    <p className="m-0 p-0">PROMOÇÃO</p>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-center p-0">
                    <Link to="" className="product-description-link">
                      <span>PAPEL CHAMEX A4 LASER 75G PACOTE 500 FOLHAS</span>
                    </Link>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-start p-0">
                    <div className="col">
                      <p className="p-0 m-0 old-price">R$22,75</p>
                      <p className="p-0 m-0 un">Unidade</p>
                    </div>
                    <div className="col">
                      <p className="product-price">R$14,75</p>
                    </div>
                  </div>
                </div>
                <div className="product-list-footer p-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <p className="product-amount m-0 p-0">
                        <div
                          className="col-3 d-flex justify-content-between align-items-center px-5"
                          style={{ fontSize: "1rem" }}
                        >
                          <div className="px-2">-</div>
                          <div
                            className="border border-secondary text-center px-2 bg-white"
                            style={{ fontSize: "0.9rem" }}
                          >
                            1
                          </div>
                          <div className="px-2">+</div>
                        </div>
                      </p>
                    </div>
                    <div className="col-7 p-0">
                      <button className="btn-add-cart">
                        INCLUIR NO CARRINHO
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end product-footer-icons">
                      <Link>
                        <img src="assets/icons/eye-solid.svg" />
                      </Link>
                      <button className="favorite">
                        <img src="assets/icons/heart-regular.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item col-md-4 col-lg-3 col-sm-6">
              <div className="bg-white w-100 h-100">
                <div className="row">
                  <div className="col-12 p-3 d-flex justify-content-center">
                    <img src="assets/produto1.jpg" className="product-img" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 product-line"></div>
                </div>
                <div className="row label-row min-label-height"></div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-center p-0">
                    <Link to="" className="product-description-link">
                      <span>PAPEL CHAMEX A4 LASER 75G PACOTE 500 FOLHAS</span>
                    </Link>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-start p-0">
                    <div className="col">
                      <p className="p-0 m-0 old-price">R$22,75</p>
                      <p className="p-0 m-0 un">Unidade</p>
                    </div>
                    <div className="col">
                      <p className="product-price">R$14,75</p>
                    </div>
                  </div>
                </div>
                <div className="product-list-footer p-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <p className="product-amount m-0 p-0">
                        <div
                          className="col-3 d-flex justify-content-between align-items-center px-5"
                          style={{ fontSize: "1rem" }}
                        >
                          <div className="px-2">-</div>
                          <div
                            className="border border-secondary text-center px-2 bg-white"
                            style={{ fontSize: "0.9rem" }}
                          >
                            1
                          </div>
                          <div className="px-2">+</div>
                        </div>
                      </p>
                    </div>
                    <div className="col-7 p-0">
                      <button className="btn-add-cart">
                        INCLUIR NO CARRINHO
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end product-footer-icons">
                      <Link>
                        <img src="assets/icons/eye-solid.svg" />
                      </Link>
                      <button className="favorite">
                        <img src="assets/icons/heart-regular.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item col-md-4 col-lg-3 col-sm-6">
              <div className="bg-white w-100 h-100">
                <div className="row">
                  <div className="col-12 p-3 d-flex justify-content-center">
                    <img src="assets/produto2.jpg" className="product-img" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 product-line"></div>
                </div>
                <div className="row label-row min-label-height">
                  <div className="col-12 d-flex justify-content-center product-tag">
                    <p className="m-0 p-0">PROMOÇÃO</p>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-center p-0">
                    <Link
                      to="/Description"
                      className="product-description-link"
                    >
                      <span>PAPEL CHAMEX A4 LASER 75G PACOTE 500 FOLHAS</span>
                    </Link>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-start p-0">
                    <div className="col">
                      <p className="p-0 m-0 old-price">R$22,75</p>
                      <p className="p-0 m-0 un">Unidade</p>
                    </div>
                    <div className="col">
                      <p className="product-price">R$14,75</p>
                    </div>
                  </div>
                </div>
                <div className="product-list-footer p-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <p className="product-amount m-0 p-0">
                        <div
                          className="col-3 d-flex justify-content-between align-items-center px-5"
                          style={{ fontSize: "1rem" }}
                        >
                          <div className="px-2">-</div>
                          <div
                            className="border border-secondary text-center px-2 bg-white"
                            style={{ fontSize: "0.9rem" }}
                          >
                            1
                          </div>
                          <div className="px-2">+</div>
                        </div>
                      </p>
                    </div>
                    <div className="col-7 p-0">
                      <button className="btn-add-cart">
                        INCLUIR NO CARRINHO
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end product-footer-icons">
                      <Link>
                        <img src="assets/icons/eye-solid.svg" />
                      </Link>
                      <button className="favorite">
                        <img src="assets/icons/heart-regular.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item col-md-4 col-lg-3 col-sm-6">
              <div className="bg-white w-100 h-100">
                <div className="row">
                  <div className="col-12 p-3 d-flex justify-content-center">
                    <img src="assets/produto3.png" className="product-img" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 product-line"></div>
                </div>
                <div className="row label-row min-label-height"></div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-center p-0">
                    <Link to="" className="product-description-link">
                      <span>PAPEL CHAMEX A4 LASER 75G PACOTE 500 FOLHAS</span>
                    </Link>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-start p-0">
                    <div className="col">
                      <p className="p-0 m-0 old-price">R$22,75</p>
                      <p className="p-0 m-0 un">Unidade</p>
                    </div>
                    <div className="col">
                      <p className="product-price">R$14,75</p>
                    </div>
                  </div>
                </div>
                <div className="product-list-footer p-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <p className="product-amount m-0 p-0">
                        <div
                          className="col-3 d-flex justify-content-between align-items-center px-5"
                          style={{ fontSize: "1rem" }}
                        >
                          <div className="px-2">-</div>
                          <div
                            className="border border-secondary text-center px-2 bg-white"
                            style={{ fontSize: "0.9rem" }}
                          >
                            1
                          </div>
                          <div className="px-2">+</div>
                        </div>
                      </p>
                    </div>
                    <div className="col-7 p-0">
                      <button className="btn-add-cart">
                        INCLUIR NO CARRINHO
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end product-footer-icons">
                      <Link>
                        <img src="assets/icons/eye-solid.svg" />
                      </Link>
                      <button className="favorite">
                        <img src="assets/icons/heart-regular.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FORTH PRODUCTS ROW */}
          <div className="row">
            <div className="product-item col-md-4 col-lg-3 col-sm-6">
              <div className="bg-white w-100 h-100">
                <div className="row">
                  <div className="col-12 p-3 d-flex justify-content-center">
                    <img src="assets/produto_0.png" className="product-img" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 product-line"></div>
                </div>
                <div className="row label-row min-label-height">
                  <div className="col-12 d-flex justify-content-center product-tag">
                    <p className="m-0 p-0">PROMOÇÃO</p>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-center p-0">
                    <Link to="" className="product-description-link">
                      <span>PAPEL CHAMEX A4 LASER 75G PACOTE 500 FOLHAS</span>
                    </Link>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-start p-0">
                    <div className="col">
                      <p className="p-0 m-0 old-price">R$22,75</p>
                      <p className="p-0 m-0 un">Unidade</p>
                    </div>
                    <div className="col">
                      <p className="product-price">R$14,75</p>
                    </div>
                  </div>
                </div>
                <div className="product-list-footer p-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <p className="product-amount m-0 p-0">
                        <div
                          className="col-3 d-flex justify-content-between align-items-center px-5"
                          style={{ fontSize: "1rem" }}
                        >
                          <div className="px-2">-</div>
                          <div
                            className="border border-secondary text-center px-2 bg-white"
                            style={{ fontSize: "0.9rem" }}
                          >
                            1
                          </div>
                          <div className="px-2">+</div>
                        </div>
                      </p>
                    </div>
                    <div className="col-7 p-0">
                      <button className="btn-add-cart">
                        INCLUIR NO CARRINHO
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end product-footer-icons">
                      <Link>
                        <img src="assets/icons/eye-solid.svg" />
                      </Link>
                      <button className="favorite">
                        <img src="assets/icons/heart-regular.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item col-md-4 col-lg-3 col-sm-6">
              <div className="bg-white w-100 h-100">
                <div className="row">
                  <div className="col-12 p-3 d-flex justify-content-center">
                    <img src="assets/produto1.jpg" className="product-img" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 product-line"></div>
                </div>
                <div className="row label-row min-label-height"></div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-center p-0">
                    <Link to="" className="product-description-link">
                      <span>PAPEL CHAMEX A4 LASER 75G PACOTE 500 FOLHAS</span>
                    </Link>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-start p-0">
                    <div className="col">
                      <p className="p-0 m-0 old-price">R$22,75</p>
                      <p className="p-0 m-0 un">Unidade</p>
                    </div>
                    <div className="col">
                      <p className="product-price">R$14,75</p>
                    </div>
                  </div>
                </div>
                <div className="product-list-footer p-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <p className="product-amount m-0 p-0">
                        <div
                          className="col-3 d-flex justify-content-between align-items-center px-5"
                          style={{ fontSize: "1rem" }}
                        >
                          <div className="px-2">-</div>
                          <div
                            className="border border-secondary text-center px-2 bg-white"
                            style={{ fontSize: "0.9rem" }}
                          >
                            1
                          </div>
                          <div className="px-2">+</div>
                        </div>
                      </p>
                    </div>
                    <div className="col-7 p-0">
                      <button className="btn-add-cart">
                        INCLUIR NO CARRINHO
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end product-footer-icons">
                      <Link>
                        <img src="assets/icons/eye-solid.svg" />
                      </Link>
                      <button className="favorite">
                        <img src="assets/icons/heart-regular.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item col-md-4 col-lg-3 col-sm-6">
              <div className="bg-white w-100 h-100">
                <div className="row">
                  <div className="col-12 p-3 d-flex justify-content-center">
                    <img src="assets/produto2.jpg" className="product-img" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 product-line"></div>
                </div>
                <div className="row label-row min-label-height">
                  <div className="col-12 d-flex justify-content-center product-tag">
                    <p className="m-0 p-0">PROMOÇÃO</p>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-center p-0">
                    <Link
                      to="/Description"
                      className="product-description-link"
                    >
                      <span>PAPEL CHAMEX A4 LASER 75G PACOTE 500 FOLHAS</span>
                    </Link>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-start p-0">
                    <div className="col">
                      <p className="p-0 m-0 old-price">R$22,75</p>
                      <p className="p-0 m-0 un">Unidade</p>
                    </div>
                    <div className="col">
                      <p className="product-price">R$14,75</p>
                    </div>
                  </div>
                </div>
                <div className="product-list-footer p-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <p className="product-amount m-0 p-0">
                        <div
                          className="col-3 d-flex justify-content-between align-items-center px-5"
                          style={{ fontSize: "1rem" }}
                        >
                          <div className="px-2">-</div>
                          <div
                            className="border border-secondary text-center px-2 bg-white"
                            style={{ fontSize: "0.9rem" }}
                          >
                            1
                          </div>
                          <div className="px-2">+</div>
                        </div>
                      </p>
                    </div>
                    <div className="col-7 p-0">
                      <button className="btn-add-cart">
                        INCLUIR NO CARRINHO
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end product-footer-icons">
                      <Link>
                        <img src="assets/icons/eye-solid.svg" />
                      </Link>
                      <button className="favorite">
                        <img src="assets/icons/heart-regular.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-item col-md-4 col-lg-3 col-sm-6">
              <div className="bg-white w-100 h-100">
                <div className="row">
                  <div className="col-12 p-3 d-flex justify-content-center">
                    <img src="assets/produto3.png" className="product-img" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 product-line"></div>
                </div>
                <div className="row label-row min-label-height"></div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-center p-0">
                    <Link to="" className="product-description-link">
                      <span>PAPEL CHAMEX A4 LASER 75G PACOTE 500 FOLHAS</span>
                    </Link>
                  </div>
                </div>
                <div className="row label-row">
                  <div className="col-12 d-flex justify-content-start p-0">
                    <div className="col">
                      <p className="p-0 m-0 old-price">R$22,75</p>
                      <p className="p-0 m-0 un">Unidade</p>
                    </div>
                    <div className="col">
                      <p className="product-price">R$14,75</p>
                    </div>
                  </div>
                </div>
                <div className="product-list-footer p-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <p className="product-amount m-0 p-0">
                        <div
                          className="col-3 d-flex justify-content-between align-items-center px-5"
                          style={{ fontSize: "1rem" }}
                        >
                          <div className="px-2">-</div>
                          <div
                            className="border border-secondary text-center px-2 bg-white"
                            style={{ fontSize: "0.9rem" }}
                          >
                            1
                          </div>
                          <div className="px-2">+</div>
                        </div>
                      </p>
                    </div>
                    <div className="col-7 p-0">
                      <button className="btn-add-cart">
                        INCLUIR NO CARRINHO
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end product-footer-icons">
                      <Link>
                        <img src="assets/icons/eye-solid.svg" />
                      </Link>
                      <button className="favorite">
                        <img src="assets/icons/heart-regular.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* PAGINATION */}
          <div className="row">
            <div className="col-12 d-flex justify-content-center mt-5">
              <button className="pagination">
                <img src="assets/icons/angles-left-solid.svg" />
              </button>
              <button className="pagination">
                <img src="assets/icons/chevron-left-solid.svg" />
              </button>
              <button className="pagination active">1</button>
              <button className="pagination">2</button>
              <button className="pagination">3</button>
              <button className="pagination">4</button>
              <button className="pagination">
                <img src="assets/icons/angles-right-solid.svg" />
              </button>
              <button className="pagination">
                <img src="assets/icons/chevron-right-solid.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductsList;
