import * as React from "react";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function FooterUpperSection() {
  return (
    <div className="flex flex-row items-center bg-[#313457] py-2 px-[15%] xl:px-[30%] justify-around text-white flex-grow hidden lg:flex min-h-0">
      {/* newsletter section */}
      <span className="flex items-center space-x-3">
        <SendIcon fontSize="small" />
        <p className="text-[0.6rem] font-bold">
          Assine agora <br /> Nossa Newsletter
        </p>
      </span>
      {/* searchbox */}
      <div className="flex justify-center items-center h-12 rounded-lg p-4">
        <input
          type="search"
          className="text-black h-9 text-[0.6rem] xl:text-[0.8rem] font-bold border border-orange-400 focus:border-orange-400 w-[250px] shadow-none"
          placeholder="Nos diga seu e-mail"
        />
        <button className="text-[0.6rem] xl:text-[0.8rem] font-bold flex justify-center items-center w-20 bg-orange-400 h-9">
          Enviar
        </button>
      </div>
      {/* border */}
      <div className="border-r-4 border-0 border-orange-400 h-9"></div>
      {/* social icons */}
      <div className="flex items-center justify-center">
        <span className="text-[0.6rem] xl:text-[0.8rem] pr-2 sm:pt-0">Acompanhe</span>
        <button>
          <LinkedInIcon
            sx={{
              paddingX: "0.2rem",
              fontSize: {md: "1.5rem", lg: "2rem"},
            }}
          />
        </button>

        <button>
          <FacebookIcon
            sx={{
              paddingX: "0.2rem",
              fontSize: {md: "1.5rem", lg: "2rem"},
            }}
          />
        </button>

        <button>
          <InstagramIcon
            sx={{
              paddingX: "0.2rem",
              fontSize: {md: "1.5rem", lg: "2rem"},
            }}
          />
        </button>

        <button>
          <TwitterIcon
            sx={{
              paddingX: "0.2rem",
              fontSize: {md: "1.5rem", lg: "2rem"},
            }}
          />
        </button>
      </div>
    </div>
  );
}
