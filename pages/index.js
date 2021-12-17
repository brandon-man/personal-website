import Container from "../components/Container";
import Welcome from "../components/Welcome";
import Projects from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <Container>
      <Welcome />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
}

export default Home;
