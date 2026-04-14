// CareerTable.jsx — Reusable, mobile-responsive table component
//
// USAGE EXAMPLE:
//
// import CareerTable from "./CareerTable";
//
// <CareerTable />                          ← uses all defaults
//
// <CareerTable
//   headers={["Period", "Position", "Company"]}
//   rows={[
//     { col1: "2020 – Now", col2: "CEO", col3: "Acme Corp" },
//   ]}
//   colors={{
//     sectionBg: "#f0f4ff",
//     headerBg: "#dce8ff",
//     headerText: "#1a2a6c",
//     col1Text: "#4a5568",
//     col2Text: "#1a202c",
//     col3Text: "#4a5568",
//   }}
// />

interface CareerTableRow {
  col1: string;
  col2: string;
  col3?: string; // ← optional
}

interface CareerTableColors {
  sectionBg?: string;
  headerBg?: string;
  headerText?: string;
  col1Text?: string;
  col2Text?: string;
  col3Text?: string;
}

const DEFAULT_HEADERS = ["Years", "Role / Title", "Organisation"];

const DEFAULT_ROWS = [
  {
    col1: "1988 – 1991",
    col2: "Senior Clerk",
    col3: "United Bank for Africa",
  },
  {
    col1: "1993 – 1994",
    col2: "Procurement Officer",
    col3: "Benue Cement Company, Gboko",
  },
  {
    col1: "1996 – 1997",
    col2: "Distribution Manager",
    col3: "Kano Tobacco Distribution Co.",
  },
  {
    col1: "1997 – 2002",
    col2: "Administrative Manager / P.A to the Chairman",
    col3: "Vision Group",
  },
  {
    col1: "2003 – 2011",
    col2: "Elected Member, Federal House of Representatives (Two Terms)",
    col3: "Keffi, Karu & Kokona Federal Constituency",
  },
  {
    col1: "Jul 2011 – Jan 2012",
    col2: "Senior Special Assistant (SSA) to the FCT Minister – Budget, Project Monitoring & Evaluation, and National Assembly Matters",
    col3: "Federal Capital Territory Administration",
  },
  {
    col1: "Oct 2020 – Jun 2023",
    col2: "Chairman, Board of Directors",
    col3: "PAN Nigeria Limited",
  },
  {
    col1: "2023 – Present",
    col2: "Elected Senator, Nasarawa West Senatorial District",
    col3: "Social Democratic Party (SDP)",
  },
];

const DEFAULT_COLORS = {
  sectionBg: "#fff", // outer section background
  headerBg: "#e9e9e9", // header row background
  headerText: "#374151", // header label color (gray-700)
  col1Text: "#6b7280", // first column text color (gray-500)
  col2Text: "#4b5563", // middle column text color (gray-600)
  col3Text: "#6b7280", // third column text color (gray-500)
};

export default function CareerTable({
  headers = DEFAULT_HEADERS,
  rows = DEFAULT_ROWS,
  colors = {},
  gridClassName = "grid-cols-3",
  gridSpan1 = "",
  gridSpan2 = "",
  gridSpan3 = "",
  className = "",
}: {
  headers?: string[];
  rows?: CareerTableRow[];
  colors?: CareerTableColors;
  gridClassName?: string;
  gridSpan1?: string;
  gridSpan2?: string;

  gridSpan3?: string;
  className?: string;
}) {
  const c = { ...DEFAULT_COLORS, ...colors };

  return (
    <section style={{ backgroundColor: c.sectionBg }} className="lg:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* ── Desktop header (hidden on mobile) ── */}
        <div style={{ backgroundColor: c.headerBg }} className={`hidden sm:grid ${gridClassName} rounded-lg px-6 py-4 text-sm font-medium`}>
          {headers.map((h, i) => (
            <div key={i} style={{ color: c.headerText }}>
              {h}
            </div>
          ))}
        </div>

        {/* ── Rows ── */}
        <div className="mt-4 space-y-6">
          {rows.map((row, i) => (
            <div key={i}>
              {/* Desktop row — 3-column grid */}
              <div className={`hidden sm:grid ${gridClassName} px-6 text-sm`}>
                <div style={{ color: c.col1Text }} className={`${gridSpan1}`}>
                  {row.col1}
                </div>
                <div style={{ color: c.col2Text }} className={`pr-6 leading-relaxed ${gridSpan2}`}>
                  {row.col2}
                </div>
                {row.col3 && (
                  <div style={{ color: c.col3Text }} className={`${gridSpan3}`}>
                    {row.col3}
                  </div>
                )}
              </div>

              {/* Mobile row — stacked card */}
              <div
                className="sm:hidden rounded-lg px-4 py-3 space-y-1 "
                style={{ backgroundColor: c.headerBg + "66" }} // 40% opacity tint
              >
                <div style={{ color: c.col1Text }} className="font-medium">
                  {row.col1}
                </div>
                <div style={{ color: c.col2Text }} className="leading-relaxed">
                  {row.col2}
                </div>
                <div style={{ color: c.col3Text }} className="italic">
                  {row.col3}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
