"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Brain, UserCircle2 } from "lucide-react";
import { useUser } from "@/context/user-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
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

  const showActionButtons =
    !loading && pathname !== "/login" && pathname !== "/signup";
  const isDashboardRoute = pathname.startsWith("/dashboard");

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {!isDashboardRoute && (
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold">DataAI</span>
          </Link>
        )}
        <div
          className={`flex items-center space-x-4 ${
            isDashboardRoute ? "justify-end w-full" : ""
          }`}
        >
          {showActionButtons && (
            <>
              {user ? (
                <>
                  {!isDashboardRoute && (
                    <Button variant="ghost" asChild>
                      <Link href="/dashboard">Dashboard</Link>
                    </Button>
                  )}

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center gap-2"
                      >
                        <UserCircle2 className="h-6 w-6" />
                        {user?.name || "Guest"}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href="/settings">Settings</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleLogout}>
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <>
                  <Button variant="ghost" asChild>
                    <Link href="/login">Sign In</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
