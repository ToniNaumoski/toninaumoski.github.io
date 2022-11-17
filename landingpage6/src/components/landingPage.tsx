import React, {useState} from 'react';


function LandingPage(props: any) {
    const [data] = useState(props.data);
    return (
        <article className="content-section">
            <section className="content-section-text-section">
                <h2 className="content-section-text-section-title">
                    {data.textTitle}</h2>
                <p className="content-section-text-section-text">
                    {data.text}
                </p>
            </section>
            <section className="content-section-images">
                <img className="img1" src={require('./../assets/img/' + data.image1)} alt="img" />
                <img className="img2" src={require('./../assets/img/' + data.image2)} alt="img" />
            </section>
        </article>
    );
}

export default LandingPage;
