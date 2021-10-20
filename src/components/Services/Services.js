import { faFirstAid, faHospital, faHourglassEnd, faLink, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Doctors from './Doctors/Doctors';

const Services = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    const element = <FontAwesomeIcon icon={faUsers} />
    return (
        <>
            <div id="services" className="container">
                <p className="fs-4 text-secondary text-center mt-5">QUICK FACTS ABOUT OUR HOSPITAL</p>
                <h3 className="text-center text-primary mb-5">See what we provide for your health</h3>
                <div className="row mt-2">
                    <div className="col-lg-4 text-info p-2">
                        <h3>{element} <span className="text-dark">Specialist Doctors</span></h3>
                    </div>
                    <div className="col-lg-4 text-info p-2">
                        <h3><FontAwesomeIcon icon={faHourglassEnd} /> <span className="text-dark">Frequent Visit </span></h3>
                    </div>
                    <div className="col-lg-4 text-info p-2">
                        <h3><FontAwesomeIcon icon={faLink} /> <span className="text-dark">Cordial Administration</span></h3>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4 text-info p-2">
                        <h3><FontAwesomeIcon icon={faHospital} /> <span className="text-dark">Patients History</span></h3>
                    </div>
                    <div className="col-lg-4 text-info p-2">
                        <h3><FontAwesomeIcon icon={faFirstAid} /> <span className="text-dark">Specialized Pharmacy</span></h3>
                    </div>

                </div>
            </div>
            <h2 className="text-center mt-4 text-warning">Our Doctors</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    doctors.map(doctor => <Doctors
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctors>)
                }
            </div>
        </>
    );
};

export default Services;