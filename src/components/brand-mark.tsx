import Image from "next/image";

import brandMarkImage from "@/assets/branding/dailylog-cat-header.png";

type BrandMarkProps = {
  className?: string;
  label?: string;
  priority?: boolean;
};

export function BrandMark({ className, label, priority = false }: BrandMarkProps) {
  return (
    <Image
      src={brandMarkImage}
      alt={label ?? ""}
      aria-hidden={label ? undefined : true}
      className={className}
      priority={priority}
      sizes="(max-width: 640px) 48px, 58px"
    />
  );
}
