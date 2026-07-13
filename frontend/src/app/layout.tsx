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
import { Toaster } from "react-hot-toast";
import { getTreksNav } from "./actions/treksdata";
import localFont from "next/font/local";

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

const amatry = localFont({
  src: "../../public/fonts/amatry.otf",
  variable: "--font-amatry",
  display: "swap",
});

const charsen = localFont({
  src: "../../public/fonts/charsen.otf",
  variable: "--font-charsen",
  display: "swap",
});

const mange = localFont({
  src: "../../public/fonts/mange.otf",
  variable: "--font-mange",
  display: "swap",
});

export const metadata = {
  title: "Travel App",
  description: "Travel and trekking website for your next trip.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  const treks = await getTreksNav();
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${lora.variable} ${saira.variable} ${gloock.variable} ${protest.variable} ${amatry.variable} ${charsen.variable} ${mange.variable}`}
    >
      <body>
        {/* <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        {children}
        <Footer /> */}

        <AppWrapper treks={treks}>
          {children}
        </AppWrapper>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#fff',
              color: '#1e293b',
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              borderRadius: '12px',
              padding: '14px 18px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              border: '1px solid #f1f5f9',
            },
            success: {
              iconTheme: { primary: '#3B6D11', secondary: '#EAF3DE' },
              style: {
                borderLeft: '4px solid #3B6D11',
              },
            },
            error: {
              iconTheme: { primary: '#dc2626', secondary: '#fee2e2' },
              style: {
                borderLeft: '4px solid #dc2626',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
