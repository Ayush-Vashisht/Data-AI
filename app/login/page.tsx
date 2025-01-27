"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@/context/user-context";
import Link from "next/link";
import { EyeIcon, EyeOffIcon, Key, KeyRound, Slack } from "lucide-react";
import { Label } from "@/components/ui/label";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const { fetchUser, user } = useUser();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        await fetchUser();
        router.refresh();
        setTimeout(() => {
          router.push("/dashboard");
        }, 150);
      } else {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: data.message || "Something went wrong",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to connect to server",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-purple-900/40 to-black px-4 py-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold text-white">
            Infinex<span className="text-purple-700">Platform</span>
          </h1>
        </div>

        <Card className="overflow-hidden bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-semibold ">Sign in</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium ">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`bg-white/20 text-white placeholder-gray-300 `}
                  placeholder="mail@example.com"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-purple-300 hover:text-purple-400"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password here"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-white/20 placeholder-gray-300"
                  />
                </div>
              </div>

              <Button
                className="w-full bg-purple-600 hover:bg-purple-500 "
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>

            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="w-1/3 border-t border-gray-400" />
                <span className="w-1/3 px-2 text-gray-400">
                  Or, sign in with
                </span>
                <div className="w-1/3 border-t border-gray-400" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="w-full bg-white/10  hover:bg-white/20 border border-purple-400"
                >
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-white/10 hover:bg-white/20 border border-purple-400"
                >
                  <Slack className="mr-2 h-4 w-4"/>
                  Slack
                </Button>
              </div>

              <Button
                variant="outline"
                className="mt-3 w-full bg-white/10 hover:bg-white/20 border border-purple-400"
              >
                <KeyRound className="mr-2 h-4 w-4"/>
                Sign in With SSO
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-center text-sm text-gray-400 w-full">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-purple-900 hover:text-purple-200"
              >
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
