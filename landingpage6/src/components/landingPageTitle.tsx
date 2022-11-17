import React, { useEffect } from 'react';
import { TimelineMax } from "gsap";

const tl = new TimelineMax({paused: false, repeat:-1});

function LandingPage(props: any) {
    useEffect(() => {
        tl.fromTo('.bg-animation', {xPercent: 100}, {duration:1, xPercent: -100});
    })

    return (

        <div className="landing-page-page-title-section">
            <h1>
                GLOBAL MERCHANDISING.
            </h1>
            <h1>
                PRODUCT DEVELOPMENT.
            </h1>
            <h1>
                BRANDING AGENCY.
           </h1>
           <div className="bg-animation"></div>
        </div>

    );
}

export default LandingPage;
