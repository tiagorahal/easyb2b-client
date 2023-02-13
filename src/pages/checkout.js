import React from "react";
import "./checkout.css";
import Dropdown from "react-bootstrap/Dropdown";

const Checkout = () => (
  <div>
    <div className="d-flex justify-content-center p-3 checkout-body">
      <div className="container mx-0 px-0">
        <h5 className="mt-3 mb-2">Seu carrinho de compras</h5>
        <div className="row m-0 p-0">
          {/* BLUE HEADER */}
          <div className="col-4 m-0 d-flex justify-content-start align-items-center pl-3 checkout-header1">
            <div className="d-flex justify-content-center align-items-center check-header-img">
              <div className="text-center">
                <img src="assets/icons/cart-shopping-blue.svg" />
                <p className="m-0 p-0">Pedido 1</p>
              </div>
            </div>
            <div className="pl-1 check-header-info">
              <p className="title">FORNECEDOR:</p>
              <p className="name">LORE IPSUM NAME</p>
            </div>
          </div>
          <div className="col-8 pl-2 m-0 d-flex justify-content-around align-items-center checkout-header2">
            <div className="text-center check-header-info">
              <p className="title">9 ITENS</p>
              <p className="name">no pedido</p>
            </div>
            <div className="text-center check-header-info">
              <p className="title">ATÉ 6 VEZES</p>
              <p className="name">sem juros</p>
            </div>
            <div className="text-center check-header-info">
              <p className="title">6 DIAS ÚTEIS</p>
              <p className="name">via sedex</p>
            </div>
          </div>
          {/* ALERT MESSAGE */}
          <p className="w-100 p-0 m-0">
            <div class="alert mb-0">
              <span
                class="closebtn"
                onclick="this.parentElement.style.display='none';"
              >
                &times;
              </span>
              <strong>Aviso! </strong> itens acima de de R$20,00 devem ser
              entregues dentro do prazo estipulado.
            </div>
          </p>
          {/* DETAILS ROW */}
          <Dropdown className="p-0 d-flex">
            <div className="col-3 d-flex align-items-center check-dropdown">
              <Dropdown.Toggle
                id="dropdown-basic"
                align="center"
                className="toggle-check"
              >
                <button className="btn-check-details">+ Detalhes</button>
              </Dropdown.Toggle>
            </div>
            <div className="col-6 d-flex justify-content-around align-items-center check-detail">
              <div className="text-center d-flex check-details align-items-center">
                <p>ITENS: </p>
                <p className="details-num">32</p>
              </div>
              <div className="text-center d-flex check-details align-items-center">
                <p>TOTAL: R$ </p>
                <p className="details-num">244,20</p>
              </div>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center check-detail">
              <div className="text-center d-grid justify-content-center w-100">
                <button className="btn-finish-buy d-flex align-items-center justify-content-center">
                  <img src="assets/icons/cart-shopping-white.svg" />
                  <p>FINALIZAR COMPRA</p>
                </button>
                <p className="btn-remove">REMOVER PEDIDO</p>
              </div>
            </div>
            <Dropdown.Menu></Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="row m-0 p-0 mt-5">
          {/* BLUE HEADER */}
          <div className="col-4 m-0 d-flex justify-content-start align-items-center pl-3 checkout-header1">
            <div className="d-flex justify-content-center align-items-center check-header-img">
              <div className="text-center">
                <img src="assets/icons/cart-shopping-blue.svg" />
                <p className="m-0 p-0">Pedido 1</p>
              </div>
            </div>
            <div className="pl-1 check-header-info">
              <p className="title">FORNECEDOR:</p>
              <p className="name">LORE IPSUM NAME</p>
            </div>
          </div>
          <div className="col-8 pl-2 m-0 d-flex justify-content-around align-items-center checkout-header2">
            <div className="text-center check-header-info">
              <p className="title">9 ITENS</p>
              <p className="name">no pedido</p>
            </div>
            <div className="text-center check-header-info">
              <p className="title">ATÉ 6 VEZES</p>
              <p className="name">sem juros</p>
            </div>
            <div className="text-center check-header-info">
              <p className="title">6 DIAS ÚTEIS</p>
              <p className="name">via sedex</p>
            </div>
          </div>
          {/* ALERT MESSAGE */}
          <p className="w-100 p-0 m-0">
            <div class="alert mb-0">
              <span
                class="closebtn"
                onclick="this.parentElement.style.display='none';"
              >
                &times;
              </span>
              <strong>Aviso! </strong> itens acima de de R$20,00 devem ser
              entregues dentro do prazo estipulado.
            </div>
          </p>
          {/* DETAILS ROW */}
          <Dropdown className="p-0 d-flex">
            <div className="col-3 d-flex align-items-center check-dropdown">
              <Dropdown.Toggle
                id="dropdown-basic"
                align="center"
                className="toggle-check"
              >
                <button className="btn-check-details">+ Detalhes</button>
              </Dropdown.Toggle>
            </div>
            <div className="col-6 d-flex justify-content-around align-items-center check-detail">
              <div className="text-center d-flex check-details align-items-center">
                <p>ITENS: </p>
                <p className="details-num">32</p>
              </div>
              <div className="text-center d-flex check-details align-items-center">
                <p>TOTAL: R$ </p>
                <p className="details-num">244,20</p>
              </div>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center check-detail">
              <div className="text-center d-grid justify-content-center w-100">
                <button className="btn-finish-buy d-flex align-items-center justify-content-center">
                  <img src="assets/icons/cart-shopping-white.svg" />
                  <p>FINALIZAR COMPRA</p>
                </button>
                <p className="btn-remove">REMOVER PEDIDO</p>
              </div>
            </div>
            <Dropdown.Menu></Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="row m-0 p-0 mt-5">
          {/* BLUE HEADER */}
          <div className="col-4 m-0 d-flex justify-content-start align-items-center pl-3 checkout-header1">
            <div className="d-flex justify-content-center align-items-center check-header-img">
              <div className="text-center">
                <img src="assets/icons/cart-shopping-blue.svg" />
                <p className="m-0 p-0">Pedido 1</p>
              </div>
            </div>
            <div className="pl-1 check-header-info">
              <p className="title">FORNECEDOR:</p>
              <p className="name">LORE IPSUM NAME</p>
            </div>
          </div>
          <div className="col-8 pl-2 m-0 d-flex justify-content-around align-items-center checkout-header2">
            <div className="text-center check-header-info">
              <p className="title">9 ITENS</p>
              <p className="name">no pedido</p>
            </div>
            <div className="text-center check-header-info">
              <p className="title">ATÉ 6 VEZES</p>
              <p className="name">sem juros</p>
            </div>
            <div className="text-center check-header-info">
              <p className="title">6 DIAS ÚTEIS</p>
              <p className="name">via sedex</p>
            </div>
          </div>
          {/* ALERT MESSAGE */}
          <p className="w-100 p-0 m-0">
            <div class="alert mb-0">
              <span
                class="closebtn"
                onclick="this.parentElement.style.display='none';"
              >
                &times;
              </span>
              <strong>Aviso! </strong> itens acima de de R$20,00 devem ser
              entregues dentro do prazo estipulado.
            </div>
          </p>
          {/* DETAILS ROW */}
          <Dropdown className="p-0 d-flex">
            <div className="col-3 d-flex align-items-center check-dropdown">
              <Dropdown.Toggle
                id="dropdown-basic"
                align="center"
                className="toggle-check"
              >
                <button className="btn-check-details">+ Detalhes</button>
              </Dropdown.Toggle>
            </div>
            <div className="col-6 d-flex justify-content-around align-items-center check-detail">
              <div className="text-center d-flex check-details align-items-center">
                <p>ITENS: </p>
                <p className="details-num">32</p>
              </div>
              <div className="text-center d-flex check-details align-items-center">
                <p>TOTAL: R$ </p>
                <p className="details-num">244,20</p>
              </div>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center check-detail">
              <div className="text-center d-grid justify-content-center w-100">
                <button className="btn-finish-buy d-flex align-items-center justify-content-center">
                  <img src="assets/icons/cart-shopping-white.svg" />
                  <p>FINALIZAR COMPRA</p>
                </button>
                <p className="btn-remove">REMOVER PEDIDO</p>
              </div>
            </div>
            <Dropdown.Menu></Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  </div>
);

export default Checkout;
