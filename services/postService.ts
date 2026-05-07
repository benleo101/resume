import { api } from "@/lib/axios";
import type { Post } from "@/types/post";

type GetPostsParams = {
  page: number;
  limit: number;
};

export async function getPosts({
  page,
  limit,
}: GetPostsParams): Promise<Post[]> {
  const res = await api.get<Post[]>("/posts", {
    params: {
      _page: page,
      _limit: limit,
    },
  });

  return res.data;
}