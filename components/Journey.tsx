import React from "react";
import ProfessionalJourney from "./ProfessionalJourney";
import { TimelineEntry } from "./ProfessionalJourney";
import { assets } from "@/assets/assets";

export const careerEntries: TimelineEntry[] = [
  {
    period: "1988 – 1991",
    organisation: "United Bank for Africa",
    role: "Senior Clerk",
  },
  {
    period: "1993 – 1994",
    organisation: "Benue Cement Company, Gboko",
    role: "Procurement Officer",
  },
  {
    period: "1996 – 1997",
    organisation: "Kano Tobacco Distribution Co.",
    role: "Distribution Manager",
  },
  {
    period: "1997 – 2002",
    organisation: "Vision Group",
    role: "Administrative Manager / P.A to the Chairman",
  },
  {
    period: "2003 – 2011",
    organisation: "Keffi, Karu & Kokona Federal Constituency",
    role: "Elected Member, Federal House of Representatives (Two Terms)",
  },
  {
    period: "Jul 2011 – Jan 2012",
    organisation: "Federal Capital Territory Administration",
    role: "Senior Special Assistant (SSA) to the FCT Minister — Budget, Project Monitoring & Evaluation, and National Assembly Matters",
  },
  {
    period: "Oct 2020 – Jun 2023",
    organisation: "PAN Nigeria Limited",
    role: "Chairman, Board of Directors",
  },
  {
    period: "2023 – Present",
    organisation: "",
    role: "Elected Senator, Nasarawa West Senatorial District",
  },
];

function Journey() {
  return (
    <section id="career">
      <ProfessionalJourney
        badge="Professional Journey"
        headingLine1="Decades of"
        headingAccent="Distinguished Service"
        accentWord="Distinguished"
        image={assets.image87}
        imageAlt="Senator Ahmed Wadada Aliyu waving at supporters"
        entries={careerEntries}
      />
    </section>
  );
}

export default Journey;
