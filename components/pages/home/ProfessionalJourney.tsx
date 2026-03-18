import CareerTable from "./CareerTable";

export default function ProfessionalJourney() {
  return (
      <section className="py-8 sm:py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start lg:items-center">
        {/* Left Text Section */}
        <div className="col-span-1 text-center lg:text-left">
          <span className="text-sm bg-[#057AF00D] text-[#057AF0] px-4 py-1 rounded-full">Professional Journey</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-6 leading-tight hidden lg:block">
            Decades of <br />
            <span className="text-[#057AF0]">Distinguished</span> <br />
            Service
          </h2>
          <h2 className="text-3xl sm:text-4xl font-bold mt-6 leading-tight lg:hidden">
            Decades of <span className="text-[#057AF0]">Distinguished</span> Service
          </h2>
        </div>

        {/* Right Table Section */}
        <div className="col-span-1 lg:col-span-2">
          <CareerTable />
        </div>
      </div>
    </section>
  );
}
