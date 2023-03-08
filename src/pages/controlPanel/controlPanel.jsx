import { useState } from "react";
import { Modal } from "@mui/material";
import BackupIcon from "@mui/icons-material/Backup";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ControlPanelTableFiliais from "./controlPanelTableFiliais";
import ControlPanelTableUsers from "./controlPanelTableUsers";
import ControlPanelPagination from "./controlPanelPagination";
import ControlPanelModalAddBranch from "./controlPanelModalAddBranch";
import ControlPanelModalAddUser from "./controlPanelModaAddlUser";
import CloseIcon from "@mui/icons-material/Close";

export default function ControlPanel() {
  const [showModalAddBranch, setshowModalAddBranch] = useState(false);
  const closeModalAddBranch = () => setshowModalAddBranch(false);
  const openModalAddBranch = () => setshowModalAddBranch(true);



  const [showModalAddUser, setshowModalAddUser] = useState(false);
  const closeModalAddUser = () => setshowModalAddUser(false);
  const openModalAddUser = () => setshowModalAddUser(true);

  return (
    <div className="bg-[#edf0f5] pb-10">
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
            <div className="px-3 w-[21%] text-[0.6rem] xl:text-[0.9rem]">
              <div className="flex w-full h-screen font-bold items-center justify-center bg-grey-lighter">
                <label className="text-white w-64 flex flex-col items-center bg-[#313457] text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
                  <BackupIcon />
                  <span>
                    <span className=" text-[0.5rem] xl:text-[0.9rem]">
                      {" "}
                      Alterar logo (218x128){" "}
                    </span>
                  </span>
                  <input type="file" className="hidden" />
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
          <button
            className="text-[0.5rem] xl:text-[0.8rem] py-1 flex items-center space-x-2"
            onClick={openModalAddBranch}
          >
            <AddBoxIcon
              sx={{
                fontSize: { sm: "0.9rem", xl: "1.3rem" },
                color: "orange",
                paddingRight: "3px",
              }}
            />
            ADICIONAR FILIAL
          </button>
          {/* add modal */}
          <Modal
            open={showModalAddBranch}
            onClose={closeModalAddBranch}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ overflow: "scroll" }}
          >
            <div className="mx-auto my-auto bg-white w-8/12 xl:w-4/12 rounded-lg pb-5">
              <div className="flex justify-between font-medium text-2xl p-4">
                <p className="">ADICIONAR FILIAL</p>
                <button onClick={closeModalAddBranch}>
                  <CloseIcon sx={{ color: "gray" }} />
                </button>
              </div>
              <div className="border-b-2 border-gray-400 w-full"></div>
              <ControlPanelModalAddBranch />
              <div className="border-b-2 border-gray-400 w-full pb-5"></div>
              <div className="w-[95%] flex justify-end items-center pt-5 space-x-4">
              <button
                  type="button"
                  className="text-[1rem] text-white font-bold bg-green-500 px-3 py-2 rounded-md"
                  onClick={closeModalAddBranch}
                >
                  Salvar
                </button>
                <button
                  type="button"
                  className="text-[1rem] text-white font-bold bg-gray-500 px-3 py-2 rounded-md"
                  onClick={closeModalAddBranch}
                >
                  Fechar
                </button>

              </div>
            </div>
          </Modal>
        </div>
        <div className="bg-white w-full rounded-lg flex justify-between items-center p-3">
          <input
            type="text"
            id="first_name"
            className="w-[25%] text-[0.5rem] xl:text-[0.8rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
            placeholder="Id"
            required
          />
          <input
            type="text"
            id="first_name"
            className="w-[25%] text-[0.5rem] xl:text-[0.8rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
            placeholder="Nome"
            required
          />
          <input
            type="text"
            id="first_name"
            className="w-[25%] text-[0.5rem] xl:text-[0.8rem] rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
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
        <div className="flex justify-between items-end w-full">
        <p className="font-bold text-lg py-4 mt-5">Usuários</p>
        <button
            className="text-[0.5rem] xl:text-[0.8rem] py-1 flex items-center space-x-2"
            onClick={openModalAddUser}
          >
            <AddBoxIcon
              sx={{
                fontSize: { sm: "0.9rem", xl: "1.3rem" },
                color: "orange",
                paddingRight: "3px",
              }}
            />
            ADICIONAR USUÁRIOS
          </button>
          <Modal
            open={showModalAddUser}
            onClose={closeModalAddUser}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ overflow: "scroll", paddingTop: '5%' }}
          >
            <div className="mx-auto my-auto bg-white w-8/12 xl:w-4/12 rounded-lg pb-5">
              <div className="flex justify-between font-medium text-2xl p-4">
                <p className="">ADICIONAR USUÁRIO</p>
                <button onClick={closeModalAddUser}>
                  <CloseIcon sx={{ color: "gray" }} />
                </button>
              </div>
              <div className="border-b-2 border-gray-400 w-full"></div>
              <ControlPanelModalAddUser />
              <div className="border-b-2 border-gray-400 w-full pb-5"></div>
              <div className="w-[95%] flex justify-end items-center pt-5 space-x-4">
              <button
                  type="button"
                  className="text-[1rem] text-white font-bold bg-green-500 px-3 py-2 rounded-md"
                  onClick={closeModalAddUser}
                >
                  Salvar
                </button>
                <button
                  type="button"
                  className="text-[1rem] text-white font-bold bg-gray-500 px-3 py-2 rounded-md"
                  onClick={closeModalAddUser}
                >
                  Fechar
                </button>

              </div>
            </div>
          </Modal>
        </div>
        
        <div className="bg-white w-full flex justify-center items-center flex-col rounded-lg space-x-4 text-[0.5rem] xl:text-[0.7rem] mt-1">
          <div className="grid grid-cols-3 gap-5 w-full p-4 text-[0.5rem] xl:text-[0.8rem]">
            {/* first row */}
            <input
              type="text"
              id="first_name"
              className="text-[0.6rem] xl:text-[0.8rem] xl:text-base rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400"
              placeholder="Id"
              required
            />
            <input
              type="text"
              id="first_name"
              className="text-[0.6rem] xl:text-[0.8rem] xl:text-base rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400"
              placeholder="Nome"
              required
            />
            <input
              type="text"
              id="first_name"
              className="text-[0.6rem] xl:text-[0.8rem] xl:text-base rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400"
              placeholder="Email"
              required
            />
            {/* second row */}
            <select
              data-te-select-init
              className="text-[0.6rem] xl:text-[0.8rem] xl:text-base rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
            >
              <option value="0">-Permissão-</option>
              <option value="NIVEL A">NIVEL A</option>
              <option value="NIVEL B">NIVEL B</option>
              <option value="NIVEL C">NIVEL C</option>
            </select>
            <select
              data-te-select-init
              className="text-[0.6rem] xl:text-[0.8rem] xl:text-base rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
            >
              <option value="0">-Filial-</option>
              <option value="MATRIZ MG">MATRIZ MG</option>
              <option value="MATRIZ ES">MATRIZ ES</option>
              <option value="MATRIZ SP">MATRIZ SP</option>
              <option value="MATRIZ RJ">MATRIZ RJ</option>
            </select>
            <select
              data-te-select-init
              className="text-[0.6rem] xl:text-[0.8rem] xl:text-base rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
            >
              <option value="0">-Fez Login-</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
            {/* third row */}
            <select
              data-te-select-init
              className="text-[0.6rem] xl:text-[0.8rem] xl:text-base rounded-md bg-[#edf0f5] border border-[#edf0f5] focus:border-orange-400 focus:ring-0"
            >
              <option value="0">-Inativo-</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
            <button
              type="button"
              id="first_name"
              className="bg-[#313457] px-4 py-2 rounded-md text-white text-[0.6rem] xl:text-[0.8rem] xl:text-base font-bold text-center w-6/12"
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
