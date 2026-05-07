type ProfileInfoProps = {
  email: string;
  role: string;
  skills: string[];
};

export default function ProfileInfo({
  email,
  role,
  skills,
}: ProfileInfoProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="text-xl font-bold text-gray-900">
        Profile Info
      </h2>

      <div className="mt-4 space-y-2 text-gray-700">
        <p>Email: {email}</p>
        <p>Role: {role}</p>

        <div>
          <p className="mb-2">Skills:</p>
          
          <div className="flex flex-wrap gap-2">
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
      </div>
    </div>
  );
}