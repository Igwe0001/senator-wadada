import Contact from "@/components/pages/home/Contact";
import Facts from "@/components/pages/home/Facts";
import Hero from "@/components/pages/home/Hero";
import Leadership from "@/components/pages/home/Leadership";
import LegislativeRecord from "@/components/pages/home/LegislativeRecord";
import Statistics from "@/components/pages/home/Statistics";
import Vision from "@/components/pages/home/Vision";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Statistics />
      <Facts />
      <LegislativeRecord />
      <Vision />
      <Leadership />
      <Contact />
    </main>
  );
}
