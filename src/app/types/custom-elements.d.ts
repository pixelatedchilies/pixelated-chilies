// types/custom-elements.d.ts or src/custom-elements.d.ts

// Declare the custom element
declare namespace JSX {
  interface IntrinsicElements {
    "heyflow-wrapper": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}
