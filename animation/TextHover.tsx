import { TtextHoverProps } from "@/types";

export default function TextHover({ title1, title2 }: TtextHoverProps) {
  return (
    <span className="group relative inline-block overflow-hidden align-middle">
      <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
        {title1}
      </span>
      <span
        aria-hidden="true"
        className="absolute left-0 top-full block whitespace-nowrap transition-transform duration-500 ease-in-out group-hover:-translate-y-full"
      >
        {title2}
      </span>
    </span>
  );
}
