import { NextResponse } from "next/server";
import { db } from "@/lib/sqlite";
import { initDb } from "@/lib/init-db";

export async function GET() {
  try {
    initDb();

    const users = db
      .prepare(
        `
        SELECT id, name, username, email, phone, website
        FROM users
        ORDER BY id DESC
        `
      )
      .all();

    return NextResponse.json(users);
  } catch (error) {
    console.error("GET /api/users error:", error);

    return NextResponse.json(
      { message: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    initDb();

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
        INSERT INTO users (name, username, email, phone, website)
        VALUES (?, ?, ?, ?, ?)
        `
      )
      .run(name, username, email, phone ?? "", website ?? "");

    const user = db
      .prepare(
        `
        SELECT id, name, username, email, phone, website
        FROM users
        WHERE id = ?
        `
      )
      .get(result.lastInsertRowid);

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("POST /api/users error:", error);

    return NextResponse.json(
      { message: "Failed to create user" },
      { status: 500 }
    );
  }
}