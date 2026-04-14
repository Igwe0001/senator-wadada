import AcademicBackground from "@/components/AcademicBackground";
import AnnouncementTicker from "@/components/AnnouncementTicker";
import CareerOfAction from "@/components/CareerOfAction";
import ContactSection from "@/components/ContactSection";
import Facts from "@/components/Facts";
import HeartsAgenda from "@/components/HeartsAgenda";
import Hero from "@/components/Hero";
import InternationalSection from "@/components/InternationalSection";
import Journey from "@/components/Journey";
import LegislativeRecord from "@/components/LegislativeRecord";
import Professionalsjourney from "@/components/Professionalsjourney";

export default function Home() {
  return (
    <>
      <Hero />
      <AnnouncementTicker />
      <Facts />
      <Journey />
      <LegislativeRecord />
      <CareerOfAction />
      <HeartsAgenda />
      <Professionalsjourney />
      <AcademicBackground />
      <InternationalSection />
      <ContactSection />
    </>
  );
}
