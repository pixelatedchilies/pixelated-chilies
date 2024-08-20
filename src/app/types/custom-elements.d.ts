// types/custom-elements.d.ts or src/custom-elements.d.ts

declare namespace JSX {
  interface IntrinsicElements {
    "heyflow-wrapper": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}
