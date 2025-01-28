import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { UserProvider } from "@/context/user-context";
import HeaderWrapper from "@/components/headerWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <UserProvider>
        <HeaderWrapper />
          <Toaster />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
