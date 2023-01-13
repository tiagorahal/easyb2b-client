import React from "react";
import { useState } from 'react';
import "./header.css";

function Header(){
    const [isShown, setIsShown] = useState(false);

    return (
        
        <div>
            <div className="header container mt-3 mb-3">
                <div className="row head align-items-center">
                    {/* EasyB2B logo */}
                    <div className="col-auto">
                        <img src="assets/logo2.png" className="head-logo"/>
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
                    <div className="col-auto">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-5 space-fix">
                                <img src="assets/perfil.png" className="profile-pic rounded-circle text-right"/>
                            </div>
                            <div className="col-7">
                                <p className="username">Olá, Usuário</p>
                                <div className="d-flex align-items-center my-account-login">
                                    <p>minha conta</p>  
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
                    <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className="col-auto">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-4">
                                <img src="assets/icons/cart-shopping-solid.svg" className="cart-icon" />
                                <div className="badge">
                                    <span className="badge-value">1</span>
                                </div>
                            </div>
                            <div className="col-8 p-0">
                                <div>
                                    <p className="cart-total mb-0">TOTAL: R$ <span>7.235,00</span></p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="cart-balance mb-0">SALDO: R$ <span>9.000,00</span></p> 
                                </div>
                            </div>  
                        </div>
                    </div>
                    {isShown && (
                        <div className="cart-hover-box">
                            Teste
                        </div>
                    )}
                </div>
            </div>

            {/* Menu navbar */}
            <div className="header menu py-2 px-5">
                <div className="row">
                    <div className="col-1">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-3">
                                <img src="assets/icons/align-right-solid.svg" className="filter-icon" />
                            </div>
                            <div className="col-9">
                                <p className="filter m-0">Filtro</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-11 white align-self-center">
                        <div className="row align-items-center justify-content-center menu-item">
                            <div className="col-auto">COMPRE POR DEPARTAMENTO</div>
                            <div className="col text-center">Produtos</div>
                            <div className="col text-center">Item de Menu</div>
                            <div className="col text-center">Item de Menu</div>
                            <div className="col text-center">Item de Menu</div>
                            <div className="col text-center">Item de Menu</div>
                            <div className="col text-center">Item de Menu</div>
                            <div className="col text-center">Item de Menu</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Header