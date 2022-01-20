import React from 'react';

export default function Portfolio() {
    return(
        <div class="portfolio-section" id="portfolio">
        <div class="portfolio-main-bg">
        <div class="portfolio-container">
            <div class="portfolio-block">
                <div class="header-section">
                    <h2>Portfolio</h2>
                </div>
                <div class="portfolio-block-content">
                    <div class="portfolio-items">
                        <a data-fancybox="gallery" href="assets/image-1.png"><img src="assets/image-1.png"/></a>
                        <a data-fancybox="gallery" href="assets/image-2.png"><img src="assets/image-2.png"/></a>
                        <a data-fancybox="gallery" href="assets/image-3.png"><img src="assets/image-3.png"/></a>
                        <a data-fancybox="gallery" href="assets/image-4.png"><img src="assets/image-4.png"/></a>
                        <a data-fancybox="gallery" href="assets/image-5.png"><img src="assets/image-5.png"/></a>
                        <a data-fancybox="gallery" href="assets/image-6.png"><img src="assets/image-6.png"/></a>                       
                    </div>
                </div>
                <div class="button-section">
                <button>See all works</button>
            </div>
            </div>
        </div>
    </div>
    </div>
    )
}