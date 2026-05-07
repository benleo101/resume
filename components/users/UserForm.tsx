"use client";

import { FormEvent, useState } from "react";

export type UserFormValues = {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

type UserFormProps = {
  initialValues?: UserFormValues;
  submitText: string;
  isSubmitting?: boolean;
  onSubmit: (values: UserFormValues) => void;
};

export default function UserForm({
  initialValues,
  submitText,
  isSubmitting = false,
  onSubmit,
}: UserFormProps) {
  const [name, setName] = useState(initialValues?.name ?? "");
  const [username, setUsername] = useState(initialValues?.username ?? "");
  const [email, setEmail] = useState(initialValues?.email ?? "");
  const [phone, setPhone] = useState(initialValues?.phone ?? "");
  const [website, setWebsite] = useState(initialValues?.website ?? "");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit({
      name,
      username,
      email,
      phone,
      website,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label className="mb-1 block font-medium text-gray-700">
          Name
        </label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-600"
          placeholder="Enter name"
        />
      </div>

      <div>
        <label className="mb-1 block font-medium text-gray-700">
          Username
        </label>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-600"
          placeholder="Enter username"
        />
      </div>

      <div>
        <label className="mb-1 block font-medium text-gray-700">
          Email
        </label>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-600"
          placeholder="Enter email"
        />
      </div>

      <div>
        <label className="mb-1 block font-medium text-gray-700">
          Phone
        </label>

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-600"
          placeholder="Enter phone"
        />
      </div>

      <div>
        <label className="mb-1 block font-medium text-gray-700">
          Website
        </label>

        <input
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-600"
          placeholder="Enter website"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:bg-gray-400"
      >
        {isSubmitting ? "Saving..." : submitText}
      </button>
    </form>
  );
}