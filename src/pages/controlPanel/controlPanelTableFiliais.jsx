import { useState } from "react";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import ControlPanelModalEditBranch from "./controlPanelModalEditBranch";

export default function ControlPanelTableFiliais() {
  const [showModalEditBranch, setshowModalEditBranch] = useState(false);
  const closeModalEditBranch = () => setshowModalEditBranch(false);
  const openModalEditBranch = () => setshowModalEditBranch(true);

  const filiais = ["MATRIZ SJ", "MATRIZ RJ", "MATRIZ SP"];

  return (
    <table className="table-auto border-collapse border-none w-[95%] m-auto">
      <tbody className="text-[0.5rem] xl:text-[0.8rem]">
        <tr className="bg-[#edf0f5] text-center font-bold">
          <td className="py-3 pl-2">NOME</td>
          <td>END ENTREGA</td>
          <td>END COBRANÇA</td>
          <td>CNPJ</td>
          <td>USUÁRIOS</td>
          <td>PRODUTOS</td>
          <td>EDITAR</td>
          <td className="pr-2">REMOVER</td>
        </tr>
        {filiais.map((filial) => (
          <tr
            className="text-[0.5rem] xl:text-[0.8rem] text-center"
            key={filial}
          >
            <td className="py-3 pl-2 font-bold">{filial}</td>
            <td>Rua Gilberto Sabino, 215 - 13°</td>
            <td>Rua Gilberto Sabino, 215</td>
            <td>11.721.921/0001-60</td>
            <td>
              <button
                href="#"
                className="bg-[#313457] px-4 py-2 rounded-md text-white font-bold text-center"
              >
                Exibir
              </button>
            </td>
            <td>
              <button>
                <Inventory2Icon
                  sx={{ fontSize: { sm: "1rem", xl: "1.5rem" } }}
                />
              </button>
            </td>
            <td className="py-2">
              <button onClick={openModalEditBranch}>
                <BorderColorIcon
                  sx={{ fontSize: { sm: "1rem", xl: "1.5rem" } }}
                />
              </button>
              <Modal
                open={showModalEditBranch}
                onClose={closeModalEditBranch}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ overflow: "scroll" }}
              >
                <div className="mx-auto my-auto bg-white w-8/12 xl:w-4/12 rounded-lg pb-5">
                  <div className="flex justify-between font-medium text-2xl p-4">
                    <p className="">EDITAR FILIAL</p>
                    <button onClick={closeModalEditBranch}>
                      <CloseIcon sx={{ color: "gray" }} />
                    </button>
                  </div>
                  <div className="border-b-2 border-gray-400 w-full"></div>
                  <ControlPanelModalEditBranch />
                  <div className="border-b-2 border-gray-400 w-full pb-5"></div>
                  <div className="w-[95%] flex justify-end items-center pt-5 space-x-4">
                    <button
                      type="button"
                      className="text-[1rem] text-white font-bold bg-green-500 px-3 py-2 rounded-md"
                      onClick={closeModalEditBranch}
                    >
                      Salvar
                    </button>
                    <button
                      type="button"
                      className="text-[1rem] text-white font-bold bg-gray-500 px-3 py-2 rounded-md"
                      onClick={closeModalEditBranch}
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </Modal>
            </td>
            <td className="py-2 w-2">
              <button>
                <DeleteIcon sx={{ fontSize: { sm: "1rem", xl: "1.5rem" } }} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
