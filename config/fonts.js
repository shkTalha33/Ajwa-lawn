import { Poppins, Roboto, Nunito, Marcellus_SC } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-nunito",
});

export const marcellus_sc = Marcellus_SC({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-marcellus_sc",
});
