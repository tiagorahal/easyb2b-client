import Inventory2Icon from "@mui/icons-material/Inventory2";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ControlPanelTableFiliais() {
  return (
    <table className="border-collapse border-none w-[95%] m-auto mt-2 mb-6 xl:mb-2">
      <thead>
        <tr className="bg-[#edf0f5] text-[0.5rem] xl:text-sm">
          <th className="xl:px-9 py-2">NOME</th>
          <th className="px-4 xl:px-9 py-2">END ENTREGA</th>
          <th className="px-4 xl:px-9 py-2">END COBRANÇA</th>
          <th className="px-4 xl:px-9 py-2">CNPJ</th>
          <th className="px-3 xl:px-9 py-2">USUÁRIOS</th>
          <th className="px-3 xl:px-9 py-2">PRODUTOS</th>
          <th className="px-3 xl:px-9 py-2">EDITAR</th>
          <th className="px-3 xl:px-9 py-2">REMOVER</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-[0.5rem] xl:text-[0.8rem]">
          <td className="font-bold pl-6 py-2 xl:pl-9 w-[12%] xl:w-[10%]">
            Matriz SJ
          </td>
          <td className="px-4 py-2">Rua Gilberto Sabino, 215 - 13°</td>
          <td className="px-4 py-2">Rua Gilberto Sabino, 215</td>
          <td className="px-4 py-2 w-[15%] xl:w-[12%]">11.721.921/0001-60</td>
          <td className="px-4 py-2 flex justify-center items-center">
            <a
              href="#"
              className="bg-[#313457] px-4 py-2 rounded-md text-white font-bold text-center"
            >
              Exibir
            </a>
          </td>
          <td className="py-2">
            <a href="#" className="flex justify-center items-center ">
              {" "}
              <Inventory2Icon
                sx={{ fontSize: { sm: "1rem", xl: "1.5rem" } }}
              />{" "}
            </a>
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
              {" "}
              <DeleteIcon
                sx={{ fontSize: { sm: "1rem", xl: "1.5rem" } }}
              />{" "}
            </a>
          </td>
        </tr>
        <tr className="bg-[#edf0f5] text-[0.5rem] xl:text-[0.8rem]">
          <td className="font-bold pl-6 py-2 xl:pl-9">Matriz SJ</td>
          <td className="px-4 py-2">Rua Gilberto Sabino, 215 - 13°</td>
          <td className="px-4 py-2">Rua Gilberto Sabino, 215</td>
          <td className="px-4 py-2">11.721.921/0001-60</td>
          <td className="px-4 py-2 flex justify-center">
            <a
              href="#"
              className="bg-[#313457] px-4 py-2 rounded-md text-white font-bold text-center"
            >
              Exibir
            </a>
          </td>
          <td className="px-4 py-2">
            <a href="#" className="flex justify-center items-center ">
              {" "}
              <Inventory2Icon
                sx={{ fontSize: { sm: "1rem", xl: "1.5rem" } }}
              />{" "}
            </a>
          </td>
          <td className="px-4 py-2">
            <a href="#" className="flex justify-center items-center ">
              {" "}
              <BorderColorIcon
                sx={{ fontSize: { sm: "1rem", xl: "1.5rem" } }}
              />{" "}
            </a>
          </td>
          <td className="px-4 py-2">
            <a href="#" className="flex justify-center items-center ">
              {" "}
              <DeleteIcon
                sx={{ fontSize: { sm: "1rem", xl: "1.5rem" } }}
              />{" "}
            </a>
          </td>
        </tr>
        <tr className="text-[0.5rem] xl:text-[0.8rem]">
          <td className="font-bold pl-6 py-2 xl:pl-9">Matriz SJ</td>
          <td className="px-4 py-2">Rua Gilberto Sabino, 215 - 13°</td>
          <td className="px-4 py-2">Rua Gilberto Sabino, 215</td>
          <td className="px-4 py-2">11.721.921/0001-60</td>
          <td className="px-4 py-2 flex justify-center border-none">
            <a
              href="#"
              className="bg-[#313457] px-4 py-2 rounded-md text-white font-bold text-center"
            >
              Exibir
            </a>
          </td>
          <td className="px-4 py-2">
            <a href="#" className="flex justify-center items-center ">
              {" "}
              <Inventory2Icon
                sx={{ fontSize: { sm: "1rem", xl: "1.5rem" } }}
              />{" "}
            </a>
          </td>
          <td className="px-4 py-2">
            <a href="#" className="flex justify-center items-center ">
              {" "}
              <BorderColorIcon
                sx={{ fontSize: { sm: "1rem", xl: "1.5rem" } }}
              />{" "}
            </a>
          </td>
          <td className="px-4 py-2">
            <a href="#" className="flex justify-center items-center ">
              {" "}
              <DeleteIcon
                sx={{ fontSize: { sm: "1rem", xl: "1.5rem" } }}
              />{" "}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
