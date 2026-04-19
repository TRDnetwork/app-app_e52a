import React from 'react';

export type InputType = 'text' | 'email' | 'password' | 'textarea';

interface InputProps {
  label: string;
  id: string;
  type?: InputType;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

export default function Input({
  label,
  id,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  placeholder,
  className = ''
}: InputProps) {
  const baseStyles = 'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus-glow';
  const errorStyles = error ? 'border-red-500 focus:ring-red-500' : 'border-[var(--surface)] focus:ring-[var(--accent)]';
  const inputClass = `${baseStyles} ${errorStyles} ${className}`;

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={inputClass}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={inputClass}
        />
      )}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          aria-live="assertive"
          className="text-red-600 text-sm mt-1"
        >
          {error}
        </p>
      )}
    </div>
  );
}