import React from 'react';
import "./forms.css";


const EditUserForm = () => (
    <div>
        <h5 className="form-titles">CLIENTE</h5>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="Nome" className="forms-input" />
        </div>
        <div className="col-12 forms mb-3">
            <select className="forms-input">
                <option>-Permissões-</option>
                <option>Permissão 1</option>
                <option>Permissão 2</option>
                <option>Permissão 3</option>
            </select>
        </div>
        <div className="col-12 forms mb-5">
            <input type="text" placeholder="Setor" className="forms-input" />
        </div>

        <h5 className="form-titles">ACESSO</h5>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="E-mail" className="forms-input" />
        </div>
        <div className="col-12 forms mb-3">
            <input type="password" placeholder="Senha de acesso" className="forms-input" />
        </div>
        <div className="col-12 forms mb-3">
            <input type="password" placeholder="Confirme a senha" className="forms-input" />
        </div>
        <div className="col-12 mb-4">
            <input type="checkbox" id="redoPassword" name="redoPassword" />
            <label for="redoPassword" className="forms-label">Refazer senha no próximo login</label> <br />
        </div>
        <div className="col-3 mb-5">
            <button className="forms-btn-add">SALVAR USUÁRIO</button>
        </div>

        <h5 className="form-titles">PERMISSÕES DO USUÁRIO</h5>
        <div class="col-12 alert mb-3">
            <span class="closebtn">&times;</span>
            <strong>Pesquisar Filial! </strong> Salve as alterações antes de buscar.
        </div>
        <div className="row d-flex">
            <div className="col-9 forms mb-3">
                <input type="text" placeholder="Pesquisar por filial" className="forms-input" />
            </div>
            <div className="col-3 mb-3">
                <button className="forms-btn-add">BUSCAR</button>
            </div>
        </div>
        <div className="table-forms mb-3">
            <table className="w-100">
                <thead>
                    <tr>
                        <th>FILIAL</th>
                        <th>AUTORIZADO?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="forms-body-table">
                        <td>Matriz ES</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr className="forms-body-table">
                        <td>Matriz BH</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr className="forms-body-table">
                        <td>Matriz MG</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                    <tr className="forms-body-table">
                        <td>Matriz SP</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-12 alert mb-3">
            <span class="closebtn">&times;</span>
            Salve as alterações antes de buscar.
        </div>
        <div className="col-3 mb-4">
            <button className="forms-btn-add">SALVAR PERMISSÕES</button>
        </div>
    </div>
);


export default EditUserForm;