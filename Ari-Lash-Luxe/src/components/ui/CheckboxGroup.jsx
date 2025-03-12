import React from "react";

const CheckboxGroup = ({ label, options, name, onChange, value }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-xl font-medium mb-3 text-white">{label}</label>
      <div className="flex flex-wrap">
        {options.map((option) => (
          <div key={option.value} className="flex bg-white p-1">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                name={name}
                value={option.value}
                id={option.value}
                className="sr-only peer"
                onChange={onChange}
                checked={value.includes(option.value)}
              />
              <label
                htmlFor={option.value}
                className="cursor-pointer px-6 py-1 text-sm font-medium text-gray-700 bg-white border border-white transition-colors duration-300 ease-in-out peer-checked:bg-[#C5A43B] peer-checked:text-white hover:bg-blue-300 peer-checked:border-transparent"
              >
                {option.label}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
