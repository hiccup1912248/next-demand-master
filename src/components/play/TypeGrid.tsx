import Image from 'next/image';
import TypeGridItem from './TypeGridItem';

export default function TypeGrid() {
    return (
        <section>
            <div className="headline">
                <header>
                    <h2>GTM Plays.</h2>
                </header>
                <article>
                    <p style={{ fontSize: 'var(--font-size-base)' }}>Modern <strong>go-to-market playbooks</strong> for all, one click installation into your account</p>
                </article>
            </div>
            <div className="play-type-grid space-top--x-large">
                <div className='grid-container'>
                    <TypeGridItem
                        title='Tech Install Targeting'
                        content='Knowing what tech your product plays well with can expand your market. Identify which of your technologies complement the...'
                    />
                    <TypeGridItem
                        title='Competitive Tech Installed'
                        content='Use Demand&apos;s technology tracker to identify when your target customers buy from your competitors and find the exact right...'
                    />
                    <TypeGridItem
                        title='Posted on LinkedIn'
                        content='Use the latest post on LinkedIn to engage in social selling and targeting a lead using DemandGPT and our proprietary approach.'
                    />
                    <TypeGridItem
                        title='Visited Website not an MQL'
                        content='Target by automation visitors that yet are to fill a form. Turn visitors into sales qualified leads by automations and DemandGPT AI.'
                    />
                    <TypeGridItem
                        title='Competitive Tech Uninstall'
                        content='A competitor&apos; s customers can be a great source of new business - if you can get plugged into the right signals. Companies that churn from...'
                    />
                    <TypeGridItem
                        title='Customer&apos;s Competition'
                        content='Your current customers make a good conduit to new ones. When one of your customers closes a deal, go and prospect their competition for it...'
                    />
                    <TypeGridItem
                        title='Account-Based Marketing'
                        content='An account-based marketing play can bring you closer to senior-level prospects at your biggest target accounts. This play is designed to...'
                    />
                    <TypeGridItem
                        title='Fiscal Year End Targeting'
                        content='The end of a fiscal year is a great time to get in front of potential customers. People are often looking to spend their remaining budget...'
                    />
                    <TypeGridItem
                        title='Job Change Playbook'
                        content='Personnel changes create great prospecting opportunities, especially when they happen within existing accounts. Newly promoted...'
                    />
                    <TypeGridItem
                        title='Review Site Intent'
                        content='You can purchase intent data from review sites to identify prospects that are further along in the buying process and actively in the market...'
                    />
                    <TypeGridItem
                        title='Funding Round Signal'
                        content='When a company receives a round of funding, it&apos;s a strong signal that they are likely to begin making new investments to grow their business. It&apos;s an event worthy...'
                    />
                    <TypeGridItem
                        title='Event Targeting'
                        content='Event managers typically receive a list of companies that will be attending an upcoming event. But they might not receive critical...'
                    />
                </div>

            </div>
        </section>
    )
}