import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nagarkot Food Product Pvt Ltd | Ugna Ji Makhana",
  description: "Leading manufacturer and wholesaler of premium roasted flavoured makhana. Quality and health in every bite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
