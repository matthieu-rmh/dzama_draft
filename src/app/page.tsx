import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ValuesSection from "./components/ValuesSection";
import StatsSection from "./components/StatsSection";
import ProductsSection from "./components/ProductsSection";
import QuoteSection from "./components/QuoteSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsSection />
      <ValuesSection />
      <ProductsSection />
      <QuoteSection />
      <Footer />
    </main>
  );
}
