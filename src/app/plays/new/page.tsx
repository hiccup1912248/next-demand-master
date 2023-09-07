import PurchaseButton from "@/components/Common/PurchaseButton";
import Layout from "@/components/Layout";
import TypeGrid from "@/components/play/TypeGrid";


export default function PlayView() {
    return (
        <Layout>
            <main className="main">
                <div className="custom">
                    <div className="headline">
                        <header>
                            <h2>Tech Install Targeting</h2>
                        </header>
                        <article>
                            <p style={{ fontSize: 'var(--font-size-base)' }}>Use Technology installs to target new customers</p>
                        </article>
                    </div>

                    <section className="space-top--x-large play-view">
                        <div className="article">
                            <p>Knowing what tech your product plays well with can expand your market. Identify which of your technologies complement the products or tools of other companies. Then run outbound campaigns to potential customers with messaging about using your product with that complementary technology. <br /><br />You can automatically discover Demand’s contacts at these companies that fit the buying committee for those technologies. Create a play specific to each complementary technology and pair it with specific outbound messaging.</p>
                            <article className="space-top-medium">
                                <h5>Triggers</h5>
                                <ul >
                                    <li>Identify signals for specific technologies added at a company within your ICP</li>
                                </ul>
                            </article>
                            <article className="space-top-medium">
                                <h5>Actions</h5>
                                <ul >
                                    <li>Filter companies to reduce the records to meet specific criteria</li>
                                    <li>Source expanded set of contacts which meet your persona definition mapped to each technology category</li>
                                    <li>Send records to your CRM</li>
                                    <li>Assign to a Account Owner</li>
                                    <li>Enroll in Tech Install Campaign</li>
                                </ul>
                            </article>
                        </div>
                        <div className="channel">
                            <div className="channel-back">
                                <h6>Channels</h6>
                            </div>
                        </div>
                    </section>

                    <div className="callout space-top--x-large">
                        <div className="callout__frame">
                            <blockquote>
                                <q>The <span className="text-highlight">Go to market playbooks from Demand enabled our team to leverage Demand and scale faster.</span></q>
                                <cite>- Christian H.</cite>
                            </blockquote>
                        </div>
                    </div>
                    <PurchaseButton />
                </div>
            </main>
        </Layout>
    )
}