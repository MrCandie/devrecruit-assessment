import PropTypes from "prop-types";

export default function Country({ country, src }) {
  return (
    <div className="w-full flex items-center gap-4 border-b">
      <div className="w-[40px]">
        <img className="w-full h-[40px] object-contain" src={src} alt="" />
      </div>
      <h3 className="text-base font-medium capitalize">{country}</h3>
    </div>
  );
}

Country.propTypes = {
  country: PropTypes.string,
  src: PropTypes.string,
};
