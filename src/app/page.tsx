import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCollection from "./components/FeaturedCollection";
import TerroirSection from "./components/TerroirSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <TerroirSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
