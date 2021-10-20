import React, { useEffect, useState } from 'react';
import './faqs.css'
import SingleFaq from './SingleFaq/SingleFaq';
const Faqs = () => {
    const [faq, setFaq] = useState([]);
    useEffect(() => {
        fetch('/faqs.json')
            .then(res => res.json())
            .then(data => setFaq(data))
    }, []);
    return (
        <div>
            <div className="row bg-primary p-5">
                <div className="col-lg-5 p-5">
                    <h1 className="text-white">Help Center & FAQs</h1>
                </div>
                <div className="col-lg-5 p-5">
                    <p className="text-white">
                        Get an overview of how Medcorder works with our Feature Tour, and scroll down for the FAQs and Help Center.</p>
                </div>
                <iframe width="800" height="500" src="https://www.youtube.com/embed/I7i7HC0LjTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </div>
            <div className="mt-5 w-80 container">
                <h1 className="text-center">FAQs</h1>
                <div className="mx-5 p-5 row">
                    {
                        faq.map(service => <SingleFaq
                            key={service.id}
                            service={service}
                        ></SingleFaq>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Faqs;