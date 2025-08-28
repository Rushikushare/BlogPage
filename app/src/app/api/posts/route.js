import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@models/Post"; // ✅ use alias

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    await connect();
    // If username exists, filter, else return all
    const posts = await Post.find(username ? { username } : {});

    return NextResponse.json(posts, { status: 200 }); // ✅ no stringify
  } catch (err) {
    console.error("Database error:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    await connect();

    const newPost = new Post(body);
    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    console.error("Database error:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
