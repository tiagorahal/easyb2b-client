import React from 'react';
import "./forms.css";

const AddBranchForm = () => (
    <div>
        <h5 className="form-titles">IDENTIFICAÇÃO DA FILIAL</h5>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="Cod. Referência" className="forms-input" />
        </div>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="Centro de Custo" className="forms-input" />
        </div>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="Nome" className="forms-input" />
        </div>
        <div className="col-12 forms mb-5">
            <input type="text" placeholder="CNPJ" className="forms-input" />
        </div>

        <h5 className="form-titles">REGRAS DA FILIAL</h5>
        <div className="col-12 forms mb-3">
            <select className="forms-input">
                <option>-Limitar por-</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="Centro de Custo" className="forms-input" />
        </div>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="Nome" className="forms-input" />
        </div>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="Nome" className="forms-input" />
        </div>
        <div className="col-12 mb-5">
            <input type="checkbox" id="forceAproval" name="forceAproval" />
            <label for="forceAproval" className="forms-label"> Forçar Aprovação</label> <br />
            <input type="checkbox" id="limitBlock" name="imitBlock" />
            <label for="limitBlock" className="forms-label"> Bloquear acima do Limite para todos</label>
        </div>

        <h5 className="form-titles">ENDEREÇO DE ENTREGA</h5>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="CEP" className="forms-input" />
        </div>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="Cidade" className="forms-input" />
        </div>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="Rua" className="forms-input" />
        </div>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="Número" className="forms-input" />
        </div>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="Bairro" className="forms-input" />
        </div>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="Complemento" className="forms-input" />
        </div>
        <div className="col-12 mb-5">
            <input type="checkbox" id="sameAddress" name="sameAddress" />
            <label for="sameAddress" className="forms-label"> Utilizar endereço de entrega para cobrança</label> <br />
        </div>

        <h5 className="form-titles">ENDEREÇO DE COBRANÇA</h5>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="CEP" className="forms-input" />
        </div>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="Cidade" className="forms-input" />
        </div>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="Rua" className="forms-input" />
        </div>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="Número" className="forms-input" />
        </div>
        <div className="col-12 forms mb-3">
            <input type="text" placeholder="Bairro" className="forms-input" />
        </div>
        <div className="col-12 forms mb-5">
            <input type="text" placeholder="Complemento" className="forms-input" />
        </div>

        <h5 className="form-titles">LIMITE POR MIX DE PRODUTOS</h5>
        <div className="col-12 forms mb-3">
            <select className="forms-input">
                <option>-Mix de Produtos-</option>
                <option>EPI</option>
                <option>Material escolar</option>
            </select>
        </div>
        <div className="col-12 forms mb-4">
            <input type="text" placeholder="Valor Limite" className="forms-input" />
        </div>
        <div className="col-2">
            <button className="forms-btn-add">Adicionar</button>
        </div>
    </div>
);

export default AddBranchForm;