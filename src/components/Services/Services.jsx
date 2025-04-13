import React, { useState } from 'react';
import './Services.css';
import Services_Data from '../../assets/Services_data';

const Services = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div id='services' className='Services'>
            <div className="services-title">
                <h1>My Certifications</h1>
            </div>
            <div className='Services-container'>
                {Services_Data.map((service, index) => (
                    <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2 
                            onClick={() => window.open(service.s_link, '_blank')} 
                            className="service-name"
                        >
                            {service.s_name}
                        </h2>
                        <p>
                            {expandedIndex === index ? service.s_desc : `${service.s_desc.substring(0, 100)}...`}
                        </p>
                        <div className="services-readmore" onClick={() => toggleReadMore(index)}>
                            <p>{expandedIndex === index ? "Read Less" : "Read More"}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
