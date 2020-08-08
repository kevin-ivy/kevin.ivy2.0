  
import React from 'react';
import Background from '../../assets/bg/background.png'

function Header(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume']
    
    return (
    <div style={{color: '#9ecacc', backgroundImage: `url(${Background})`}}>
        <nav className='navbar navbar-expand navbar-dark sticky-top'>
        <h1 className='text-align-center'>Kevin Ivy</h1>
            <div className="collapse navbar-collapse justify-content-end" id="navBarToggle">
                <ul className="navbar-nav">
                    {tabs.map(tab => (
                        <li className="nav-item" key={tab}>
                        <a
                            href={'#' + tab}
                            onClick={() => props.handlePageChange(tab)}
                            className={
                            props.currentPage === tab ? 'nav-link active' : 'text-reset nav-link'
                            }
                        >
                            {tab}
                        </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Header;