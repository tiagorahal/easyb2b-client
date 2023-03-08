import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductImage from "../assets/produto_2_semfundo.png";
import CancelIcon from "@mui/icons-material/Cancel";

export default function HeaderUserDropdown() {
  const saldoTotal = "6300,00";

  return (
    <Menu as="div" className="relative inline-block text-left ">
      <div>
        <Menu.Button className="inline-flex justify-center text-[0.7rem] xl:text-[0.9rem] p-0 text-gray-500">
          <ShoppingCartIcon
            sx={{ color: "gray", fontSize: { md: "1.5rem", lg: "2rem" } }}
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute flex justify-around p-0 items-center right-0 z-10 w-[21rem] origin-top-right bg-[#F1F1F1] rounded-md  ring-1 ring-[#313457] focus:outline-none">
          <div className="">
            <Menu.Item>
              {({ active }) => (
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#F1F1F1]">
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl text-[#313457] mb-2">
                      Meu Carrinho
                    </div>
                    <p className="text-[#313457] text-[0.6rem] lg:text-[0.8rem] font-bold">
                      Saldo: R${saldoTotal}
                    </p>
                  </div>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <>
                  <div className="flex items-center justify-between max-w-sm border-b-4 border-[#F1F1F1] overflow-hidden shadow-lg bg-white">
                    <img
                      className="w-24 h-24"
                      src={ProductImage}
                      alt="Sunset in the mountains"
                    />
                    <div className="px-6 flex  justify-start items-center">
                      <div className="flex flex-col justify-between items-start">
                        <div className="text-[#313457] text-[0.6rem] lg:text-[0.8rem] font-bold pb-1">
                          Bobina para Calculadora
                        </div>
                        <p className="text-gray-700 text-[0.4rem] lg:text-[0.6rem] pb-1">
                          Quantidade: 3
                        </p>
                        <div className="text-[#313457] text-[0.6rem] lg:text-[0.8rem] font-bold pb-1">
                          R$128,90
                        </div>
                      </div>
                      <CancelIcon sx={{ color: "gray", paddingX: "5px" }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between max-w-sm border-b-4 border-[#F1F1F1] overflow-hidden shadow-lg bg-white">
                    <img
                      className="w-24 h-24"
                      src={ProductImage}
                      alt="Sunset in the mountains"
                    />
                    <div className="px-6 flex  justify-start items-center">
                      <div className="flex flex-col justify-between items-start">
                        <div className="text-[#313457] text-[0.6rem] lg:text-[0.8rem] font-bold pb-1">
                          Bobina para Calculadora
                        </div>
                        <p className="text-gray-700 text-[0.4rem] lg:text-[0.6rem] pb-1">
                          Quantidade: 3
                        </p>
                        <div className="text-[#313457] text-[0.6rem] lg:text-[0.8rem] font-bold pb-1">
                          R$128,90
                        </div>
                      </div>
                      <CancelIcon sx={{ color: "gray", paddingX: "5px" }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between max-w-sm border-b-4 border-[#F1F1F1] overflow-hidden shadow-lg bg-white">
                    <img
                      className="w-24 h-24"
                      src={ProductImage}
                      alt="Sunset in the mountains"
                    />
                    <div className="px-6 flex  justify-start items-center">
                      <div className="flex flex-col justify-between items-start">
                        <div className="text-[#313457] text-[0.6rem] lg:text-[0.8rem] font-bold pb-1">
                          Bobina para Calculadora
                        </div>
                        <p className="text-gray-700 text-[0.4rem] lg:text-[0.6rem] pb-1">
                          Quantidade: 3
                        </p>
                        <div className="text-[#313457] text-[0.6rem] lg:text-[0.8rem] font-bold pb-1">
                          R$128,90
                        </div>
                      </div>
                      <CancelIcon sx={{ color: "gray", paddingX: "5px" }} />
                    </div>
                  </div>
                </>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#F1F1F1]">
                  <div className="flex justify-between items-center px-6 py-4">
                    <div className="font-bold text-lg text-gray-700">Total:</div>
                    <p className="font-bold text-lg text-gray-700">R$7.230,00</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 px-6 py-4">
                    <button className="bg-white hover:bg-blue-700 text-stone-600 text-[0.6rem] lg:text-[0.8rem] font-bold py-2 px-4 rounded-full border-solid border-2 border-stone-300 w-full">
                      Finalizar
                    </button>
                    <button className="bg-white hover:bg-blue-700 text-stone-600 text-[0.6rem] lg:text-[0.8rem] font-bold py-2 px-4 rounded-full border-solid border-2 border-stone-300">
                      Editar Cesta
                    </button>
                  </div>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
