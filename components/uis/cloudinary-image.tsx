"use client";

import { cn } from "@/lib/utils";
import { CldImage } from "next-cloudinary";

const CloudinaryImage = ({
  width = "600",
  height = "600",
  src,
  alt,
  sizes = "100vw",
  crop = "thumb",
  className = "",
}: {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  src: string;
  alt: string;
  sizes?: string;
  crop?:
    | "crop"
    | "thumb"
    | "fill"
    | "auto"
    | "lfill"
    | "fill_pad"
    | "scale"
    | "fit"
    | "limit"
    | "mfit"
    | "pad"
    | "lpad"
    | "mpad"
    | "imagga_scale"
    | "imagga_crop";
  className?: string;
}) => {
  return (
    <CldImage
      width={width}
      height={height}
      src={src}
      alt={alt}
      sizes={sizes}
      crop={crop}
      className={cn(className)}
    />
  );
};

export default CloudinaryImage;
