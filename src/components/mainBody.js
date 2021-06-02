import React from "react";
import Sidebar from "./sidebar";
import Main from "./main";
const MainBody = () => {
  return (
    <div className="app-outer">
      <Sidebar />
      <Main />
    </div>
  );
};

export default MainBody;
