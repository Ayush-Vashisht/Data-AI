import type { ProfileData } from "../types/profile";

export const profileData: ProfileData = {
  name: "Sarah Anderson",
  commitment: {
    type: "Full-time at",
    salary: "$120,000",
    startDate: "Starts in 2 weeks",
  },
  contact: {
    email: "sarah.anderson@example.com",
    phone: "+1234567890",
    location: "United States",
  },
  expertise: ["React", "TypeScript", "Node.js", "Python", "AWS"],
  image: "",
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc",
      period: "2023 - Present",
      description: [
        "Leading development of cloud-native applications.",
        "Managing team of 5 engineers",
        "Implementing CI/CD pipelines",
      ],
      tags: ["Prestigious"],
    },
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc",
      period: "2023 - Present",
      description: [
        "Leading development of cloud-native applications",
        "Managing team of 5 engineers",
        "Implementing CI/CD pipelines",
      ],
      tags: ["Prestigious"],
    },
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc",
      period: "2023 - Present",
      description: [
        "Leading development of cloud-native applications",
        "Managing team of 5 engineers",
        "Implementing CI/CD pipelines",
      ],
      tags: ["Prestigious"],
    },
  ],
  education: [
    {
      degree: "MS, Computer Science",
      institution: "Stanford University",
      period: "2020 - 2021",
      description: [
        "Leading development of cloud-native applications",
        "Managing team of 5 engineers",
        "Implementing CI/CD pipelines",
      ],
      tags: ["Exceptional"],
    },
    {
      degree: "MS, Computer Science",
      institution: "Stanford University",
      period: "2020 - 2021",
      description: [
        "Leading development of cloud-native applications",
        "Managing team of 5 engineers",
        "Implementing CI/CD pipelines",
      ],
      tags: ["Exceptional"],
    },
    {
      degree: "MS, Computer Science",
      institution: "Stanford University",
      period: "2020 - 2021",
      description: [
        "Leading development of cloud-native applications",
        "Managing team of 5 engineers",
        "Implementing CI/CD pipelines",
      ],
      tags: ["Exceptional"],
    },
    {
      degree: "MS, Computer Science",
      institution: "Stanford University",
      period: "2020 - 2021",
      description: [
        "Leading development of cloud-native applications",
        "Managing team of 5 engineers",
        "Implementing CI/CD pipelines",
      ],
      tags: ["Exceptional"],
    },
  ],
  tasksCompleted: [
    {
      title: "E-commerce Platform Optimization",
      description:
        "Improved the performance of the company's e-commerce platform, resulting in a 30% increase in page load speed and a 15% increase in conversion rates.",
      skillsUsed: ["React", "Node.js", "MongoDB", "Redis"],
    },
    {
      title: "AI-powered Chatbot Implementation",
      description:
        "Developed and integrated an AI-powered chatbot for customer support, reducing response times by 50% and improving customer satisfaction scores.",
      skillsUsed: ["Python", "TensorFlow", "NLP", "AWS Lambda"],
    },
  ],
  ongoingTasks: [
    {
      title: "Mobile App Development",
      description:
        "Leading the development of a cross-platform mobile app for the company's main product, focusing on performance and user experience.",
      skillsUsed: ["React Native", "GraphQL", "Firebase"],
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "Creating a comprehensive data analytics dashboard for internal use, integrating multiple data sources and providing real-time insights.",
      skillsUsed: ["D3.js", "Python", "SQL", "Tableau"],
    },
  ],
  availableTasks: [
    {
      title: "Implement User Authentication System",
      description:
        "Design and implement a secure user authentication system using JWT and OAuth 2.0 for our main web application.",
      requiredSkills: ["Node.js", "Express", "JWT", "OAuth"],
      difficulty: "Medium",
      estimatedTime: "1 week",
    },
    {
      title: "Optimize Database Queries",
      description: "Analyze and optimize slow-performing database queries to improve overall application performance.",
      requiredSkills: ["SQL", "Database Design", "Query Optimization"],
      difficulty: "Hard",
      estimatedTime: "3-5 days",
    },
    {
      title: "Create Responsive Email Templates",
      description:
        "Design and code responsive email templates for our marketing campaigns that work across various email clients.",
      requiredSkills: ["HTML", "CSS", "Email Design"],
      difficulty: "Easy",
      estimatedTime: "2-3 days",
    },
    {
      title: "Implement Real-time Notifications",
      description: "Add real-time notification functionality to our web application using WebSockets.",
      requiredSkills: ["WebSockets", "Node.js", "React"],
      difficulty: "Medium",
      estimatedTime: "4-5 days",
    },
  ],
};
