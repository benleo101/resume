"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserById, updateUser } from "@/services/userService";
import UserForm, { UserFormValues } from "@/components/users/UserForm";
import { useRouter } from "next/navigation";
export default function EditUserPage() {
    const params = useParams();
    const id = params.id as string;
    const router = useRouter();

    const {
        data: user,
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: ["user", id],
        queryFn: () => getUserById(id),
        enabled: !!id,
    });

    const mutation = useMutation({
        mutationFn: updateUser,
        onSuccess: (data) => {
            alert(`Update success: ${data.name}`);
            router.push(`/user/${id}`);
        },
    });

    function handleSubmit(values: UserFormValues) {
        mutation.mutate({
            id,
            ...values,
        });
    }

    if (isLoading) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
                    <p className="mt-4 text-gray-700">Loading user...</p>
                </div>
            </main>
        );
    }

    if (isError) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="rounded-2xl bg-red-50 p-6 shadow">
                    <h1 className="text-2xl font-bold text-red-700">
                        โหลดข้อมูล user ไม่ได้
                    </h1>

                    <p className="mt-2 text-red-600">
                        {error instanceof Error ? error.message : "Unknown error"}
                    </p>

                    <button
                        onClick={() => refetch()}
                        className="mt-4 rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
                    >
                        ลองใหม่
                    </button>
                </div>
            </main>
        );
    }

    if (!user) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="rounded-2xl bg-white p-8 shadow">
                    <h1 className="text-2xl font-bold text-gray-900">
                        ไม่พบข้อมูล user
                    </h1>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-100 p-10">
            <div className="mx-auto max-w-2xl">
                <Link
                    href={`/user/${id}`}
                    className="text-sm font-medium text-blue-600 hover:underline"
                >
                    ← Back to detail
                </Link>

                <div className="mt-6 rounded-2xl bg-white p-8 shadow">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Edit User
                    </h1>

                    {mutation.isError && (
                        <p className="mt-4 rounded-lg bg-red-50 p-3 text-red-600">
                            Update user failed
                        </p>
                    )}

                    {mutation.isSuccess && (
                        <p className="mt-4 rounded-lg bg-green-50 p-3 text-green-700">
                            Update user success
                        </p>
                    )}

                    <UserForm
                        initialValues={{
                            name: user.name,
                            username: user.username,
                            email: user.email,
                            phone: user.phone,
                            website: user.website,
                        }}
                        submitText="Save"
                        isSubmitting={mutation.isPending}
                        onSubmit={handleSubmit}
                    />
                </div>
            </div>
        </main>
    );
}