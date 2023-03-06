import Inventory2Icon from "@mui/icons-material/Inventory2";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ControlPanelTableUsers() {
  return (
    <table className="border-collapse border-none w-[95%] m-auto mt-2 mb-6 xl:mb-2">
      <thead>
        <tr className="bg-[#edf0f5] text-[0.5rem] xl:text-sm">
          <th className="xl:px-9 py-2">NOME</th>
          <th className="px-4 xl:px-9 py-2">NOME</th>
          <th className="px-4 xl:px-9 py-2">EMAIL</th>
          <th className="px-4 xl:px-9 py-2">SETOR</th>
          <th className="px-3 xl:px-9 py-2">PERMISSÃO</th>
          <th className="px-3 xl:px-9 py-2">FILIAIS</th>
          <th className="px-3 xl:px-9 py-2">PRODUTOS</th>
          <th className="px-3 xl:px-9 py-2">EDITAR</th>
          <th className="px-3 xl:px-9 py-2">SITUAÇÃO</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-[0.5rem] xl:text-[0.8rem]">
          <td className="font-bold pl-6 py-2 xl:pl-9 w-[12%] xl:w-[10%]">
          2125
          </td>
          <td className="px-4 py-2">Geraldo Santos</td>
          <td className="px-4 py-2">geraldoadm@teste.com</td>
          <td className="px-4 py-2 w-[15%] xl:w-[12%]">Administração</td>
          <td className="px-4 py-2">Nível A</td>
          <td className="px-4 py-2 flex justify-center items-center">
            <a
              href="#"
              className="bg-[#313457] px-4 py-2 rounded-md text-white font-bold text-center"
            >
              Exibir
            </a>
          </td>
          <td className="py-2">
          654 produtos
          </td>
          <td className="py-2">
            <a href="#" className="flex justify-center items-center ">
              {" "}
              <BorderColorIcon
                sx={{ fontSize: { sm: "1rem", xl: "1.5rem" } }}
              />{" "}
            </a>
          </td>
          <td className="py-2 w-2">
            <a href="#" className="flex justify-center items-center ">
              Remover
            </a>
          </td>
        </tr>
        <tr className="bg-[#edf0f5] text-[0.5rem] xl:text-[0.8rem]">
          <td className="font-bold pl-6 py-2 xl:pl-9 w-[12%] xl:w-[10%]">
          2365
          </td>
          <td className="px-4 py-2">Amanda Rodrigues</td>
          <td className="px-4 py-2">amandacnt@teste.com</td>
          <td className="px-4 py-2 w-[15%] xl:w-[12%]">Contabilidade</td>
          <td className="px-4 py-2">Nível B</td>
          <td className="px-4 py-2 flex justify-center items-center">
            <a
              href="#"
              className="bg-[#313457] px-4 py-2 rounded-md text-white font-bold text-center"
            >
              Exibir
            </a>
          </td>
          <td className="py-2">
          307 produtos
          </td>
          <td className="py-2">
            <a href="#" className="flex justify-center items-center ">
              {" "}
              <BorderColorIcon
                sx={{ fontSize: { sm: "1rem", xl: "1.5rem" } }}
              />{" "}
            </a>
          </td>
          <td className="py-2 w-2">
            <a href="#" className="flex justify-center items-center ">
              Remover
            </a>
          </td>
        </tr>
        <tr className="text-[0.5rem] xl:text-[0.8rem]">
          <td className="font-bold pl-6 py-2 xl:pl-9 w-[12%] xl:w-[10%]">
          2457
          </td>
          <td className="px-4 py-2">Ibraim Silva</td>
          <td className="px-4 py-2">ibraimmkt@teste.com</td>
          <td className="px-4 py-2 w-[15%] xl:w-[12%]">Marketing</td>
          <td className="px-4 py-2">Nível C</td>
          <td className="px-4 py-2 flex justify-center items-center">
            <a
              href="#"
              className="bg-[#313457] px-4 py-2 rounded-md text-white font-bold text-center"
            >
              Exibir
            </a>
          </td>
          <td className="py-2">
          114 produtos
          </td>
          <td className="py-2">
            <a href="#" className="flex justify-center items-center ">
              {" "}
              <BorderColorIcon
                sx={{ fontSize: { sm: "1rem", xl: "1.5rem" } }}
              />{" "}
            </a>
          </td>
          <td className="py-2 w-2">
            <a href="#" className="flex justify-center items-center ">
              Remover
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
