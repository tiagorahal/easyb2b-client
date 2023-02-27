import React from "react";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

function Orders() {
  return (
    <div className="h-screen bg-gray-200 overflow-scroll overflow-x-hidden">
      <div className="w-10/12 m-auto pt-7">
        <div className="flex justify-between items-center pb-7">
          <span className="text-3xl font-bold">Pedidos Realizados</span>
          <span className="flex items-center space-x-3">
            <a href="">
              <LibraryAddIcon />
              Exportar Produtos Comprados
            </a>
            <a href="">
              <LibraryAddIcon />
              Exportar Pedidos
            </a>
          </span>
        </div>
        <div className="bg-white min-h-[300px] rounded-md">
          <div className="flex flex-col pt-4">
            <div class="block min-h-[1.5rem] pl-[1rem]">
              <input
                class=""
                type="radio"
                name="flexRadioDefault"
                id="radioDefault01"
              />
              <label
                class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                for="radioDefault01"
              >
                Catálogo
              </label>
            </div>
            <div class="block min-h-[1.5rem] pl-[1rem]">
              <input
                class=""
                type="radio"
                name="flexRadioDefault"
                id="radioDefault01"
              />
              <label
                class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                for="radioDefault01"
              >
                Cotação
              </label>
            </div>
          </div>
          {/* inputs */}
          <div class="grid grid-cols-4 gap-2 px-4 py-3">
            <div class="relative">
              <label className="invisible">Id Input</label>
              <input type="text" class="rounded-lg w-[100%]" placeholder="Id" />
            </div>
            <div class="relative">
              <label>Faturamento de</label>
              <input type="date" class="rounded-lg w-[100%]" placeholder="Id" />
            </div>
            <div class="relative">
              <label>Até faturamento</label>
              <input type="date" class="rounded-lg w-[100%]" placeholder="Id" />
            </div>
            <div class="relative">
              <label className="invisible">Select Input</label>
              <select className="w-full rounded-lg text-sm">
                <option value="Todas as Prioridades">
                  Todas as Prioridades
                </option>
              </select>
            </div>
            {/* second row */}
            <div class="relative">
              <label className="invisible">IDate Input</label>
              <input type="date" class="rounded-lg w-[100%]" placeholder="Id" />
            </div>
            <div class="relative">
              <label className="invisible">IDate Input</label>
              <input type="date" class="rounded-lg w-[100%]" placeholder="Id" />
            </div>
            <div class="relative">
              <label className="invisible">Select Input</label>
              <select className="w-full rounded-lg">
                <option value="Todos">Todos</option>
              </select>
            </div>
            <div class="relative">
              <label className="invisible">Select Input</label>
              <select className="w-full rounded-lg">
                <option value="Todos">Todos</option>
              </select>
            </div>
            {/* last row */}
            <div class="relative">
              <label className="invisible">Text Input</label>
              <input type="text" class="rounded-lg w-[100%]" />
            </div>
            <div class="relative">
              <label className="invisible">Text Input</label>
              <button
                type="button"
                class="rounded-lg w-[100%] font-bold bg-blue-500 h-[65%] text-white"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
        {/* middle section */}
        <div className="bg-white rounded-md mt-3 p-4 ">
          <p className="font-bold pb-2">LEGENDA</p>
          <span className="flex items-end space-x-3">
            <div className="bg-[#ECFDDB] h-7 w-7"></div>
            <span className="pr-10">Pedidos de Cotação</span>
            <div className="bg-[#D8EEFC] h-7 w-7"></div>
            <span>Pedidos de Catálogo</span>
          </span>
        </div>
        {/* lower section */}
        <div className="bg-white rounded-md mt-3 p-4 ">
          <div className="flex items-center justify-start space-x-4 text-sm">
            <span>
              <b>ID :</b> 55624
            </span>
            <span>
              <b>CARRINHO INICIADO EM :</b> 20/11/2022 às 23:45
            </span>
            <span>
              <b>FILIAL :</b> MATRIZ MG
            </span>
            <span>
              <b>STATUS :</b> NO CARRINHO
            </span>
          </div>
          <div className="flex justify-start items-center space-x-4 text-[0.7rem] xl:text-base pt-4">
            <button className="bg-blue-500 p-2 rounded-lg text-white font-bold">
              CLONAR PEDIDO
            </button>
            <button className="bg-blue-500 p-2 rounded-lg text-white font-bold">
              VER RESUMO
            </button>
            <a
              href="orderdetails"
              className="bg-blue-500 p-2 rounded-lg text-white font-bold"
            >
              VER DETALHES
            </a>

            <button className="bg-blue-500 p-2 rounded-lg text-white font-bold">
              CONTRATAR
            </button>
            <button className="bg-green-500 p-2 rounded-lg text-white font-bold">
              EDITAR
            </button>
            <button className="bg-red-500 p-2 rounded-lg text-white font-bold">
              CANCELAR
            </button>
            <span className="font-bold text-[0.9rem] xl:text-base pl-[3%]">
              R$ 1.957,89
            </span>
          </div>
          {/* table */}
          <div className="flex justify-center items-center space-x-4 text-[0.6rem] xl:text-sm pt-4">
            <table class="table-fixed">
              <thead>
                <tr>
                  <th class="w-[10%] px-4 xl:px-9 py-2">COD</th>
                  <th class="w-[10%] px-4 xl:px-9 py-2">PRODUTO</th>
                  <th class="w-[10%] px-4 xl:px-9 py-2">CORES</th>
                  <th class="w-[10%] px-4 xl:px-9 py-2">TIPOS MATERIAL</th>
                  <th class="w-[10%] px-4 xl:px-9 py-2">COD CLIENTE</th>
                  <th class="w-[10%] px-4 xl:px-9 py-2">COD FORNECEDOR</th>
                  <th class="w-[10%] px-4 xl:px-9 py-2">QUANTIDADE</th>
                  <th class="w-[10%] px-4 xl:px-9 py-2">PREÇO UNICO</th>
                  <th class="w-[10%] px-4 xl:px-9 py-2">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-bold border px-4 py-2">123</td>
                  <td class="border px-4 py-2">Produto</td>
                  <td class="border px-4 py-2"></td>
                  <td class="border px-4 py-2"></td>
                  <td class="border px-4 py-2">1321</td>
                  <td class="border px-4 py-2">21</td>
                  <td class="border px-4 py-2">1</td>
                  <td class="border px-4 py-2">21</td>
                  <td class="border px-4 py-2">R$ 121,00</td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="font-bold border px-4 py-2">123</td>
                  <td class="border px-4 py-2">Produto</td>
                  <td class="border px-4 py-2"></td>
                  <td class="border px-4 py-2"></td>
                  <td class="border px-4 py-2">1321</td>
                  <td class="border px-4 py-2">21</td>
                  <td class="border px-4 py-2">1</td>
                  <td class="border px-4 py-2">21</td>
                  <td class="border px-4 py-2">R$ 121,00</td>
                </tr>
                <tr>
                  <td class="font-bold border px-4 py-2">123</td>
                  <td class="border px-4 py-2">Produto</td>
                  <td class="border px-4 py-2"></td>
                  <td class="border px-4 py-2"></td>
                  <td class="border px-4 py-2">1321</td>
                  <td class="border px-4 py-2">21</td>
                  <td class="border px-4 py-2">1</td>
                  <td class="border px-4 py-2">21</td>
                  <td class="border px-4 py-2">R$ 121,00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between text-sm xl:text-base font-bold my-1">
            <span className="">Frete</span>
            <span>R$ 0,00</span>
          </div>
          <div className="flex justify-between text-sm xl:text-base font-bold">
            <span>Total do pedido</span>
            <span>R$ 1.957,89</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
