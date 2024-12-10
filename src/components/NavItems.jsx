import { NavLink } from "react-router";

function NavItems({ menu, handleClick, onSignout }) {
  return (
    <div className="flex gap-x-8">
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
    </div>
  );
}

export default NavItems;
