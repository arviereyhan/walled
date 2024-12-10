import { useEffect, useState } from "react";

function Greeting () {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('loginForm'));
        if(items){
            setItems(items.email)
        }
      }, []);

    return (
        <div className="w-full">
            <span>
                <h1 className="text-black font-bold">{`Good Morning, ${items}`}</h1>
                <p className="text-black text-lg">Check all your incoming and outgoing transactions here</p>
            </span>
        </div>
    );
}

export default Greeting