import React from 'react';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[var(--text)] text-white',
  success: 'bg-green-600 text-white',
  warning: 'bg-yellow-500 text-white',
  error: 'bg-red-600 text-white',
  info: 'bg-blue-500 text-white'
};

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        px-2.5
        py-0.5
        rounded-full
        text-xs
        font-medium
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}