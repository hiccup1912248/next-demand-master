export default function FirstTransitionSection() {
    return (
        <section className="space-top--xxx-large">
            <div className="uo-transition space-top--xx-large">
                <section>
                    <button className="uo-transition__image uo-transition__image--04 uo-modal-trigger" data-modal=".uo-modal__content--card-table" aria-label="Learn about Card Table">
                        <figure>
                            <picture>
                                <source srcSet="/assets/images/uo/transition/card-table-f8a1026cac01c2c5225aa7f026cdc2b838ec3cceff8dc18823335d7a88aaa5c9.webp" type="image/webp" />
                                <img src="/assets/images/uo/transition/card-table-8fe5427b7cf381a75509efcf746984f78b53043af747786ff7bf029ddb197f48.png" alt="Card Table" />
                            </picture>
                            <div>
                                <p>Got a process to track? Need to watch stuff move through stages? Basecamp’s <strong>Card Table</strong> is what you need. It’s our unique take on kanban.</p>
                            </div>
                        </figure>
                    </button>

                    <button className="uo-transition__image uo-transition__image--03 uo-transition__image--video uo-transition__image--overview uo-modal-trigger" data-modal=".uo-modal__content--a-quick-overview" aria-label="Watch “A Quick Overview”">
                        <figure>
                            <picture>
                                <img src="/assets/images/uo/transition/a-quick-overview-83bd023f519d8d5b3ade197f9215b7b6d3941732bdc7dff4101c16c1ba016a78.png" alt="Watch “A Quick Overview”" />
                            </picture>
                            <div>
                                <figcaption>Watch “A Quick Overview”</figcaption>
                            </div>
                        </figure>
                    </button>

                    <button className="uo-transition__image uo-transition__image--02 uo-modal-trigger" data-modal=".uo-modal__content--hill-charts" aria-label="Learn about Hill Charts">
                        <figure>
                            <picture>
                                <source srcSet="/assets/images/uo/transition/hill-charts-f3a4f2a1ca2ba90f40ac4308fa760dfab1c1d179f9fccab1512e03ebe37877ba.webp" type="image/webp" />
                                <img src="/assets/images/uo/transition/hill-charts-fcb2c2eddd09a33f32e368d3275fe7ea49cb51d4bbe74fe88fd40d901019b7e9.png" alt="Hill Charts" />
                            </picture>
                            <div>
                                <p>Instead of wondering what “73% done” really means, Basecamp’s <strong>Hill Charts</strong> give you a visual, intuitive sense of where projects really stand.</p>
                            </div>
                        </figure>
                    </button>

                </section>
            </div>
        </section>
    )
}