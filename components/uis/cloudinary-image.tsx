"use client";

import { cn } from "@/lib/utils";
import { CldImage } from "next-cloudinary";

const CloudinaryImage = ({
  width = "600",
  height = "600",
  src,
  sizes = "100vw",
  alt,
  className = "",
}: {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  src: string;
  sizes?: string;
  alt: string;
  className?: string;
}) => {
  return (
    <CldImage
      width={width}
      height={height}
      src={src}
      sizes={sizes}
      alt={alt}
      crop="thumb"
      className={cn(className)}
    />
  );
};

export default CloudinaryImage;
