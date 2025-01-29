import { ProfileHeader } from "@/components/profile-header";
import { ProfileTabs } from "@/components/profile-tab";
import { Card } from "@/components/ui/card";
import { profileData } from "@/data/profile-data";

export default function ProfilePage() {
  return (
    <div className="bg-gradient-to-b from-purple-900/40 to-black text-white min-h-screen">
      <div className="container mx-auto max-w-2xl py-6 px-4 sm:px-0">
        <Card className="!border-none shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-shadow duration-300 backdrop-blur-sm bg-black">
          <div className="bg-black bg-gradient-to-b from-purple-900/40 to-black relative text-purple-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
            <ProfileHeader data={profileData} />
            <ProfileTabs data={profileData} />
          </div>
        </Card>
      </div>
    </div>
  );
}
