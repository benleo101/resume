"use client";

import { useState } from "react";

export default function ProfileCard() {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <div className="max-w-sm rounded-2xl bg-white p-6 shadow">
      <div className="h-24 w-24 rounded-full bg-blue-600"></div>

      <h2 className="mt-4 text-2xl font-bold text-gray-900">
        KoronaMo
      </h2>

      <p className="mt-2 text-gray-600">
        Beginner Next.js Developer
      </p>

      <button
        onClick={() => setIsFollowed(!isFollowed)}
        className={
          isFollowed
            ? "mt-6 rounded-lg bg-gray-800 px-4 py-2 font-medium text-white"
            : "mt-6 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        }
      >
        {isFollowed ? "Following" : "Follow"}
      </button>
    </div>
  );
}