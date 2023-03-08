import * as React from "react";
import easyLogo from "../assets/logo2.png";
import secureLogo from "../assets/secure.png";

export default function FooterLowerSection() {
  return (
    <div className="flex flex-col items-center pt-7">
      {/* logos */}
      <div className="flex h-14">
        <img className="h-12 px-3" src={easyLogo} alt="main logo" />
        <img
          className="h-12 px-3"
          src={secureLogo}
          alt="secure logo"
        />
      </div>
      {/* text */}
        <p className="text-[0.6rem] xl:text-[0.8rem] text-gray-400 pt-5">Copyright - 2023 | EasyB2B - suporte@easyb2b.io</p>
        <p className="text-[0.6rem] xl:text-[0.8rem] text-gray-400 pt-2">
          (011) 2500-5555 Alameda Vicente Pinzon, 54 - Vila Olímpia, São Paulo -
          SP, 04547-130
        </p>
    </div>
  );
}
