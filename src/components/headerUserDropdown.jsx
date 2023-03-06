import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import SettingsIcon from "@mui/icons-material/Settings";
import DescriptionIcon from "@mui/icons-material/Description";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CheckIcon from "@mui/icons-material/Check";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import LinkIcon from "@mui/icons-material/Link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderUserDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center text-[0.7rem] xl:text-[0.9rem] p-0 text-gray-500">
          minha conta
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
        <Menu.Items className="absolute flex justify-around p-0 items-center right-0 z-10 w-[24rem] origin-top-right rounded-md bg-white ring-1 ring-[#313457] focus:outline-none">
          <div className="p-2">
            <Menu.Item>
              {({ active }) => (
                <div className="flex justify-around">
                  <a
                    href="/controlpanel"
                    type="submit"
                    className={classNames(
                      "block py-1 text-left text-[0.6rem] lg:text-[0.8rem] flex items-center justify-start h-12"
                    )}
                  >
                    <SettingsIcon
                      sx={{
                        color: "gray",
                        fontSize: { sm: "1.3rem", lg: "1.5rem" },
                      }}
                    />
                    Painel de Controle
                  </a>
                  <button
                    type="submit"
                    className={classNames(
                      "block pl-5 text-left text-[0.6rem] lg:text-[0.8rem] flex items-center justify-start h-12"
                    )}
                  >
                    <CheckIcon
                      sx={{
                        color: "gray",
                        fontSize: { md: "1.3rem", lg: "1.5rem" },
                      }}
                    />
                    Aprovação de Pedidos
                  </button>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className="flex justify-around">
                  <a
                    href="/orders"
                    type="submit"
                    className={classNames(
                      "block py-1 w-full text-left text-[0.6rem] lg:text-[0.8rem] flex items-center justify-start h-12"
                    )}
                  >
                    <DescriptionIcon
                      sx={{
                        color: "gray",
                        fontSize: { md: "1.3rem", lg: "1.5rem" },
                      }}
                    />
                    Meus Pedidos
                  </a>
                  <button
                    type="submit"
                    className={classNames(
                      "block py-1 w-full text-left text-[0.6rem] lg:text-[0.8rem] flex items-center justify-start h-12"
                    )}
                  >
                    <AutoGraphIcon
                      sx={{
                        color: "gray",
                        fontSize: { md: "1.3rem", lg: "1.5rem" },
                      }}
                    />
                    Relatórios
                  </button>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className="flex justify-around">
                  <button
                    type="submit"
                    className={classNames(
                      "block py-1 w-full text-left text-[0.6rem] lg:text-[0.8rem] flex items-center justify-start h-12"
                    )}
                  >
                    <FileUploadIcon
                      sx={{
                        color: "gray",
                        fontSize: { md: "1.3rem", lg: "1.5rem" },
                      }}
                    />
                    Importar Pedidos
                  </button>
                  <button
                    type="submit"
                    className={classNames(
                      "block py-1 w-full text-left text-[0.6rem] lg:text-[0.8rem] flex items-center justify-start h-12"
                    )}
                  >
                    <LinkIcon
                      sx={{
                        color: "gray",
                        fontSize: { md: "1.3rem", lg: "1.5rem" },
                      }}
                    />
                    Links úteis
                  </button>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  type="submit"
                  className={classNames(
                    "block py-1 w-full text-left text-[0.6rem] lg:text-[0.8rem] flex items-center justify-start h-12"
                  )}
                >
                  <FileDownloadIcon
                    sx={{
                      color: "gray",
                      fontSize: { md: "1.3rem", lg: "1.5rem" },
                    }}
                  />
                  Exportações
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className="grid grid-cols-3 gap-2 pt-5">
                  <button className="bg-white hover:bg-blue-700 text-stone-600 text-[0.6rem] lg:text-[0.8rem] font-bold py-2 px-4 rounded-full border-solid border-2 border-stone-300 w-full">
                    Meu Perfil
                  </button>
                  <button className="bg-white hover:bg-blue-700 text-stone-600 text-[0.6rem] lg:text-[0.8rem] font-bold py-2 px-4 rounded-full border-solid border-2 border-stone-300">
                    Suporte
                  </button>
                  <button className="bg-white hover:bg-blue-700 text-stone-600 text-[0.6rem] lg:text-[0.8rem] font-bold py-2 px-4 rounded-full border-solid border-2 border-stone-300">
                    Sair
                  </button>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
