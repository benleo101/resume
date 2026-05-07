import { api } from "@/lib/axios";
import type { User } from "@/types/user";

export type CreateUserPayload = {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export type UpdateUserPayload = CreateUserPayload & {
  id: string;
};

export async function getUsers(): Promise<User[]> {
  const res = await api.get<User[]>("/users");
  return res.data;
}

export async function getUserById(id: string): Promise<User> {
  const res = await api.get<User>(`/users/${id}`);
  return res.data;
}

export async function createUser(payload: CreateUserPayload): Promise<User> {
  const res = await api.post<User>("/users", payload);
  return res.data;
}

export async function updateUser({
  id,
  ...payload
}: UpdateUserPayload): Promise<User> {
  const res = await api.put<User>(`/users/${id}`, payload);
  return res.data;
}

export async function deleteUser(id: number): Promise<void> {
  await api.delete(`/users/${id}`);
}