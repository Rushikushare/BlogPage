"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log("Submitting:", { name, email, password }); // Debug log

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      console.log("Response:", data); // Debug log

      if (res.ok) {
        router.push("/dashboard/login?success=Account has been created");
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Request failed");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Username"
          required
          className={styles.input}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Register</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
