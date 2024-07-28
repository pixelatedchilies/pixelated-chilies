import React from "react";

export interface ListItem {
  text: string;
}

export interface ReusableListProps {
  items: ListItem[];
}

const ReusableList: React.FC<ReusableListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#00aa6e"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
          <p className="p-1">{item.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReusableList;
