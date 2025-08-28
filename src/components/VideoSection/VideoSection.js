import styles from "./VideoSection.module.css";

export default function VideoSection() {
  return (
    <div className={styles.videos}>
      <h2>Our YouTube Videos</h2>
      <div className={styles.grid}>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/VIDEO_ID1"></iframe>
        {/* <iframe width="300" height="200" src="https://www.youtube.com/embed/VIDEO_ID2"></iframe>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/VIDEO_ID3"></iframe> */}
      </div>
    </div>
  );
}
