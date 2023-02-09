import React from 'react';
import { useState } from 'react';
import "./controlPanel.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddBranchForm from '../components/addBranchForm';
import AddUserForm from '../components/addUserForm';
import EditUserForm from '../components/editUserForm';


function ControlPanel(){
    const [showModalAddBranch, setshowModalAddBranch] = useState(false);
    const closeModalAddBranch = () => setshowModalAddBranch(false);
    const openModalAddBranch = () => setshowModalAddBranch(true);

    const [showModalEditBranch, setshowModalEditBranch] = useState(false);
    const closeModalEditBranch = () => setshowModalEditBranch(false);
    const openModalEditBranch = () => setshowModalEditBranch(true);

    const [showModalAddUser, setshowModalAddUser] = useState(false);
    const closeModalAddUser = () => setshowModalAddUser(false);
    const openModalAddUser = () => setshowModalAddUser(true);

    const [showModalEditUser, setshowModalEditUser] = useState(false);
    const closeModalEditUser = () => setshowModalEditUser(false);
    const openModalEditUser = () => setshowModalEditUser(true);

    return(
        <div className="d-flex justify-content-center p-2 control-panel">
            <div className="container">
                {/* CLIENT INFO */}
                <div className="d-flex mt-3">
                    <h5 className="titles-control-panel">Dados do Cliente</h5>
                </div>
                <div className="mb-5 d-block p-4 white-panel">
                    <div className="row">
                        <div className="mb-5 col-md-3 cp-item-name">
                            <p><b>Nome Fantasia</b></p>
                            <p>Construtora</p>
                        </div>
                        <div className="mb-5 col-md-3 cp-item-name">
                            <p><b>Razão Social</b></p>
                            <p>Construtora S.A.</p> 
                        </div>
                        <div className="mb-5 col-md-3 cp-item-name">
                            <p><b>CNPJ</b></p>
                            <p>Construtora S.A.11.721.921/0001-60</p>
                        </div>
                        <div className="mb-5 col-md-3 cp-item-name">
                            <p><b>Inscrição Estadual</b></p>
                            <p>ISENTO</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 cp-item-name">
                            <p><b>Website</b></p>
                            <p>https://www.brin3.com.br/</p>
                        </div>
                        <div className="col-md-3 cp-item-name">
                            <p><b>Telefone</b></p>
                            <p>(11)3175-0183</p> 
                        </div>
                        <div className="col-md-6 cp-item-name d-flex align-items-center">
                            <div className="col d-grid">
                                <span>Alterar logo (218x128)</span>
                                <input type="file" accept="image/*" />
                            </div>
                            <div className="col">
                                <button className="cp-save-btn"><b>Salvar</b></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BANKING REFERENCES */}
                <div className="d-flex mt-3">
                    <h5 className="titles-control-panel">Referências Bancárias</h5>
                </div>
                <div className="mb-5 d-block p-4 white-panel"></div>
                {/* COMMERCIAL REFERENCES */}
                <div className="d-flex mt-3">
                    <h5 className="titles-control-panel">Referências Comerciais</h5>
                </div>
                <div className="mb-5 d-block p-4 white-panel"></div>
                {/* BRANCHES */}
                <div className="d-flex mt-3 justify-content-between">
                    <h5 className="titles-control-panel">Filiais</h5>
                    <button className="add-branch align-self-center" onClick={openModalAddBranch}>
                        <img src="assets/icons/square-plus-solid.svg" className="plus-icon" />
                        ADICIONAR FILIAL
                    </button>
                    <Modal show={showModalAddBranch} onHide={closeModalAddBranch} className="cp-modals">
                        <Modal.Header closeButton>
                            <Modal.Title>ADICIONAR FILIAL</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="px-5">
                            <AddBranchForm />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={closeModalAddBranch}>
                                Salvar
                            </Button>
                            <Button variant="secondary" onClick={closeModalAddBranch}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="mb-5 d-block p-4 white-panel">
                    <div className="row">
                        <div className="col cp-ph">
                            <input type="text" placeholder="Id" className="cp-input" />
                        </div>
                        <div className="col cp-ph">
                            <input type="text" placeholder="Nome" className="cp-input" />
                        </div>
                        <div className="col cp-ph">
                            <input type="text" placeholder="CNPJ" className="cp-input" />
                        </div>
                        <div className="col-2 text-center">
                            <button className="cp-btn-search">BUSCAR</button>
                        </div>
                    </div>
                </div>
                <div className="mb-5 d-block p-4 white-panel">
                    <table className="w-100">
                        <thead>
                            <tr>
                                <th>NOME</th>
                                <th>END ENTREGA</th>
                                <th>END COBRANÇA</th>
                                <th>CNPJ</th>
                                <th>USUÁRIOS</th>
                                <th>PRODUTOS</th>
                                <th>EDITAR</th>
                                <th>REMOVER</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="cp-body-table">
                                <td>Matriz SJ</td>
                                <td>Rua Gilberto Sabino, 215 - 13°</td>
                                <td>Rua Gilberto Sabino, 215</td>
                                <td>11.721.921/0001-60</td>
                                <td><button className="cp-btn-show">Exibir</button></td>
                                <td><button className="cp-btn-icons"><img src="assets/produtos.png" className="cp-table-icons pl-4" /></button></td>
                                <td>
                                    <button className="cp-btn-icons" onClick={openModalEditBranch}>
                                        <img src="assets/icons/pen-to-square-regular.svg" className="cp-table-icons"/>
                                    </button>
                                </td>
                                <td><button className="cp-btn-icons"><img src="assets/icons/trash-can-regular.svg" className="cp-table-icons" /></button></td>
                            </tr>
                            <tr className="cp-body-table gray-row">
                                <td>Matriz MT</td>
                                <td>Rua Raimundo Costa, 345 - 10°</td>
                                <td>Rua Raimundo Costa, 345</td>
                                <td>11.721.921/0001-60</td>
                                <td><button className="cp-btn-show">Exibir</button></td>
                                <td><button className="cp-btn-icons"><img src="assets/produtos.png" className="cp-table-icons pl-4" /></button></td>
                                <td>
                                    <button className="cp-btn-icons" onClick={openModalEditBranch}>
                                        <img src="assets/icons/pen-to-square-regular.svg" className="cp-table-icons"/>
                                    </button>
                                </td>
                                <td><button className="cp-btn-icons"><img src="assets/icons/trash-can-regular.svg" className="cp-table-icons" /></button></td>
                            </tr>
                            <tr className="cp-body-table">
                                <td>Matriz MG</td>
                                <td>Rua Ibraim Matos, 931 - 6°</td>
                                <td>Rua Ibraim Matos, 931</td>
                                <td>11.721.921/0001-60</td>
                                <td><button className="cp-btn-show">Exibir</button></td>
                                <td><button className="cp-btn-icons"><img src="assets/produtos.png" className="cp-table-icons pl-4" /></button></td>
                                <td>
                                    <button className="cp-btn-icons" onClick={openModalEditBranch}>
                                        <img src="assets/icons/pen-to-square-regular.svg" className="cp-table-icons"/>
                                    </button>
                                </td>
                                <td><button className="cp-btn-icons"><img src="assets/icons/trash-can-regular.svg" className="cp-table-icons" /></button></td>
                            </tr>
                        </tbody>
                    </table>
                    <Modal show={showModalEditBranch} onHide={closeModalEditBranch} className="cp-modals">
                        <Modal.Header closeButton>
                            <Modal.Title>EDITAR FILIAL</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="px-5">
                            <AddBranchForm />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={closeModalEditBranch}>
                                Salvar
                            </Button>
                            <Button variant="secondary" onClick={closeModalEditBranch}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-left mt-3">
                            <button className="pagination"><img src="assets/icons/angles-left-solid.svg" /></button>
                            <button className="pagination"><img src="assets/icons/chevron-left-solid.svg" /></button>
                            <button className="pagination active">1</button>
                            <button className="pagination">2</button>
                            <button className="pagination">3</button>
                            <button className="pagination">4</button>
                            <button className="pagination"><img src="assets/icons/angles-right-solid.svg" /></button>
                            <button className="pagination"><img src="assets/icons/chevron-right-solid.svg" /></button>
                        </div>
                    </div>
                </div>
                {/* USERS */}
                <div className="d-flex mt-3 justify-content-between">
                    <h5 className="titles-control-panel">Usuários</h5>
                    <button className="add-branch align-self-center" onClick={openModalAddUser}>
                        <img src="assets/icons/square-plus-solid.svg" className="plus-icon" />
                        ADICIONAR USUÁRIOS
                    </button>
                    <Modal show={showModalAddUser} onHide={closeModalAddUser} className="cp-modals">
                        <Modal.Header closeButton>
                            <Modal.Title>ADICIONAR USUÁRIO</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="px-5">
                            <AddUserForm />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeModalAddUser}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="mb-5 d-block p-4 white-panel">
                    <div className="row mb-3">
                        <div className="col-4 cp-ph">
                            <input type="text" placeholder="Id" className="cp-input" />
                        </div>
                        <div className="col-4 cp-ph">
                            <input type="text" placeholder="Nome" className="cp-input" />
                        </div>
                        <div className="col-4 cp-ph">
                            <input type="text" placeholder="E-mail" className="cp-input" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 cp-ph">
                            <select id="permission" className="cp-input">
                                <option>-Permissão-</option>
                                <option value="levelA">Nível A</option>
                                <option value="levelB">Nível B</option>
                                <option value="levelC">Nível C</option>
                            </select>
                        </div>
                        <div className="col-4 cp-ph">
                            <select id="branch" className="cp-input">
                                <option>-Filial-</option>
                                <option value="">Matriz MG</option>
                                <option value="">Matriz ES</option>
                                <option value="">Matriz SP</option>
                                <option value="">Matriz RJ</option>
                            </select>
                        </div>
                        <div className="col-4 cp-ph">
                            <select id="login" className="cp-input">
                                <option>-Fez login-</option>
                                <option value="yes">Sim</option>
                                <option value="no">Não</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 cp-ph">
                            <select id="inactivity" className="cp-input">
                                <option>-Inativo-</option>
                                <option value="yes">Sim</option>
                                <option value="no">Não</option>
                            </select>
                        </div>
                        <div className="col-2">
                            <button className="cp-btn-search">BUSCAR</button>
                        </div>
                    </div>
                </div>
                <div className="mb-5 d-block p-4 white-panel">
                    <table className="w-100">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOME</th>
                                <th>E-MAIL</th>
                                <th>SETOR</th>
                                <th>PERMISSÃO</th>
                                <th>FILIAIS</th>
                                <th>PRODUTOS</th>
                                <th>EDITAR</th>
                                <th>SITUAÇÃO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="cp-body-table">
                                <td>2125</td>
                                <td>Geraldo Santos</td>
                                <td>geraldoadm@teste.com</td>
                                <td>Administração</td>
                                <td>Nível A</td>
                                <td><button className="cp-btn-show">Exibir</button></td>
                                <td>654 produtos</td>
                                <td>
                                    <button className="cp-btn-icons" onClick={openModalEditUser}>
                                        <img src="assets/icons/pen-to-square-regular.svg" className="cp-table-icons"/>
                                    </button>
                                </td>
                                <td><button className="cp-btn-icons">Remover</button></td>
                            </tr>
                            <tr className="cp-body-table gray-row">
                                <td>2365</td>
                                <td>Amanda Rodrigues</td>
                                <td>amandacnt@teste.com</td>
                                <td>Contabilidade</td>
                                <td>Nível B</td>
                                <td><button className="cp-btn-show">Exibir</button></td>
                                <td>307 produtos</td>
                                <td>
                                    <button className="cp-btn-icons" onClick={openModalEditUser}>
                                        <img src="assets/icons/pen-to-square-regular.svg" className="cp-table-icons"/>
                                    </button>
                                </td>
                                <td><button className="cp-btn-icons">Remover</button></td>
                            </tr>
                            <tr className="cp-body-table">
                                <td>2457</td>
                                <td>Ibraim Silva</td>
                                <td>ibraimmkt@teste.com</td>
                                <td>Marketing</td>
                                <td>Nível C</td>
                                <td><button className="cp-btn-show">Exibir</button></td>
                                <td>114 produtos</td>
                                <td>
                                    <button className="cp-btn-icons" onClick={openModalEditUser}>
                                        <img src="assets/icons/pen-to-square-regular.svg" className="cp-table-icons"/>
                                    </button>
                                </td>
                                <td><button className="cp-btn-icons">Remover</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <Modal show={showModalEditUser} onHide={closeModalEditUser} className="cp-modals">
                        <Modal.Header closeButton>
                            <Modal.Title>EDITAR USUÁRIO</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="px-5">
                            <EditUserForm />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeModalEditUser}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-left mt-3">
                            <button className="pagination"><img src="assets/icons/angles-left-solid.svg" /></button>
                            <button className="pagination"><img src="assets/icons/chevron-left-solid.svg" /></button>
                            <button className="pagination active">1</button>
                            <button className="pagination">2</button>
                            <button className="pagination">3</button>
                            <button className="pagination">4</button>
                            <button className="pagination"><img src="assets/icons/angles-right-solid.svg" /></button>
                            <button className="pagination"><img src="assets/icons/chevron-right-solid.svg" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default ControlPanel;
