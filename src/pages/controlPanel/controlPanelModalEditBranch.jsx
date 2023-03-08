export default function ControlPanelModalEditBranch() {
  return (
    <>
      <div className="w-[90%] m-auto pt-5 space-y-5">
        <p className="font-bold pb-1">IDENTIFICAÇÃO DA FILIAL</p>
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Cod. Referência"
          required
        />
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Centro de Custo"
          required
        />
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Nome"
          required
        />
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="CNPJ"
          required
        />
      </div>
      <div className="w-[90%] m-auto pt-10 space-y-5">
        <p className="font-bold pb-1">REGRAS DA FILIAL</p>
        <select
          data-te-select-init
          className="w-full text-[1rem] xl:text-[1rem] xl:text-base rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
        >
          <option value="0">-Limitar Por-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Centro de Custo"
          required
        />
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Nome"
          required
        />
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Nome"
          required
        />
        <div className="w-[90%] m-auto">
          <input
            className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem]"
            type="checkbox"
            value=""
            id="checkboxDefault"
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="checkboxDefault"
          >
            Forçar Aprovação
          </label>
        </div>
        <div className="w-[90%] m-auto">
          <input
            className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem]"
            type="checkbox"
            value=""
            id="checkboxDefault"
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="checkboxDefault"
          >
            Bloquear acima do Limite para todos
          </label>
        </div>
      </div>
      <div className="w-[90%] m-auto pt-10 space-y-5">
        <p className="font-bold pb-1">ENDEREÇO DE ENTREGA</p>
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="CEP"
          required
        />
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Cidade"
          required
        />
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Rua"
          required
        />
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Numero"
          required
        />
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Bairro"
          required
        />
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Complemento"
          required
        />
        <div className="w-[90%] m-auto">
          <input
            className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem]"
            type="checkbox"
            value=""
            id="checkboxDefault"
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="checkboxDefault"
          >
            Utilizar endereço de entrega para cobrança
          </label>
        </div>
      </div>
      <div className="w-[90%] m-auto pt-10 space-y-5">
        <p className="font-bold pb-1">ENDEREÇO DE COBRANÇA</p>
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="CEP"
          required
        />
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Cidade"
          required
        />
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Rua"
          required
        />
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Numero"
          required
        />
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Bairro"
          required
        />
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Complemento"
          required
        />
      </div>
      <div className="w-[90%] m-auto pt-10 space-y-5 ">
        <p className="font-bold pb-1">REGRAS DA FILIAL</p>
        <select
          data-te-select-init
          className="w-full text-[1rem] xl:text-[1rem] xl:text-base rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
        >
          <option value="0">-Mix de Produtos-</option>
          <option value="EPI">EPI</option>
          <option value="Material Escolar">Material Escolar</option>
        </select>
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Valor Limite"
          required
        />
        <button
          type="button"
          className="text-[1rem] text-white font-bold bg-[#313457] px-3 py-2 rounded-md"
        >
          Adicionar
        </button>
      </div>
    </>
  );
}
