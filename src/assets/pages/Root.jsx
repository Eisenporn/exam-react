import React from "react";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <header>
        <a href=""><h2>Flowers Store</h2></a>
      </header>
      <Outlet />
      {/* <footer>
        <h2>Подвал</h2>
      </footer> */}
    </>
  );
}

export default Root;
