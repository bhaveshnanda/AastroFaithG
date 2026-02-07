"use client";

import Layout from "@/components/Layout/Layout";
import styles from "./blogs.module.css";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "How Astrology Works: A Scientific & Symbolic Perspective",
    desc: `Astrology is often misunderstood as prediction-based mysticism or fortune-telling. In reality, it is a symbolic language that has evolved over thousands of years to describe patterns of human experience and perception. It does not claim that planets “cause” events in a mechanical sense. Instead, astrology observes correlations between cosmic cycles and psychological, emotional, and behavioral tendencies.

From a scientific viewpoint, astrology functions more like a system of symbolic interpretation than a physical force. Just as psychology uses models and archetypes to understand the human mind, astrology uses planetary movements as metaphors for inner and outer change. For example, the Moon reflects emotional rhythms, while Saturn symbolizes structure, responsibility, and long-term development.

Astrology becomes meaningful when used as a reflective tool. It helps individuals observe timing, motivation, and personal cycles rather than predict fixed outcomes. When approached rationally, astrology encourages self-awareness, responsibility, and growth instead of fear, dependency, or blind belief. It is not about surrendering free will — it is about understanding patterns so you can respond with clarity and intention.`,
    author: "Gopal Agrawal",
    date: "Feb 2026",
  },
  {
    id: 2,
    title: "Understanding Your Birth Chart Without Mysticism",
    desc: `Your birth chart is not a sentence of fate written at the moment of your birth. It is a symbolic map of psychological tendencies, talents, emotional needs, and life themes. Each planet, sign, and house represents a different dimension of your personality and experience.

For example, the Sun describes your core identity and sense of purpose. The Moon shows how you process emotions and seek comfort. Mercury reflects how you think and communicate. These are not supernatural forces — they are symbolic frameworks for understanding human behavior.

When interpreted without fear or superstition, the birth chart becomes a tool for insight rather than prediction. It highlights potential strengths and challenges, but it does not remove choice. Two people with similar charts can live completely different lives based on awareness, environment, and decisions.

A grounded approach to astrology respects psychology, logic, and personal responsibility. It helps people understand themselves deeply without surrendering autonomy or critical thinking. The chart shows tendencies — not destiny.`,
    author: "Gopal Agrawal",
    date: "Feb 2026",
  },
  {
    id: 3,
    title: "Astrology & Decision Making: Where Logic Meets Intuition",
    desc: `Astrology should never replace logic, evidence, or rational thinking. Instead, it can work alongside them as a reflective support system. When used responsibly, astrology helps individuals observe emotional readiness, timing, and inner resistance around decisions.

For example, a transit may indicate a period of confusion or emotional sensitivity. This does not mean you should avoid decisions entirely — it means you should slow down, gather information, and reflect more carefully. Astrology highlights *when* you might feel uncertain or pressured, not what you must do.

Good decision-making balances intuition with logic. Astrology can help you understand your internal state, while logic helps you assess external facts. Together, they create clarity.

Used correctly, astrology strengthens responsibility rather than weakening it. It does not tell you what to do — it helps you understand how you are feeling while you decide.`,
    author: "Gopal Agrawal",
    date: "Jan 2026",
  },
  {
    id: 4,
    title: "Saturn Returns Explained for the Thinking Mind",
    desc: `The Saturn Return is one of the most discussed concepts in astrology, often surrounded by fear and exaggeration. In reality, it is a psychological and developmental milestone rather than a punishment or crisis.

Saturn takes about 29–30 years to return to the same position it occupied at your birth. This coincides with major phases of adult development: responsibility, identity formation, career direction, and long-term commitment.

During a Saturn Return, people are often forced to face questions like: Who am I really? What am I building? What structures in my life are weak or outdated?

This period is not about destruction — it is about maturity. It pushes you to take responsibility for your choices and align your life with reality rather than fantasy. When approached consciously, Saturn Return becomes a time of empowerment, not fear.`,
    author: "Gopal Agrawal",
    date: "Jan 2026",
  },  {
    id: 4,
    title: "Saturn Returns Explained for the Thinking Mind",
    desc: `The Saturn Return is one of the most discussed concepts in astrology, often surrounded by fear and exaggeration. In reality, it is a psychological and developmental milestone rather than a punishment or crisis.

Saturn takes about 29–30 years to return to the same position it occupied at your birth. This coincides with major phases of adult development: responsibility, identity formation, career direction, and long-term commitment.

During a Saturn Return, people are often forced to face questions like: Who am I really? What am I building? What structures in my life are weak or outdated?

This period is not about destruction — it is about maturity. It pushes you to take responsibility for your choices and align your life with reality rather than fantasy. When approached consciously, Saturn Return becomes a time of empowerment, not fear.`,
    author: "Gopal Agrawal",
    date: "Jan 2026",
  },  {
    id: 4,
    title: "Saturn Returns Explained for the Thinking Mind",
    desc: `The Saturn Return is one of the most discussed concepts in astrology, often surrounded by fear and exaggeration. In reality, it is a psychological and developmental milestone rather than a punishment or crisis.

Saturn takes about 29–30 years to return to the same position it occupied at your birth. This coincides with major phases of adult development: responsibility, identity formation, career direction, and long-term commitment.

During a Saturn Return, people are often forced to face questions like: Who am I really? What am I building? What structures in my life are weak or outdated?

This period is not about destruction — it is about maturity. It pushes you to take responsibility for your choices and align your life with reality rather than fantasy. When approached consciously, Saturn Return becomes a time of empowerment, not fear.`,
    author: "Gopal Agrawal",
    date: "Jan 2026",
  },
];

export default function BlogsPage() {
  return (
    <Layout>
      <section className={styles.container}>
        <h1 className={styles.heading}>📚 Blogs</h1>
        <p className={styles.subHeading}>
          Thoughtful astrology for modern, logical minds
        </p>

        <div className={styles.grid}>
          {blogs.map((blog) => (
            <div key={blog.id} className={styles.card}>
              <h3 className={styles.title}>{blog.title}</h3>

              {/* Preview only */}
              <p className={styles.desc}>{blog.desc.slice(0, 140)}...</p>

              <div className={styles.meta}>
                <span>✍️ {blog.author}</span>
                <span>📅 {blog.date}</span>
              </div>

              <Link href={`/Blogs/${blog.id}`} className={styles.readBtn}>
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export { blogs };
