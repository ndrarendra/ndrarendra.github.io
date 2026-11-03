import { certifications } from "@/data/site";

const Certifications = () => {
  return (
    <section className="mb-32 md:mb-16" aria-labelledby="certifications-heading">
      <h2 id="certifications-heading" className="font-bold text-6xl mb-16 w-full text-center md:text-5xl xs:text-3xl md:mb-8">
        Certifications
      </h2>
      <ul className="w-[60%] mx-auto border-t-2 border-solid border-dark dark:border-light lg:w-[80%] md:w-full">
        {certifications.map((c) => (
          <li
            key={c.name}
            className="flex items-center justify-between gap-6 py-5 border-b border-solid border-dark/25 dark:border-light/25 sm:flex-col sm:items-start sm:gap-1"
          >
            <div>
              <p className="font-bold text-xl sm:text-lg">{c.name}</p>
              <p className="font-medium text-dark/75 dark:text-light/75 sm:text-sm">
                {c.issuer}, {c.date}
              </p>
            </div>
            {c.link ? (
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 font-semibold underline underline-offset-2 sm:text-sm"
              >
                View credential
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
