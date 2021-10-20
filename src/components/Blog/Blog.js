import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <h1 className="text-center text-secondary mt-4">Blog Home</h1>
            <div className="container mx-auto">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h2 style={{ color: '#2f374d' }}>Medcorder & UCSF Begin mENCORE Feasibility Clinical Trial To Help Prostate Cancer Patients With Medical Consult Recordings</h2>
                        <p>October 6, 2020</p>
                        <img className="img-fluid" height='600' src={'https://assets.website-files.com/5d09e46f06d04c2499126fd2/5f7bb4a5683ff1d5965206f2_Phone_grid-p-800.png'} alt="" />
                        <p className="mt-4">(Redwood City, CA) September 11, 2020 - Medcorder, Inc today announces that UCSF has begun its mENCORE feasibility clinical trial (mHealth ElectroNic COnsultation REcording) - to help prostate cancer patients better understand their treatment and diagnosis by using Medcorder, a free mobile app designed for patients to record, transcribe, and discuss medical consultations...</p>
                        <Link>Read More...</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h2 style={{ color: '#2f374d' }}>Medcorder Updates: New Telemedicine Features and Improved Audio Technology</h2>
                        <p>June 5, 2020</p>
                        <img className="img-fluid" height='600' src={'https://assets.website-files.com/5d09e46f06d04c2499126fd2/5edafad9800a23a2bb68d0ae_Depositphotos_98055996_xl-2015_sm-p-800.jpeg'} alt="" />
                        <p className="mt-4">It’s no surprise that many doctor appointments are now happening over the phone, and we’ve been working hard to make Medcorder as helpful for telemedicine consultations as it is in person. With the latest version of Medcorder (Version 3.3), we’ve added a key new telemedicine feature: automatic appointment recording of calls from your doctor.  Read on for more on how it works, and other new features we've added!</p>
                        <Link>Read More...</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;