import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Error() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <section className="section-shell error-state">
          <div className="content-stack">
            <p className="eyebrow">404</p>
            <h1 className="page-title">Sidan kunde inte hittas.</h1>
            <p>
              Länken du följde verkar vara fel eller inte längre aktiv. Använd
              menyn ovan för att gå vidare.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Error;
