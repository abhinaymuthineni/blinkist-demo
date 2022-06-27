import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react'
import LibraryTemplate from './Components/pages/LibraryPage/Index';
import HomeTemplate from './Components/pages/HomePage/Index';
import BookTemplate from './Components/pages/BookPage/Index';

function Routing() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<LibraryTemplate />} />
          <Route path="/bookdet/:bookId" element={<BookTemplate id={1} />} />
          <Route path="/allbooks" element={<HomeTemplate /> } />
        </Routes>
      </Router>
  )
}

export default Routing;