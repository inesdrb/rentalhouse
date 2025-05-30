import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import NavBar from "./component/navbar";
import Footer from "./component/footer";
             

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], // 400 pour normal, 700 pour les titres
  display: "swap",
});

export const metadata = {
  title: "Rent house",
  description: "un site de location des maisons",
};

 export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={montserrat.className}>
  <body
        className={`${montserrat.variable} ${roboto.variable} antialiased  ` }
      >        <Header />
      <NavBar/>
        <main>{children}

           </main>
           <Footer/>
      </body>
    </html>
  );
 }
