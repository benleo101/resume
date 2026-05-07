"use client";

import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "@/services/userService";
import UserForm, { UserFormValues } from "@/components/users/UserForm";
import { useRouter } from "next/navigation";
export default function CreateUserPage() {
    const router = useRouter();
  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      alert(`Create success: ${data.name}`);
       router.push("/user");
    },
  });

  function handleSubmit(values: UserFormValues) {
    mutation.mutate(values);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/user"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to users
        </Link>

        <div className="mt-6 rounded-2xl bg-white p-8 shadow">
          <h1 className="text-3xl font-bold text-gray-900">
            Create User
          </h1>

          {mutation.isError && (
            <p className="mt-4 rounded-lg bg-red-50 p-3 text-red-600">
              Create user failed
            </p>
          )}

          {mutation.isSuccess && (
            <p className="mt-4 rounded-lg bg-green-50 p-3 text-green-700">
              Create user success
            </p>
          )}

          <UserForm
            submitText="Create"
            isSubmitting={mutation.isPending}
            onSubmit={handleSubmit}
          />
          
        </div>
      </div>
    </main>
  );
}