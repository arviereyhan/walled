import NavItems from "./components/NavItems";
import logo from "./assets/logo-walled.png";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const menu = [
    {
      title: "Dashboard",
      link: "#",
    },
    {
      title: "Transfer",
      link: "#",
    },
    {
      title: "Topup",
      link: "#",
    },
    {
      title: "Signout",
      link: "#",
    },
  ];

  const handleClick = (activeTab) => {
    setActiveTab(activeTab);
  };
  return (
    <>
      <nav className="flex items-center w-screen justify-between bg-white py-4 px-8">
        <img src={logo} />
        <div className="flex gap-x-8">
          <NavItems
            menu={menu}
            activeTab={activeTab}
            handleClick={handleClick}
          />
        </div>
      </nav>
    </>
  );
}

export default App;
