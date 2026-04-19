import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--accent)] hover:bg-[var(--accent-alt)] text-white border-transparent',
  secondary: 'bg-[var(--text)] hover:bg-[#2d422d] text-white border-transparent',
  outline: 'bg-transparent hover:bg-[var(--surface)] text-[var(--text)] border border-[var(--text)]',
  ghost: 'bg-transparent hover:bg-[var(--surface)] text-[var(--text)] border-transparent',
  danger: 'bg-red-600 hover:bg-red-700 text-white border-transparent'
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-6 py-3'
};

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        rounded-md
        font-medium
        transition-colors
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-[var(--accent)]
        focus-glow
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}