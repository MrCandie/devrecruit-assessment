import Overlay from "./Overlay";
import { IoCloseSharp } from "react-icons/io5";

export default function Modal({ closeModal, children }) {
  return (
    <Overlay closeModal={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div
          className="absolute top-0 right-0 m-2 cursor-pointer"
          onClick={closeModal}>
          <IoCloseSharp color="red" />
        </div>
        {children}
      </div>
    </Overlay>
  );
}
