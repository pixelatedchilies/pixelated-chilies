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
        className="collapse collapse-arrow bg-gradient-to-tr from-[#001116] border border-slate-900/10 dark:border-slate-50/[0.06] rounded-xl"
      >
        <input type="checkbox" id={item.id} />
        <label
          htmlFor={item.id}
          className="collapse-title text-base font-normal text-white"
        >
          {item.title}
        </label>
        <div className="collapse-content">
          {item.content.map((paragraph, index) => (
            <p key={index} className="text-base font-light mb-2">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Accordion;
