import React from 'react';

const SingleFaq = (props) => {
    const { que, ans } = props.service;
    return (
        <div className="faq-container col-lg-8">
            <div className="mt-2 mb-2">
                <h4>{que}</h4>
                <p>{ans}</p>
            </div>
        </div>
    );
};

export default SingleFaq;