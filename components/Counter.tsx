"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-6 rounded-2xl bg-white p-6 shadow">
      <h2 className="text-2xl font-bold text-gray-900">
        Count: {count}
      </h2>

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          + เพิ่ม
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
        >
          - ลด
        </button>

        <button
          onClick={() => setCount(0)}
          className="rounded-lg bg-gray-800 px-4 py-2 font-medium text-white hover:bg-gray-900"
        >
          Reset
        </button>
      </div>
    </div>
  );
}