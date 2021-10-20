import React from 'react';
import { Link } from 'react-router-dom';

const Doctors = (props) => {
    const { id, name, dept, adress, img } = props.doctor;
    return (
        <>
            <div className="col">
                <div className="card shadow">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">{name}</h5>
                        <p className="card-text text-center">{dept}</p>
                        <p className="text-secondary text-center">{adress}</p>
                        <div className="text-center">
                            <Link to={`/services/${id}`}>
                                <button className="btn btn-primary">Book An Appointment</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Doctors;