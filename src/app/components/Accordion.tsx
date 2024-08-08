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
        className="collapse collapse-arrow border border-slate-700 hover:bg-base-200 transition duration-300 rounded-xl"
      >
        <input type="radio" name="my-accordion" id={item.id} />
        <label
          htmlFor={item.id}
          className="collapse-title text-lg text-white font-normal"
        >
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
