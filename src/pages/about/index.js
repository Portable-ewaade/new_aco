import { Banner, Section2, Section3 } from "@/components/about";
import { Footer, Navbar } from "@/components/common";
import { Section5, Section6 } from "@/components/landing-page";
import React from "react";

const index = () => {
  return (
    <>
      <div className="wraper">
      <Navbar />
        <Banner />
        <Section2 />
        <Section3 />
        <Section5 />
        <Section6 />
        <Footer />
      </div>
    </>
  );
};

export default index;
