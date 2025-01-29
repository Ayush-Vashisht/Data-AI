"use client";

import Image from "next/image";

interface ChallengeCardProps {
  title: string;
  prize: string;
  image: string;
  organizer: string;
  organizerImage: string;
}

export function ChallengeCard({
  title,
  prize,
  image,
  organizer,
  organizerImage,
}: ChallengeCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-purple-500/30 hover:border-purple-500/50 bg-gradient-to-br from-theme-primary to-theme-primary p-6 transition-all hover:scale-105 w-64 h-80">
      <div className="relative h-full flex flex-col items-center justify-between">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="mb-4 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-purple-200">{prize}</p>
        </div>
        <div className="flex items-center gap-2 bg-black px-3 py-1 rounded-full">
          <Image
            src={organizerImage}
            alt={organizer}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-sm text-gray-300">{organizer}</span>
        </div>
      </div>
    </div>
  );
}
