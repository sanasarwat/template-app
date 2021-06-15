import React from "react";
import ContactDetail from "./ContactDetail";
import Summary from "./Summary";
import AccountDetail from "./AccountDetail";
import Payment from "./Payment";
import DeliverySchedule from "./DeliverySchedule";
import HeaderSection from "../../components/header/HeaderSection";
import Footer from "../../components/Footer";
import CartDrawer from "../cart/CartDrawer";

export default function CheckOut() {
  return (
    <div>
      <CartDrawer />
      <HeaderSection />
      <section className="dashboard-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <ContactDetail />
              <AccountDetail />
              <DeliverySchedule />
              <Payment />
            </div>
            <div className="col-lg-5">
              <Summary />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
