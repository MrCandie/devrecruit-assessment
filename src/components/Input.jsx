export default function Input({ type, placeholder, onChange, value }) {
  return (
    <input
      className="bg-gray-100 w-full outline-none h-[50px] rounded-md p-4 text-base flex-1"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
