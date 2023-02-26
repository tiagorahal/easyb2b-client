import * as React from "react";
import FooterLowerSection from "./footerUpperSection";
import FooterUpperSection from "./footerLowerSection";

export default function Footer() {
  return (
    <div className="flex justify-around flex-col flex-grow bg-white">
      <FooterLowerSection />
      <FooterUpperSection />
    </div>
  );
}
