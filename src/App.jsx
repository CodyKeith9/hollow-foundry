import Layout from "./components/Layout.jsx";
import Hero from "./components/Hero.jsx";
import LocalHostingStrip from "./components/LocalHostingStrip.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ContactSection from "./components/ContactSection.jsx";

function App() {
  return (
    <Layout>
      <Hero />
      <LocalHostingStrip />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
