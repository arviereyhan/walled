import { useState, useEffect } from "react";

const useFetch = (link) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
        const url = link;
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
      
          const json = await response.json();
          setData(json)
        } catch (error) {
          console.error(error.message);
        }
      }
      getData()
  },[link]);
  return [data];
};

export default useFetch;
