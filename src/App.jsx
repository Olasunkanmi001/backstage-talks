import React from 'react';
import Header from './Component/Header';
import Main from './Component/Main';
import Issue7 from './Component/Issue7';
import Issue6 from './Component/Issue6';
import Issue5 from './Component/Issue5';
import Issue4 from './Component/Issue4';
import Issue3 from './Component/Issue3';
import Issue2 from './Component/Issue2';
import Issue1 from './Component/Issue1';

import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
     <div className='px-5 py-5'>
     <Header />


  {/* Render all the components on the home screen */}
  
  <Issue7 />
  <Issue6 />
  <Issue5 />
  <Issue4 />
  <Issue3 />
  <Issue2 />
  <Issue1 />
  <Main/>

     </div>
    </Router>
  );
};

export default App;
