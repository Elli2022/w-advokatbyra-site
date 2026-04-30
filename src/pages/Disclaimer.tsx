import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Container from "../components/Container";

function Disclaimer() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Container className="page-intro">
          <p className="eyebrow">Disclaimer</p>
          <h1 className="page-title">Friskrivning</h1>
          <p className="copy-block">
            Information som publiceras på W Advokatbyrås hemsida är endast
            avsedd som allmän information och utgör inte professionell juridisk
            rådgivning. Innehållet kan vara förenklat och det finns risk att
            information inte är fullständigt uppdaterad i varje enskilt fall.
          </p>
          <p className="copy-block">
            Eventuell användning av informationen på hemsidan sker på
            användarens egen risk. W Advokatbyrå ansvarar inte för beslut som
            fattas enbart på grundval av information som publicerats här, eller
            för innehåll på externa sidor som länkas till eller från denna
            webbplats.
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Disclaimer;
