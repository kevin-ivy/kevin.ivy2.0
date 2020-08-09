import React from 'react';
import Background from '../../assets/bg/background.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
    return (
        <footer className='d-flex justify-content-center p-4 navbar fixed-bottom' style={{color: '#9ecacc', backgroundImage: `url(${Background})`}}>
            <h3 className='mx-3'>Find me on</h3> 
            <a className='mx-3' href="https://www.linkedin.com/in/kevin-ivy-95867120/">
           <FontAwesomeIcon icon={faLinkedin} color="#9ecacc" size="4x"/></a> 
           <a className='mx-3' href="https://github.com/kevin-ivy">
           <FontAwesomeIcon icon={faGithub} color="#9ecacc" size="4x"/></a> 
           <a className='mx-3' href="https://stackoverflow.com/users/13028730/ivy">
           <FontAwesomeIcon icon={faStackOverflow} color="#9ecacc" size="4x"/></a> 
        </footer>
    )
}

export default Footer;