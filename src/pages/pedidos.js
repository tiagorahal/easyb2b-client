import React from "react";
import "./pedidos.css";
import Footer from "../components/footer";
import Header from "../components/header";

function Pedidos(){
    return(
        <div className="pedidos-main">
          <div className="pedidos container">
            <div className="row pt-4">
              <div className="row">
                <h1 className="pedidos-titulo col-7 pb-2 align-items-center">Pedidos Realizados</h1>
                <div className="col d-flex justify-content-between align-items-center">
                  <a href="#" className="pedidos-link">
                    <img className="pedidos-icon-image" 
                    src={`${process.env.PUBLIC_URL}assets/icons/square-plus-solid.svg`} 
                    alt="logo"/>
                    EXPORTAR PRODUTOS COMPRADOS
                  </a>
                  <a href="#" className="pedidos-link">
                    <img className="pedidos-icon-image" 
                    src={`${process.env.PUBLIC_URL}assets/icons/square-plus-solid.svg`} 
                    alt="logo"/>
                    EXPORTAR PEDIDOS
                  </a>
                </div>
              </div>
              <form className="pedidos-form pb-2 pt-4">
                <div class="form-row pb-2">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label class="form-check-label" for="exampleRadios1">
                      Catálogo
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                    <label class="form-check-label" for="exampleRadios2">
                      Cotação
                    </label>
                  </div>
                </div>
                <div class="row">
                <div class="form-group col-3">
                  <label for="inputZip"></label>
                  <input type="text" class="form-control" id="inputZip" placeholder="Id" />
                </div>
                  <div class="form-group col-3">
                    <label for="inputZip">Faturamento de</label>
                    <input type="date" class="form-control" id="inputZip" placeholder="dd/mm/aaaa" />
                  </div>
                  <div class="form-group col-3">
                    <label for="inputZip">Até faturamento</label>
                    <input type="date" class="form-control" id="inputZip" placeholder="dd/mm/aaaa" />
                  </div>
                  <div class="form-group col-3">
                    <label for="inputZip"></label>
                    <select id="inputState" class="form-control">
                      <option selected>- Todas as prioridades -</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-3">
                    <label for="inputZip"></label>
                    <input type="date" class="form-control" id="inputZip" />
                  </div>
                  <div class="form-group col-3">
                    <label for="inputZip"></label>
                    <input type="date" class="form-control" id="inputZip" />
                  </div>
                  <div class="form-group col-3">
                    <label for="inputZip"></label>
                    <select id="inputState" class="form-control">
                      <option selected>- Todos -</option>
                    </select>
                  </div>
                  <div class="form-group col-3">
                    <label for="inputZip"></label>
                    <select id="inputState" class="form-control">
                      <option selected>- Todos -</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                <div class="form-group col-3">
                  <label for="inputZip"></label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
                <div class="form-group col-2">
                  <label for="inputZip" style={{opacity: 0}} >gambiarra</label>
                  <button type="submit" class="btn btn-primary w-100">Sign in</button>
                </div>
                </div>
              </form>
            </div>
          </div>
          <div className="pedidos container">
            <div className="row pt-1">
              <form className="pedidos-form pb-2">
                <div class="row pt-4">
                  <h5 className="fw-bold">Legenda</h5>
                </div>
                <div class="d-flex flex-row">
                  <div className="d-flex flex-row">
                    <div className="square1"></div>
                    Pedidos de Cotação
                  </div>
                  &nbsp; &nbsp; &nbsp;
                  <div className="d-flex flex-row">
                    <div className="square2"></div>
                    Pedidos de Catálogo
                  </div>
                </div>
              </form>
            </div>
          </div>
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
        </div>
    )
}


export default Pedidos