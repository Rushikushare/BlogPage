"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if unauthenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/dashboard/login");
    }
  }, [status, router]);

  // SWR fetcher
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    () => (status === "authenticated" ? `/api/posts?username=${session.user.name}` : null),
    fetcher
  );

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const title = e.target[0].value;
      const desc = e.target[1].value;
      const img = e.target[2].value;
      const content = e.target[3].value;

      try {
        await fetch("/api/posts", {
          method: "POST",
          body: JSON.stringify({
            title,
            desc,
            img,
            content,
            username: session.user.name,
          }),
        });
        mutate();
        e.target.reset();
      } catch (err) {
        console.log(err);
      }
    };

    const handleDelete = async (id) => {
      try {
        await fetch(`/api/posts/${id}`, { method: "DELETE" });
        mutate();
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <div className={styles.container}>
        <div className={styles.posts}>
         {isLoading ? (
  "loading..."
) : data && Array.isArray(data) && data.length > 0 ? (
  data.map((post) => (
    <div className={styles.post} key={post._id}>
      <div className={styles.imgContainer}>
        <Image src={post.img} alt="" width={200} height={100} />
      </div>
      <h2 className={styles.postTitle}>{post.title}</h2>
      <span
        className={styles.delete}
        onClick={() => handleDelete(post._id)}
      >
        X
      </span>
    </div>
  ))
) : (
  <p>No posts found.</p>
)}
        </div>

        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }

  return null;
};

export default Dashboard;
