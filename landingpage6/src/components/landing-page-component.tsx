import React, { useEffect } from 'react';
import gsap from "gsap";
import { TimelineMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { data } from '../assets/data/landing-page-data';
import LandingPage from './landingPage';
import LandingPageTitle from './landingPageTitle';
import Newsletter from './newsletter';
import Footer from './footer';

export default function LandingPageComponent() {
    gsap.registerPlugin(ScrollTrigger);
    const tl = new TimelineMax({ paused: false });

    useEffect(() => {
        let images = document.querySelectorAll(".img1");
        let images2 = document.querySelectorAll(".img2");
        let content = document.querySelectorAll(".content-section");
        let text = document.querySelectorAll(".content-section-text-section");

        ScrollTrigger.matchMedia({

            "(max-width: 1007px)": function () {
                content.forEach((section, i) => {
                    tl.to(text[i], {
                        scrollTrigger: {
                            trigger: content[i],
                            toggleActions: 'restart resume reverse pouse',
                            start: 'top center ',
                            end: 'bottom center',
                            scrub: 1,
                        },
                        y: '-20vh'
                    })

                    tl.to(images[i], {
                        scrollTrigger: {
                            trigger: content[i],
                            toggleActions: 'restart resume reverse pouse',
                            start: 'top center ',
                            end: 'bottom center',
                            scrub: 1,
                        },
                        y: '-140vh'
                    })
                })
            },

            "(min-width: 1008px)": function () {
                content.forEach((section, i) => {
                    tl.to(text[i], {
                        scrollTrigger: {
                            trigger: content[i],
                            toggleActions: 'restart resume reverse pouse',
                            start: 'top center ',
                            end: 'bottom center',
                            scrub: 1,
                        },
                        y: '-70vh'
                    })

                    tl.to(images[i], {
                        scrollTrigger: {
                            trigger: content[i],
                            toggleActions: 'restart resume reverse pouse',
                            start: 'top center ',
                            end: 'bottom center',
                            scrub: 1,
                        },
                        y: '-120vh'
                    })

                    tl.to(images2[i], {
                        scrollTrigger: {
                            trigger: content[i],
                            toggleActions: 'restart resume reverse pouse',
                            start: 'top center ',
                            end: 'bottom center',
                            scrub: 1,
                        },
                        y: '-150vh'
                    })
                })

            }
        });

        gsap.to('.input-newsletter, .newsletter_input-section--icon, newsletter-title', {
            autoAlpha: 0,
        })

        gsap.from('.newsletter-title', {
            scrollTrigger: {
                trigger: '.newsletter',
                toggleActions: 'restart resume reverse reverse',
                start: '.newsletter center',
                endTrigger: ".newsletter",
            },
            duration: 0.3,
            autoAlpha: 0,

        })

        gsap.from('.input-newsletter, .newsletter_input-section--icon', {
            scrollTrigger: {
                trigger: '.newsletter',
                toggleActions: 'restart resume reverse reverse',
                start: '.newsletter center',
                endTrigger: ".newsletter",
            },
            duration: 0.5,
            autoAlpha: 0,

        })
    })

    return (
        <div className="landing-page-component-wrapper">
            <div className="landing-page">
                <LandingPageTitle />
                {data ? (
                    data.map((data: any) => {
                        return <LandingPage data={data} />
                    })
                ) : null}
                <Newsletter />
                <Footer />
            </div>
        </div>
    );
}

