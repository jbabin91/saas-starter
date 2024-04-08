import { siteConfig } from '@/configs/siteConfig';

export function Logo() {
  return (
    <div className="flex items-center text-xl font-semibold">
      <svg
        className="mr-1 stroke-current stroke-2"
        fill="none"
        height={32}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        width={32}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <rect height="8" rx="1" width="6" x="3" y="12" />
        <rect height="12" rx="1" width="6" x="9" y="8" />
        <rect height="16" rx="1" width="6" x="15" y="4" />
        <path d="M4 20h14" />
      </svg>
      {siteConfig.name}
    </div>
  );
}
