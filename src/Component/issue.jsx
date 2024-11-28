import React from "react";
import image1 from '../assets/images/issue_1.png'

const Issue = ({ title, color, link, images }) => {


  return (

    <section
      id={link.replace("#", "")}
      className={`${color} h-screen flex flex-col items-center justify-center text-white relative`}
    >
      {/* Display the Image */}
      {images && (
        <img
          src={images}
          alt={title}
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
          Read More
        </a>
      </div>
    </section>
  );
};

export default Issue;
