export default function Timeline({ events }) {
  return (
    <ol class="relative border-l border-grey-xlight">
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
  );
}
