import GridItem from "@/components/Integrations/GridItem";
import TypeBanner from "@/components/Integrations/TypeBanner";
import Layout from "@/components/Layout";

export default function Integrations() {
    return (
        <Layout>
            <main className="main">
                <div className="custom">
                    <div className="headline">
                        <header>
                            <h2>Integrations for Demand</h2>
                        </header>
                        <article>
                            <p style={{ fontSize: 'var(--font-size-base)' }}>We integrate with more systems that most companies do as Demand should be simple!</p>
                        </article>
                    </div>
                    <TypeBanner active="demand" />
                    <div className="headline space-top--x-large">
                        <header>
                            <h5>Built by Demand</h5>
                        </header>
                        <article>
                            <p>Our native integrations are easy to set up and work right out of the box.</p>
                        </article>
                    </div>
                    <div className="integration-type-grid space-top--large">
                        <div className="grid-container">
                            <GridItem
                                image="/assets/images/integration/salesforce.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                            <GridItem
                                image="/assets/images/integration/hubspot.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                            <GridItem
                                image="/assets/images/integration/pipedrive.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                            <GridItem
                                image="/assets/images/integration/dynamics365.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                            <GridItem
                                image="/assets/images/integration/sugarcrm.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                            <GridItem
                                image="/assets/images/integration/zohocrm.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                            <GridItem
                                image="/assets/images/integration/close.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                            <GridItem
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                            <GridItem
                                image="/assets/images/integration/salesforcepardot.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />

                        </div>
                    </div>
                    <TypeBanner active="partner" />
                    <div className="headline space-top--x-large">
                        <header>
                            <h5>Built by our amazing partners</h5>
                        </header>
                    </div>
                    <div className="integration-type-grid space-top--large">
                        <div className="grid-container">
                            <GridItem
                                image="/assets/images/integration/nimble.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                            <GridItem
                                image="/assets/images/integration/zendesk.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                            <GridItem
                                image="/assets/images/integration/insightly.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                            <GridItem
                                image="/assets/images/integration/nimble.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                            <GridItem
                                image="/assets/images/integration/zendesk.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                            <GridItem
                                image="/assets/images/integration/insightly.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                        </div>
                    </div>
                    <TypeBanner active="zapier" />
                    <div className="headline space-top--x-large">
                        <header>
                            <h5>Integrate to any platform with Zapier</h5>
                        </header>
                    </div>
                    <div className="integration-type-grid space-top--large">
                        <div className="grid-container">
                            <GridItem
                                image="/assets/images/integration/nimble.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                            <GridItem
                                image="/assets/images/integration/zendesk.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                            <GridItem
                                image="/assets/images/integration/insightly.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                            <GridItem
                                image="/assets/images/integration/nimble.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                            <GridItem
                                image="/assets/images/integration/zendesk.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                            <GridItem
                                image="/assets/images/integration/insightly.png"
                                content="Company and contact details on new leads, contacts, and accounts — instantly at your fingertips and automatically synced from Demand. Get started in just minutes."
                            />
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}