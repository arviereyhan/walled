import { useNavigate } from "react-router";
import NavItems from "./NavItems";
import logo from "/Users/arviereyhan/Documents/Kerja/BSI/Rakamin/Day-3/walled/src/assets/logo-walled.png";
import { useState } from "react";

function Navbar() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const navigate = useNavigate();

  const menu = [
    {
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      title: "Transfer",
      link: "/transfer",
    },
    {
      title: "Topup",
      link: "/topup",
    },
    {
      title: "Signout",
      link: "/",
    },
  ];

  const handleClick = (activeTab) => {
    setActiveTab(activeTab);
  };

  const handleSignout = () => {
    localStorage.removeItem("loginForm");
    navigate("/");
  };

  return (
    <nav className="flex items-center w-screen justify-between bg-white py-4 px-8">
      <img src={logo} />
      <div className="flex gap-x-8">
        <NavItems
          menu={menu}
          activeTab={activeTab}
          handleClick={handleClick}
          onSignout={handleSignout}
        />
      </div>
    </nav>
  );
}

export default Navbar;
