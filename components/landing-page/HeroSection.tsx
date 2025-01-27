"use client";

import { ChallengeCard } from "@/components/landing-page/ChallengeCard";
import { StatsSection } from "@/components/landing-page/StatsSection";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="relative py-16 md:py-20 md:pt-32">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-theme-primary/40 to-black pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto mb-16 max-w-4xl text-left items-start sm:text-center flex flex-col sm:items-center gap-4">
            <h1 className="mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-6xl pb-[0.1em]">
              Shape the Future of AI Through Data Creation
            </h1>
            <p className="text-2xl text-gray-300">
              We're leading a computer-use agent revolution.
            </p>
            <p className="mb-8 max-w-3xl text-xl text-gray-400 sm:mx-auto">
              We're leading a computer-use agent revolution. Open-source has
              ZERO desktop computer-use datasets. With AI, data is king, so we
              built the Training Gym - the ONLY platform that collects
              high-quality data for training computer-use agents, using diverse
              AI-generated tasks, and instantly rewards you for participating.
            </p>
            <div className="flex flex-wrap justify-start sm:justify-center gap-4">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => router.push("/dashboard")}
              >
                Start Contributing
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              >
                Learn More
              </Button>
            </div>
          </div>

          <StatsSection />

          {/* <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ChallengeCard
              title="AI Detection Challenge"
              prize="$50,000 + GPU Credits"
              image="/placeholder.svg"
              organizer="DataAI Platform"
            />
            <ChallengeCard
              title="Neural Processing Competition"
              prize="$35,000 + Cloud Credits"
              image="/placeholder.svg"
              organizer="Research Lab"
            />
            <ChallengeCard
              title="Computer Vision Benchmark"
              prize="$25,000 + Hardware"
              image="/placeholder.svg"
              organizer="Tech Foundation"
            />
          </div> */}
        </div>
      </main>
    </div>
  );
}
