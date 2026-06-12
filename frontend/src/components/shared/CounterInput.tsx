"use client";

import { useController } from "react-hook-form";
import { Plus, Minus } from "lucide-react";

const CounterInput = ({
  control,
  name = "counter",
  errors = {},
  label,
  required = false,
  min = 0,
  max = Number.POSITIVE_INFINITY,
  step = 1,
  defaultValue = 0,
  placeholder = "0",
  validationRules = {
    required: required ? "This field is required" : false,
    min: {
      value: min,
      message: `Value must be at least ${min}`,
    },
    max: {
      value: max,
      message: `Value cannot exceed ${max}`,
    },
  },
  className = "",
  register,
  ...inputProps
}: {
  control: any;
  name?: string;
  errors?: any;
  label?: string;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  placeholder?: string;
  validationRules?: any;
  className?: string;
  register?: any;
}) => {
  const {
    field: { value = 1, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: validationRules,
    defaultValue: defaultValue ?? 1,
  });

  const handleIncrement = () => {
    const currentValue = value || 0;
    const newValue = Number(currentValue) + step;
    if (newValue <= max) {
      onChange(newValue);
    }
  };

  const handleDecrement = () => {
    const currentValue = value || 0;
    const newValue = Number(currentValue) - step;
    if (newValue >= min) {
      onChange(newValue);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // Allow empty input temporarily to avoid blocking user typing
    if (newValue === "") {
      onChange("");
    } else {
      const numValue = Number(newValue);
      if (!isNaN(numValue) && numValue >= min && numValue <= max) {
        onChange(numValue);
      }
    }
  };

  // Ensure value is never undefined
  const displayValue = value !== undefined && value !== null ? value : "";

  return (
    <div className="relative w-full">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={handleDecrement}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-800 h-full px-3 rounded-l-xl focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={displayValue <= min}
        >
          <Minus className="size-5" />
        </button>
        <input
          type="number"
          id={name}
          value={value ?? ""}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full px-10 py-2 lg:text-base md:text-sm text-xs rounded-xl bg-white text-gray-800 focus:outline-none border border-[#c0c0c0] appearance-none placeholder:text-gray-400 placeholder:opacity-60 text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield] ${className}`}
          {...inputProps}
        />
        <button
          type="button"
          onClick={handleIncrement}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-800 h-full px-3 rounded-r-xl cursor-pointer focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={displayValue >= max}
        >
          <Plus className="size-5" />
        </button>
      </div>
      {(error || errors[name]) && (
        <p className="text-red-500 text-xs mt-1">
          {error?.message || errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default CounterInput;
