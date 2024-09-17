import Link from "next/link";
export default function Timeline({ events }) {
  return (
    <div>
      <ol className="relative border-l border-grey-xlight">
        {events.map((event, index) => (
          <li className="mb-4 md:mb-6 ml-4" key={index}>
            <div className="absolute w-3 h-3 bg-grey-xlight rounded-full mt-1.5 -left-1.5"></div>
            <time className="mb-1 text-sm font-normal leading-none text-grey-xlight">
              {event.time}
            </time>
            <h3 className="text-lg font-semibold text-white snap-center">
              {event.title}
            </h3>
            <p className="mb-4 text-base font-normal text-white">
              {event.description}
            </p>
          </li>
        ))}
      </ol>
      <div>
        <Link
          className="font-bold underline"
          href="https://calendar.google.com/calendar/embed?src=c_22ca0c151585760442cad5796fb91bd18b7db11d813e9143e38549aadce65afe%40group.calendar.google.com&ctz=America%2FNew_York"
          style={{ color: "#C8BAF3" }}
        >
          Subscribe to our events calendar
        </Link>
      </div>
    </div>
  );
}
