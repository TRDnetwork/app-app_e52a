import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultIndex?: number;
}

export default function Tabs({ tabs, defaultIndex = 0 }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div>
      <div className="border-b border-[var(--surface)]">
        <nav className="flex space-x-8" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveIndex(index)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm
                ${activeIndex === index
                  ? 'border-[var(--accent)] text-[var(--text)]'
                  : 'border-transparent text-[var(--text-dim)] hover:text-[var(--text)] hover:border-[var(--surface)]'}
              `}
              aria-current={activeIndex === index ? 'page' : undefined}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="py-4">{tabs[activeIndex].content}</div>
    </div>
  );
}