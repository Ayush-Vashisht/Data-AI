"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-white">
            Infinex<span className="text-purple-500">Platform</span>
          </Link>
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search challenges..."
              className="w-64 pl-10 bg-gray-900 border-gray-800 text-white"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            <Link href="/challenges" className="text-gray-300 hover:text-white">
              Challenges
            </Link>
            <Link href="/community" className="text-gray-300 hover:text-white">
              Community
            </Link>
            <Link href="/research" className="text-gray-300 hover:text-white">
              Research
            </Link>
          </div>
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            Log in
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}
