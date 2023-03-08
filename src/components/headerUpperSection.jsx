import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import { Input, Typography } from "@mui/material";
import easyLogo from "../assets/logo2.png";
import HeaderDropdown from "./headerDropdown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HeaderUserDropdown from "./headerUserDropdown";
import HeaderCartDropdown from "./headerCartDropdown";

const ariaLabel = { "aria-label": "description" };

export default function HeaderUpperSection() {
  return (
    <div className="flex justify-around flex-grow items-center xl:w-9/12 xl:m-auto bg-white py-1">
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <AppBar position="static" elevation={0}>
          <Toolbar
            sx={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "space-around",
              paddingY: "1rem",
            }}
          >
            <a href="/">
            <img
              className="hidden md:block md:h-12"
              src={easyLogo}
              alt="main logo"
            />
            </a>
            {/* searchbox */}
            <div className="border rounded-full p-1 md:p-2 md:w-8/12 lg:w-6/12 xl:10/12 flex justify-between">
              <Input
                placeholder="O que você esta procurando"
                variant="standard"
                disableUnderline
                inputProps={ariaLabel}
                sx={{
                  fontSize: "0.8rem",
                  width: "100%",
                  "&.Mui-selected": {
                    outline: "none",
                  },
                }}
              />
              <SearchIcon
                sx={{
                  color: "gray",
                }}
              />
            </div>
            {/* dropdown menu */}
            <div className="block lg:hidden">
              <HeaderDropdown />
            </div>
            {/* right section */}
            <div className="bg-white hidden lg:flex lg:w-5/12 xl:w-4/12 lg:justify-between lg:items-center">
              <AccountCircleIcon sx={{ color: "gray", fontSize: {md: "3rem", lg: "3.5rem"}, paddingLeft: {md: "0.5rem", lg: "0.1rem"}  }} />
              <span className="text-black text-[0.7rem] xl:text-[0.9rem]">
                <b>Olá, Usuário</b>
                <br />
                <HeaderUserDropdown />
              </span>
              <span className="text-gray flex items-center justify-center">
                <LocationOnIcon sx={{ color: "gray", fontSize: {md: "0.8rem", lg: "1rem"} }} />
                <br />
                <Typography
                  color="primary"
                  sx={{ color: "gray", fontSize: {md: "0.7rem", xl: "0.9rem"}, paddingRight: 2 }}
                >
                  RAIA021
                </Typography>
                <HeaderCartDropdown />
              </span>
              <span className="text-black text-[0.7rem] xl:text-[0.9rem]">
                <b>Total: R$ 7.235,00</b>
                <br />
                <b className="text-green-500">Saldo: R$ 9.000,00</b>
              </span>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
