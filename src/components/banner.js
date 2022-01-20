import React from 'react';

export default function Banner() {
    return(
        <div className="banner-section" id="home">
        <div className="main-bg">
            <div className="text-block">
                <h2>This is a main heading</h2>
                <div className="para-block">
                    <p>Lorem Ipsum is simply dummy text</p>
                    <p>of the printing</p>
                </div>
            </div>
            <div className="button-block">
                <button>Learn More</button>
            </div>
        </div>
    </div>
    )
}