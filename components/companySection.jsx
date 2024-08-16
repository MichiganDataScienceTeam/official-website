import CompanyCard from "./companyCard";

export default function CompanySection({ group, basePath }) {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-lg text-center lg:px-6">
      <div
        className={`flex flex-wrap justify-center gap-4 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
      >
        {group.companies.map((company, index) => (
          <CompanyCard
            key={index}
            basePath={basePath}
            json={company}
          />
        ))}
      </div>
    </div>
  );
}
