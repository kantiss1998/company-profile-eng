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
    <Image
      src={logoSrc}
      alt="Logo"
      width={48}
      height={32} // Coba mengubah salah satu atau menghapus untuk tes
      layout="intrinsic"
      {...props}
    />
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
    <div className={clsx(fillOnHover && "group/logo", className)}>
      <Logomark
        className="inline-block"
        invert={invert}
        filled={filled}
        {...props}
      />
      <span
        className={clsx(
          "inline-block ml-2",
          invert ? "text-white" : "text-neutral-950"
        )}
      >
        <span className=" font-bold text-2xl ml-2 text-neutral-950">PT KANTI SEHATI SUKSES</span>
      </span>
    </div>
  );
}
