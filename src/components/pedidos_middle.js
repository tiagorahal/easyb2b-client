/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./pedidos_middle.css";

const PedidosMiddle = () => (
  <div className="pedidos container">
    <div className="row pt-1">
      <form className="pedidos-form pb-2">
        <div class="row pt-4">
          <h4 className="">Legenda</h4>
        </div>
        <div class="d-flex flex-row">
          <div className="d-flex flex-row">
            <div className="square1"></div>
            Cotaçao sei la
          </div>
          &nbsp; &nbsp; &nbsp;
          <div className="d-flex flex-row">
            <div className="square2"></div>
            Cotaçao sei la
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default PedidosMiddle;
