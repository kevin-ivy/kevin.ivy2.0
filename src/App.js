import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
      case 'About' :
        return <About />
      case 'Contact':
        return <Contact />
      case 'Resume':
        return <Resume />
      case 'Portfolio':
        return <Projects />
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