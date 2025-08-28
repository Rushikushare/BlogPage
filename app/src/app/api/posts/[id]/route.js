import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@models/Post";// better path alias

export const GET = async (request,{params}) => {

    const {id}=params

  try {
    await connect();
    const post = await Post.findById(id);

    
    return NextResponse.json(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.error("Database error:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Post.findByIdAndDelete(id);

    
    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};