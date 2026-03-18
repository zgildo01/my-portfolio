import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { IM_Fell_English } from "next/font/google";

const Chomsky = localFont({
  src: "../../public/fonts/chomsky/Chomsky.otf",
  variable: "--font-chomsky",
});
const CaslonAntique = localFont({
  src: "../../public/fonts/caslon-antique/CaslonAntique.ttf",
  variable: "--font-caslon-antique"
});
const NewsGothic = localFont({
  src: "../../public/fonts/news-gothic/NewsGothicStd.ttf",
  variable: "--font-news-gothic"
});
const FellEnglish = IM_Fell_English({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fell-english",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html 
      lang="en"
      className = {`${Chomsky.variable} ${CaslonAntique.variable} ${NewsGothic.variable} ${FellEnglish.variable}`}
    >
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
