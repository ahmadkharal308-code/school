import type { SVGProps } from "react";

/** Clean line-art icon set, stroke-based, inherits currentColor. */
function base(props: SVGProps<SVGSVGElement>) {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function IconCalendar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

export function IconBuilding(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M9 21v-4h6v4M9 10h.01M12 10h.01M15 10h.01M9 13.5h.01M12 13.5h.01M15 13.5h.01M2 21h20" />
    </svg>
  );
}

export function IconGradCap(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M2 9.5 12 5l10 4.5L12 14 2 9.5Z" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5M22 9.5V15" />
    </svg>
  );
}

export function IconBookOpen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 6.5C10.5 5 8.5 4.5 6 4.5c-1.2 0-2.2.1-3 .3V18c.8-.2 1.8-.3 3-.3 2.5 0 4.5.5 6 1.8 1.5-1.3 3.5-1.8 6-1.8 1.2 0 2.2.1 3 .3V4.8c-.8-.2-1.8-.3-3-.3-2.5 0-4.5.5-6 2Z" />
      <path d="M12 6.5v13" />
    </svg>
  );
}

export function IconCrescent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

export function IconGrowth(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 21v-8" />
      <path d="M12 13c0-3.5 2.5-6 6.5-6 0 3.5-2.5 6-6.5 6ZM12 10C12 7 10 5 6.5 5 6.5 8 8.5 10 12 10Z" />
      <path d="M5 21h14" />
    </svg>
  );
}

export function IconPen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="m17 3 4 4L8 20l-5 1 1-5L17 3Z" />
      <path d="m14 6 4 4" />
    </svg>
  );
}

export function IconFlask(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M9 3h6M10 3v6L4.5 18a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9V3" />
      <path d="M7 15h10" />
    </svg>
  );
}

export function IconTrophy(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M7 4h10v6a5 5 0 0 1-10 0V4Z" />
      <path d="M7 6H4a3 3 0 0 0 3 5M17 6h3a3 3 0 0 1-3 5M12 15v3M8 21h8M10 18h4" />
    </svg>
  );
}

export function IconPalette(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-.9 2-2s-.6-1.5-.6-2.4c0-1 .8-1.6 1.8-1.6H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8Z" />
      <path d="M7.5 11h.01M10 7.5h.01M14 7.5h.01M16.5 11h.01" />
    </svg>
  );
}

export function IconHands(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 21a9.5 9.5 0 0 1-7-3.2c-1-1.2-1-3 .2-4l4.3-3.9a2 2 0 0 1 2.8.1L14 11.5" />
      <path d="M12 21a9.5 9.5 0 0 0 7-3.2c1-1.2 1-3-.2-4l-4.3-3.9a2 2 0 0 0-2.8.1L10 11.5" />
      <path d="M12 3v4M8.5 4.5 10 7M15.5 4.5 14 7" />
    </svg>
  );
}

export function IconPodium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M8 21v-6h8v6M3 21v-3h5M16 21h5v-4h-5M12 3l1.2 2.4 2.8.4-2 2 .5 2.7L12 9.2l-2.5 1.3.5-2.7-2-2 2.8-.4L12 3Z" />
    </svg>
  );
}

export function IconPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M5 4h4l1.5 4L8 9.5a12 12 0 0 0 6.5 6.5L16 13.5l4 1.5v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function IconClock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function IconWhatsApp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z" />
      <path d="M8.8 9.2c0 3 3 6 6 6l1.4-1.4-1.9-1.2-.9.7c-1-.5-1.7-1.2-2.2-2.2l.7-.9-1.2-1.9L8.8 9.2Z" />
    </svg>
  );
}

export function IconUpload(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 16V5M7.5 9.5 12 5l4.5 4.5" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

export function IconPlus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 4v16M5.5 13.5 12 20l6.5-6.5" />
    </svg>
  );
}

export function IconStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9L12 2.5Z" />
    </svg>
  );
}

export function IconCrest(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3Z" />
      <path d="M12 6.5v11M8 9l4-2.5L16 9M8.5 13.5c1-.8 2.3-1.2 3.5-1.2s2.5.4 3.5 1.2" />
    </svg>
  );
}
