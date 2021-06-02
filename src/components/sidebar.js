import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div
        style={{
          color: "#000",
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((b) => (
            <img
              key={b}
              src="/product-icon.svg"
              alt="..."
              style={{
                width: "50px",
                height: "50px",
                margin: "1rem",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
