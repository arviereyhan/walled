import { NavLink } from "react-router";
import { FaRegSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import React from "react";

function NavItems({ menu, handleClick, onSignout }) {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
  }
  return (
    <div className="flex gap-x-8 justify-center items-center">
      {menu.map((item, index) => (
        <NavLink
          key={index}
          to={item.link}
          className={({ isActive }) =>
            isActive ? "text-[#19918F] font-bold" : "text-black"
          }
          onClick={() => {
            handleClick(item.title);
            if (item.title === "Signout") {
              onSignout();
            }
          }}
        >
          {item.title}
        </NavLink>
      ))}
      <button onClick={()=> darkModeHandler()} className="bg-transparent flex justify-center ">
        {dark ? (<FaMoon className="fill-black" />) : (<FaRegSun className="fill-black" />)
        }
      </button>
    </div>
  );
}

export default NavItems;
