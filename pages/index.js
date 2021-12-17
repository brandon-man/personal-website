import Container from "../components/Container";
import Welcome from "../components/Welcome";
import Projects from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Meta from '../components/Meta';

function Home() {
  return (
    <Container>
      <Meta />
      <Welcome />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
}

export default Home;
