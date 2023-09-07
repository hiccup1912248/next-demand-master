'use client';

import React, { useState } from "react";

export default function MarkupSection() {

    const [clipStyle, setClipStyle] = useState({
        clipPath: `polygon(0px 0px, 50% 0px, 50% 100%, 0px 100%)`
    });

    const handleChange = (event: any) => {
        const percentValue = event.target.value;
        setClipStyle({
            clipPath: `polygon(0px 0px, ${percentValue}% 0px, ${percentValue}% 100%, 0px 100%)`
        })
    }
    return (
        <section className="markup-section">
            <div className="uo-markup uo-space--transition-top" style={{ paddingBottom: '5em' }}>
                <section style={{ paddingBottom: '3em' }}>

                    <div className="uo-markup__body">
                        <div className="uo-markup__header">
                            <h3>Stop doing manual sales outreach <br />Let AI automate it and make it personal</h3>
                        </div>
                        <div className="uo-markup__content">
                            <p>Generate the perfect LinkedIn Message & Email with zero typing required Demand AI is the only AI sales assistant built with live data of over 250M+ contacts and millions of sales engagement data points. Trained since 2017 to tackle the AI process.</p>
                            <p>Here’s what a project looks like:</p>
                        </div>
                    </div>

                    <div className="uo-markup__projects space-top--large">
                        <div className="prism relative overflow-hidden h-max !border !border-secondary rounded-2xl md:rounded-4xl">
                            <div className="bg-white checkerboard w-full h-full absolute top-0 left-0"></div>
                            <div className="absolute top-0 left-0 w-full h-full">
                                <figure className="!m-0">
                                    <picture>
                                        <img src="/assets/images/platform/markup-001.png" alt="Example image" className="w-full h-auto" loading="eager" draggable="false" />
                                    </picture>
                                </figure>
                            </div>
                            <div style={clipStyle}>
                                <figure className="!m-0">
                                    <picture>
                                        <img src="/assets/images/platform/markup-002.png" alt="Example image" className="w-full h-auto" loading="eager" draggable="false" />
                                    </picture>
                                </figure>
                            </div>

                            <div className="absolute top-0 left-0 w-full h-full prism-imagedragger">
                                <label className="block h-full w-full" >
                                    <input
                                        className="bg-transparent appearance-none h-full cursor-pointer focus:outline-none"
                                        name="ImageDragger"
                                        type="range" step="0.01" min="0" max="100"
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="uo-markup__body space-top--x-large">
                        <div className="uo-markup__header">
                            <h3>Use cases that fits your business. <br />Automated Sentiment Analysis and actions</h3>
                        </div>
                        <div className="uo-markup__content">
                            <p>Let AI analyse your replies, handle them based on Positive, Neutral and Negative replies and take action on follow ups, so no leads never fall through the cracks. Sync credit to your team, by automated reply sync to your CRM with a lead source stating <strong>Demand.</strong></p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}