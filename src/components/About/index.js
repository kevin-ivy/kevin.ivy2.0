import React from 'react';
import portrait from '../../assets/portrait/selfPortrait.png';

function About() {
    return (
        <section className='p-4 d-flex justify-content-center align-items-center flex-wrap flex-md-nowrap' style={{
            backgroundColor: '#eeeefc',
            color: '#445a78'
        }}>
            <div className='m-1'>
                <img src={portrait} className='mb-2 mx-auto d-block rounded' alt='selfportrait'/>
            </div>
            <div className='m-1 p-1'>
                <p className='text-justify'>I am currently employed as a Customer Care Mentor for Conduent, working from home and assisting in the training of new hires to our contract. When I am not in a class, I am on the front lines responding to customer concerns related to both technical and billing issues.</p>
                <p className='text-justify'>I had the privilege of taking part in the UT Austin Coding Bootcamp program this year, working towards learning and becoming a full-stack web developer.</p>
                <p className='text-justify'>I enjoy spending my spare time with my wife and our dachshund. Recently, most of our time has been taken up by preparing for the arrival of our first child this December.</p>
            </div>
        </section>
    )
}

export default About;