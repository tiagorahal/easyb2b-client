import * as React from "react";
import HeaderUpperSection from "./headerUpperSection";
import HeaderLowerSection from "./headerLowerSection";

export default function Header() {
  return (
    <div className="flex justify-around flex-col flex-grow bg-white">
      <HeaderUpperSection />
      <HeaderLowerSection />
    </div>
  );
}
