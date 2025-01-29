import { Trophy, CalendarDays, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const taskTags = [
  {
    name: "Figma",
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
  {
    name: "Adobe Suite",
    color: "bg-red-500/20 text-red-400 border-red-500/30",
  },
  { name: "Sketch", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  //   {
  //     name: "InVision",
  //     color: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  //   },
  //   { name: "GitHub", color: "bg-gray-500/20 text-gray-400 border-gray-500/30" },
  //   {
  //     name: "AWS",
  //     color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  //   },
  //   { name: "Docker", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
  //   {
  //     name: "Unity",
  //     color: "bg-green-500/20 text-green-400 border-green-500/30",
  //   },
];

export function TaskHeader({ task }: { task: any }) {
  if (!task) return null;
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-900/40 to-black/40 border-b border-purple-500/20">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-start">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {taskTags.map((tag) => (
                <Badge
                  key={tag.name}
                  variant="outline"
                  className={`${tag.color} transition-colors duration-200 hover:bg-opacity-30`}
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag.name}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {task.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6">{task.summary}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Start Task
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <div>
                  <div className="text-sm text-gray-400">Total Prize Pool</div>
                  <div className="text-white font-semibold">{task.prize}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-purple-400" />
                <div>
                  <div className="text-sm text-gray-400">Start Date</div>
                  <div className="text-white font-semibold">Feb 1, 2024</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-purple-400" />
                <div>
                  <div className="text-sm text-gray-400">Time Remaining</div>
                  <div className="text-white font-semibold">45 Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
