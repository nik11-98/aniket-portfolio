import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import { site } from "./data/site";
import SmoothScroll from "./components/SmoothScroll";
import Preloader from "./components/Preloader";
import "./globals.css";

// Sans carries body + UI; a serif (Fraunces) is used only for the hero
// statement and case-study titles, mirroring the reference's serif accents.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.intro,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${mono.variable}`}
    >
      <body>
        <SmoothScroll />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
