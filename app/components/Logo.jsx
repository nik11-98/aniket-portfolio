import { site } from "../data/site";

// Brand mark — the gradient app-icon. Used in the nav and the hero greeting.
export default function Logo({ size = 44, className }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      width={size}
      height={size}
      alt={`${site.name} logo`}
      className={className}
      draggable="false"
    />
  );
}
