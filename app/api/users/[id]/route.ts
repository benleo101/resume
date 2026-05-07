import { NextResponse } from "next/server";
import { db } from "@/lib/sqlite";
import { initDb } from "@/lib/init-db";

type RouteParams = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_request: Request, { params }: RouteParams) {
  try {
    initDb();

    const { id } = await params;

    const user = db
      .prepare(
        `
        SELECT id, name, username, email, phone, website
        FROM users
        WHERE id = ?
        `
      )
      .get(id);

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("GET /api/users/[id] error:", error);

    return NextResponse.json(
      { message: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, { params }: RouteParams) {
  try {
    initDb();

    const { id } = await params;
    const body = await request.json();

    const { name, username, email, phone, website } = body;

    if (!name || !username || !email) {
      return NextResponse.json(
        { message: "name, username and email are required" },
        { status: 400 }
      );
    }

    const result = db
      .prepare(
        `
        UPDATE users
        SET name = ?, username = ?, email = ?, phone = ?, website = ?
        WHERE id = ?
        `
      )
      .run(name, username, email, phone ?? "", website ?? "", id);

    if (result.changes === 0) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const updatedUser = db
      .prepare(
        `
        SELECT id, name, username, email, phone, website
        FROM users
        WHERE id = ?
        `
      )
      .get(id);

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("PUT /api/users/[id] error:", error);

    return NextResponse.json(
      { message: "Failed to update user" },
      { status: 500 }
    );
  }
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  try {
    initDb();

    const { id } = await params;

    const result = db
      .prepare(
        `
        DELETE FROM users
        WHERE id = ?
        `
      )
      .run(id);

    if (result.changes === 0) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Delete user success",
      id,
    });
  } catch (error) {
    console.error("DELETE /api/users/[id] error:", error);

    return NextResponse.json(
      { message: "Failed to delete user" },
      { status: 500 }
    );
  }
}