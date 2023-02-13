import React from "react";
import "./description.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function Description() {
  return (
    <div className="description-main pt-4 pb-3">
      <div className="description container mb-5">
        <div className="row ">
          <div className="col-6 pb-5">
            <div>
              <figure class="img-download">
                <img
                  src="assets/produto_2_semfundo.png"
                  class="figure-img img-fluid rounded"
                  alt="Product."
                />
              </figure>
            </div>
            <div className="text-center img-container col-1 p-1 pt-2 m-auto">
              <a href="#">
                <img
                  src="assets/icons/magnifying-glass-solid.svg"
                  className="m-auto description-image-icon"
                  alt="Description"
                />
              </a>
            </div>
          </div>

          <div className="col-6 pb-5 pt-4">
            <div className="row pb-3">
              <h4 className="font-weight-bolder">
                <b>PAP A4 CERT.FSC GIMBA 210X297 CX5000 75G</b>
              </h4>
            </div>
            <div className="row">
              <p className="font-weight-bolder">
                <b>ID: </b>905
                <br />
                <b>CÓD. SUPRICORP: </b> 1109319
                <br />
                <b>MARCA: </b> GIMBA
                <br />
                <br />
                <b>CONDIÇÕES PARA COMPRA</b>
                <br />
                <br />
                <b>PEDIDO MÍNIMO: </b> 1 UNIDADE
                <br />
                <b>FORMA DE PAGAMENTO: </b>BOLETO - 45 DIAS
                <br />
                <b>PRAZO DE ENTREGA APROXIMADO: </b>3 DIAS ÚTEIS
                <br />
                <small className="font-weight-light">
                  Obs: Esse tempo é de responsabilidade do fornecedor, pode
                  variar de acordo com seu fluxo de pedidos.
                </small>
                <br />
                <br />
                <br />
              </p>
            </div>

            <div className="row">
              <div className="col-4 d-flex justify-content-between align-items-center">
                <p className=" pt-1" style={{ color: "orange" }}>
                  <b style={{ textDecoration: "underline" }}>Unid</b>
                  &#160;&#160;&#160;&#160;&#160;
                  <b style={{ fontSize: "1.8rem" }}>R$ 192,45</b>
                </p>
              </div>

              <div
                className="col-3 d-flex justify-content-between align-items-center"
                style={{ fontSize: "1.7rem" }}
              >
                <div>-</div>
                <div className="number-square border border-secondary text-center">
                  1
                </div>
                <div>+</div>
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-6 pt-3">
                <button
                  type="button"
                  class="btn btn-success btn-lg bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  INCLUIR NO CARRINHO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second half */}
      <div className="pedidos container pt-5">
        <div className="row justify-content-end my-4">
          <div className="col-12">
            <div className="w-100 h-100 d-flex align-items-center justify-content-start">
              <h4 className="bottom-text-description">RELACIONADOS</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="product-item col-md-4 col-lg-3 col-sm-6">
            <div className="bg-white w-100 h-100">
              <div className="row">
                <div className="col-12 p-3 d-flex justify-content-center">
                  <img
                    src="assets/produto_0.png"
                    className="product-img"
                    alt="Description"
                  />
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
                      <img
                        src="assets/icons/eye-solid.svg"
                        alt="Description"
                        className="m-auto"
                      />
                    </Link>
                    <button className="favorite">
                      <img
                        src="assets/icons/heart-regular.svg"
                        alt="Description"
                      />
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
                  <img
                    src="assets/produto1.jpg"
                    className="product-img"
                    alt="Description"
                  />
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
                      <img src="assets/icons/eye-solid.svg" alt="Description" />
                    </Link>
                    <button className="favorite">
                      <img
                        src="assets/icons/heart-regular.svg"
                        alt="Description"
                      />
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
                  <img
                    src="assets/produto2.jpg"
                    className="product-img"
                    alt="Description"
                  />
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
                    <button className="btn-add-cart ">
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
                      <img
                        src="assets/icons/heart-regular.svg"
                        alt="Description"
                      />
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
                  <img
                    src="assets/produto3.png"
                    className="product-img"
                    alt="Description"
                  />
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
                      <img src="assets/icons/eye-solid.svg" alt="Description" />
                    </Link>
                    <button className="favorite">
                      <img
                        src="assets/icons/heart-regular.svg"
                        alt="Description"
                      />
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
