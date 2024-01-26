import { Inter } from "next/font/google";
import "./globals.css";
import ReactQuery from "@/components/ReactQuery";
import Home from "@/components/Home";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tobias Ajras - Crombie Challenge",
  description: "Search products aplication with NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Home />
        <ReactQuery>{children}</ReactQuery>
      </body>
    </html>
  );
}
