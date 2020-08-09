import React from 'react';

function Resume() {
    return (
        <section className='d-flex justify-content-center flex-wrap mt-5 p-1' style={{
            color: '#445a78'
        }}>
            <div className='w-100 text-center' style={{
                marginTop: '125px'
            }}>
                <h3>Some of my proficiencies include:</h3>
                <ul className='mt-5 list-group'>
                    <li><h5>On the front end...</h5></li>
                    <li>HTML, CSS, Javascript, jQuery, React, Handlebars</li>
                    <li className='mt-5'><h5>On the back end...</h5></li>
                    <li>Node, Express, SQL, Sequelize, Mongoose</li>
                </ul>
            </div>
            <h4 className='text-center mt-5'>Visit <a href='https://www.linkedin.com/in/kevin-ivy-95867120/'target='_blank'  rel="noopener noreferrer">LinkedIn</a> to view my resume.</h4>
        </section> 
    )

}

export default Resume;