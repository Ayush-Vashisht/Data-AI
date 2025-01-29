export interface ProfileData {
  name: string;
  commitment: {
    type: string;
    salary: string;
    startDate: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  expertise: string[];
  image: string;
  experience: {
    title: string;
    company: string;
    period: string;
    description: string[];
    tags?: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    description: string[];
    tags?: string[];
  }[];
  tasksCompleted: {
    title: string;
    description: string;
    skillsUsed: string[];
  }[];
  ongoingTasks: {
    title: string;
    description: string;
    skillsUsed: string[];
  }[];
  availableTasks: {
    title: string;
    description: string;
    requiredSkills: string[];
    difficulty: "Easy" | "Medium" | "Hard";
    estimatedTime: string;
  }[];
}
