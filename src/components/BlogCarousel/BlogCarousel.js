"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./BlogCarousel.module.css";
import { blogs } from "@/pages/Blogs";

export default function BlogCarousel() {
  const recentBlogs = blogs.slice(0, 4); // first 4 blogs
  const cards = [...recentBlogs, { id: "explore" }]; // add 5th special card

  const [index, setIndex] = useState(0);

  const formatPreview = (text) => {
    const words = text.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
      result += words[i] + " ";
      if ((i + 1) % 17 === 0) result += "\n";
    }
    return result.trim();
  };

  const handlePrev = () => setIndex((i) => Math.max(i - 1, 0));
  const handleNext = () =>
    setIndex((i) => Math.min(i + 1, cards.length - 3));

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>✍️ Latest Blogs</h2>
        <Link href="/Blogs" className={styles.exploreBtn}>
          Explore All Blogs →
        </Link>
      </div>

      <div className={styles.carouselContainer}>
        <button
          className={styles.arrowLeft}
          onClick={handlePrev}
          disabled={index === 0}
        >
          ‹
        </button>

        <div className={styles.viewport}>
          <div
            className={styles.track}
            style={{
              transform: `translateX(-${index * (100 / 3)}%)`,
            }}
          >
            {cards.map((blog, i) => {
              if (blog.id === "explore") {
                return (
                  <div key="explore" className={`${styles.card} ${styles.exploreCard}`}>
                    <h3 className={styles.exploreTitle}>Explore All Blogs</h3>
                    <p className={styles.exploreText}>
                      Read all astrology articles, insights, and deep-dive posts in one place.
                    </p>
                    <Link href="/Blogs" className={styles.exploreBtnCard}>
                      Go to Blogs →
                    </Link>
                  </div>
                );
              }

              const preview = blog.desc.split(".").slice(0, 2).join(".") + ".";

              return (
                <div key={blog.id} className={styles.card}>
                  <h3 className={styles.title}>{blog.title}</h3>
                  <p className={styles.desc}>{formatPreview(preview)}.....</p>
                  <Link href={`/Blogs/${blog.id}`} className={styles.readBtn}>
                    Read More →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <button
          className={styles.arrowRight}
          onClick={handleNext}
          disabled={index >= cards.length - 3}
        >
          ›
        </button>
      </div>
    </section>
  );
}
