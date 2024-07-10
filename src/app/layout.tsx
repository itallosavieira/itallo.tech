import { Menu } from "@/components";
import ThemeContextProvider from "@/context/theme-context";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { League_Spartan, PT_Serif, Poppins, Sorts_Mill_Goudy } from "next/font/google";

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

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league",
  weight: ["400", "700", "900"]
})

const ptSerif = PT_Serif({
  subsets: ["latin"],
  variable: "--font-pt-serif",
  weight: ["400", "700"]
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
      <body className={`
        ${poppins.variable} 
        ${sortsMillGoudy.variable}
        ${leagueSpartan.variable}
        ${ptSerif.variable}
        overflow-y-scroll
        py-14`}>
           <ThemeContextProvider>
            <div className="relative max-w-[64rem] flex justify-between m-auto max-lg:flex-col">
              <Menu />
              {children}
              {/* <div className="absolute flex right-0">
                <ThemeSwitch />
              </div> */}
            </div>
           </ThemeContextProvider>
        </body>
    </html>
  );
}
