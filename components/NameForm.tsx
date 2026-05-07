"use client";

import { useState } from "react";

export default function NameForm() {
  const [name, setName] = useState("");

  return (
    <div className="mt-6 rounded-2xl bg-white p-6 shadow">
      <h2 className="text-2xl font-bold text-gray-900">
        Input Form
      </h2>

      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
        className="mt-4 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-600"
      />

      <p className="mt-4 text-gray-700">
        Hello, {name || "Guest"}
      </p>
    </div>
  );
}