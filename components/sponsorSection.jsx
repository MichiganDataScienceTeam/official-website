import SponsorCard from "./sponsorCard";

export default function SponsorSection({ group }) {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm">
        <h2 className="text-3xl mb-4">{group.tier}</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {group.sponsors.map((sponsor, index) => (
          <SponsorCard key={index} json={sponsor} />
        ))}
      </div>
    </div>
  );
}
