import React from "react";

export interface AccordionItem {
  id: string;
  title: string;
  content: string[];
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => (
  <section className="flex flex-col gap-2">
    {items.map((item) => (
      <div
        key={item.id}
        className="collapse collapse-arrow border border-slate-900/10 dark:border-slate-50/[0.06] rounded-xl bg-gradient-to-br from-[#001116]"
      >
        <input type="checkbox" id={item.id} />
        <label htmlFor={item.id} className="collapse-title text-xl font-medium">
          {item.title}
        </label>
        <div className="collapse-content">
          {item.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Accordion;
