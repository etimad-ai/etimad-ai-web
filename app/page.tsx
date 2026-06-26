import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Approach } from "@/components/Approach";
import { Process } from "@/components/Process";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { company, services } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  alternateName: company.name,
  url: "https://etimad.ai",
  email: company.email,
  description:
    "Etimad AI Labs builds AI agents, fine-tunes and deploys open-source models on-prem, and engineers agentic data pipelines, RAG, and enterprise applications for digital transformation.",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.line1}, ${company.address.line2}, ${company.address.line3}`,
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500081",
    addressCountry: "IN",
  },
  founder: [
    "Mohammad Suhail",
    "Abdul Jabbar",
    "Tanveer Iqbal",
    "Zafar Iqbal",
  ].map((name) => ({ "@type": "Person", name })),
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.blurb },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Approach />
        <Process />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
