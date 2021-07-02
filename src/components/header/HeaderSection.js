import React from "react";

import SiteModel from "./SiteModel";
import SearchModel from "./SearchModel";
import MenuModel from "./MenuModel";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";

export default function HeaderSection() {
  return (
    <div>
      {/* <ProfileModel /> */}
      {/* <AdminModel /> */}
      <SiteModel />
      <SearchModel />
      <MenuModel />

      {/* <!-- header section start --> */}
      <header className="header">
        <TopHeader />
        <hr />
        <BottomHeader />
      </header>
    </div>
  );
}
