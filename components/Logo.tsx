import { useId } from "react";
import clsx from "clsx";
import Image from "next/image";
import logoSrc from "@/images/icon/kantiss.png";

type LogoProps = {
  className?: string;
  invert?: boolean;
  filled?: boolean;
  fillOnHover?: boolean;
} & Omit<React.ComponentProps<typeof Image>, "src" | "alt">;

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: Omit<React.ComponentProps<typeof Image>, "src" | "alt"> & {
  invert?: boolean;
  filled?: boolean;
}) {
  return (
    <div className="relative w-12 h-12">
      <Image 
        src={logoSrc} 
        alt="Logo" 
        fill
        style={{ objectFit: "contain" }}
        {...props} 
      />
    </div>
  );
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <Image 
        src={logoSrc} 
        alt="Logo" 
        width={48} 
        height={48}
        className="w-12 h-12"
        style={{ objectFit: "contain" }}
      />
      <span className="font-bold text-2xl text-neutral-950">
        PT KANTI SEHATI SUKSES
      </span>
    </div>
  );
}