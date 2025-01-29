"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ProfileData } from "../types/profile";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface ProfileTabsProps {
  data: ProfileData;
}

export function ProfileTabs({ data }: ProfileTabsProps) {
  return (
    <Tabs defaultValue="experience" className="w-full">
      <TabsList className="grid w-full grid-cols-4 border-b rounded-none text-purple-500">
        <TabsTrigger
          value="experience"
          className="- data-[state=active]:bg-purple-600 data-[state=active]:text-white"
        >
          Experience
        </TabsTrigger>
        <TabsTrigger
          value="tasksCompleted"
          className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
        >
          Tasks Completed
        </TabsTrigger>
        <TabsTrigger
          value="ongoingTasks"
          className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
        >
          Ongoing Tasks
        </TabsTrigger>
        <TabsTrigger
          value="availableTasks"
          className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
        >
          Available Tasks
        </TabsTrigger>
      </TabsList>

      <TabsContent value="experience">
        <div className="p-6">
          <h2 className="text-md font-bold mb-6">Work Experience</h2>
          <div className="relative space-y-0 ">
            {data.experience.map((exp, index) => (
              <div key={index} className="flex gap-4 pb-2 relative">
                <div className="relative">
                  <div className="h-12 w-12 rounded-full border-4 border-background bg-muted flex items-center justify-center relative z-10">
                    {exp.company.charAt(0)}
                  </div>
                  {index !== data.experience.length - 1 && (
                    <div className="absolute top-12 left-1/2 bottom-0 -translate-x-1/2 w-0.5 bg-muted" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-sm">{exp.title}</h3>
                    <span className="text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {exp.company}
                  </p>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    {exp.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="tasksCompleted">
        <div className="p-6">
          <h2 className="text-md font-bold mb-6">Tasks Completed</h2>
          <div className="space-y-6">
            {data.tasksCompleted.map((task, index) => (
              <div
                key={index}
                className="border-b pb-6 last:border-b-0 last:pb-0"
              >
                <h3 className="font-semibold text-sm mb-2">{task.title}</h3>
                <p className="text-xs text-muted-foreground mb-4">
                  {task.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {task.skillsUsed.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="ongoingTasks">
        <div className="p-6">
          <h2 className="text-md font-bold mb-6">Ongoing Tasks</h2>
          <div className="space-y-6">
            {data.ongoingTasks.map((task, index) => (
              <div
                key={index}
                className="border-b pb-6 last:border-b-0 last:pb-0"
              >
                <h3 className="font-semibold text-sm mb-2">{task.title}</h3>
                <p className="text-xs text-muted-foreground mb-4">
                  {task.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {task.skillsUsed.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="availableTasks">
        <div className="p-6">
          <h2 className="text-md font-bold mb-6">Available Tasks</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {data.availableTasks.map((task, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-sm font-semibold">{task.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground mb-4">
                    {task.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {task.requiredSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>
                      Difficulty: <strong>{task.difficulty}</strong>
                    </span>
                    <span>
                      Est. Time: <strong>{task.estimatedTime}</strong>
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
