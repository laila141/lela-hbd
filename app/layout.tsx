import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat, Dancing_Script, DM_Serif_Display, Gochi_Hand } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: 'swap',
});

const caveat = Caveat({ 
  subsets: ["latin"],
  variable: "--font-caveat",
  display: 'swap',
});

const dancing = Dancing_Script({ 
  subsets: ["latin"],
  variable: "--font-dancing",
  display: 'swap',
});

const dmSerif = DM_Serif_Display({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: 'swap',
});

const gochi = Gochi_Hand({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gochi",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Our Memories",
  description: "A digital memory box",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${jakarta.variable} ${caveat.variable} ${dancing.variable} ${dmSerif.variable} ${gochi.variable} font-display antialiased bg-background-light dark:bg-background-dark text-[#181114] dark:text-white transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
