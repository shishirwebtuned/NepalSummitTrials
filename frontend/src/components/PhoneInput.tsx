

"use client";

import { useState, useRef, useEffect, type InputHTMLAttributes, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import type { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";

type PhoneInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  register?: UseFormRegister<FieldValues>;
  name?: string;
  errors?: Record<string, any>;
  label?: string;
  required?: boolean;
  placeholder?: string;
  validationRules?: RegisterOptions;
  icon?: ReactNode;
  iconClassName?: string;
};

const countryCodes = [
  { code: "+93", country: "Afghanistan" },
  { code: "+355", country: "Albania" },
  { code: "+213", country: "Algeria" },
  { code: "+376", country: "Andorra" },
  { code: "+244", country: "Angola" },
  { code: "+1-264", country: "Anguilla" },
  { code: "+1-268", country: "Antigua and Barbuda" },
  { code: "+54", country: "Argentina" },
  { code: "+374", country: "Armenia" },
  { code: "+297", country: "Aruba" },
  { code: "+61", country: "Australia" },
  { code: "+43", country: "Austria" },
  { code: "+994", country: "Azerbaijan" },
  { code: "+1-242", country: "Bahamas" },
  { code: "+973", country: "Bahrain" },
  { code: "+880", country: "Bangladesh" },
  { code: "+1-246", country: "Barbados" },
  { code: "+375", country: "Belarus" },
  { code: "+32", country: "Belgium" },
  { code: "+501", country: "Belize" },
  { code: "+229", country: "Benin" },
  { code: "+1-441", country: "Bermuda" },
  { code: "+975", country: "Bhutan" },
  { code: "+591", country: "Bolivia" },
  { code: "+387", country: "Bosnia and Herzegovina" },
  { code: "+267", country: "Botswana" },
  { code: "+55", country: "Brazil" },
  { code: "+246", country: "British Indian Ocean Territory" },
  { code: "+1-284", country: "British Virgin Islands" },
  { code: "+673", country: "Brunei" },
  { code: "+359", country: "Bulgaria" },
  { code: "+226", country: "Burkina Faso" },
  { code: "+257", country: "Burundi" },
  { code: "+855", country: "Cambodia" },
  { code: "+237", country: "Cameroon" },
  { code: "+1", country: "Canada" },
  { code: "+238", country: "Cape Verde" },
  { code: "+1-345", country: "Cayman Islands" },
  { code: "+236", country: "Central African Republic" },
  { code: "+235", country: "Chad" },
  { code: "+56", country: "Chile" },
  { code: "+86", country: "China" },
  { code: "+57", country: "Colombia" },
  { code: "+269", country: "Comoros" },
  { code: "+243", country: "Congo (DRC)" },
  { code: "+242", country: "Congo (Republic)" },
  { code: "+682", country: "Cook Islands" },
  { code: "+506", country: "Costa Rica" },
  { code: "+385", country: "Croatia" },
  { code: "+53", country: "Cuba" },
  { code: "+599", country: "Curaçao" },
  { code: "+357", country: "Cyprus" },
  { code: "+420", country: "Czech Republic" },
  { code: "+45", country: "Denmark" },
  { code: "+253", country: "Djibouti" },
  { code: "+1-767", country: "Dominica" },
  { code: "+1-809", country: "Dominican Republic" },
  { code: "+670", country: "East Timor" },
  { code: "+593", country: "Ecuador" },
  { code: "+20", country: "Egypt" },
  { code: "+503", country: "El Salvador" },
  { code: "+240", country: "Equatorial Guinea" },
  { code: "+291", country: "Eritrea" },
  { code: "+372", country: "Estonia" },
  { code: "+251", country: "Ethiopia" },
  { code: "+500", country: "Falkland Islands" },
  { code: "+298", country: "Faroe Islands" },
  { code: "+679", country: "Fiji" },
  { code: "+358", country: "Finland" },
  { code: "+33", country: "France" },
  { code: "+594", country: "French Guiana" },
  { code: "+689", country: "French Polynesia" },
  { code: "+241", country: "Gabon" },
  { code: "+220", country: "Gambia" },
  { code: "+995", country: "Georgia" },
  { code: "+49", country: "Germany" },
  { code: "+233", country: "Ghana" },
  { code: "+350", country: "Gibraltar" },
  { code: "+30", country: "Greece" },
  { code: "+299", country: "Greenland" },
  { code: "+1-473", country: "Grenada" },
  { code: "+590", country: "Guadeloupe" },
  { code: "+1-671", country: "Guam" },
  { code: "+502", country: "Guatemala" },
  { code: "+224", country: "Guinea" },
  { code: "+245", country: "Guinea-Bissau" },
  { code: "+592", country: "Guyana" },
  { code: "+509", country: "Haiti" },
  { code: "+504", country: "Honduras" },
  { code: "+852", country: "Hong Kong" },
  { code: "+36", country: "Hungary" },
  { code: "+354", country: "Iceland" },
  { code: "+91", country: "India" },
  { code: "+62", country: "Indonesia" },
  { code: "+98", country: "Iran" },
  { code: "+964", country: "Iraq" },
  { code: "+353", country: "Ireland" },
  { code: "+972", country: "Israel" },
  { code: "+39", country: "Italy" },
  { code: "+1-876", country: "Jamaica" },
  { code: "+81", country: "Japan" },
  { code: "+962", country: "Jordan" },
  { code: "+7", country: "Kazakhstan" },
  { code: "+254", country: "Kenya" },
  { code: "+686", country: "Kiribati" },
  { code: "+383", country: "Kosovo" },
  { code: "+965", country: "Kuwait" },
  { code: "+996", country: "Kyrgyzstan" },
  { code: "+856", country: "Laos" },
  { code: "+371", country: "Latvia" },
  { code: "+961", country: "Lebanon" },
  { code: "+266", country: "Lesotho" },
  { code: "+231", country: "Liberia" },
  { code: "+218", country: "Libya" },
  { code: "+423", country: "Liechtenstein" },
  { code: "+370", country: "Lithuania" },
  { code: "+352", country: "Luxembourg" },
  { code: "+853", country: "Macau" },
  { code: "+389", country: "North Macedonia" },
  { code: "+261", country: "Madagascar" },
  { code: "+265", country: "Malawi" },
  { code: "+60", country: "Malaysia" },
  { code: "+960", country: "Maldives" },
  { code: "+223", country: "Mali" },
  { code: "+356", country: "Malta" },
  { code: "+692", country: "Marshall Islands" },
  { code: "+596", country: "Martinique" },
  { code: "+222", country: "Mauritania" },
  { code: "+230", country: "Mauritius" },
  { code: "+262", country: "Mayotte" },
  { code: "+52", country: "Mexico" },
  { code: "+691", country: "Micronesia" },
  { code: "+373", country: "Moldova" },
  { code: "+377", country: "Monaco" },
  { code: "+976", country: "Mongolia" },
  { code: "+382", country: "Montenegro" },
  { code: "+1-664", country: "Montserrat" },
  { code: "+212", country: "Morocco" },
  { code: "+258", country: "Mozambique" },
  { code: "+95", country: "Myanmar" },
  { code: "+264", country: "Namibia" },
  { code: "+674", country: "Nauru" },
  { code: "+977", country: "Nepal" },
  { code: "+31", country: "Netherlands" },
  { code: "+687", country: "New Caledonia" },
  { code: "+64", country: "New Zealand" },
  { code: "+505", country: "Nicaragua" },
  { code: "+227", country: "Niger" },
  { code: "+234", country: "Nigeria" },
  { code: "+683", country: "Niue" },
  { code: "+672", country: "Norfolk Island" },
  { code: "+850", country: "North Korea" },
  { code: "+1-670", country: "Northern Mariana Islands" },
  { code: "+47", country: "Norway" },
  { code: "+968", country: "Oman" },
  { code: "+92", country: "Pakistan" },
  { code: "+680", country: "Palau" },
  { code: "+970", country: "Palestine" },
  { code: "+507", country: "Panama" },
  { code: "+675", country: "Papua New Guinea" },
  { code: "+595", country: "Paraguay" },
  { code: "+51", country: "Peru" },
  { code: "+63", country: "Philippines" },
  { code: "+48", country: "Poland" },
  { code: "+351", country: "Portugal" },
  { code: "+1-787", country: "Puerto Rico" },
  { code: "+974", country: "Qatar" },
  { code: "+262", country: "Réunion" },
  { code: "+40", country: "Romania" },
  { code: "+7", country: "Russia" },
  { code: "+250", country: "Rwanda" },
  { code: "+590", country: "Saint Barthélemy" },
  { code: "+290", country: "Saint Helena" },
  { code: "+1-869", country: "Saint Kitts and Nevis" },
  { code: "+1-758", country: "Saint Lucia" },
  { code: "+590", country: "Saint Martin" },
  { code: "+508", country: "Saint Pierre and Miquelon" },
  { code: "+1-784", country: "Saint Vincent and the Grenadines" },
  { code: "+685", country: "Samoa" },
  { code: "+378", country: "San Marino" },
  { code: "+239", country: "São Tomé and Príncipe" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+221", country: "Senegal" },
  { code: "+381", country: "Serbia" },
  { code: "+248", country: "Seychelles" },
  { code: "+232", country: "Sierra Leone" },
  { code: "+65", country: "Singapore" },
  { code: "+1-721", country: "Sint Maarten" },
  { code: "+421", country: "Slovakia" },
  { code: "+386", country: "Slovenia" },
  { code: "+677", country: "Solomon Islands" },
  { code: "+252", country: "Somalia" },
  { code: "+27", country: "South Africa" },
  { code: "+82", country: "South Korea" },
  { code: "+211", country: "South Sudan" },
  { code: "+34", country: "Spain" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+249", country: "Sudan" },
  { code: "+597", country: "Suriname" },
  { code: "+268", country: "Eswatini" },
  { code: "+46", country: "Sweden" },
  { code: "+41", country: "Switzerland" },
  { code: "+963", country: "Syria" },
  { code: "+886", country: "Taiwan" },
  { code: "+992", country: "Tajikistan" },
  { code: "+255", country: "Tanzania" },
  { code: "+66", country: "Thailand" },
  { code: "+228", country: "Togo" },
  { code: "+676", country: "Tonga" },
  { code: "+1-868", country: "Trinidad and Tobago" },
  { code: "+216", country: "Tunisia" },
  { code: "+90", country: "Turkey" },
  { code: "+993", country: "Turkmenistan" },
  { code: "+1-649", country: "Turks and Caicos Islands" },
  { code: "+688", country: "Tuvalu" },
  { code: "+256", country: "Uganda" },
  { code: "+380", country: "Ukraine" },
  { code: "+971", country: "United Arab Emirates" },
  { code: "+44", country: "United Kingdom" },
  { code: "+1", country: "United States" },
  { code: "+598", country: "Uruguay" },
  { code: "+998", country: "Uzbekistan" },
  { code: "+678", country: "Vanuatu" },
  { code: "+58", country: "Venezuela" },
  { code: "+84", country: "Vietnam" },
  { code: "+1-340", country: "U.S. Virgin Islands" },
  { code: "+681", country: "Wallis and Futuna" },
  { code: "+967", country: "Yemen" },
  { code: "+260", country: "Zambia" },
  { code: "+263", country: "Zimbabwe" },
];

const CountryCodeDropdown = ({
  selectedCountryCode,
  onCountryCodeChange,
  className = "",
}: {
  selectedCountryCode: string;
  onCountryCodeChange: (code: string) => void;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  // Filter countries based on search term
  const filteredCountries = countryCodes.filter(
    (country) =>
      country.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.includes(searchTerm)
  );

  // Reset highlighted index when filtered list changes
  useEffect(() => {
    setHighlightedIndex(0);
  }, [searchTerm]);

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;
      if (
        dropdownRef.current &&
        target instanceof Node &&
        !dropdownRef.current.contains(target)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus input when dropdown opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (listRef.current && isOpen) {
      const highlightedElement = listRef.current.children[highlightedIndex];
      if (highlightedElement) {
        highlightedElement.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [highlightedIndex, isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredCountries.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCountries.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (filteredCountries[highlightedIndex]) {
          selectCountry(filteredCountries[highlightedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setSearchTerm("");
        break;
      case "Tab":
        setIsOpen(false);
        setSearchTerm("");
        break;
      default:
        // For typing characters, let the input handle it naturally
        break;
    }
  };

  const selectCountry = (country: { code: string; country: string }) => {
    onCountryCodeChange(country.code);
    setIsOpen(false);
    setSearchTerm("");
    setHighlightedIndex(0);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm("");
    }
  };

  const selectedCountry = countryCodes.find(
    (country) => country.code === selectedCountryCode
  );

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Dropdown trigger */}
      <button
        type="button"
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        className="w-full px-2 py-2 lg:text-base md:text-sm text-xs rounded-l-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#c0c0c0] border-r-0 flex items-center justify-between hover:bg-gray-50 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate text-left">
          {selectedCountry ? `${selectedCountry.code}` : "+1"}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-gray-500 transition-transform ml-1 flex-shrink-0 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-64 z-40 bg-white border border-gray-300 rounded-b-lg shadow-xl mt-1 overflow-hidden">
          {/* Search input */}
          <div className="p-3 border-b border-gray-200 bg-gray-50">
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type country name or code..."
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Options list */}
          <ul
            ref={listRef}
            className="max-h-48 overflow-y-auto bg-white"
            role="listbox"
          >
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country, index) => (
                <li
                  key={`${country.code}-${country.country}`}
                  onClick={() => selectCountry(country)}
                  className={`px-4 py-3 cursor-pointer text-sm border-b border-gray-100 last:border-b-0 transition-colors ${index === highlightedIndex
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-gray-50 text-gray-700"
                    }`}
                  role="option"
                  aria-selected={country.code === selectedCountryCode}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{country.code}</span>
                    <span className="text-gray-500 text-xs">
                      {country.country}
                    </span>
                  </div>
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-sm text-gray-500 italic">
                No countries found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

const PhoneInputField = ({
  register,
  name = "phone",
  errors = {} as Record<string, any>,
  label = "Phone Number",
  required = false,
  placeholder = "Enter phone number",
  validationRules,
  className = "",
  icon = null,
  iconClassName = "",
  ...inputProps
}: PhoneInputFieldProps) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countryCodes[0].code
  );

  const mergedValidationRules = validationRules ?? {
    required: required ? "This field is required" : false,
  };

  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative flex items-center">
        {/* Country Code Dropdown */}
        <CountryCodeDropdown
          selectedCountryCode={selectedCountryCode}
          onCountryCodeChange={setSelectedCountryCode}
        />

        {/* Phone Number Input */}
        <div className="relative flex-1">
          <input
            {...(register ? register(name, mergedValidationRules) : {})}
            type="tel"
            id={name}
            placeholder={placeholder}
            className={`w-full px-4 py-2 lg:text-base md:text-sm text-xs rounded-r-lg bg-white text-gray-800 focus:outline-none border border-[#c0c0c0] appearance-none placeholder:text-gray-400 placeholder:opacity-60 ${icon ? "pr-10" : ""
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
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default PhoneInputField;
