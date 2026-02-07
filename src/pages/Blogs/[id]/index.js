"use client";

import { useRouter } from "next/router";
import Layout from "@/components/Layout/Layout";
import styles from "../blogs.module.css";
import { blogs } from "../index";

export default function BlogDetailPage() {
  const router = useRouter();
  const { id } = router.query;   // ✅ Correct way in pages router

  if (!id) return null;          // ⏳ Wait for router to be ready

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) return <p className={styles.notFound}>Blog not found</p>;

  return (
    <Layout>
      <section className={styles.detailWrapper}>
        <div className={styles.detailCard}>
          <h1 className={styles.detailTitle}>{blog.title}</h1>

          <div className={styles.detailMeta}>
            <span>✍️ {blog.author}</span>
            <span>📅 {blog.date}</span>
          </div>

          <div className={styles.divider}></div>

          <p className={styles.detailDesc}>{blog.desc}</p>
        </div>
      </section>
    </Layout>
  );
}
