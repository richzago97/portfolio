"use client";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import React from "react";

const outfit = Outfit({ subsets: ["latin"] });

const locales = ["en", "pt"];

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="outfit.className">
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
