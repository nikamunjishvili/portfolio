import Footer from "@/common/components/footer";
import Header from "@/common/components/header";
import "@/styles/globals.css";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Montserrat } from "next/font/google";

const montrserrat: NextFontWithVariable = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});
export default function App({ Component, pageProps }: any) {
  return (
    <main
      className={`${montrserrat.variable} font-mont bg-light w-full min-h-screen`}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
