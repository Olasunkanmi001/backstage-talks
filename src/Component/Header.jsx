import React from "react";
import issues from "../data/issues";

const Header = () => {
  return (
    <header className="fixed bottom-0 right-0 hidden md:flex space-x-4 text-white p-10 z-50">
      <nav className="grid items-center">
        {issues.map((issue) => (
          <a
            key={issue.id}
            href={issue.link}
            className="text-sm md:text-lg hover:underline"
          >
            {issue.title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
