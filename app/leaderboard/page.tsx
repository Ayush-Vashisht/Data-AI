import { Leaderboard } from "@/components/Leaderboard";

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900/40 to-black text-white py-12 px-4">
      <main className="container mx-auto">
        <Leaderboard />
      </main>
    </div>
  )
}

