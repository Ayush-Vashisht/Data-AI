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
}
