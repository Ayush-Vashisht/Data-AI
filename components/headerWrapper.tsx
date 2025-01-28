"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";

export default function HeaderWrapper() {
  const pathname = usePathname();

  // Define routes where you don't want the header
  const noHeaderRoutes = ["/dashboard"];

  if (noHeaderRoutes.includes(pathname)) return null;

  return <Header />;
}
