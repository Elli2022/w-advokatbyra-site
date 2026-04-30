import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import LargeBanner from "../components/LargeBanner";
import NewsSection from "../components/NewsSection";
import Footer from "../components/Footer";
import Video from "../components/Video";
import HorisontalRule from "../components/HorisontalRule";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <LargeBanner />
        <Video />
        <NewsSection />
        <HorisontalRule />
      </main>
      <Footer />
    </>
  );
}

export default Home;
