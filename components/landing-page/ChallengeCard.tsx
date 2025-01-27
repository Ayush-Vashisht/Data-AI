interface ChallengeCardProps {
  title: string;
  prize: string;
  image: string;
  organizer: string;
}

export function ChallengeCard({
  title,
  prize,
  image,
  organizer,
}: ChallengeCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-theme-primary to-gray-900 p-6 transition-all hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-purple-200">{prize}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-purple-500" />
          <span className="text-sm text-gray-300">{organizer}</span>
        </div>
      </div>
    </div>
  );
}
