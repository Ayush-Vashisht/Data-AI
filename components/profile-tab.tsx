"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ProfileData } from "@/types/profile";

interface ProfileTabsProps {
  data: ProfileData;
}

export function ProfileTabs({ data }: ProfileTabsProps) {
  return (
    <Tabs defaultValue="experience" className="w-full">
      {/* <TabsList className="grid w-full grid-cols-3 border-b rounded-none">
        <TabsTrigger
          value="interview"
          className="relative data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-800 data-[state=active]:bg-clip-border data-[state=active]:border data-[state=active]:border-transparent data-[state=active]:bg-origin-border"
        >
          Interview
        </TabsTrigger>
        <TabsTrigger
          value="experience"
          className="relative data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-800 data-[state=active]:bg-clip-border data-[state=active]:border data-[state=active]:border-transparent data-[state=active]:bg-origin-border"
        >
          Experience
        </TabsTrigger>
        <TabsTrigger
          value="education"
          className="relative data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-800 data-[state=active]:bg-clip-border data-[state=active]:border data-[state=active]:border-transparent data-[state=active]:bg-origin-border"
        >
          Education
        </TabsTrigger>
      </TabsList>    */}
      <TabsContent value="interview">
        <div className="p-6">
          <div className="aspect-video rounded-lg bg-muted" />
        </div>
      </TabsContent>
      <TabsContent value="experience">
        <div className="p-6">
          <h2 className="text-md font-semibold mb-6">Work Experience</h2>
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
                  {exp.tags && (
                    <div className="mt-2">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="mr-2 font-medium"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="education">
        <div className="p-6">
          <h2 className="text-md font-semibold mb-6">Education</h2>
          <div className="relative space-y-0">
            {data.education.map((edu, index) => (
              <div key={index} className="flex gap-4 pb-2 relative">
                <div className="relative">
                  <div className="h-12 w-12 rounded-full border-4 border-background bg-muted flex items-center justify-center relative z-10">
                    {edu.institution.charAt(0)}
                  </div>
                  {index !== data.education.length - 1 && (
                    <div className="absolute top-12 left-1/2 bottom-0 -translate-x-1/2 w-0.5 bg-muted" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-sm">{edu.degree}</h3>
                    <span className="text-xs text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {edu.institution}
                  </p>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    {edu.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>
                  {edu.tags && (
                    <div className="mt-2">
                      {edu.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="mr-2 font-medium"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
