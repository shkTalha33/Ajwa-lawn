import React from "react";

export default function SectionHeading({ heading, description }) {
  return (
    <>
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <div className="">
          <h1 className="big_heading nunito_semibold text-brand-dark dark:text-brand-white mb-1 md:mb-2">
            {heading}
          </h1>
        </div>
        <p className="text-brand-muted max-w-2xl text-sm md:text-lg mx-auto">
          {description}
        </p>
      </div>
    </>
  );
}
