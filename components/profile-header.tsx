import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProfileData } from "@/types/profile";
import {
  Mail,
  Phone,
  MapPin,
  Share,
  UserPlus,
  UserRoundPlus,
  Activity,
} from "lucide-react";
import { Badge } from "./ui/badge";

interface ProfileHeaderProps {
  data: ProfileData;
}

export function ProfileHeader({ data }: ProfileHeaderProps) {
  return (
    <div className="p-6 border-b">
      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={data.image} />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold">{data.name}</h1>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary">
              <div className="flex items-center gap-1 font-medium bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text ">
                <Share className="w-3 h-3 font-medium text-purple-600" />
                <span className="text-transparent">Share</span>
              </div>
            </Badge>
            {/* <Badge variant="secondary">
              <div className="flex items-center justify-between gap-1 font-medium bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text ">
                <UserRoundPlus className="w-3 h-3 font-medium text-purple-600" />
                <span className="text-transparent">Request Intro</span>
              </div>
            </Badge> */}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{data.contact.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{data.contact.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{data.contact.location}</span>
          </div>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-2">Skills</p>
          <div className="flex flex-wrap gap-2">
            {data.expertise.map((skill) => (
              <Badge key={skill} variant="secondary" className="font-medium ">
                <span className="flex items-center justify-between gap-1 font-medium bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                {skill}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
