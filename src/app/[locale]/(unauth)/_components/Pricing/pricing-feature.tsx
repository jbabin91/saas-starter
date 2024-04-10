export function PricingFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center text-muted-foreground">
      <svg
        className="mr-1 size-6 stroke-current stroke-2 text-purple-400"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M5 12l5 5L20 7" />
      </svg>
      {children}
    </li>
  );
}
