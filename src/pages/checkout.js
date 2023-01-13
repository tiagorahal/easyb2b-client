import React from "react";
import "./checkout.css";
import Footer from "../components/footer";
import Header from "../components/header";

function Checkout(){
    return(
        <div>
            <Header />
            

            <div>
                <h5 className="mt-3 mb-2">Seu carrinho de compras</h5>
                <div className="row p-0 m-0 checkout-card">
                    <div className="col-12 col-sm-4 p-0 m-0 header-card d-flex justify-content-start align-items-center pl-3">
                        <div className="image-card d-flex justify-content-center align-items-center">
                            <div className="text-center content-checkout">
                                <label>Pedido 1</label>
                            </div>
                        </div>
                        <div className="flex-grow-1">
                            <div>
                                <p className="title-checkout">FORNECEDOR:</p>
                                <p className="subtitle-checkout">LORE IPSUM NAME</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 pb-3 pl-2 pr-2 p-sm-0 m-0 header-card d-flex justify-content-sm-around justify-content-between align-items-center h-sm-auto">
                        <div className="text-center">
                            <p className="title-checkout">9 ITEMS</p>
                            <p className="subtitle-checkout">no pedido</p>
                        </div>
                        <div className="text-center">
                            <p className="title-checkout">ATÉ 6 VEZES</p>
                            <p className="subtitle-checkout">sem juros</p>
                        </div>
                        <div className="text-center">
                            <p className="title-checkout">6 DIAS ÚTEIS</p>
                            <p className="subtitle-checkout">via sedex</p>
                        </div>
                    </div>
                    <p className="w-100 p-0 m-0">
                        {/*<ngb-alert [dismissible]="true" className="w-100 m-0">*/}
                        <strong>Aviso !</strong> itens acima de R$ 20,00 , devem ser entregues dentro do prazo estipulado .
                        {/*</ngb-alert>*/}
                    </p>
                    <div className="col-12 col-sm-9 footer-card d-flex align-items-center">
                        <div className="flex-grow-1">
                            <button className="chip btn-detalhes">
                                {/*{{checkCards.detalhes ? 'Fechar' : '+ Detalhes'}}*/}
                            </button>
                        </div>
                        <div className="d-flex justify-content-between align-items-center" style="flex:0 0 50%">
                            <div className="text-center d-flex">
                                <p className="subtitle-checkout footer-subtitle "> ITENS </p>
                                <p className="title-checkout footer-title"> 32 </p>
                            </div>
                            <div className="text-center d-flex align-items-center">
                                <p className="subtitle-checkout footer-subtitle "> TOTAL R$</p>
                                <p className="title-checkout footer-title"> 244,20 </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 footer-card d-flex align-items-center">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <div className="text-center w-100">
                                <button className="btn-compra btn-finalizar-compra justify-content-center d-flex align-items-center w-100">
                                    <div style="flex:0 0 50px;">
                                    </div>
                                    <div>
                                        FINALIZAR COMPRA
                                    </div>
                                </button>
                                <p className="subtitle-checkout footer-subtitle lbl-finalizar-pedido"> REMOVER PEDIDO </p>
                            </div>
                        </div>
                    </div>
                    <div className="detalhes-menu bg-white w-100 d-none" >
                        <div className="ct-table">
                            <div className="table">
                                <table>
                                    <thead className="exception-thead">
                                        <tr>
                                        <th className="d-none d-sm-table-cell">
                                            Cod
                                            <span className="d-none d-md-block">. CDC</span>
                                        </th>
                                        <th>Produto</th>
                                        <th className="d-none d-md-table-cell">Cód. cliente</th>
                                        <th className="d-none d-md-table-cell">Cód. fornecedor</th>
                                        <th className="text-center">Quantidade</th>
                                        <th className="d-none d-sm-table-cell" style="min-width: 100px">Preço un.</th>
                                        <th>Total</th> 
                                        <th></th>
                                        </tr>
                                    </thead>
                                    <tbody className="exception-tbody-no-mobile">
                                        <tr>
                                            <td className="d-none d-sm-table-cell">
                                                #3453
                                            </td>
                                            <td className="d-table-cell">
                                                <img src="../../../../assets/produtos/produto_2.png" width="50" />
                                                <label>Esponja dupla face 3M</label>
                                            </td>
                                            <td className="d-none d-md-table-cell">
                                                132
                                            </td>
                                            <td className="d-none d-md-table-cell">
                                                12
                                            </td>
                                            <td className="d-table-cell">
                                                <div className="d-flex justify-content-center w-100">
                                                    <div className="ct-qtd d-flex align-items-center w-auto">
                                                        
                                                        <input type="text" value="1" />
                                                        
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="d-none d-sm-table-cell">
                                                <span className="black bolder">R$ 0,65</span>
                                            </td>
                                            <td className="d-table-cell">
                                                <span className="black bolder">R$ 7,80</span>
                                            </td>
                                            <td className="delete-option d-table-cell">
                                                <div appClick className="d-flex justify-content-center align-items-center">
                                                    
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row m-0 p-0 w-100 mb-3">
                            <div className="col-12 col-md-4">
                                <div className="card-item">
                                    <div className="card-title d-flex align-items-center justify-content-center">
                                        <h5>PEDIDO MÍNIMO</h5>
                                    </div>
                                    <div className="card-content">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card-item">
                                    <div className="card-title d-flex align-items-center justify-content-center">
                                        <h5>FORMA DE PAGAMENTO</h5>
                                    </div>
                                    <div className="card-content">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card-item">
                                    <div className="card-title d-flex align-items-center justify-content-center">
                                        <h5>PRAZO DE ENTREGA</h5>
                                    </div>
                                    <div className="card-content">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row p-0 m-0 w-100 card-footer">
                            <div className="col-12 col-md-8 p-4 ct-obs">
                                <textarea className="w-100 h-100 area-obs-field">Observações para o fornecedor</textarea>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="row p-0 m-0 pb-3 pb-md-0 mt-md-4 pt-md-3">
                                    <div className="col-7 text-right text-white">
                                        <p className="normal p-0 mb-1">PRODUTOS:</p>
                                        <p className="normal p-0 mb-1">FRETE:</p>
                                        <p className="normal p-0 mb-1">TOTAL:</p>
                                    </div>
                                    <div className="col-5 text-left text-white">
                                        <p className="p-0 mb-1">R$ 224,20</p>
                                        <p className="p-0 mb-1">R$ 75,86</p>
                                        <p className="p-0 mb-1">R$ 21.234,63</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-0 m-0 mt-5 w-100">
                    <div className="w-100 position-relative" style="height:80px;">
                        <div className="position-absolute left-0 ml-2">
                            Continuar comprando
                        </div>
                        <div className="position-absolute right-0 mr-2 text-danger">
                            Cancelar todos
                        </div>
                    </div>
                    <div className="col-12 p-0 m-0 d-flex justify-content-center align-items-center">
                        <button className="btn-compra btn-finalizar-pedidos">                 
                            <p className="m-0 p-0 ml-2">FINALIZAR TODOS OS PEDIDOS</p>
                        </button>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}


export default Checkout