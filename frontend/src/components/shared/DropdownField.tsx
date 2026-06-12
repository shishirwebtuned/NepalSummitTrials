
import React from "react";

const DropdownField = ({
  register,
  name = "dropdown",
  errors = {},
  label = "Select",
  required = false,
  options = [],
  placeholder = "Select an option",
  validationRules = {
    required: required ? "This field is required" : false,
  },
  className = "",
  ...selectProps
}: {
  register: any;
  name?: string;
  errors?: any;
  label?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  placeholder?: string;
  validationRules?: any;
  className?: string;
  [key: string]: unknown;
}) => {
  return (
    <div className="relative w-full">
      <label htmlFor={name} className="block text-sm jakarta mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <select
          {...register(name, validationRules)}
          id={name}
          className={`w-full px-4 py-2 pr-10 lg:text-base md:text-sm text-xs rounded-lg bg-white text-gray-800 focus:outline-none border border-[#c0c0c0] appearance-none placeholder:text-gray-400 placeholder:opacity-60 ${className}`}
          {...selectProps}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* Custom dropdown arrow */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs">{errors[name].message}</p>
      )}
    </div>
  );
};

export default DropdownField;
