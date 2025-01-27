import { ProfileHeader } from "@/components/profile-header";
import { ProfileTabs } from "@/components/profile-tab";
import { Card } from "@/components/ui/card";
import { profileData } from "@/data/profile-data";

export default function ProfilePage() {
  return (
    <div className="bg-black">
      <div className="bg-gradient-to-b from-purple-900/40 to-black min-h-screen">
        <div className="container mx-auto max-w-3xl py-6 px-4 sm:px-0 ">
          <Card className="b shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-shadow duration-300 backdrop-blur-sm border border-purple-500/10">
            <div className="relative bg-violet-900 text-slate-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />

              <ProfileHeader data={profileData} />
              <ProfileTabs data={profileData} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
