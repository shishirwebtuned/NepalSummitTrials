

import React from "react";

const InputField = ({
  register,
  name = "input",
  errors = {},
  label,
  required = false,
  type = "text",
  placeholder = "Enter text",
  validationRules = {
    required: required ? "This field is required" : false,
  },
  className = "",
  icon = null, // New prop for the right-side icon
  iconClassName = "", // Optional className for icon styling
  ...inputProps
}: {
  register: any;
  name?: string;
  errors?: any;
  label?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  validationRules?: any;
  className?: string;
  icon?: React.ReactNode;
  iconClassName?: string;
  [key: string]: unknown;
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block text-sm jakarta mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          {...register(name, validationRules)}
          type={type}
          id={name}
          placeholder={placeholder}
          className={`w-full px-4 py-2 lg:text-base md:text-sm text-xs rounded-lg bg-white text-gray-800 focus:outline-none border border-[#c0c0c0] appearance-none placeholder:text-gray-400 placeholder:opacity-60 ${icon ? "pr-10" : ""
            } ${className}`}
          {...inputProps}
        />
        {icon && (
          <div
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${iconClassName}`}
          >
            {icon}
          </div>
        )}
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputField;
