import Wave from "@/components/wave";

export default function Hero({ children, title }) {
  return (
    <div>
      <div className="md:text-left text-center hero">
        <div className="container mx-auto px-2">
          {title ? (
            <h1 className="mb-2 md:mb-5 lg:text-5xl text-4xl font-bold text-center">
              {title}
            </h1>
          ) : null}
          {children}
        </div>
      </div>
    </div>
  );
}
