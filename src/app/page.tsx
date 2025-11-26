import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventCountdown from "@/components/EventCountdown";
import JoinCommunity from "@/components/JoinCommunity";
import Motive from "@/components/Motive";
import EventCategories from "@/components/EventCategories";
import BlogPreview from "@/components/BlogPreview";
import Testimonials from "@/components/Testimonials";
import FounderLetter from "@/components/FounderLetter";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <EventCountdown />
      <JoinCommunity />
      <Motive />
      <EventCategories />
      <BlogPreview />
      <Testimonials />
      <FounderLetter />
      <Socials />
      <Footer />
    </main>
  );
}
