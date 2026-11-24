import { ApplianceBanner } from "../components/ApplianceBanner";
import { Approach } from "../components/Approach";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Intro } from "../components/Intro";
import { QuickActions } from "../components/QuickActions";
import { Services } from "../components/Services";
import { SiteActionsProvider } from "../components/SiteActions";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <SiteActionsProvider>
      <Header />
      <main>
        <Hero />
        <ApplianceBanner />
        <Intro />
        <Services />
        <Approach />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <QuickActions />
    </SiteActionsProvider>
  );
}
