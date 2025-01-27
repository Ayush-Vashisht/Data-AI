import { Footer } from "@/components/footer";
import HeroSection from "@/components/landing-page/HeroSection";
import { Database, Trophy, Globe } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <main className="min-h-screen w-full">
        <HeroSection />

        {/* How It Works Section */}
        <section className="px-4 py-24">
          <div className="container mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
              How It Works
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Database className="h-8 w-8 text-purple-600" />}
                title="Contribute Data"
                description="Create and submit high-quality data for AI training across various domains."
              />
              <FeatureCard
                icon={<Trophy className="h-8 w-8 text-purple-600" />}
                title="Earn Rewards"
                description="Get compensated for your valuable contributions to AI advancement."
              />
              <FeatureCard
                icon={<Globe className="h-8 w-8 text-purple-600" />}
                title="Global Impact"
                description="Help shape the future of AI by contributing your unique perspective."
              />
            </div>
          </div>
        </section>

        {/* Data Domains Section */}
        <section className="bg-gray-50 px-4 py-24">
          <div className="container mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
              Data Domains
            </h2>
            <div className="mx-auto max-w-2xl space-y-4">
              <DomainCard title="Image & Vision" />
              <DomainCard title="Natural Language" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-purple-600 to-purple-700 px-4 py-24 text-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Ready to Contribute?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Join our community of data creators and help shape the future of
              AI while earning rewards.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-medium text-purple-600 transition hover:bg-white/90"
            >
              Get Started Now
            </Link>
          </div>
        </section>
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
