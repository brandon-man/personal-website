import Container from "../components/Container";
import Welcome from "../components/Welcome";
import Projects from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import { Link } from "@chakra-ui/react";

function Home() {
  return (
    <Container>
      <Meta />
      <Welcome />
      <Link id="portfolio" />
      <Projects />
      <Contact />
      <Link id="contact" />
      <Footer />
    </Container>
  );
}

export default Home;
