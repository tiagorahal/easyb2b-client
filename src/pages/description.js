import React from "react";
import "./description.css";

function Description(){
    return(
        <div className="pedidos-main">
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
        </div>
    )
}


export default Description