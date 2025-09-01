import styles from "./VideoSection.module.css";

export default function VideoSection() {
  return (
    <div className={styles.videos}>
      <h2>Our YouTube Videos</h2>
      <div className={styles.grid}>
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/2hNqdqAfF0o?si=J1VQCrkfRFe9_2Gv"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/LqEoMx0Cmt8?si=EeT_sxIESRTr2Z7e"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe  
          width="300"
          height="200"
          src="https://www.youtube.com/embed/T4nNWZVU22E?si=-hzJImC3iD7tTFig"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
