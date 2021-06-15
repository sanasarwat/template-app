import React from "react";
import EditAddress from "./EditAddress";
import AddAddress from "./AddAddress";
import UserProfile from "./UserProfile";
import ProfileAddress from "./ProfileAddress";
import EditProfile from "./EditProfile";
import AdminSection from "../../components/profile/AdminSection";
import NavBar from "../../components/profile/NavBar";
import HeaderSection from "../../components/header/HeaderSection";
import Footer from "../../components/Footer";
export default function Profile() {
  return (
    <div>
      <HeaderSection />
      <AdminSection />
      <section id="dashboard-nav" className="dashboard-section">
        <NavBar />
        <div className="container">
          <div className="dashboard-body">
            <UserProfile />
            <ProfileAddress />
          </div>
        </div>
        <EditAddress />
        <AddAddress />
        <EditProfile />
      </section>
      <Footer />
    </div>
  );
}
