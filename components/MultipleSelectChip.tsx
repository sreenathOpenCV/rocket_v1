import React, { useState, useEffect, useRef } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function MultipleSelectChip({
  options,
  selectedOptions,
  setSelectedOptions,
  label,
  isOpen,
  toggleDropdown,
}: {
  options: string[];
  selectedOptions: string[];
  setSelectedOptions: any;
  label: string;
  isOpen: boolean;
  toggleDropdown: () => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDelete = (chipToDelete: string) => (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setSelectedOptions((chips:any) => chips.filter((chip:any) => chip !== chipToDelete));
  };

  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      toggleDropdown();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      if (isOpen) {
        toggleDropdown();
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="my-4 w-full" ref={dropdownRef}>
      <div className="relative">
        <label className="absolute -top-3.5 left-3 bg-white px-1 text-gray-600 text-sm">
          {label}
        </label>
        <div
          onClick={toggleDropdown}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <div className="flex flex-wrap gap-2 h-8 overflow-y-auto">
            {selectedOptions.map((value) => (
              <div
                key={value}
                className="bg-gray-200 px-3 py-1 rounded-full flex items-center"
              >
                <span>{value}</span>
                <button
                  type="button"
                  onClick={handleDelete(value)}
                  className="ml-2 text-gray-600 hover:text-gray-800"
                >
                  <IoIosCloseCircleOutline  fontSize={"1.3rem"}/>
                </button>
              </div>
            ))}
          </div>
        </div>
        {isOpen && (
          <div className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
            {options.map((name) => (
              <div
                key={name}
                className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  if (selectedOptions.includes(name)) {
                    setSelectedOptions(selectedOptions.filter((opt) => opt !== name));
                  } else {
                    setSelectedOptions([...selectedOptions, name]);
                  }
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(name)}
                  readOnly
                  className="mr-2"
                />
                <span>{name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
