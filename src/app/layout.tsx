import { Menu } from "@/components";
import ThemeContextProvider from "@/context/theme-context";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"]
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "600"]
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
      <body className={
        `${poppins.variable} 
        ${spaceGrotesk.variable} 
        bg-gray-50
        text-gray-950
        dark:bg-gray-950
        dark:text-gray-100`
      }>
           <ThemeContextProvider>
            <Menu /> 
            <div className="max-w-[900px] md:p-16 p-6 m-auto mb-[6rem]">
                {[children]}
            </div>
           </ThemeContextProvider>
        </body>
    </html>
  );
}
