type UserCardProps = {
  name: string;
  role: string;
  skills: string[];
};

export default function UserCard({
  name,
  role,
  skills,
}: UserCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <div className="h-20 w-20 rounded-full bg-blue-600"></div>

      <h2 className="mt-4 text-xl font-bold text-gray-900">
        {name}
      </h2>

      <p className="mt-2 text-gray-600">
        {role}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}