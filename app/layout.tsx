import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from "@/context/user-context";
import { NavBar } from "@/components/Navbar";

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
          <NavBar />
          <main className="pt-16 bg-gray-900 flex flex-col min-h-screen">
            <Toaster />
            {children}
          </main>
        </UserProvider>
      </body>
    </html>
  );
}
