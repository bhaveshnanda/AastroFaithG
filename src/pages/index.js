import Layout from "@/components/Layout/Layout";
import Banner from "@/components/Banner/Banner";
import AboutSection from "@/components/AboutSection/AboutSection";
import Services from "@/components/Services/Services";
import VideoSection from "@/components/VideoSection/VideoSection";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <AboutSection />
      <Services />
      <VideoSection />
    </Layout>
  );
}
