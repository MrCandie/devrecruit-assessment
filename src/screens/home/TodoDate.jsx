import React from "react";
import Input from "../../components/Input";

export default function TodoDate({ setFormData, formData, setActive }) {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="w-full flex flex-col gap-2">
        <label className="">Set Date</label>
        <Input
          type="datetime-local"
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          value={formData.date}
        />
      </div>
      <div className="w-full flex items-end justify-end">
        <button
          onClick={() => {
            if (!formData.date) return;
            setActive(4);
          }}
          type="button"
          className="h-[50px] text-base hover:opacity-80 hover:shadow-md bg-[#A020F0] text-white px-10 flex items-center justify-center rounded-md text-center">
          Next
        </button>
      </div>
    </div>
  );
}
