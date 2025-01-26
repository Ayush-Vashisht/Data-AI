"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Brain, UserCircle2 } from "lucide-react";
import { useUser } from "@/context/user-context";
import { useRouter, usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavBar() {
  const { user, loading, setUser } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    const response = await fetch("/api/auth/logout", { method: "POST" });
    if (response.ok) {
      setUser(null);
      router.push("/");
    }
  };

  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const showActionButtons = !loading && !isAuthPage;
  const isDashboardRoute = pathname.startsWith("/dashboard");

  return (
    <nav className="fixed top-0 w-[100vw] z-50 bg-black/50 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-white">
            Infinex<span className="text-purple-500">Platform</span>
          </Link>
          {!isAuthPage && (
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search challenges..."
                className="w-64 pl-10 bg-gray-900 border-gray-800 text-white"
              />
            </div>
          )}
        </div>

        {!isAuthPage && (
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/challenges"
                className="text-gray-300 hover:text-white"
              >
                Challenges
              </Link>
              <Link
                href="/community"
                className="text-gray-300 hover:text-white"
              >
                Community
              </Link>
              <Link href="/research" className="text-gray-300 hover:text-white">
                Research
              </Link>
            </div>
            {showActionButtons && (
              <>
                {user ? (
                  <>
                    {!isDashboardRoute && (
                      <Link
                        href="/dashboard"
                        className="text-gray-300 hover:text-white"
                      >
                        Dashboard
                      </Link>
                    )}
                    <DropdownMenu>
                      <DropdownMenuTrigger className="text-gray-300 hover:text-white flex items-center gap-2">
                        <UserCircle2 className="h-5 w-5" />
                        <span>{user?.name || "Guest"}</span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="w-48 bg-gray-900 border border-gray-800 shadow-lg rounded-md absolute right-0 mt-2"
                        style={{ width: "auto", maxWidth: "12rem" }}
                      >
                        <DropdownMenuItem
                          asChild
                          className="cursor-pointer hover:bg-gray-800 focus:bg-gray-800 text-gray-300 hover:text-white focus:text-white"
                        >
                          <Link href="/settings">Settings</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={handleLogout}
                          className="cursor-pointer hover:bg-gray-800 focus:bg-gray-800 text-gray-300 hover:text-white focus:text-white"
                        >
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="text-gray-300 hover:text-white"
                    >
                      Log in
                    </Link>
                    <Link
                      href="/signup"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
