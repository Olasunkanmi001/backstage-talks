import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Issue from "./Component/issue";
import issues from "./data/issues";

const App = () => {
  return (
    <>
      <Header />
      <main>
        {issues.map((issue) => (
          <Issue
            key={issue.id}
            title={issue.title}
            color={issue.color}
            link={issue.link}
          />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default App;
