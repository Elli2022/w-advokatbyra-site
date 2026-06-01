import { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import LargeBanner from "../components/LargeBanner";
import Footer from "../components/Footer";
import HorisontalRule from "../components/HorisontalRule";

const Video = lazy(() => import("../components/Video"));
const NewsSection = lazy(() => import("../components/NewsSection"));

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <LargeBanner />
        <Suspense fallback={<div className="section-placeholder" aria-hidden="true" />}>
          <Video />
        </Suspense>
        <Suspense fallback={<div className="section-placeholder" aria-hidden="true" />}>
          <NewsSection />
        </Suspense>
        <HorisontalRule />
      </main>
      <Footer />
    </>
  );
}

export default Home;
