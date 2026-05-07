type ProfileHeaderProps = {
  name: string;
  role: string;
};

export default function ProfileHeader({
  name,
  role,
}: ProfileHeaderProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <div className="h-24 w-24 rounded-full bg-blue-600"></div>

      <h1 className="mt-4 text-3xl font-bold text-gray-900">
        {name}
      </h1>

      <p className="mt-2 text-gray-600">
        {role}
      </p>
    </div>
  );
}