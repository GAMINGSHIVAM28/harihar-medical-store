import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function FAQAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={item.question}
            className="glass-card overflow-hidden rounded-[2rem] border border-slate-200/80"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 p-6 sm:p-7 text-left"
            >
              <span className="text-base font-semibold text-slate-900">{item.question}</span>
              <ChevronDown
                size={20}
                className={`text-primary-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isOpen && (
              <div className="border-t border-slate-200/80 bg-white/90 px-6 py-6 text-slate-600">
                <p className="leading-8">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;
