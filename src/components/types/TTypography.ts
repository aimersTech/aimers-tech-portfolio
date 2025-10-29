import { ReactNode } from "react";

export type TTypography = {
  weight?: "normal" | "semibold" | "bold" | "black";
  className?: string;
  children: ReactNode;
};
