import { mergeClasses } from "../../lib/utils";

const Container = ({ className, children }) => {
  return (
    <section
      className={mergeClasses(
        "mx-auto w-[90%] px-4 py-16 md:px-8 md:py-20 2xl:py-24",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 md:gap-12">
        {children}
      </div>
    </section>
  );
};

export default Container;
