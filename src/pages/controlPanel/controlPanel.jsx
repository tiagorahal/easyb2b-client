import BackupIcon from "@mui/icons-material/Backup";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ControlPanelTableFiliais from "./controlPanelTableFiliais";
import ControlPanelTableUsers from "./controlPanelTableUsers";
import ControlPanelPagination from "./controlPanelPagination";

export default function ControlPanel() {
  return (
    <div className="bg-[#edf0f5]">
      <div className="w-9/12 m-auto  p-5 flex flex-col items-start">
        {/* first section */}
        <p className="font-bold text-lg pb-4 mt-5">Dados do Cliente</p>
        <div className="bg-white w-full rounded-lg text-[0.5rem] xl:text-[0.8rem] p-3">
          <div className="flex justify-between items-center h-[50px] xl:h-[90px] xl:pb-10">
            <p className="px-3 w-[21%]">
              <b>Nome Fantasia</b> <br />
              Construtora
            </p>
            <p className="px-3 w-[21%]">
              <b>Razão Social</b> <br />
              Construtora S.A.
            </p>
            <p className="px-3 w-[21%]">
              <b>CNPJ</b> <br />
              Construtora S.A.11.721.921/0001-60
            </p>
            <p className="px-3 w-[21%]">
              <b>Inscrição Estadual</b> <br />
              ISENTO
            </p>
          </div>
          <div className="flex justify-between items-center h-[50px] xl:h-[90px] xl:pt-4">
            <p className="px-3 w-[21%]">
              <b>Website</b> <br />
              https://www.brin3.com.br/
            </p>
            <p className="px-3 w-[21%]">
              <b>Telefone</b> <br />
              (11)3175-0183
            </p>
            <div class="px-3 w-[21%] text-[0.6rem] xl:text-[0.9rem]">
              <div class="flex w-full h-screen font-bold items-center justify-center bg-grey-lighter">
                <label class="text-white w-64 flex flex-col items-center bg-[#313457] text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
                  <BackupIcon />
                  <span>
                    <span className=" text-[0.5rem] xl:text-[0.9rem]">
                      {" "}
                      Alterar logo (218x128){" "}
                    </span>
                  </span>
                  <input type="file" class="hidden" />
                </label>
              </div>
            </div>
            <p className="px-3 w-[21%] flex justify-start">
              <button className="bg-[#313457] px-4 py-2 rounded-md text-white text-sm xl:text-lg font-bold">
                Salvar
              </button>
            </p>
          </div>
        </div>
        {/* second section */}
        <p className="font-bold text-lg py-4 mt-5">Referências Bancárias</p>
        <div className="bg-white min-h-[50px] w-full rounded-lg text-[0.7rem] xl:text-[0.9rem]"></div>
        {/* third section */}
        <p className="font-bold text-lg py-4 mt-5">Referências Comerciais</p>
        <div className="bg-white min-h-[50px] w-full rounded-lg text-[0.7rem] xl:text-[0.9rem]"></div>
        {/* fourth section */}
        <div className="flex justify-between items-end w-full">
          <p className="font-bold text-lg py-4 mt-5">Filiais</p>
          <a href="#" className="text-[0.6rem] py-1">
            <AddBoxIcon
              sx={{ fontSize: { sm: "0.8rem", xl: "0.7rem" }, color: "orange" }}
            />
            <span className="px-1">ADICIONAR FILIAL</span>
          </a>
        </div>
        <div className="bg-white w-full rounded-lg flex justify-between items-center p-3">
          <input
            type="text"
            id="first_name"
            class="w-[25%] text-[0.5rem] xl:text-[0.8rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
            placeholder="Id"
            required
          />
          <input
            type="text"
            id="first_name"
            class="w-[25%] text-[0.5rem] xl:text-[0.8rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
            placeholder="Nome"
            required
          />
          <input
            type="text"
            id="first_name"
            class="w-[25%] text-[0.5rem] xl:text-[0.8rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
            placeholder="CNPJ"
            required
          />
          <button className="bg-[#313457] px-4 py-2 rounded-md text-white  text-[0.5rem] xl:text-[0.8rem] font-bold">
            Buscar
          </button>
        </div>
        <div className="bg-white w-full flex justify-center items-center flex-col rounded-lg space-x-4 text-[0.5rem] xl:text-[0.7rem] pt-4 mt-3">
          <ControlPanelTableFiliais />
          <ControlPanelPagination />
        </div>
        {/* users */}
        <p className="font-bold text-lg py-4 mt-5">Usuários</p>
        <div className="bg-white w-full flex justify-center items-center flex-col rounded-lg space-x-4 text-[0.5rem] xl:text-[0.7rem] mt-1">
          <div className="grid grid-cols-3 gap-5 w-full p-4 text-[0.5rem] xl:text-[0.8rem]">
            {/* first row */}
            <input
              type="text"
              id="first_name"
              class="text-[0.6rem] xl:text-[0.8rem] xl:text-base rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400"
              placeholder="Id"
              required
            />
            <input
              type="text"
              id="first_name"
              class="text-[0.6rem] xl:text-[0.8rem] xl:text-base rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400"
              placeholder="Nome"
              required
            />
            <input
              type="text"
              id="first_name"
              class="text-[0.6rem] xl:text-[0.8rem] xl:text-base rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400"
              placeholder="Email"
              required
            />
            {/* second row */}
            <select
              data-te-select-init
              class="text-[0.6rem] xl:text-[0.8rem] xl:text-base rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
            >
              <option value="0">-Permissão-</option>
              <option value="NIVEL A">NIVEL A</option>
              <option value="NIVEL B">NIVEL B</option>
              <option value="NIVEL C">NIVEL C</option>
            </select>
            <select
              data-te-select-init
              class="text-[0.6rem] xl:text-[0.8rem] xl:text-base rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
            >
              <option value="0">-Filial-</option>
              <option value="MATRIZ MG">MATRIZ MG</option>
              <option value="MATRIZ ES">MATRIZ ES</option>
              <option value="MATRIZ SP">MATRIZ SP</option>
              <option value="MATRIZ RJ">MATRIZ RJ</option>
            </select>
            <select
              data-te-select-init
              class="text-[0.6rem] xl:text-[0.8rem] xl:text-base rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
            >
              <option value="0">-Fez Login-</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
            {/* third row */}
            <select
              data-te-select-init
              class="text-[0.6rem] xl:text-[0.8rem] xl:text-base rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
            >
              <option value="0">-Inativo-</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
            <button
              type="button"
              id="first_name"
              class="bg-[#313457] px-4 py-2 rounded-md text-white text-[0.6rem] xl:text-[0.8rem] xl:text-base font-bold text-center w-6/12"
              placeholder="Nome"
              required
            >
              BUSCAR
            </button>
          </div>
        </div>
        <div className="bg-white w-full flex justify-center items-center flex-col rounded-lg space-x-4 text-[0.5rem] xl:text-[0.7rem] pt-4 mt-3">
          <ControlPanelTableUsers />
          <ControlPanelPagination />
        </div>
      </div>
    </div>
  );
}
