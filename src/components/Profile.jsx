import { useState } from "react";
import photoProfile from "/src/assets/chelsea.png"

function Profile ({user}) {
    const [isAvatarActive, setIsAvatarActive] =useState(false);
    return (
        <div className="flex items-center w-full justify-end">
            <div className="flex flex-col me-8 justify-center">
            <p className="font-bold text-black">{`${user?.name}`}</p>
            <p className="text-black">Personal Account</p>
        </div>
            <div 
             className={`rounded-full border-[6px] hover:border-[6px] hover:border-[#178F8D] cursor-pointer transition-all ${
                isAvatarActive ? "border-[#178F8D]" : "border-[#fafbfd]"
              }`}
             onClick={() => setIsAvatarActive((prev) => !prev)}
            >
            <img className = "rounded-full w-20" src={photoProfile} ></img>
        </div>
        </div>
    );
}

export default Profile