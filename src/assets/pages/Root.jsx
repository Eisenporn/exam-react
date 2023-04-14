import React from "react";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <header>
        <h2>Шапка</h2>
      </header>
      <Outlet />
      <footer>
        <h2>Подвал</h2>
      </footer>
    </>
  );
}

export default Root;
