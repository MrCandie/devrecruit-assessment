import PropTypes from "prop-types";

export default function Pagination({
  length,
  perPage,
  setCurrentPage,
  currentPage,
}) {
  const pages = Array.from({ length: Math.round(length / perPage) });

  return (
    <div className="w-full flex items-center gap-3 justify-center flex-wrap">
      {pages.map((el, i) => (
        <Btn
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          key={i}
          index={i}
        />
      ))}
    </div>
  );
}

Pagination.propTypes = {
  length: PropTypes.number,
  perPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  currentPage: PropTypes.number,
};

function Btn({ index, setCurrentPage, currentPage }) {
  return (
    <button
      onClick={() => setCurrentPage(index + 1)}
      className={
        currentPage === index + 1
          ? `w-[30px] h-[30px] text-[14px] rounded-md text-white bg-[#A020F0]`
          : `w-[30px] h-[30px] text-[14px] rounded-md text-[#A020F0] border border-[#A020F0]`
      }>
      {index + 1}
    </button>
  );
}

Btn.propTypes = {
  index: PropTypes.number,
  setCurrentPage: PropTypes.func,
  currentPage: PropTypes.number,
};
