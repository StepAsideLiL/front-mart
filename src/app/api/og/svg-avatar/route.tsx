import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    <div tw="flex w-full h-full items-center justify-center">hello</div>,
    {
      width: 1200,
      height: 630,
    }
  );
}
