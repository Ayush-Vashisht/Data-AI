import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST() {
  cookies().delete("userId")
  return NextResponse.json({ message: "Logged out successfully" })
}

