import Country from "./Country";
import useCountry from "../../hooks/useCountry";
import Pagination from "../../components/Pagination";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Container() {
  // fetching the countries from an api has been extracted to a custom hook.
  const { countryList } = useCountry();
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  let perPage = 20;

  const start = currentPage * perPage;
  const end = start + perPage;

  return (
    <div className="w-full relative flex items-center justify-center h-screen bg-white">
      <div className="w-full p-4 lg:w-[450px] flex flex-col gap-6">
        <h1 className="tetx-lg font-medium text-black text-center">
          Country List
        </h1>
        <div className="w-full h-[70vh] overflow-scroll flex flex-col gapp-6">
          {countryList?.slice(start, end)?.map((el, i) => (
            <Country key={i} src={el.flag} country={el.name} />
          ))}
        </div>
        <Pagination
          length={countryList?.length}
          perPage={perPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      <button
        onClick={() => navigate("/")}
        className="p-6 text-black bg-gray-200 absolute bottom-0 right-0 m-4">
        Back
      </button>
    </div>
  );
}
