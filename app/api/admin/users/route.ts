import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { ObjectId } from "mongodb"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    const userId = cookies().get("userId")?.value
    if (!userId) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db()

    const user = await db.collection("users").findOne({ _id: new ObjectId(userId) })
    if (!user || user.email !== "admin@example.com") {
      return NextResponse.json({ message: "Not authorized" }, { status: 403 })
    }

    const users = await db
      .collection("users")
      .find({}, { projection: { password: 0 } })
      .toArray()
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}

