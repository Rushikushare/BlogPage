import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
     img: {
      type: String,
      required: true,
    },
     content: {
      type: String,
      required: true,
    },
     username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Prevent model overwrite in development (Next.js hot reload issue)
export default mongoose.models.Posts || mongoose.model("Posts", postSchema);
