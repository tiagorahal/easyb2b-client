import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SideCartProductsTable from "./sideCartProductsTable";

export default function SideCartProducts() {
  return (
    <Menu
      as="div"
      className="sticky top-[20%] left-full pr-1 inline-block text-left z-50"
    >
      <div>
        <Menu.Button className="w-full text-[0.7rem] xl:text-[0.9rem] p-2 rounded-t-xl text-white bg-[#313457]">
          <ShoppingCartIcon sx={{ color: "white" }} />
          <p>pedido 1</p>
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
        <Menu.Items className="absolute flex justify-between border-2 border-[#313457] mr-1 items-center w-[50rem] xl:w-[70rem] right-0 z-10 origin-top-right rounded-sm bg-[#edf0f5] ring-1 ring-[#313457] focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <div class=" bg-[#edf0f5] min-h-20 w-full p-4">
                {/* title */}
                <div className="flex justify-center space-x-5 items start pb-5">
                  <p className="col-start-1 col-span-3 text-xl pl-3 py-2">
                    <b>PEDIDO 1:</b> 9 PRODUTOS NO CARRINHO
                  </p>
                  <button class=" text-xl w-3/12 text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                    +Detalhes
                  </button>
                </div>
                {/* products cart */}
                <SideCartProductsTable />
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
