import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

// Fetching API data with error handling
async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

const Blog = async () => {
  const data = await getData();

  // Ensure we always work with an array
  const posts = Array.isArray(data) ? data : data.posts || [];

  if (!posts || posts.length === 0) {
    return (
      <div className={styles.mainContainer}>
        <p className={styles.error}>No blog posts available.</p>
      </div>
    );
  }

  return (
    <div className={styles.mainContainer}>
      {posts.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          key={item._id}
          className={styles.container}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img || "/default.jpg"}
              alt={item.title}
              width={400}
              height={250}
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
