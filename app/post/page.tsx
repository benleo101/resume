"use client";

import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "@/services/postService";

export default function PostsPage() {
  const limit = 10;

  const {
    data,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam }) =>
      getPosts({
        page: pageParam,
        limit,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < limit) {
        return undefined;
      }

      return allPages.length + 1;
    },
  });

  const posts = data?.pages.flat() ?? [];

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isNearBottom = scrollTop + windowHeight >= documentHeight - 200;

      if (isNearBottom && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>

          <p className="mt-4 text-gray-700">Loading posts...</p>
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
            กรุณาลองใหม่อีกครั้ง
          </p>

          <p className="mt-2 text-sm text-gray-600">
            {error instanceof Error ? error.message : "Unknown error"}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        Posts Infinite Scroll
      </h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-2xl bg-white p-6 shadow"
          >
            <h2 className="text-xl font-bold text-gray-900">
              {post.id}. {post.title}
            </h2>

            <p className="mt-2 text-gray-600">
              {post.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        {isFetchingNextPage && (
          <div className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow">
            <div className="h-6 w-6 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
            <span className="text-gray-700">Loading more...</span>
          </div>
        )}

        {!hasNextPage && (
          <p className="text-gray-500">
            ไม่มีข้อมูลเพิ่มแล้ว
          </p>
        )}
      </div>
    </main>
  );
}