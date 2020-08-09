import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './style.css';


function Projects() {
    return (
        <div className='d-block w-100 justify-items-around mx-auto' style={{
            marginTop: '25px',
            color: '#445a78',
            maxWidth:'650px'
        }}>
            <Carousel 
                showThumbs={false}
                showIndicators={false}
                swipeable={true}
                showArrows={true}
                showStatus={true}
                emulateTouch={true}
                autoPlay={true}
                infiniteLoop={true}>
                <div className='m-3 mx-auto' style={{maxWidth: '450px'}}>
                    <img src={require('../../assets/portfolio/updog.png')} alt='updog-screenshot' />
                    <h5 className='mt-2'>upDog: Social Media for Dogs</h5>
                    <p>Find friends for your furry companion on this easy to use app!</p>
                    <p><a href='https://whats-up-dog.herokuapp.com/' target='_blank'  rel="noopener noreferrer">View Application</a>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <a href='https://github.com/kevin-ivy/facebook-but-dogs' target='_blank'  rel="noopener noreferrer">View on GitHub</a></p>
                </div>
                <div className='m-3 mx-auto' style={{maxWidth: '450px'}}>
                    <img src={require('../../assets/portfolio/budget.png')} alt='updog-screenshot'/>
                    <h5 className='mt-2'>Budget Tracker</h5>
                    <p>Easily manage your financial transactions with this simple app.</p>
                    <p><a href='https://evening-dusk-80501.herokuapp.com/' target='_blank'  rel="noopener noreferrer">View Application</a>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <a href='https://github.com/kevin-ivy/budget-tracker-pwa' target='_blank'  rel="noopener noreferrer">View on GitHub</a></p>
                </div>
                <div className='m-3 mx-auto' style={{maxWidth: '450px'}}>
                    <img src={require('../../assets/portfolio/notes.png')} alt='updog-screenshot' />
                    <h5 className='mt-2'>Note Taker</h5>
                    <p>Simple and sleek note taking app.</p>
                    <p><a href='https://mysterious-cliffs-65818.herokuapp.com/' target='_blank'  rel="noopener noreferrer">View Application</a>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <a href='https://github.com/kevin-ivy/note-master' target='_blank'  rel="noopener noreferrer">View on GitHub</a></p>
                </div>
                <div className='m-3 mx-auto' style={{maxWidth: '450px'}}>
                    <img src={require('../../assets/portfolio/paperfinder.png')} alt='updog-screenshot' />
                    <h5 className='mt-2'>Emergency Paper Locator</h5>
                    <p>Easily locate and price paper goods during a pandemic.</p>
                    <p><a href='https://kevin-ivy.github.io/dm-emergency-paper-locator/' target='_blank'  rel="noopener noreferrer">View Application</a>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <a href='https://github.com/kevin-ivy/dm-emergency-paper-locator' target='_blank'  rel="noopener noreferrer">View on GitHub</a></p>
                </div>
                <div className='m-3 mx-auto' style={{maxWidth: '450px'}}>
                    <img src={require('../../assets/portfolio/pizza.png')} alt='updog-screenshot' />
                    <h5 className='mt-2'>Pizza Hunt</h5>
                    <p>Find and create wacky pizza recipes in this application.</p>
                    <p><a href='https://vast-journey-08551.herokuapp.com/' target='_blank'  rel="noopener noreferrer">View Application</a>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <a href='https://github.com/kevin-ivy/pizza-hunt' target='_blank'  rel="noopener noreferrer">View on GitHub</a></p>
                </div>
                <div className='m-3 mx-auto' style={{maxWidth: '450px'}}>
                    <img src={require('../../assets/portfolio/runbuddy.png')} alt='updog-screenshot' />
                    <h5 className='mt-2'>Run Buddy</h5>
                    <p>Search for a trainer to help you get in shape on this website.</p>
                    <p><a href='https://kevin-ivy.github.io/run-buddy/' target='_blank'  rel="noopener noreferrer">View Application</a>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <a href='https://github.com/kevin-ivy/run-buddy' target='_blank'  rel="noopener noreferrer">View on GitHub</a></p>
                </div>
            </Carousel>
        </div>
    )
}

export default Projects;