import React, { useState, useRef, useEffect } from 'react';

interface DropdownItem {
  label: string;
  value: string;
  onSelect: () => void;
}

interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: 'left' | 'right';
}

export default function Dropdown({ trigger, items, align = 'left' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} role="button" tabIndex={0} aria-haspopup="true" aria-expanded={isOpen}>
        {trigger}
      </div>

      {isOpen && (
        <div
          className={`
            absolute
            z-50
            mt-2
            w-56
            rounded-md
            shadow-lg
            bg-white
            ring-1
            ring-black
            ring-opacity-5
            ${align === 'right' ? 'right-0' : 'left-0'}
          `}
          role="menu"
        >
          <div className="py-1" role="none">
            {items.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  item.onSelect();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[var(--surface)] hover:text-[var(--text)]"
                role="menuitem"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}