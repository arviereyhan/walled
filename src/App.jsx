import { useEffect, useState } from "react";
import Greeting from "./components/Greeting";
import Profile from "./components/Profile";
import viewIcon from "./assets/eye.png";
import AccoutNo from "./components/AccountNo";
import useFetch from "../hooks/useFetch";

function App() {
  const [showBalance, setShowBalance] = useState(true);

  const [data] = useFetch("http://localhost:3000/users");
  if (data.length === 0) {
    return <p>LOADING</p>;
  }
  console.log(data, "DATA");
  const dataValid = JSON.parse(localStorage.getItem("loginForm"));
  console.log(dataValid, "tes1")
  const user = data.find(
    (u) =>
      u.email === dataValid 
  );

  console.log(user)

 
  return (
    <>
      <div className="flex pt-10 ps-24 gap-x-32 pe-16">
        <Greeting user={user} />
        <Profile user={user} />
      </div>

      <div className="flex mt-[4.5rem] gap-x-12 ps-20">
        <AccoutNo user={user}/>
        <div className="bg-white p-12 rounded-2xl w-full text-black">
          <p>Balance</p>
          <span className="flex items-center mt-3 gap-x-2">
            <p className="font-bold">
              {showBalance ? user.balance : "Rp ********"}
            </p>
            <img
              src={viewIcon}
              alt="view"
              className="w-4 h-4 object-cover cursor-pointer"
              onClick={() => setShowBalance((prev) => !prev)}
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
