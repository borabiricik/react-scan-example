"use client"
import { scan } from "react-scan";
import React from "react"
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Monitoring } from "react-scan/monitoring/next"


if (typeof window !== 'undefined') {
  scan({
    enabled: true,
    animationSpeed:"slow",
    log: true, // logs render info to console (default: false)
    alwaysShowLabels:true,
    includeChildren:true,

  });
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Monitoring
          apiKey="wSCULpbN17xdeA6p_LE9Yfh-uErjQbiF"
          url="https://monitoring.react-scan.com/api/v1/ingest"
        />
        {children}
      </body>
    </html>
  );
}
