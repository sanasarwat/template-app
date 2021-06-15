import Dashboard from "./DashBoard";
import React from "react";
import HeaderSection from "../../components/header/HeaderSection";
import Footer from "../../components/Footer";

export default function UserDashboard() {
  return (
    <div>
      <HeaderSection />
      <Dashboard />
      <Footer />
    </div>
  );
}
