export default function ControlPanelModalAddUser() {
  return (
    <>
      <div className="w-[90%] m-auto pt-5 space-y-5">
        <p className="font-bold pb-1">CLIENTE</p>
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Nome"
          required
        />
        <select
          data-te-select-init
          className="w-full text-[1rem] xl:text-[1rem] xl:text-base rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
        >
          <option value="0">-Permissões-</option>
          <option value="Permissão 1">Permissão 1</option>
          <option value="Permissão 2">Permissão 2</option>
          <option value="Permissão 3">Permissão 3</option>
        </select>
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Setor"
          required
        />
      </div>
      <div className="w-[90%] m-auto pt-10 space-y-5">
        <p className="font-bold pb-1">ACESSO</p>
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Email"
          required
        />
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Senha de Acesso"
          required
        />
        <input
          type="text"
          id="first_name"
          className="w-full mt-2 text-[1rem] xl:text-[1rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
          placeholder="Confirme a Senha"
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
            Refazer senha no próximo login
          </label>
        </div>
        <button
          type="button"
          className="text-[1rem] text-white font-bold bg-[#313457] px-3 py-2 rounded-md"
        >
          Salvar Usuário
        </button>
      </div>
    </>
  );
}
