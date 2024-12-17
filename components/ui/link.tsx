"use client";

import NextLink from "next/link";
import { ComponentProps } from "react";

export function Link({ children, ...props }: ComponentProps<typeof NextLink>) {
  return <NextLink {...props}>{children}</NextLink>;
}