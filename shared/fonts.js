// Font definitions
import { Inter, DM_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "300",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: "400",
});

const fontbook = {
  inter: inter.className,
  dm_sans: dm_sans.className,
};
export default fontbook;
