import "./globals.css";
import {
  Plus_Jakarta_Sans,
  Lora,
  Saira_Stencil_One,
  Gloock,
  Protest_Strike,
} from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import AppWrapper from "@/components/AppWrapper";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-jakarta",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

const saira = Saira_Stencil_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-saira",
});

const gloock = Gloock({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gloock",
});

const protest = Protest_Strike({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-protest",
});

export const metadata = {
  title: "Travel App",
  description: "Travel and trekking website for your next trip.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${lora.variable} ${saira.variable} ${gloock.variable} ${protest.variable}`}
    >
      <body>
        {/* <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        {children}
        <Footer /> */}

        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
