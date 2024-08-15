import { ImSpinner2 } from "react-icons/im";

export default function ReusableSpinner() {
  return (
    <div className="spinner h-screen flex items-center justify-center">
      <ImSpinner2 color="#2B2E72" size={30} />
    </div>
  );
}
