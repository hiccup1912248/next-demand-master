import Image from 'next/image'

export default function FunctionPlan() {
    return (
        <section>
            <div className="headline space-top--xx-large">
                <header>
                    <h4>Which functions are in the plans?</h4>
                </header>
            </div>
            <div className="plan-grid space-top--x-large">
                <ul>
                    <li>
                        <div className='grid-card'>
                            <div><Image src="/assets/images/plan/function-001.svg" alt="logo" width="50" height="50" /></div>
                            <span>Unlimited number of leads</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div><Image src="/assets/images/plan/function-002.svg" alt="logo" width="50" height="50" /></div>
                            <span>Unlimited number of automations</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div><Image src="/assets/images/plan/function-003.svg" alt="logo" width="50" height="50" /></div>
                            <span>SalesNavigator & Regular LinkedIn Integration</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div><Image src="/assets/images/plan/function-004.svg" alt="logo" width="50" height="50" /></div>
                            <span>Connect any email provider to Demand</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div><Image src="/assets/images/plan/function-005.svg" alt="logo" width="50" height="50" /></div>
                            <span>Target leads who reacts to post on LinkedIn</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div><Image src="/assets/images/plan/function-006.svg" alt="logo" width="50" height="50" /></div>
                            <span>Unified Inbox Reply from one place</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div><Image src="/assets/images/plan/function-007.svg" alt="logo" width="50" height="50" /></div>
                            <span>Icebreakers to increase reply and connection rates</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div><Image src="/assets/images/plan/function-008.svg" alt="logo" width="50" height="50" /></div>
                            <span>1-1 Personalization at scale for better replies</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div><Image src="/assets/images/plan/function-009.svg" alt="logo" width="50" height="50" /></div>
                            <span>Reply Detaction to stop followup in automations</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div><Image src="/assets/images/plan/function-010.svg" alt="logo" width="50" height="50" /></div>
                            <span>Export data from LinkedIn to any CRM or CSV</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div><Image src="/assets/images/plan/function-011.svg" alt="logo" width="50" height="50" /></div>
                            <span>Deuplication security across your entire team</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div><Image src="/assets/images/plan/function-012.svg" alt="logo" width="50" height="50" /></div>
                            <span>A/B Testing in your email sequences</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div><Image src="/assets/images/plan/function-013.svg" alt="logo" width="50" height="50" /></div>
                            <span>Email Sequences at scale</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div><Image src="/assets/images/plan/function-014.svg" alt="logo" width="50" height="50" /></div>
                            <span>Double Email verification find emails even when not shown on LinkedIn</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div><Image src="/assets/images/plan/function-015.svg" alt="logo" width="50" height="50" /></div>
                            <span>Black List features to avoid reaching your customers.</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div></div>
                            <span>Social Selling</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div></div>
                            <span>Visitor Tracking Companies and People</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div></div>
                            <span>Technology Enrichment</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div></div>
                            <span>Monitor Leads on LinkedIn</span>
                        </div>
                    </li>

                    <li>
                        <div className='grid-card'>
                            <div></div>
                            <span>Like and Comment at Scale</span>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    )
}