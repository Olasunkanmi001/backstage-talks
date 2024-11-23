import React from "react";

const Issue = ({ title, color, link, image }) => {
  return (
    <section
      id={link.replace("#", "")}
      className={`${color} h-screen flex flex-col items-center justify-center text-white relative`}
    >
      {/* Display the Image */}
      {image && (
        <img
          src={image}
          alt={`${title} Cover`}
          className="w-2/3 md:w-1/3 object-contain mb-6"
        />
      )}

      {/* Display the Content */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
        <a
          href={link}
          className="mt-4 inline-block text-lg underline hover:text-gray-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Issue;
