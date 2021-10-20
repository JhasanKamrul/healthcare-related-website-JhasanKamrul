
import { faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    const [bookedDoctor, setBookedDoctor] = useState({});
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    useEffect(() => {
        const selectedDoctor = service.find(singledoctor => singledoctor.id == serviceId);
        setBookedDoctor(selectedDoctor);
    }, [service]);

    return (
        <div className="container">
            <div className="row mx-auto">
                <div className="col-lg-11">
                    <h2 className="text-center mt-3 text-info">Schedule an appointment for {bookedDoctor?.name}</h2>
                    <div className="text-center">
                        <img className="img-fluid" src={bookedDoctor?.img} alt="" />
                        <h4 className="text-info mt-2">{bookedDoctor?.name}</h4>
                        <h4 className="text-secondary">{bookedDoctor?.degree}</h4>
                        <p><FontAwesomeIcon className="me-2 text-primary" icon={faEnvelope} />{bookedDoctor?.email}</p>
                        <h5><FontAwesomeIcon className="me-2 text-info" icon={faClock} />{bookedDoctor?.visiting}</h5>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default Booking;