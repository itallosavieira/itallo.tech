import { Menu } from "@/components";
import ThemeContextProvider from "@/context/theme-context";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Poppins, Sorts_Mill_Goudy } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "900"]
})

const sortsMillGoudy = Sorts_Mill_Goudy({
  subsets: ["latin"],
  variable: "--font-sorts",
  weight: ["400"]
})

export const metadata: Metadata = {
  title: "itallo.tech",
  description: "Itallo's personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${sortsMillGoudy.variable} py-14`}>
        <section className="max-w-[70rem] m-auto flex">
           <ThemeContextProvider>
                <Menu />
                {[children]}
           </ThemeContextProvider>
        </section>
        </body>
    </html>
  );
}
