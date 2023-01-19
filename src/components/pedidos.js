/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./pedidos.css";

const Pedidos = () => (
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
      <form className="bg-light pb-2 pt-4">
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
);

export default Pedidos;
