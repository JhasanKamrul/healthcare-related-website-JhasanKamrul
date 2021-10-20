import React from 'react';
import './about.css';

const About = () => {
    return (
        <>
            <div className="container about mt-5 bg-primary p-3 rounded shadow">
                <div className="row">
                    <div className="col-lg-6 col-md-12 p-5">
                        <h1>Our Story</h1>
                        <h4>The idea for medcorder came from our founder, David, whose dad Gordon was fighting prostate cancer.</h4>
                        <p>Having already lost his mom to lung cancer, David saw how much information was presented orally in doctor-patient consults, and never repeated. This information was dense, nuanced, and discussed far more quickly than most people can type or write.</p>
                        <p>Consequently Gordon made sure to record all of his medical meetings and email them as an attachment to David, who would manually transcribe them, summarize them, and explain technical terms like medications, conditions, or procedures.</p>
                        <p>This was super helpful for keeping the family in the loop but was also a huge amount of work. David saw that an app could be built to make this process easy for anyone facing any complex medical condition, so he began working on the first version of medcorder in late 2018.</p>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-5">
                        <iframe width="600" height="400" src="https://www.youtube.com/embed/wxLfHk3DSqw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <h1 className="text-center mt-4 text-info">Meet the Team</h1>
            <div className="container">
                <div className="row text-center ">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={'https://assets.website-files.com/5ce2ef9ce57aeb64f4784513/6036b6cff92405d4e6e69dc5_Dr.%20Kraft%402x-p-800.jpeg'} alt="" />
                        <h4 className="mt-2">DR. DANIEL KRAFT,MD</h4>
                        <p>Daniel Kraft is a Stanford and Harvard trained physician-scientist, inventor, entrepreneur, and innovator and is serving as the Chair of the XPRIZE Pandemic Alliance Task Force.</p>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid" src={'https://assets.website-files.com/5ce2ef9ce57aeb64f4784513/6036b6ec87b1fc242dcf960f_Dr.%20P%402x-p-800.jpeg'} alt="" />
                        <h4 className="mt-2">DR. MRUNALINI PARVATANENI, MD</h4>
                        <p>Mrunalini Parvataneni, MD is a Pediatric Ophthalmologist has spent over 15 years across the many facets of healthcare – as a high volume surgeon, as a key operational leader in one of the largest eye care practices in the US, as a hospital board member and as an advisor to health tech startups.</p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={'https://assets.website-files.com/5ce2ef9ce57aeb64f4784513/5d16067b14f91118896ac7b7_baker-hamilton.jpg'} alt="" />
                        <h4 className="mt-2">G. HAMILTON BAKER, MD FACC</h4>
                        <p>Associate Professor of Pediatric and Congenital Cardiology.</p>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid" src={'https://assets.website-files.com/5ce2ef9ce57aeb64f4784513/5d0a2bc71cdf4371e9a34886_geoffrey-rutledge.jpg'} alt="" />
                        <h4 className="mt-2">DR. GEOFFREY RUTLEDGE, MD</h4>
                        <p>Chief Medical Officer & Co-Founder at HealthTap, leading 100,000 US-licensed doctors in 141 specialities.</p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={'https://assets.website-files.com/5ce2ef9ce57aeb64f4784513/5d10bfae778c1f79ef80ae5f_john-durant-2.jpg'} alt="" />
                        <h4 className="mt-2">DR. JOHN DURANT, MD</h4>
                        <p>Family physician for over 20 years. Covered clinic ER, inpatient services and nursing homes. Former Tech Advisor, worked as Google TV Ambassador and Google Glass explorer, enjoys using technology and providing feedback in the clinical setting.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;