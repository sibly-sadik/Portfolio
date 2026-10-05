import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const viewport: Viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Shimul — Laravel Developer | PHP & REST API Specialist",
  description:
    "Portfolio of Md. Sibly Sadik Shimul — Motivated Laravel Developer with 2 years of experience building secure, scalable web applications using PHP, Laravel, MySQL, REST APIs, Git, and MVC architecture.",
  keywords: [
    "Laravel Developer",
    "PHP Developer",
    "REST API",
    "MySQL",
    "MVC Framework",
    "Web Developer",
    "Backend Developer",
    "Dhaka Bangladesh",
    "ReactJS",
    "Vue.js",
  ],
  authors: [{ name: "Md. Sibly Sadik Shimul" }],
  creator: "Md. Sibly Sadik Shimul",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shimulcse.vercel.app/",
    title: "Shimul — Laravel Developer",
    description:
      "Laravel Developer with 2 years of experience in PHP and Laravel development. Proficient in RESTful API development, MySQL, Git, and MVC architecture.",
    siteName: "Shimul Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shimul — Laravel Developer",
    description:
      "Laravel Developer with 2 years of experience building secure, scalable web applications using PHP, Laravel, MySQL, and REST APIs.",
    creator: "@shimulcse",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#05070d] text-white selection:bg-amber-500 selection:text-black min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
