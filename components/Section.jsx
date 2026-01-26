import FadeIn from "@/components/animations/FadeIn";

export default function Section({
  children,
  title,
  subtitle,
  background = "",
  className = "",
  titleClassName = "",
  animate = true,
  animateTitle = true,
}) {
  const bgClass = background === "grey" ? "bg-grey" : background;

  const content = (
    <section className={`py-16 lg:py-24 px-4 lg:px-6 ${bgClass} ${className}`}>
      <div className="max-w-screen-xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-6 lg:mb-8">
            {title && (
              animateTitle ? (
                <FadeIn>
                  <h2 className={`text-3xl font-bold ${titleClassName}`}>{title}</h2>
                </FadeIn>
              ) : (
                <h2 className={`text-3xl font-bold ${titleClassName}`}>{title}</h2>
              )
            )}
            {subtitle && (
              animateTitle ? (
                <FadeIn delay={0.1}>
                  <p className="font-light sm:text-xl mt-4">{subtitle}</p>
                </FadeIn>
              ) : (
                <p className="font-light sm:text-xl mt-4">{subtitle}</p>
              )
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );

  return content;
}
