export default function VideoModal() {
    return (
        <section>
            <div className="uo-modal uo-modal--video">
                <div className="uo-modal__background"></div>
                <div className="uo-modal__container">
                    <div className="uo-modal__content uo-modal__content--a-quick-overview uo-modal__content--open">
                        <div className="video video--full">
                            <div className="video__embed video__embed--playing">
                                {/* <video
                                    id="a-quick-overview"
                                    data-event="A Quick Overview"
                                    preload="none"
                                    poster="/assets/home/a-quick-overview-d393c3d3f3334f815fe3294c017045dad4e7441269ed85f7319b30fa8b390edc.webp"
                                    src="/assets/home/a-quick-overview-60-6c8d8f27bddf888b5660ba3f3388d16a0f22c6f82ce0762b981def7333919526.mp4"
                                    width="100%"
                                    playsInline={false}
                                    controls={true}>
                                </video> */}
                                <iframe
                                    id="a-quick-overview"
                                    width="100%"
                                    height="auto"
                                    data-event="A Quick Overview"
                                    // preload="none"
                                    // poster="/assets/home/a-quick-overview-d393c3d3f3334f815fe3294c017045dad4e7441269ed85f7319b30fa8b390edc.webp"
                                    src="https://www.youtube.com/embed/SePcsn4MuvU?autoplay=1"
                                    // width="100%"
                                    // playsInline={false}
                                    // controls={true}
                                    allowFullScreen={true}
                                ></iframe>
                                <button>
                                    <span>Watch “A Quick Overview”</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="uo-modal__content uo-modal__content--made-in-basecamp">
                        <div className="video video--full">
                            <div className="video__embed">
                                <iframe
                                    id="made-in-basecamp"
                                    data-event="Made in Basecamp"
                                    // preload="none"
                                    // poster="/assets/made-in-basecamp/made-in-basecamp-d9939c2376e5b49fbcf56c5a5f2b693b4dff1626f34a5b7896ea24f87761bb46.webp"
                                    src="https://www.youtube.com/embed/SePcsn4MuvU?autoplay=1"
                                    width="100%"
                                // playsInline={false}
                                ></iframe>
                                <button>
                                    <span>Watch “Made in Basecamp”</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="uo-modal__content uo-modal__content--organizing-a-meet-up">
                        <div className="video video--full">
                            <div className="video__embed">
                                <iframe
                                    id="organizing-a-meet-up"
                                    data-event="Organizing a Meet-up"
                                    // preload="none"
                                    // poster="/assets/organizing-a-meet-up/organizing-a-meet-up-318fd3b80b43b8d6a45ef1d6f6d031f599359cfe73f4835907330e439ac12685.webp"
                                    src="https://www.youtube.com/embed/SePcsn4MuvU?autoplay=1"
                                    width="100%"
                                // playsInline={false}
                                ></iframe>
                                <button>
                                    <span>Watch “Organizing a Meet-up”</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="uo-modal__content uo-modal__content--hilary-fitzgerald-campbell">
                        <div className="video video--full">
                            <div className="video__embed">
                                <iframe
                                    id="hilary-fitzgerald-campbell"
                                    data-event="Hilary Fitzgerald Campbell"
                                    // preload="none"
                                    // poster="/assets/hilary-fitzgerald-campbell/hilary-fitzgerald-campbell-942634ac54365a9d90d1b9ee13ad3ee2769fd57c891917722bc574ccbc2e6be7.webp"
                                    src="https://www.youtube.com/embed/SePcsn4MuvU?autoplay=1"
                                    width="100%"
                                // playsInline={false}
                                ></iframe>
                                <button>
                                    <span>
                                        Watch “Hilary Fitzgerald Campbell”
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="uo-modal__content uo-modal__content--campfire">
                        <header>
                            <div className="uo-pill uo-pill--tool uo-pill--campfire">
                                Campfire
                            </div>
                            <p>
                                Basecamp has chat built in so you don’t need to
                                pay for a separate chat service like Slack.
                            </p>
                        </header>
                        <div className="screenshot">
                            <picture>
                                <source
                                    srcSet="/assets/screenshots/campfire-framed-47f9c22dec036cea5f8d3f6587fd5edd305d64bc682827563da3990bb81ad726.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/assets/screenshots/campfire-framed-37f5f5b97d6aae73cd6716580d1e84180880d7cb0b1cac3e49a1a65a90ff0a40.png"
                                    alt="Campfire"
                                />
                            </picture>
                        </div>
                    </div>
                    <div className="uo-modal__content uo-modal__content--card-table">
                        <header>
                            <div className="uo-pill uo-pill--tool uo-pill--card-table">
                                Card Table
                            </div>
                            <p>
                                Card Tables are for tracking work that moves
                                through stages. It’s like kanban, only better.
                            </p>
                        </header>
                        <div className="screenshot screenshot--has-captions">
                            <picture>
                                <source
                                    srcSet="/assets/screenshots/card-table-framed-4ca64f02c8edf3f309009d3ab69a38e2a0fd40b143decc940245998204bbcdd9.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/assets/screenshots/card-table-framed-9618518ce195addd7fd0adb6fdba8571cbef5d7a5b35ee37fbb5b76c26280931.png"
                                    alt="Card Table"
                                />
                                <figcaption className="align-bottom justify-right dot dot--teal">
                                    <p>
                                        Not everyone needs to know about things
                                        as they happen.{" "}
                                        <strong>
                                            Basecamp only notifies the people
                                            who need to know
                                        </strong>
                                        , so no one’s unnecessarily distracted.
                                    </p>
                                </figcaption>
                            </picture>
                        </div>
                    </div>
                    <div className="uo-modal__content uo-modal__content--docs-and-files">
                        <header>
                            <div className="uo-pill uo-pill--tool uo-pill--docs-and-files">
                                Docs &amp; Files
                            </div>
                            <p>
                                Every project includes space to organize, share,
                                and store docs, files, and images. Cloud or
                                local.
                            </p>
                        </header>
                        <div className="screenshot">
                            <picture>
                                <source
                                    srcSet="/assets/screenshots/docs-and-files-framed-86a658f38235bf84d2604ae9290d48238eb03b4cacf0420cfa1e5642c79a2ece.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/assets/screenshots/docs-and-files-framed-00a9ea4176897b3e9fc1ddce249c07d8a59305fa0bc21f42c75a8f0b2a498546.png"
                                    alt="Docs &amp; Files"
                                />
                            </picture>
                        </div>
                    </div>
                    <div className="uo-modal__content uo-modal__content--message-board">
                        <header>
                            <div className="uo-pill uo-pill--tool uo-pill--message-board">
                                Message Board
                            </div>
                            <p>
                                Keep the entire conversation about a specific
                                topic together on a single page.
                            </p>
                        </header>
                        <div className="screenshot screenshot--has-captions">
                            <picture>
                                <source
                                    srcSet="/assets/screenshots/message-board-framed-4d65f5984ca9b88a947d7062527885706a643d06c75aedcba75f47e8d9006cf1.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/assets/screenshots/message-board-framed-2bb414920305bff92430b33f0d797f41eec6ea810d8311a84eb65741f915e1d0.png"
                                    alt="Message Board"
                                />
                                <figcaption className="align-top justify-right dot dot--yellow">
                                    <p>
                                        In Basecamp,{" "}
                                        <strong>
                                            everyone sees the same version of
                                            the full conversation
                                        </strong>
                                        . This way everyone’s always on the same
                                        page. No more forwarding emails to bring
                                        people up to speed.
                                    </p>
                                </figcaption>
                                <figcaption className="align-bottom justify-left dot dot--purple">
                                    <p>
                                        Since not everyone needs to know about
                                        things as they happen.{" "}
                                        <strong>
                                            Basecamp only notifies the people
                                            who need to know
                                        </strong>
                                        , so no one’s unnecessarily distracted.
                                    </p>
                                </figcaption>
                            </picture>
                        </div>
                    </div>
                    <div className="uo-modal__content uo-modal__content--schedule">
                        <header>
                            <div className="uo-pill uo-pill--tool uo-pill--schedule">
                                Schedule
                            </div>
                            <p>
                                Set up events, deadlines, and milestones so no
                                one misses anything important — ever.
                            </p>
                        </header>
                        <div className="screenshot">
                            <picture>
                                <source
                                    srcSet="/assets/screenshots/schedule-framed-75e85dfe41ce35fe0525b5a3724a5d55d5ff93a4168a41d209946a1e73a0f2e5.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/assets/screenshots/schedule-framed-fd697885dbecef0c806e10ca457ef89b5381274aa7d182cfa177ef05c4938366.png"
                                    alt="Schedule"
                                />
                            </picture>
                        </div>
                    </div>
                    <div className="uo-modal__content uo-modal__content--to-dos">
                        <header>
                            <div className="uo-pill uo-pill--tool uo-pill--to-dos">
                                To-dos
                            </div>
                            <p>
                                The powerful place to track work, deadlines,
                                responsibilities, progress, and details.
                            </p>
                        </header>
                        <div className="screenshot screenshot--has-captions">
                            <picture>
                                <source
                                    srcSet="/assets/screenshots/to-dos-framed-6b7157b21d96bb72a81548567b75972451d7de4386f38073f197d40a7af9bd28.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/assets/screenshots/to-dos-framed-e889382bf8632c88ba9dfa64266d3432161f2a0e8c75dc31cafbcad64109cbaf.png"
                                    alt="To-dos"
                                />
                                <figcaption className="align-top justify-left dot dot--yellow">
                                    <p>
                                        Instantly understandable, impossibly
                                        powerful, Basecamp’s to-do lists do much
                                        of the heavy lifting for you.
                                    </p>
                                </figcaption>
                                <figcaption className="align-center justify-right dot dot--red">
                                    <p>
                                        Make as many lists as you want, assign
                                        as many people as you need, be notified
                                        when things are late or complete. It’s
                                        the full package in the simplest form.
                                    </p>
                                </figcaption>
                            </picture>
                        </div>
                    </div>
                    <div className="uo-modal__content uo-modal__content--hill-charts">
                        <header>
                            <p>
                                We invented “Hill Charts” to give you a visual,
                                intuitive sense of where projects really stand.
                            </p>
                        </header>
                        <div className="screenshot screenshot--has-captions">
                            <picture>
                                <source
                                    srcSet="/assets/screenshots/hill-charts-bcb208f51d8388753d0425a01e1c97619715353da29468852011d94292ba145d.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/assets/screenshots/hill-charts-1d43238ad79fd90fe0e868aefc7a695f812544273d4f592c6bc81206446230ea.png"
                                    alt="Hill Charts"
                                />
                                <figcaption className="align-top justify-left dot dot--blue">
                                    <p>
                                        Progress is more like a hill than a
                                        straight line. Basecamp-exclusive{" "}
                                        <strong>
                                            Hill Charts provide a unique look
                                            into what remains
                                        </strong>{" "}
                                        to figure out (uphill), and what’s in
                                        production (downhill).{" "}
                                        <a href="/hill-charts">
                                            Hmm, tell me more
                                        </a>
                                        .
                                    </p>
                                </figcaption>
                                <figcaption className="align-bottom justify-right dot dot--teal">
                                    <p>
                                        Invented here, and only available in
                                        Basecamp, Hill Charts are game changers.
                                        Once you use them you’ll never want to
                                        work without them again.
                                    </p>
                                </figcaption>
                            </picture>
                        </div>
                    </div>
                    <div className="uo-modal__content uo-modal__content--lineup">
                        <header>
                            <p>
                                “The Lineup” shows you where every project
                                stands, from start to finish, all at once.
                            </p>
                        </header>
                        <div className="screenshot screenshot--has-captions">
                            <picture>
                                <source
                                    srcSet="/assets/screenshots/lineup-framed-c7c4b274d9d8991011462534cd6150f3270bdc57ee4e5a222cbadd0bcfb2d513.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/assets/screenshots/lineup-framed-6a6306f99130a7e4910c453f2dad0ac1e1946a63893ebcf79fde882ac4236273.png"
                                    alt="Lineup"
                                />
                                <figcaption className="align-top justify-right dot dot--yellow">
                                    <p>
                                        <strong>
                                            Today’s always the line right down
                                            the middle
                                        </strong>
                                        , and each project has a start and end
                                        date on either end. This way you can{" "}
                                        <em>see</em> how much time remains on
                                        each one, relative to today, in a single
                                        glance.
                                    </p>
                                </figcaption>
                            </picture>
                        </div>
                    </div>
                    <div className="uo-modal__content uo-modal__content--doors">
                        <header>
                            <p>
                                Add a “Door” and link up other services you use
                                right alongside Basecamp’s built-in tools.
                            </p>
                        </header>
                        <div className="screenshot screenshot--has-captions">
                            <picture>
                                <source
                                    srcSet="/assets/screenshots/doors-framed-f80a47a9a9e7e51d23edf16d961c1072908a56fa165946e5cb4408cf3cb0b00c.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="/assets/screenshots/doors-framed-714b618bc7551a8c9f19fba132393f1c6cca1e06901125abaeea900893082d72.png"
                                    alt="Doors"
                                />
                                <figcaption className="align-bottom justify-right dot dot--teal">
                                    <p>
                                        Got a service you use that isn’t
                                        represented here?{" "}
                                        <a href="/support">Get in touch</a> and
                                        we’ll do our best to add it for you.
                                    </p>
                                </figcaption>
                            </picture>
                        </div>
                    </div>
                </div>
                <button className="uo-modal__close" aria-label="Close Modal">
                    <span>Close</span>
                    <svg
                        height="12"
                        viewBox="0 0 12 12"
                        width="12"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="m.909856 11.0571c.282054.2733.621394.4099 1.018024.4099.42308 0 .77565-.141 1.0577-.4231l3.0012-3.01442 3.02764 3.01442c.28205.2821.63462.4231 1.05768.4231.3967 0 .7316-.1366 1.0048-.4099.2733-.282.4099-.6258.4099-1.0312 0-.37022-.141-.70075-.4231-.99162l-3.02764-3.04086 3.02764-3.05409c.2909-.28205.4363-.60817.4363-.97836 0-.40545-.1366-.7448-.4099-1.018033-.2732-.273237-.6125-.409856-1.018-.409856-.40543 0-.74918.141026-1.03123.423077l-3.05409 3.027642-3.01442-3.014421c-.27324-.282051-.6214-.423077-1.04448-.423077-.39663 0-.73597.136619-1.018024.409856-.273237.273242-.409856.608172-.409856 1.004812 0 .379.145433.70953.436298.99158l3.040862 3.04087-3.040862 3.05409c-.290865.28205-.436298.60817-.436298.97839 0 .4054.136619.7492.409856 1.0312z"
                            fill="currentcolor"
                        ></path>
                    </svg>
                </button>
            </div>
        </section>
    );
}
