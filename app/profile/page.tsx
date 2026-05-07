import ProfileHeader from "./components/ProfileHeader";
import ProfileInfo from "./components/ProfileInfo";
import ProfileActions from "./components/ProfileActions";

export default function ProfilePage() {
  const user = {
    name: "KoronaMo",
    email: "korona@example.com",
    role: "Frontend Developer",
    bio: "Next.js Beginner Developer",
    skills: ["Next.js", "React", "Flutter"],
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <ProfileHeader
          name={user.name}
          role={user.bio}
        />

        <ProfileInfo
          email={user.email}
          role={user.role}
          skills={user.skills}
        />

        <ProfileActions />
      </div>
    </main>
  );
}