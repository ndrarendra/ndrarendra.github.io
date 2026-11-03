import { Fragment } from "react";
import { motion } from "framer-motion";

const quote = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: { delay: 0.5, staggerChildren: 0.08 },
  },
};

const singleWord = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

// Headline whose words rise in one after another. `as` picks the heading level.
const AnimatedText = ({ text, className = "", as = "h1" }) => {
  const Tag = motion[as];
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
      <Tag
        className={`inline-block w-full text-dark font-bold text-8xl dark:text-light ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {/* Plain spaces between words, so copied text has no hidden characters. */}
        {text.split(" ").map((word, index) => (
          <Fragment key={`${word}-${index}`}>
            {index > 0 ? " " : null}
            <motion.span className="inline-block" variants={singleWord}>
              {word}
            </motion.span>
          </Fragment>
        ))}
      </Tag>
    </div>
  );
};

export default AnimatedText;
