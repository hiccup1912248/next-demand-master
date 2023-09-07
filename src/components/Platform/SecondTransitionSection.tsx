export default function SecondTransitionSection() {
    return (
        <section>
            <div className="uo-transition">
                <section>
                    <button className="uo-transition__image uo-transition__image--01 uo-modal-trigger" data-modal=".uo-modal__content--message-board" aria-label="Learn about Message Board">
                        <figure>
                            <picture>
                                <img src="/assets/images/platform/markup-001.png" alt="Message Board" />
                            </picture>
                            <div>
                                <p>Instead of blasting emails across your organization, post messages on a centralized <strong>Message Board</strong> instead. Keep conversations centralized, organised, and accessible.</p>
                            </div>
                        </figure>
                    </button>
                    <button className="uo-transition__image uo-transition__image--04 uo-transition__image--video uo-modal-trigger" data-modal=".uo-modal__content--the-future-chief-meetings-officer" aria-label="Watch “The Chief Meetings Officer”">
                        <figure>
                            <picture>
                                <img src="/assets/images/platform/markup-001.png" alt="Watch “The Chief Meetings Officer”" />
                            </picture>
                            <div>
                                <p>Meetings have more than tripled in the past couple years. Still not enough for this guy.</p>
                                <figcaption>Watch “The Chief Meetings Officer”</figcaption>
                            </div>
                        </figure>
                    </button>
                    <button className="uo-transition__image uo-transition__image--03 uo-modal-trigger" data-modal=".uo-modal__content--docs-and-files" aria-label="Learn about Docs &amp; Files">
                        <figure>
                            <picture>
                                <img src="/assets/images/platform/markup-001.png" alt="Docs &amp; Files" />
                            </picture>
                            <div>
                                <p>Every project has its own <strong>Docs &amp; Files</strong> library to organize, share, and store docs, files, and images. Even if they’re in the cloud on other services.</p>
                            </div>
                        </figure>
                    </button>
                </section>
            </div>
        </section>
    )
}