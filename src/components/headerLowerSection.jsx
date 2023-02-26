import * as React from "react";
import SortIcon from "@mui/icons-material/Sort";

export default function HeaderLowerSection() {
  const items = [
    "FILTRO",
    "DEPARTAMENTO",
    "PRODUTOS",
    "ITEM MENU",
    "ITEM MENU",
    "ITEM MENU",
    "ITEM MENU",
    "ITEM MENU",
  ];

  return (
    <ul className="flex flex-row items-center bg-[#313457] py-2 justify-around text-white flex-grow hidden lg:flex min-h-0">
      {items.map((value) => (
        <li className="flex justify-start items-center text-[0.6rem] xl:text-[0.8rem] font-bold">
          {value === "FILTRO" && (
            <SortIcon sx={{ color: "white" }} />
          )}
          <a href={ value === "PRODUTOS" ? '/productlist' : '#'} className="">{value}</a>
        </li>
      ))}
    </ul>
  );
}
