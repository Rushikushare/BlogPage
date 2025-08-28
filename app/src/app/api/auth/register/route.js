import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connect } from "@/utils/db";
import User from "@models/User";

export const POST = async (request) => {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    let just=  await connect();
    if(just){
    console.log("mongo db connected");}

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json(
      { message: "User has been created" },
      { status: 201 }
    );
  } catch (err) {
    console.error("❌ Register error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
