/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./pedidos_bottom.css";

const PedidosBottom = () => (
  <div className="pedidos container pt-1">
    <div className="row pt-4 pedidos-bg">
      <div className="col-9">
        <div className="d-flex flex-column">
          <div className="pedidos-text">
            <p>
              <b>ID : &nbsp;</b>55624
              &nbsp;&nbsp;&nbsp;
              <b>CARRINHO INICIADO EM : &nbsp;</b> 20/11/2022 às 23:45
              &nbsp;&nbsp;&nbsp;
              <b>FILIAL : </b>MATRIZ MG
              &nbsp;&nbsp;&nbsp;
              <b>STATUS : &nbsp;</b>NO CARRINHO
            </p>
          </div>
          <div className="pedidos-buttons d-flex justify-content-between col-11 pb-3">
            <button type="button" class="btn btn-primary">CLONAR PEDIDO</button>
            <button type="button" class="btn btn-primary">- VER RESUMO</button>
            <button type="button" class="btn btn-primary">VER DETALHES</button>
            <button type="button" class="btn btn-primary">CONTRATAR</button>
            <button type="button" class="btn btn-success">EDITAR</button>
            <button type="button" class="btn btn-danger">CANCELAR</button>
          </div>
        </div>
      </div>
      <div className="col-3 d-flex align-items-center">
        <h3>R$ 1.957,89</h3>
      </div>
    </div>
    <div className="row pedidos-bg">
      <div className="col-11 m-auto">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">COD</th>
              <th scope="col">PRODUTO</th>
              <th scope="col">CORES</th>
              <th scope="col">TIPOS MATERIAL</th>
              <th scope="col">COD CLIENTE</th>
              <th scope="col">COD FORNECEDOR</th>
              <th scope="col">QUANTIDADE</th>
              <th scope="col">PREÇO UNICO</th>
              <th scope="col">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <th scope="row">123</th>
              <td>produto</td>
              <td></td>
              <td></td>
              <td>1321</td>
              <td>21</td>
              <td>1</td>
              <td>21</td>
              <td>R$ 121,00</td>
            </tr>
            <tr>
              <th scope="row">123</th>
              <td>produto</td>
              <td></td>
              <td></td>
              <td>1321</td>
              <td>21</td>
              <td>1</td>
              <td>21</td>
              <td>R$ 121,00</td>
            </tr>
            <tr>
              <th scope="row">123</th>
              <td>produto</td>
              <td></td>
              <td></td>
              <td>1321</td>
              <td>21</td>
              <td>1</td>
              <td>21</td>
              <td>R$ 121,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="row pedidos-bg">
      <div className="col-12 m-auto">
        <p className="d-flex justify-content-between">
          <b>Frete</b>
          <b>R$ 0,00</b>
        </p>
      </div>
      <div className="col-12 m-auto">
        <p className="d-flex justify-content-between">
          <b>Total do pedido</b>
          <b>R$ 1.957,89</b>
        </p>
      </div>
    </div>
  </div>
);

export default PedidosBottom;
