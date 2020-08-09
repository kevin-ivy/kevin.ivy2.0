import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../src/components/About';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

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
      <main className='p-0'>
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App;