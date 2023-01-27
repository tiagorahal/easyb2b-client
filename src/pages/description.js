import React from "react";
import "./description.css";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

function Description() {
  return (
    <div className="description-main pt-4 pb-3">
      <div className="description container mb-5">
        <div className="row ">
          <div className="col-6 pb-5">
            <div>
              <figure class="img-download">
                <img src="assets/produto_2_semfundo.png" class="figure-img img-fluid rounded" alt="Product." />
              </figure>
            </div>
            <div className="text-center img-container col-1 p-1 pt-2 m-auto">
              <a href=""><img src="assets/icons/magnifying-glass-solid.svg" className="description-image-icon" alt="Description" /></a>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
      {/* Second half */}
      <div className="pedidos container pt-5">
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
                <img src="assets/icons/table-cells-solid.svg" alt="Description" />
                <img src="assets/icons/list-ul-solid.svg" alt="Description" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="product-item col-md-4 col-lg-3 col-sm-6">
            <div className="bg-white w-100 h-100">
              <div className="row">
                <div className="col-12 p-3 d-flex justify-content-center">
                  <img src="assets/produto_0.png" className="product-img" alt="Description" />
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
                      <img src="assets/icons/minus-solid.svg" alt="Description" />
                      <span className="amount mx-1">1</span>
                      <img src="assets/icons/plus-solid.svg" alt="Description" />
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
                      <img src="assets/icons/eye-solid.svg" alt="Description" />
                    </Link>
                    <button className="favorite">
                      <img src="assets/icons/heart-regular.svg" alt="Description" />
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
                  <img src="assets/produto1.jpg" className="product-img" alt="Description" />
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
                      <img src="assets/icons/minus-solid.svg" alt="Description" />
                      <span className="amount mx-1">1</span>
                      <img src="assets/icons/plus-solid.svg" alt="Description" />
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
                      <img src="assets/icons/eye-solid.svg" alt="Description" />
                    </Link>
                    <button className="favorite">
                      <img src="assets/icons/heart-regular.svg" alt="Description" />
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
                  <img src="assets/produto2.jpg" className="product-img" alt="Description" />
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
                      <img src="assets/icons/minus-solid.svg" alt="Description" />
                      <span className="amount mx-1">1</span>
                      <img src="assets/icons/plus-solid.svg" alt="Description" />
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
                      <img src="assets/icons/eye-solid.svg" alt="Description" />
                    </Link>
                    <button className="favorite">
                      <img src="assets/icons/heart-regular.svg" alt="Description" />
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
                  <img src="assets/produto3.png" className="product-img" alt="Description" />
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
                      <img src="assets/icons/minus-solid.svg" alt="Description" />
                      <span className="amount mx-1">1</span>
                      <img src="assets/icons/plus-solid.svg" alt="Description" />
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
                      <img src="assets/icons/eye-solid.svg" alt="Description" />
                    </Link>
                    <button className="favorite">
                      <img src="assets/icons/heart-regular.svg" alt="Description" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
