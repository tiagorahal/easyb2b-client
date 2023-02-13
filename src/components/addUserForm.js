import React from 'react';
import "./forms.css";

const AddUserForm = () => (
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
        <div className="col-3">
            <button className="forms-btn-add">SALVAR USUÁRIO</button>
        </div>
    </div>
);


export default AddUserForm;