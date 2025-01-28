import { Footer } from "@/components/footer";
import HeroSection from "@/components/landing-page/HeroSection";
import { HowItWorks } from "@/components/landing-page/HowItWorks";
import { Community } from "@/components/landing-page/Community";
import { TasksSection } from "@/components/landing-page/TasksSection";

export default function LandingPage() {
  return (
    <>
      <main className="min-h-screen w-full">
        <HeroSection />
        <TasksSection />
        <HowItWorks />
        <Community />
      </main>
      <Footer />
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function DomainCard({ title }: { title: string }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
  );
}
