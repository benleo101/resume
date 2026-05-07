"use client";

import { useState } from "react";

export default function ProfileActions() {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="text-xl font-bold text-gray-900">
        Actions
      </h2>

      <button
        onClick={() => setIsFollowed(!isFollowed)}
        className={
          isFollowed
            ? "mt-4 rounded-lg bg-gray-800 px-4 py-2 font-medium text-white"
            : "mt-4 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        }
      >
        {isFollowed ? "Following" : "Follow"}
      </button>
    </div>
  );
}