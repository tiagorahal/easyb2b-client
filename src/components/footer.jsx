import * as React from "react";
import FooterLowerSection from "./footerUpperSection";
import FooterUpperSection from "./footerLowerSection";

export default function Footer() {
  return (
    <div className="flex justify-around flex-col flex-grow bg-white pb-7 xl:pb-10">
      <FooterLowerSection />
      <FooterUpperSection />
    </div>
  );
}
