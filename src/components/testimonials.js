import React from 'react';

function Testimonials ({data}) {
    const {heading,image,text,btnText,btnLink} = data
    return(
        <div className="service-section" id="service">
        <div className="service-block">
            <div className="service-items-block">
                <div className="service-items-block-content">
                    <div className="logo">
                        <img src={image} alt="icon"/>
                    </div>
                    <div className="content-section">
                        <p className="header">{heading}</p>
                        <p>{text}</p>
                    </div>
                    <button>{btnText}</button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Testimonials;