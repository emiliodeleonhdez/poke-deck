"use client";
import localFont from "next/font/local";
import "./globals.css";
import PokeNavMenu from "./components/PokeNavMenu";
import { ErrorProvider } from "./context/ErrorContext";
import ErrorDisplay from "./components/ErrorDisplay";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<p>Loading...</p>}>
          <ErrorProvider>
            <header className="bg-white shadow-md p-4">
              <PokeNavMenu />
            </header>
            <main className="flex-grow p-4">
              {children}
              <ErrorDisplay />
            </main>
          </ErrorProvider>
        </Suspense>
      </body>
    </html>
  );
}
