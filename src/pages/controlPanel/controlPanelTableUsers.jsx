import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Modal } from "@mui/material";
import ControlPanelModalEditUser from "./controlPanelModalEditUser";

export default function ControlPanelTableUsers() {
  const [showModalEditUser, setshowModalEditUser] = useState(false);
  const closeModalEditUser = () => setshowModalEditUser(false);
  const openModalEditUser = () => setshowModalEditUser(true);

  const usuarios = ["Geraldo Santos", "Amanda Rodrigues", "Ibraim Silva"];

  return (
    <table className="table-auto border-collapse border-none w-[95%] m-auto">
      <tbody className="text-[0.5rem] xl:text-[0.8rem]">
        <tr className="bg-[#edf0f5] text-center font-bold">
          <td className="py-3 pl-2">ID</td>
          <td>NOME</td>
          <td>EMAIL</td>
          <td>SETOR</td>
          <td>PERMISSÃO</td>
          <td>FILIAIS</td>
          <td>PRODUTOS</td>
          <td>EDITAR</td>
          <td>SITUAÇÃO</td>
        </tr>
        {usuarios.map((usuario) => (
          <tr className="text-[0.5rem] xl:text-[0.8rem] text-center">
            <td className="py-3 pl-2">2125</td>
            <td>{usuario}</td>
            <td>geraldoadm@teste.com</td>
            <td>Administração</td>
            <td>Nível A</td>
            <td>
              <button className="bg-[#313457] px-4 py-2 rounded-md text-white font-bold text-center">
                Exibir
              </button>
            </td>
            <td>654 produtos</td>
            <td>
              <button onClick={openModalEditUser}>
                <BorderColorIcon
                  sx={{ fontSize: { sm: "1rem", xl: "1.5rem" } }}
                />
              </button>
              <Modal
                open={showModalEditUser}
                onClose={closeModalEditUser}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ overflow: "scroll" }}
              >
                <div className="mx-auto my-auto bg-white w-8/12 xl:w-4/12 rounded-lg pb-5">
                  <div className="flex justify-between font-medium text-2xl p-4">
                    <p className="">EDITAR USUÁRIO</p>
                    <button onClick={closeModalEditUser}>
                      <CloseIcon sx={{ color: "gray" }} />
                    </button>
                  </div>
                  <div className="border-b-2 border-gray-400 w-full"></div>
                  <ControlPanelModalEditUser />
                  <div className="border-b-2 border-gray-400 w-full pb-5"></div>
                  <div className="w-[95%] flex justify-end items-center pt-5 space-x-4">
                    <button
                      type="button"
                      className="text-[1rem] text-white font-bold bg-gray-500 px-3 py-2 rounded-md"
                      onClick={closeModalEditUser}
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </Modal>
            </td>
            <td>
              <button>Remover</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
