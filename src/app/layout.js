import { Montserrat, Elsie } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css"; // Your global styles
import "@/styles/custom.css"; // Your global styles
import Header from "@/components/Header";
import FooterPage from "@/components/Footer";
import ImportBsJS from "@/components/ImportBS/page";
import AOSInitializer from "@/components/AOSInitializer";


const elsie = Elsie({
  weight: ['400', '900'], // Load specific weights
  subsets: ['latin'],
  variable: '--font-elsie',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Saj Hotels Ltd",
  description: "Saj Hotels Ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${elsie.variable} antialiased`}>
        <AOSInitializer />
        
        <ImportBsJS />
        <main>{children}</main>
              <FooterPage />
      </body>
    </html>
  );
}
