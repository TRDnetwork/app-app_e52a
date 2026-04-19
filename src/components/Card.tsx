import React from 'react';

interface CardProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export default function Card({ header, children, footer, className = '' }: CardProps) {
  return (
    <div
      className={`
        bg-[var(--surface)]
        rounded-lg
        shadow-sm
        overflow-hidden
        ${className}
      `}
    >
      {header && (
        <div className="px-6 py-4 border-b border-[var(--surface)] bg-[#f5f3ee]">
          {typeof header === 'string' ? <h3 className="text-lg font-medium">{header}</h3> : header}
        </div>
      )}
      <div className="p-6">{children}</div>
      {footer && <div className="px-6 py-4 border-t border-[var(--surface)] bg-[#f5f3ee]">{footer}</div>}
    </div>
  );
}