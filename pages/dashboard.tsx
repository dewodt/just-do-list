import Layout from "../components/layout";
import NavbarMenu from "../components/navbar-menu";
import NavbarTitle from "../components/navbar-title";

import React from "react";
import Todo from "./todo";

export default function Dasboard() {
  return (
    <>
      <NavbarTitle />
      <div className="flex h-[91.7vh]">
        <NavbarMenu />
        <Layout>
          {/* <Dashboard /> */}
      <Todo />
        </Layout>
      </div>
    </>
  );
}

