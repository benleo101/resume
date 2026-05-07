"use client";
import Link from "next/link";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteUser, getUsers } from "@/services/userService";
import type { User } from "@/types/user";
export default function UsersPage() {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const limit = 5;
  const {
    data: users,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
          <p className="mt-4 text-gray-700">Loading users...</p>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="rounded-2xl bg-red-50 p-6 shadow">
          <h1 className="text-2xl font-bold text-red-700">
            โหลดข้อมูลไม่ได้
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

  if (!users || users.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="rounded-2xl bg-white p-8 shadow">
          <h1 className="text-2xl font-bold text-gray-900">ไม่พบข้อมูล</h1>
          <p className="mt-2 text-gray-600">ยังไม่มี user ให้แสดง</p>
        </div>
      </main>
    );
  }

  const filteredUsers = users.filter((user) => {
    const searchText = keyword.toLowerCase();

    return (
      user.name.toLowerCase().includes(searchText) ||
      user.username.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText)
    );
  });
  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / limit));

  const paginatedUsers = filteredUsers.slice(
    (page - 1) * limit,
    page * limit
  );

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>

          <p className="mt-2 text-gray-600">
            รายชื่อผู้ใช้จาก API
          </p>
        </div>
        <Link
          href="/user/create"
          className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
        >
          Create User
        </Link>

        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isFetching ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search name, username, email..."
        className="mb-6 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600"
      />

      <div className="overflow-hidden rounded-2xl bg-white shadow">
        <table className="w-full border-collapse text-left">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Username</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Website</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-10 text-center text-gray-500"
                >
                  ไม่พบข้อมูลที่ค้นหา
                </td>
              </tr>
            ) : (
              paginatedUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-6 py-4">{user.id}</td>

                  <td className="px-6 py-4 font-medium text-gray-900">
                    {user.name}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {user.username}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {user.email}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {user.phone}
                  </td>

                  <td className="px-6 py-4 text-blue-600">
                    {user.website}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Link
                        href={`/user/${user.id}`}
                        className="rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                      >
                        View
                      </Link>

                      <Link
                        href={`/user/${user.id}/edit`}
                        className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => {
                          const confirmed = confirm(`Delete ${user.name}?`);

                          if (confirmed) {
                            deleteMutation.mutate(user.id);
                          }
                        }}
                        disabled={deleteMutation.isPending}
                        className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:bg-gray-400"
                      >
                        Delete
                      </button>
                    </div>
                  </td>

                </tr>

              ))
            )}
          </tbody>
        </table>
        {filteredUsers.length > limit && (
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setPage((currentPage) => currentPage - 1)}
              disabled={page === 1}
              className="rounded-lg bg-gray-800 px-4 py-2 font-medium text-white disabled:bg-gray-400"
            >
              Previous
            </button>

            <span className="font-medium text-gray-700">
              Page {page} of {totalPages}
            </span>

            <button
              onClick={() => setPage((currentPage) => currentPage + 1)}
              disabled={page === totalPages}
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white disabled:bg-gray-400"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </main>
  );
}