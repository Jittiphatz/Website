import { Fira_Code as FontMono, Itim as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
