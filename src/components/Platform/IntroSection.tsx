import PurchaseButton from "../Common/PurchaseButton";

export default function IntroSection() {
    return (
        <section>
            {/* header section start */}
            <div className="home-thumb">
                <figure>
                    <div className="thumb-script-back">
                        <p>How do you book so <br />many meetings on <br />LinkedIn?</p>
                        <p>I use Demand AI <br />it fully automated and <br />books meetings for me</p>
                    </div>
                </figure>
            </div>
            {/* header section end */}

            {/* headline start */}
            <div className="headline space-top--x-large">
                <header>
                    <h2>Sell on <strong>LinkedIn.</strong> Reveal your <strong>Visitors. Powered by AI</strong></h2>
                </header>
                <article>
                    <p style={{ fontSize: 'var(--font-size-base)' }}>Demand is the world biggest Demand Generation Platform. We are enabling companies identifying and landing their dream customers faster than ever before. LinkedIn Automation, Identify Website Visitors, Technology Signals and much more.</p>
                </article>
            </div>
            {/* headline end */}
            <PurchaseButton />
        </section>
    )
}