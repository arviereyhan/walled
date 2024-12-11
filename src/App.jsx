import { useState } from "react";
import Greeting from "./components/Greeting";
import Profile from "./components/Profile";
import viewIcon from "./assets/eye.png";
import AccoutNo from "./components/AccountNo";
import useFetch from "../hooks/useFetch";
import AddButton from "./components/AddButton";
import { IoMdAdd } from "react-icons/io";
import { FaRegPaperPlane } from "react-icons/fa";
import Table from "./components/Table"
import { useNavigate } from "react-router";

function App() {
  const [showBalance, setShowBalance] = useState(true);
  const navigate = useNavigate();

  const [data] = useFetch("http://localhost:3000/users");
  if (data.length === 0) {
    return <p>LOADING</p>;
  }
  console.log(data, "DATA");
  const dataValid = JSON.parse(localStorage.getItem("loginForm"));
  console.log(dataValid, "tes1");
  const user = data.find((u) => u.email === dataValid);


  console.log(user);

  return (
    <>
      <div className="flex pt-10 ps-24 gap-x-32 pe-16 flex-row">
        <Greeting user={user} />
        <Profile user={user} />
      </div>

      <div className="flex mt-[4.5rem] gap-x-12 ps-20 pe-20">
        <AccoutNo user={user} />
        <div className="bg-white p-12 rounded-2xl w-full text-black flex flex-row justify-between">
          <span className="flex items-center mt-3 gap-x-2">
            <div>
              <p>Balance</p>
              <div className="flex flex-row gap-x-4 items-center">
                <p className="font-bold">
                  {showBalance ? user.balance : "Rp ********"}
                </p>
                <img
                  src={viewIcon}
                  alt="view"
                  className="w-4 h-4 object-cover cursor-pointer"
                  onClick={() => setShowBalance((prev) => !prev)}
                />
              </div>
            </div>
          </span>
          <div className="flex flex-row gap-8">
          <AddButton className="bg-[#2CA18E] text-white p-4 rounded-full shadow-md hover:scale-110 transition-transform" onClick={() => navigate("/topup")} >
            <IoMdAdd className="text-2xl" />
          </AddButton>
          <AddButton className="bg-[#2CA18E] text-white p-4 rounded-full shadow-md hover:scale-110 transition-transform" onClick={() => navigate("/transfer")} >
            <FaRegPaperPlane className="text-2xl" />
          </AddButton>
        </div>
        </div>
      </div>
      <Table/> 
      
    </>
  );
}

export default App;
