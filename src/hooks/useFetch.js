import { useEffect, useState } from "react";

export default function useFetch(url) {
  console.log("useFetch page");

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log("setData activated");
      });
  }, [url]);

  return data;
}