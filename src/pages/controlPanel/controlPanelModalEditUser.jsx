import CloseIcon from "@mui/icons-material/Close";

export default function ControlPanelModalEditUser() {
  const filiais = ["Matriz ES", "Matriz BH", "Matriz MG", "Matriz SP"];

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
      <div className="w-[90%] m-auto pt-10 space-y-5 pb-5">
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

      <div className="w-[90%] m-auto pt-5 space-y-5">
        <p className="font-bold pb-1">PERMISSÕES DO USUÁRIO</p>
        <div className="bg-[#FFF3CD] flex justify-between font-medium text-2xl px-4 py-2 rounded-lg">
          <p className="text-[0.8rem] p-0">
            Pesquisar Filial! Salve as alterações antes de buscar.
          </p>
          <button>
            <CloseIcon sx={{ color: "gray" }} />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <input
            type="text"
            id="first_name"
            className="w-[70%] text-[1rem] xl:text-[1rem] px-3 py-2 rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
            placeholder="Pesquisa por filial"
            required
          />
          <button
            type="button"
            className="w-3/12 text-[0.9rem] text-white font-bold bg-[#313457] px-5 py-2 rounded-md"
          >
            Buscar
          </button>
        </div>
        <table className="table-auto border-collapse border-none w-full">
          <tbody className="text-[0.9rem] xl:text-[0.8rem]">
            <tr className="bg-[#edf0f5] text-center font-bold">
              <td className="py-3 pl-2">FILIAL</td>
              <td>AUTORIZADO?</td>
            </tr>
            {filiais.map((filial) => (
              <tr className="text-center font-bold">
                <td className="py-3 pl-2">{filial}</td>
                <td>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-[#FFF3CD] flex justify-between font-medium text-2xl px-4 py-2 rounded-lg">
          <p className="text-[0.8rem] p-0">
            Salve as alterações antes de buscar.
          </p>
          <button>
            <CloseIcon sx={{ color: "gray" }} />
          </button>
        </div>
        <button
          type="button"
          className="w-3/12 text-[0.9rem] text-white font-bold bg-[#313457] px-5 py-2 rounded-md"
        >
          Salvar Permissões
        </button>
      </div>
    </>
  );
}
