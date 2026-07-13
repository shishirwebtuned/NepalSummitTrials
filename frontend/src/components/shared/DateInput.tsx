

import React, { useRef } from "react";
import { BsCalendar2DateFill } from "react-icons/bs";

const DateInput = ({
  register,
  name = "date",
  errors = {},
  placeholder = "Select Date",
  label = "Date",
  required = false,
  validationRules,
  className = "",
  iconColor = "#D5E880",
  onChange,
  value,
  ...props
}: {
  register: any;
  name?: string;
  errors?: any;
  placeholder?: string;
  label?: string;
  required?: boolean;
  validationRules?: any;
  className?: string;
  iconColor?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  inputRef?: ((el: HTMLInputElement | null) => void) | React.Ref<HTMLInputElement>;
  [key: string]: unknown;
}) => {
  const dateInputRef = useRef<HTMLInputElement | null>(null);

  // Dynamically build validationRules if not passed
  const rules = validationRules || {
    required: required ? "Date is required" : false,
    pattern: {
      value: /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
      message: "Date must be valid (YYYY-MM-DD)",
    },
  };

  const fieldProps = register(name, rules);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    fieldProps.onChange(event);
    onChange?.(event);
  };

  return (
    <div className="relative w-full">
      <label htmlFor={name} className="block jakarta text-sm mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          {...fieldProps}
          ref={(el) => {
            dateInputRef.current = el;
            const ir = props.inputRef as ((el: HTMLInputElement | null) => void) | undefined;
            if (typeof ir === "function") ir(el);
          }}
          type="date"
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={`w-full px-4 py-2 lg:text-base md:text-sm text-xs rounded-xl bg-white text-gray-800 focus:outline-none border border-[#c0c0c0] pr-10 appearance-none placeholder:text-gray-400 placeholder:opacity-60 ${className}`}
          {...props}
        />
        <style jsx>{`
          input[type="date"]::-webkit-calendar-picker-indicator {
            display: none;
          }
        `}</style>
        <BsCalendar2DateFill
          className="absolute right-3 top-5 transform -translate-y-1/2 size-6 cursor-pointer"
          style={{ color: iconColor }}
          onClick={() => {
            if (dateInputRef.current) {
              dateInputRef.current.focus();
              dateInputRef.current.showPicker?.();
            }
          }}
        />
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs ">{errors[name].message}</p>
      )}
    </div>
  );
};
export default DateInput;
