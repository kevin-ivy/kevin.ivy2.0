import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../src/components/About';
import Header from '../src/components/Header';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
      case 'About' :
        return <About />
      default:
        return <About />
    }
  }

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {renderPage()}
      </main>
    </div>
  )
}

export default App;