import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="mt-5 mx-auto foot-bg bg-dark text-white">
            <div>
                <Row>
                    <Col md={4} className="mt-4">
                        <h1>Medcorder</h1>
                        Medcoder Are A Medical And Health Department Provider Institutions. Suitable For Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy,
                        Health And Any Related Medical Care Field.</Col>
                    <Col md={4} className="mt-4">
                        <h2>Quick Link</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>Gallery</li>
                            <li>Appointment</li>
                        </ul>
                    </Col>
                    <Col md={4} className="mt-4">
                        <h2>Open - Closed Time</h2>
                        <Table responsive>
                            <tbody className="text-white">
                                <tr>
                                    <td>Saturday</td>
                                    <td>8.00 - 12.00</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>8.00 - 12.00</td>
                                </tr>
                                <tr>
                                    <td>Monday</td>
                                    <td>8.00 - 12.00</td>
                                </tr>
                                <tr>
                                    <td>Turesday</td>
                                    <td>8.00 - 12.00</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>8.00 - 12.00</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>8.00 - 12.00</td>
                                </tr>
                                <tr>
                                    <td>Fiday</td>
                                    <td>8.00 - 12.00</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;