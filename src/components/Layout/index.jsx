import React from "react";
import Header from "./Header";

function Layout({children}) {
  return (
    <div>
      <Header />
      {children}
      <h2>Footer</h2>
    </div>
  );
}

export default Layout;
