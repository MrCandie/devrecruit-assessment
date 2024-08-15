import { useEffect, useState } from "react";

export default function useCountry() {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://countriesnow.space/api/v0.1/countries/flag/images"
        );
        if (!res.ok) throw new Error("Error fetching country list");
        const data = await res.json();
        setCountryList(data?.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return { countryList };
}
