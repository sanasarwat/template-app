import React from "react";
import ContactInfo from "./ContactInfo";
import HeaderSection from "../../components/header/HeaderSection";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div>
      <h1>
        <HeaderSection />
        <ContactInfo />
        <Footer />
      </h1>
    </div>
  );
}
