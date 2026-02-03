"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout/Layout";
import styles from "./admin-login.module.css";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) router.push("/admin");
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("adminName", data.name || "Admin");
        router.push("/admin");
      } else {
        setError(data.message || "❌ Invalid username or password");
      }
    } catch (err) {
      console.error(err);
      setError("❌ Something went wrong. Try again later.");
    }
  };

  return (
    <Layout>
      <section className="container">
        <div className={styles.card}>
          <h2 className={styles.title}>🔐 Admin Login</h2>

          <form className={styles.form} onSubmit={handleLogin}>
            <input
              className={styles.input}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className={styles.error}>{error}</p>}

            <button className={styles.button} type="submit">
              Login
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
