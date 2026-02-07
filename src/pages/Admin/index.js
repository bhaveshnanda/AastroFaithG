"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout/Layout";
import styles from "./admin.module.css";

export default function AdminPage() {
  const router = useRouter();
  const name = "Admin";

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/Login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("adminName");
    router.push("/Login");
  };

  return (
    <Layout>
      <section className={styles.container}>
        {/* Top Bar */}
        <div className={styles.topBar}>
          <h1 className={styles.heading}>Admin Panel</h1>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
          </button>
        </div>

        <p className={styles.subHeading}>Welcome, {name} 👋</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>📊 Dashboard</h3>
            <p>Overview of system activity</p>
          </div>

          <div className={styles.card}>
            <h3>👥 Users</h3>
            <p>Manage admin & users</p>
          </div>

          <div className={styles.card}>
            <h3>📨 Broadcasts</h3>
            <p>View WhatsApp message logs</p>
          </div>

          <div className={styles.card}>
            <h3>⚙️ Settings</h3>
            <p>System configuration</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
