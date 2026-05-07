"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "@/services/userService";

export default function UserDetailPage() {
    const params = useParams();
    const id = params.id as string;

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
    const avatarUrl = user.avatar || "/default-avatar.png";

    return (
        <main className="min-h-screen bg-gray-100 p-10">
            <div className="mx-auto max-w-3xl">
                <Link
                    href="/user"
                    className="text-sm font-medium text-blue-600 hover:underline"
                >
                    ← Back to users
                </Link>

                <div className="mt-6 rounded-2xl bg-white p-8 shadow">
                    <img
                        src={user.avatar || "/default-avatar.png"}
                        alt={user.name}
                        className="h-24 w-24 rounded-full object-cover"
                    />

                    <h1 className="mt-6 text-3xl font-bold text-gray-900">
                        {user.name}
                    </h1>

                    <p className="mt-2 text-gray-600">@{user.username}</p>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-medium text-gray-900">{user.email}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="font-medium text-gray-900">{user.phone}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Website</p>
                            <p className="font-medium text-blue-600">{user.website}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">User ID</p>
                            <p className="font-medium text-gray-900">{user.id}</p>
                        </div>
                        <Link
                            href={`/user/${id}/edit`}
                            className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
                        >
                            Edit User
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}