import React from "react";
import "./header.css";
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import { Link } from "react-router-dom";


function Header(){
    
    return (
        <div>
            <div className="header container mt-3 mb-3">
                <div className="row head align-items-center">
                    {/* EasyB2B logo */}
                    <div className="col-auto">
                        <Link to="/"><img src="assets/logo2.png" className="head-logo"/></Link>
                    </div>
                    {/* Search bar */}
                    <div className="col-6 search-bar align-items-center">
                        <div className="row mt-1">
                            <input className="col-11" type="text" placeholder="O que você está procurando?" id="search-bar" />
                            <button className="col-1 search-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
                            </button>     
                        </div>
                    </div>
                    {/* User profile */}
                    <div className="col-auto user-profile-hover d-flex justify-content-center">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-5 space-fix">
                                <img src="assets/perfil.png" className="profile-pic rounded-circle text-right"/>
                            </div>
                            <div className="col-7 px-2">
                                <p className="username">Olá, Usuário</p>
                                <div className="d-flex align-items-center my-account-login">
                                    <p>minha conta</p>  
                                </div>
                            </div>  
                        </div>
                        {/* User profile dropdown menu */}
                        <div className="user-dropdown">
                            <div className="space"></div>
                            <div className="p-4 bg-white border-drop-user">
                                <div className="dropdown-point"></div>
                                <div className="row">
                                    <div className="col-6 mb-3 user-dropdown-options">
                                        <img src="assets/icons/gear-solid.svg" /> Painel de Cotrole
                                    </div>
                                    <div className="col-6 mb-3 user-dropdown-options">
                                        <img src="assets/icons/check-solid.svg" /> Aprovação de Pedidos
                                    </div>
                                    <div className="col-6 mb-3 user-dropdown-options">
                                        <Link to="/Pedidos" className="user-link"><img src="assets/icons/paper.svg" /> Meus Pedidos</Link>
                                    </div>
                                    <div className="col-6 mb-3 user-dropdown-options">
                                        <img src="assets/icons/chart-line-solid.svg" /> Relatórios
                                    </div>
                                    <div className="col-6 mb-3 user-dropdown-options">
                                        <img src="assets/icons/file-import-solid.svg" /> Importar Pedidos
                                    </div>
                                    <div className="col-6 mb-3 user-dropdown-options">
                                        <img src="assets/icons/link-solid.svg" /> Links úteis
                                    </div>
                                    <div className="col-6 mb-3 user-dropdown-options">
                                        <img src="assets/icons/file-export-solid.svg" /> Exportações
                                    </div>
                                    <div className="col-6 mb-3"></div>
                                    <div className="col-12 p-4 pb-0 d-flex justify-content-around align-items-center btn-user-dropdown">
                                        <button>MEU PERFIL</button>
                                        <button>SUPORTE</button>
                                        <button>SAIR</button>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                    {/* User branch */}
                    <div className="col-auto">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-3 location-fix">
                                <img src="assets/icons/location-dot-solid.svg" className="location-icon"/>
                            </div>
                            <div className="col-9">
                                <p className="m-0 branch-name">RAIA 021</p>
                            </div>
                        </div>
                    </div>
                    {/* Cart info */}
                    <div className="col d-flex cart-header-hover justify-content-center">

                        <div className="row align-items-center justify-content-center cart-dropdown w-100">
                            <div className="col-3 px-1 text-center">
                                <img src="assets/icons/cart-shopping-solid.svg" className="cart-icon" />
                                <div className="badge">
                                    <span className="badge-value">1</span>
                                </div>
                            </div>
                            <div className="col-9 p-0 text-align-center">
                                <div>
                                    <p className="cart-total mb-0">TOTAL: R$ <span>7.235,00</span></p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="cart-balance mb-0">SALDO: R$ <span>9.000,00</span></p> 
                                </div>
                            </div>      
                        </div>

                        <div className="drop-menu p-0">
                            <div className="space transparent"></div>
                            <div className="cart-box">
                                <div className="dropdown-point-cart"></div>
                                <div className="cart-dropdown-header">
                                    <h3 className="pt-3">Meu carrinho</h3>
                                    <p>Saldo: R$630.00</p>
                                </div>
                                <div className="cart-dropdown-products">
                                    <div className="cart-product d-flex justify-content-center mb-2">
                                        <div className="cart-product-img">
                                            <img src="assets/produto_0.png"/>
                                        </div>
                                        <div className="cart-product-name px-1">
                                            <label className="d-inline-block">BOBINA PARA CALCULADORA</label>
                                            <span>Quantidade: 3</span>
                                            <p>R$128,20</p>
                                        </div>
                                        <div className="cart-product-delete d-grid align-content-center px-1">
                                            <button><img src="assets/icons/close.svg" /></button>
                                        </div>
                                    </div>
                                    <div className="cart-product d-flex justify-content-center mb-2">
                                        <div className="cart-product-img">
                                            <img src="assets/produto1.jpg"/>
                                        </div>
                                        <div className="cart-product-name px-1">
                                            <label className="d-inline-block">BOBINA PARA CALCULADORA</label>
                                            <span>Quantidade: 3</span>
                                            <p>R$128,20</p>
                                        </div>
                                        <div className="cart-product-delete d-grid align-content-center px-1">
                                            <button><img src="assets/icons/close.svg" /></button>
                                        </div>
                                    </div>
                                    <div className="cart-product d-flex justify-content-center mb-2">
                                        <div className="cart-product-img">
                                            <img src="assets/produto2.jpg"/>
                                        </div>
                                        <div className="cart-product-name px-1">
                                            <label className="d-inline-block">BOBINA PARA CALCULADORA</label>
                                            <span>Quantidade: 3</span>
                                            <p>R$128,20</p>
                                        </div>
                                        <div className="cart-product-delete d-grid align-content-center px-1">
                                            <button><img src="assets/icons/close.svg" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-dropdown-total">
                                    <div className="d-flex align-items-center">
                                        <p className="d-block">Total</p>
                                        <p className="d-block">R$7.230,00</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-around mt-2">
                                        <Link to="/Checkout" className="btn-cart-link"><button className="btn-finish w-100">Finalizar</button></Link>
                                        <button className="btn-basket">Editar cesta</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* Menu navbar */}
            <div className="header menu py-2 px-5">
                <div className="row">
                    <div className="col-1">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-3">
                                <img src="assets/icons/filter-solid.svg" className="filter-icon" />
                            </div>
                            <div className="col-9 p-1">
                                <p className="filter m-0">Filtro</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-11 white align-self-center">
                        <div className="row align-items-center justify-content-center menu-item">
                            <div className="col-auto text-center">COMPRE POR DEPARTAMENTO</div>
                            <Link to="/ProductsList" className="col text-center btn-products-link">Produtos</Link>
                            <div className="col text-center">Item de Menu</div>
                            <div className="col text-center">Item de Menu</div>
                            <div className="col text-center">Item de Menu</div>
                            <div className="col text-center">Item de Menu</div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Floating lateral carts */}
            <div className="d-grid floating-carts">
                <CDropdown variant="btn-group" direction="dropstart" className="mb-1" autoClose={false}>
                    <CDropdownToggle className="btn-cart1">
                        <img src="assets/icons/cart-shopping-white.svg" className="float-img"/>
                        <p className="cart-title">Pedido 1</p>
                    </CDropdownToggle>
                    <CDropdownMenu className="drop-float-menu">
                        <CDropdownItem className="floating-cart-menu">
                            <div className="row text-center mb-5">
                                <h5 className="p-0 m-0 mt-1">
                                    <span className="order1">PEDIDO 1: </span>
                                    <span className="order2">9 PRODUTOS NO CARRINHO</span>
                                </h5>
                                <button className="btn-more-details">+DETALHES</button>
                            </div>
                            <div className="row float-cart-table pt-3">
                                <div className="table-cel col-12 col-md-3 m-0 p-0">
                                    <div className="d-grid justify-content-center align-items-center align-content-center cel00">
                                        <p className="cel00-p m-0 p-0">Filtrar por:</p>
                                        <p className="m-0 p-0">Forma de pagmento <img src="assets/arrow-down.svg"/></p>
                                    </div>
                                    <div className="cel0"><span>Pagamento</span></div>
                                    <div className="cel0"><span>Tempo de entrega</span></div>
                                    <div className="cel0"><span>Pedido mínimo</span></div>
                                    <div className="cel0"><span>Avaliação</span></div>
                                    <div className="cel05"></div>
                                </div>
                                <div className="table-cel col-md-3 m-0 p-0">
                                    <div className="cel10 d-grid justify-content-center align-items-center">
                                        <p className="m-0 p-0">NOME DO FORNECEDOR 1</p>
                                        <p className="m-0 p-0 cel10-price">
                                            <span className="pricers">R$  </span>
                                            <span>224,20</span>
                                        </p>
                                    </div>
                                    <div className="cel11"></div>
                                    <div className="cel1">
                                        <p className="m-0 p-0">Até 6 Vezes</p>
                                        <span>sem juros</span>
                                    </div>
                                    <div className="cel1">
                                        <p className="m-0 p-0">6 dias úteis</p>
                                        <span>Sedex 10</span>
                                    </div>
                                    <div className="cel1 d-flex justify-content-evenly">
                                        <div className="bar">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <img src="assets/icons/question-solid.svg" className="question-svg"/>
                                    </div>
                                    <div className="cel1 d-flex justify-content-center cel1-stars">
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-regular.svg" />
                                    </div>
                                    <div className="cel16">
                                        <button className="btn-buy"><img src="assets/icons/cart-shopping-white.svg"/>COMPRAR</button>
                                    </div>
                                </div>
                                <div className="table-cel col-md-3 m-0 p-0">
                                    <div className="cel10 d-grid justify-content-center align-items-center">
                                        <p className="m-0 p-0">NOME DO FORNECEDOR 2</p>
                                        <p className="m-0 p-0 cel10-price">
                                            <span className="pricers">R$  </span>
                                            <span>331,58</span>
                                        </p>
                                    </div>
                                    <div className="cel11"></div>
                                    <div className="cel1">
                                        <p className="m-0 p-0">Até 8 Vezes</p>
                                        <span>sem juros</span>
                                    </div>
                                    <div className="cel1">
                                        <p className="m-0 p-0">12 dias úteis</p>
                                        <span>PAC</span>
                                    </div>
                                    <div className="cel1 d-flex justify-content-evenly">
                                        <div className="bar">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <img src="assets/icons/question-solid.svg" className="question-svg"/>
                                    </div>
                                    <div className="cel1 d-flex justify-content-center cel1-stars">
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-regular.svg" />
                                    </div>
                                    <div className="cel16">
                                        <button className="btn-buy"><img src="assets/icons/cart-shopping-white.svg"/>COMPRAR</button>
                                    </div>
                                </div>
                                <div className="table-cel col-md-3 m-0 p-0 c-active">
                                    <div className="cel10 d-grid justify-content-center align-items-center">
                                        <p className="m-0 p-0">NOME DO FORNECEDOR 3</p>
                                        <p className="m-0 p-0 cel10-price">
                                            <span className="pricers">R$  </span>
                                            <span>221,88</span>
                                        </p>
                                    </div>
                                    <div className="cel11"></div>
                                    <div className="cel1">
                                        <p className="m-0 p-0 white">Até 10 Vezes</p>
                                        <span className="white">com juros</span>
                                    </div>
                                    <div className="cel1">
                                        <p className="m-0 p-0 white">5 dias úteis</p>
                                        <span className="white">Sedex</span>
                                    </div>
                                    <div className="cel1 d-flex justify-content-evenly">
                                        <div className="bar">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <img src="assets/icons/question-solid.svg" className="question-svg"/>
                                    </div>
                                    <div className="cel1 d-flex justify-content-center cel1-stars">
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-regular.svg" />
                                    </div>
                                    <div className="cel16">
                                        <button className="btn-buy-select"><img src="assets/icons/cart-shopping-white.svg"/>COMPRAR</button>
                                    </div>
                                </div>
                            </div>
                        </CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>

                <CDropdown variant="btn-group" direction="dropstart" className="mb-1" autoClose={false}>
                    <CDropdownToggle className="btn-cart2">
                        <img src="assets/icons/cart-shopping-white.svg" className="float-img"/>
                        <p className="cart-title">Pedido 2</p>
                    </CDropdownToggle>
                    <CDropdownMenu className="drop-float-menu2">
                        <CDropdownItem className="floating-cart-menu">
                            <div className="row text-center mb-5">
                                <h5 className="p-0 m-0 mt-1">
                                    <span className="order1">PEDIDO 2: </span>
                                    <span className="order2">9 PRODUTOS NO CARRINHO</span>
                                </h5>
                                <button className="btn-more-details">+DETALHES</button>
                            </div>
                            <div className="row float-cart-table pt-3">
                                <div className="table-cel col-12 col-md-3 m-0 p-0">
                                    <div className="d-grid justify-content-center align-items-center align-content-center cel00">
                                        <p className="cel00-p m-0 p-0">Filtrar por:</p>
                                        <p className="m-0 p-0">Forma de pagmento <img src="assets/arrow-down.svg"/></p>
                                    </div>
                                    <div className="cel0"><span>Pagamento</span></div>
                                    <div className="cel0"><span>Tempo de entrega</span></div>
                                    <div className="cel0"><span>Pedido mínimo</span></div>
                                    <div className="cel0"><span>Avaliação</span></div>
                                    <div className="cel05"></div>
                                </div>
                                <div className="table-cel col-md-3 m-0 p-0">
                                    <div className="cel10 d-grid justify-content-center align-items-center">
                                        <p className="m-0 p-0">NOME DO FORNECEDOR 1</p>
                                        <p className="m-0 p-0 cel10-price">
                                            <span className="pricers">R$  </span>
                                            <span>224,20</span>
                                        </p>
                                    </div>
                                    <div className="cel11"></div>
                                    <div className="cel1">
                                        <p className="m-0 p-0">Até 6 Vezes</p>
                                        <span>sem juros</span>
                                    </div>
                                    <div className="cel1">
                                        <p className="m-0 p-0">6 dias úteis</p>
                                        <span>Sedex 10</span>
                                    </div>
                                    <div className="cel1 d-flex justify-content-evenly">
                                        <div className="bar">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <img src="assets/icons/question-solid.svg" className="question-svg"/>
                                    </div>
                                    <div className="cel1 d-flex justify-content-center cel1-stars">
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-regular.svg" />
                                    </div>
                                    <div className="cel16">
                                        <button className="btn-buy"><img src="assets/icons/cart-shopping-white.svg"/>COMPRAR</button>
                                    </div>
                                </div>
                                <div className="table-cel col-md-3 m-0 p-0">
                                    <div className="cel10 d-grid justify-content-center align-items-center">
                                        <p className="m-0 p-0">NOME DO FORNECEDOR 2</p>
                                        <p className="m-0 p-0 cel10-price">
                                            <span className="pricers">R$  </span>
                                            <span>331,58</span>
                                        </p>
                                    </div>
                                    <div className="cel11"></div>
                                    <div className="cel1">
                                        <p className="m-0 p-0">Até 8 Vezes</p>
                                        <span>sem juros</span>
                                    </div>
                                    <div className="cel1">
                                        <p className="m-0 p-0">12 dias úteis</p>
                                        <span>PAC</span>
                                    </div>
                                    <div className="cel1 d-flex justify-content-evenly">
                                        <div className="bar">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <img src="assets/icons/question-solid.svg" className="question-svg"/>
                                    </div>
                                    <div className="cel1 d-flex justify-content-center cel1-stars">
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-regular.svg" />
                                    </div>
                                    <div className="cel16">
                                        <button className="btn-buy"><img src="assets/icons/cart-shopping-white.svg"/>COMPRAR</button>
                                    </div>
                                </div>
                                <div className="table-cel col-md-3 m-0 p-0 c-active">
                                    <div className="cel10 d-grid justify-content-center align-items-center">
                                        <p className="m-0 p-0">NOME DO FORNECEDOR 3</p>
                                        <p className="m-0 p-0 cel10-price">
                                            <span className="pricers">R$  </span>
                                            <span>221,88</span>
                                        </p>
                                    </div>
                                    <div className="cel11"></div>
                                    <div className="cel1">
                                        <p className="m-0 p-0 white">Até 10 Vezes</p>
                                        <span className="white">com juros</span>
                                    </div>
                                    <div className="cel1">
                                        <p className="m-0 p-0 white">5 dias úteis</p>
                                        <span className="white">Sedex</span>
                                    </div>
                                    <div className="cel1 d-flex justify-content-evenly">
                                        <div className="bar">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <img src="assets/icons/question-solid.svg" className="question-svg"/>
                                    </div>
                                    <div className="cel1 d-flex justify-content-center cel1-stars">
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-regular.svg" />
                                    </div>
                                    <div className="cel16">
                                        <button className="btn-buy-select"><img src="assets/icons/cart-shopping-white.svg"/>COMPRAR</button>
                                    </div>
                                </div>
                            </div>
                        </CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>

                <CDropdown variant="btn-group" direction="dropstart" className="mb-1">
                    <CDropdownToggle className="btn-cart3">
                        <img src="assets/icons/cart-shopping-white.svg" className="float-img"/>
                        <p className="cart-title">Pedido 3</p>
                    </CDropdownToggle>
                    <CDropdownMenu className="drop-float-menu3">
                        <CDropdownItem className="floating-cart-menu">
                            <div className="row text-center mb-5">
                                <h5 className="p-0 m-0 mt-1">
                                    <span className="order1">PEDIDO 3: </span>
                                    <span className="order2">9 PRODUTOS NO CARRINHO</span>
                                </h5>
                                <button className="btn-more-details">+DETALHES</button>
                            </div>
                            <div className="row float-cart-table pt-3">
                                <div className="table-cel col-12 col-md-3 m-0 p-0">
                                    <div className="d-grid justify-content-center align-items-center align-content-center cel00">
                                        <p className="cel00-p m-0 p-0">Filtrar por:</p>
                                        <p className="m-0 p-0">Forma de pagmento <img src="assets/arrow-down.svg"/></p>
                                    </div>
                                    <div className="cel0"><span>Pagamento</span></div>
                                    <div className="cel0"><span>Tempo de entrega</span></div>
                                    <div className="cel0"><span>Pedido mínimo</span></div>
                                    <div className="cel0"><span>Avaliação</span></div>
                                    <div className="cel05"></div>
                                </div>
                                <div className="table-cel col-md-3 m-0 p-0">
                                    <div className="cel10 d-grid justify-content-center align-items-center">
                                        <p className="m-0 p-0">NOME DO FORNECEDOR 1</p>
                                        <p className="m-0 p-0 cel10-price">
                                            <span className="pricers">R$  </span>
                                            <span>224,20</span>
                                        </p>
                                    </div>
                                    <div className="cel11"></div>
                                    <div className="cel1">
                                        <p className="m-0 p-0">Até 6 Vezes</p>
                                        <span>sem juros</span>
                                    </div>
                                    <div className="cel1">
                                        <p className="m-0 p-0">6 dias úteis</p>
                                        <span>Sedex 10</span>
                                    </div>
                                    <div className="cel1 d-flex justify-content-evenly">
                                        <div className="bar">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <img src="assets/icons/question-solid.svg" className="question-svg"/>
                                    </div>
                                    <div className="cel1 d-flex justify-content-center cel1-stars">
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-regular.svg" />
                                    </div>
                                    <div className="cel16">
                                        <button className="btn-buy"><img src="assets/icons/cart-shopping-white.svg"/>COMPRAR</button>
                                    </div>
                                </div>
                                <div className="table-cel col-md-3 m-0 p-0">
                                    <div className="cel10 d-grid justify-content-center align-items-center">
                                        <p className="m-0 p-0">NOME DO FORNECEDOR 2</p>
                                        <p className="m-0 p-0 cel10-price">
                                            <span className="pricers">R$  </span>
                                            <span>331,58</span>
                                        </p>
                                    </div>
                                    <div className="cel11"></div>
                                    <div className="cel1">
                                        <p className="m-0 p-0">Até 8 Vezes</p>
                                        <span>sem juros</span>
                                    </div>
                                    <div className="cel1">
                                        <p className="m-0 p-0">12 dias úteis</p>
                                        <span>PAC</span>
                                    </div>
                                    <div className="cel1 d-flex justify-content-evenly">
                                        <div className="bar">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <img src="assets/icons/question-solid.svg" className="question-svg"/>
                                    </div>
                                    <div className="cel1 d-flex justify-content-center cel1-stars">
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-regular.svg" />
                                    </div>
                                    <div className="cel16">
                                        <button className="btn-buy"><img src="assets/icons/cart-shopping-white.svg"/>COMPRAR</button>
                                    </div>
                                </div>
                                <div className="table-cel col-md-3 m-0 p-0 c-active">
                                    <div className="cel10 d-grid justify-content-center align-items-center">
                                        <p className="m-0 p-0">NOME DO FORNECEDOR 3</p>
                                        <p className="m-0 p-0 cel10-price">
                                            <span className="pricers">R$  </span>
                                            <span>221,88</span>
                                        </p>
                                    </div>
                                    <div className="cel11"></div>
                                    <div className="cel1">
                                        <p className="m-0 p-0 white">Até 10 Vezes</p>
                                        <span className="white">com juros</span>
                                    </div>
                                    <div className="cel1">
                                        <p className="m-0 p-0 white">5 dias úteis</p>
                                        <span className="white">Sedex</span>
                                    </div>
                                    <div className="cel1 d-flex justify-content-evenly">
                                        <div className="bar">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <img src="assets/icons/question-solid.svg" className="question-svg"/>
                                    </div>
                                    <div className="cel1 d-flex justify-content-center cel1-stars">
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-solid.svg" />
                                        <img src="assets/icons/star-regular.svg" />
                                    </div>
                                    <div className="cel16">
                                        <button className="btn-buy-select"><img src="assets/icons/cart-shopping-white.svg"/>COMPRAR</button>
                                    </div>
                                </div>
                            </div>
                        </CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
            </div>
        </div>
    )
}


export default Header