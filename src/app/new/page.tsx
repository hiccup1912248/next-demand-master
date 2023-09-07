import PurchaseButton from "@/components/Common/PurchaseButton";
import Layout from "@/components/Layout";

export default function WhatsNew() {
    return (
        <Layout>
            <main className="main">
                <div className="custom">
                    {/* headline start */}
                    <div className="headline">
                        <header>
                            <h2>Not everything under the sun, <br />just the stuff to get it done.</h2>
                        </header>
                        <article>
                            <p style={{ fontSize: 'var(--font-size-base)' }}>Demand is the quintessential Sales Acceleration platform, embodying the most effective strategies to propel your sales efforts to new heights. Meticulously distilled, streamlined, and harmoniously woven together, Explore the sections below to unveil its visual allure, operational finesse, and its unparalleled potential to drive your sales to unparalleled success.</p>
                        </article>
                    </div>
                    {/* headline end */}
                    {/* feature cards start */}
                    <div className="features space-top--large">
                        <div className="features__cards">
                            <a className="features__card" href="/features/home">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/home-thumbnail-1f21da08396dfcec876d8d9b7a40ec2349bcb54359c19cd46b4899eccec85935.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/home-thumbnail-4041a9d905cd61f5c84f032f49807860b8f745fc60225cd802e1bd00764daa40.png" alt="Organization begins at Home" />
                                </picture>
                                <dl>
                                    <dt>Automations that is out of this world</dt>
                                    <dd>A straightforward, one-page dashboard for your projects, assignments, and schedule.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/message-board">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/message-board-thumbnail-2366d44ff7d8b566d0d58d44f37d0904c2aab8c6d5ee36e283d7102afd05fb11.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/message-board-thumbnail-53c250094fe69b29c729d409d52e28678ade40ba3b0771ec8091313bbf405882.png" alt="Stay on topic with Messages" />
                                </picture>
                                <dl>
                                    <dt>AI that just works</dt>
                                    <dd>The centralized place for big discussions about big topics. Completely replaces project emails.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/to-dos">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/to-dos-thumbnail-2569e48f522e9423d65a9873b1284bc2f210b2e9fb071d2d6ccb181f72f8b663.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/to-dos-thumbnail-98f193b50e065287599a62060575dc307f9072666c8510226c903a0b9d2e4605.png" alt="Track work with To-dos" />
                                </picture>
                                <dl>
                                    <dt>LinkedIn Automation</dt>
                                    <dd>The powerful place to track work, deadlines, responsibilities, progress, and details.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/docs-and-files">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/docs-and-files-thumbnail-0a09b360e2edaaccf35e2d45d2fd09cf65f13a191271a701af04ef31ca05d60c.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/docs-and-files-thumbnail-fb1648915f9f4d5d5574dfe8ca0611c95bfa3729fdf9e25dc8fbad156ef4fc92.png" alt="Store, share, and discuss files" />
                                </picture>
                                <dl>
                                    <dt>Social Selling</dt>
                                    <dd>An organized space to create, share, and discuss docs, files (physical and cloud), and images.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/campfire">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/campfire-thumbnail-05348bd0163adf04737aef48747142fcd388172a0a843339a658a3a1fbdd46b7.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/campfire-thumbnail-c9db6db619a9184f12938923d5e5573297054cb7b061241ee119265cd48a8d4d.png" alt="Chat around the Campfire" />
                                </picture>
                                <dl>
                                    <dt>Multichannel outreach</dt>
                                    <dd>Basecamp’s built-in real-time group chat lets you hash stuff out quickly then move on.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/schedule">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/schedule-thumbnail-9b14056025bab7affb1c617b1ed539fa209ef4694078963023f77f9adbfe7d7c.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/schedule-thumbnail-a58630ec5355891f4f02947e069016a58cadf0a7aaf9a59f1b2e3b85a0efa84a.png" alt="Schedule so you don’t forget" />
                                </picture>
                                <dl>
                                    <dt>Integrations</dt>
                                    <dd>The project schedule displays dated to-dos, deadlines, milestones, and relevant events.</dd>
                                </dl>
                            </a>
                        </div>
                    </div>
                    {/* feature card end */}
                    {/* callout space start */}
                    <div className="callout space-top--x-large">
                        <div className="callout__frame">
                            <blockquote>
                                <q>The <span className="text-highlight">Go to market playbooks from Demand enabled our team to leverage Demand and scale faster.</span></q>
                                <cite>- Christian H.</cite>
                            </blockquote>
                        </div>
                    </div>
                    {/* callout space end */}
                    {/* feature cards start */}
                    <div className="features space-top--x-large">
                        <div className="features__cards">
                            <a className="features__card" href="/features/automatic-check-ins">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/automatic-check-ins-thumbnail-26eca7475ad66cebaad0b5cbf5810b6a50aa69c99049d11c6b1a889a052ab4f4.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/automatic-check-ins-thumbnail-cd4ac4e079f5ba7c1d85024743bea74d1861399863f0c25474bf68a35e3a0377.png" alt="Automatically check-in on the regular" />
                                </picture>
                                <dl>
                                    <dt>Automatically check-in on the regular</dt>
                                    <dd>Get answers on a regular basis by automatically polling your team daily, weekly, etc.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/card-table">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/card-table-thumbnail-4167c9d850fe6e006d2088e49db19f75734b5a2c82258ac674c64eb87f124510.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/card-table-thumbnail-abcff73170194b38a09f5f6d1027632979539fad5f1d024cb9ecae43a1068ee4.png" alt="Put workflows on the Card Table" />
                                </picture>
                                <dl>
                                    <dt>Put workflows on the Card Table</dt>
                                    <dd>Our unique take on Kanban improves on the concept in surprising, practical ways.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/lineup">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/lineup-thumbnail-4fc896312061f26bb2c9fadca7c81f07e9b40a50431300836ac7f757b96f1eec.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/lineup-thumbnail-85508cd4ee6482b001eb0e45884c665583cf8868287dfc36c7f630c53b8f8d94.png" alt="Get a clear bird’s eye view" />
                                </picture>
                                <dl>
                                    <dt>Get a clear bird’s eye view</dt>
                                    <dd>“The Lineup” gives you a big picture view of projects in play, from start date to end date.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/doors">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/doors-thumbnail-9bf3ec04f6f003ed30cd23f42e1f0ae7d7e86c005da878b2c8cb73f6c62cf243.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/doors-thumbnail-37c523d6836926dfd9c25e1b26285907e0cec35e8af77e74894dde19bc8f50fc.png" alt="Open a door to the world" />
                                </picture>
                                <dl>
                                    <dt>Open a door to the world</dt>
                                    <dd>“Doors” let you link up other services you use right alongside Basecamp’s built-in tools.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/all-access">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/all-access-thumbnail-96c2dea7f2f39fb9b8e6c13ba3df3b84f481f8bb956e374e2b7b42eb02bff314.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/all-access-thumbnail-a603d88e3995ee0f052f19433ab7fb9470609da69fb23e67396a6216e1bfb4c7.png" alt="Collaborate seamlessly" />
                                </picture>
                                <dl>
                                    <dt>Collaborate seamlessly</dt>
                                    <dd>With “All-access” anyone in your Basecamp account can see and join projects.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/activity-reports">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/activity-reports-thumbnail-50d893472fd08c0e4b00fa0ca3253bac02b0b0987b10674b0d3717247422a6ed.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/activity-reports-thumbnail-69a0b05594bbc5646c5170993bd3cebcfb34a6720d4fd909b614c8904ead4577.png" alt="Be a likeable know-it-all" />
                                </picture>
                                <dl>
                                    <dt>Be a likeable know-it-all</dt>
                                    <dd>Reports cut across every project so you can gain quick insight into a whole host of important details.</dd>
                                </dl>
                            </a>
                        </div>
                    </div>
                    {/* feature cards end */}
                    {/* callout space start */}
                    <div className="callout space-top--x-large">
                        <div className="callout__frame">
                            <blockquote>
                                <q>The <span className="text-highlight">Go to market playbooks from Demand enabled our team to leverage Demand and scale faster.</span></q>
                                <cite>- Christian H.</cite>
                            </blockquote>
                        </div>
                    </div>
                    {/* callout space end */}
                    {/* feature cards start */}
                    <div className="features space-top--x-large">
                        <div className="features__cards">
                            <a className="features__card" href="/features/pings">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/pings-thumbnail-37c2c9303afa44c0a0b9262d2749d4ef0651b8bdafda9387200afe68bd7bd0cc.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/pings-thumbnail-71120ce26d772eb83b5b978473681d4fd5cef4ad928dd9765912bb60228aede4.png" alt="Just ping ’em" />
                                </picture>
                                <dl>
                                    <dt>Just ping ’em</dt>
                                    <dd>Our version of Direct Messages, Pings let you kick off ad hoc chats 1:1 or in small groups.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/hill-charts">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/hill-charts-thumbnail-6091183b1ce7797a4ef7e414159c1b553830289603fdef08dc2dc13c6f707378.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/hill-charts-thumbnail-66c002f1f70801ef6130dd35e8c1e228347bd3d1fe5bb8d0dc86c4f2b54d8193.png" alt="See reality with Hill Charts" />
                                </picture>
                                <dl>
                                    <dt>See reality with Hill Charts</dt>
                                    <dd>Invented here, Hill Charts give you a visual, intuitive sense of where projects really stand.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/cloud-files">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/cloud-files-thumbnail-17b67387e48112691890b99fa9a8b0ee0b6f1c4d3164cfa9b4400b3d0c5b888c.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/cloud-files-thumbnail-258b8a81d6b3e7404276ca1f7e5da45f79e3863099563b8c7078f39cb50cf344.png" alt="Hook up all the clouds" />
                                </picture>
                                <dl>
                                    <dt>Hook up all the clouds</dt>
                                    <dd>We’ve added cloud file support for Figma, Airtable, Dropbox, Adobe, Notion, and loads more.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/my-stuff">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/my-stuff-thumbnail-6f33f94b7a82d7b25216e5c68bb2c5b2e20c6458e31539b3a17d58301abcc8dd.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/my-stuff-thumbnail-267cf01fc9c34e245e3c035844769f7523e4a5ec747bd1e659582b0638a0bd7f.png" alt="One click to everything yours" />
                                </picture>
                                <dl>
                                    <dt>One click to everything yours</dt>
                                    <dd>Get instant access to your schedule, assignments, drafts, bookmarks, activity, etc.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/latest-activity">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/latest-activity-thumbnail-f788b377a7af62f870d5dc5cb8b0eb4960a65ae845be5710675a4bebc2d4c47e.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/latest-activity-thumbnail-ba972ca952bed024117924093d93d0f841708774126e2a95c6d2fa7d4bd54c28.png" alt="Play-by-play, minute-by-minute" />
                                </picture>
                                <dl>
                                    <dt>Play-by-play, minute-by-minute</dt>
                                    <dd>Take in everything that happens across every project in real-time — on a single page.</dd>
                                </dl>
                            </a>
                            <a className="features__card" href="/features/notification-settings">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/notification-settings-thumbnail-a20f98e4a856d5c6f21b6cbecad24caf34fb3608a3f027be0725c6c97f138fec.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/notification-settings-thumbnail-eae3d3cee311ce5c6313ce2574d3901d846a2253f17124cee469ac2ff0b80b1c.png" alt="Control how people can reach you" />
                                </picture>
                                <dl>
                                    <dt>Control how people can reach you</dt>
                                    <dd>Email or in app? All notifications or just important ones? 24/7 or on a schedule? Your call.</dd>
                                </dl>
                            </a>
                        </div>
                    </div>
                    {/* feature cards end */}
                    {/* callout space start */}
                    <div className="callout space-top--x-large">
                        <div className="callout__frame">
                            <blockquote>
                                <q>For the first time in a long time our team is truly collaborating, and everyone is moving in the same direction, with the same goals. It’s truly remarkable how quickly things have changed in just a week.</q>
                                <cite>- Ryan Sullivan, WP Site Care</cite>
                            </blockquote>
                        </div>
                    </div>
                    {/* callout space end */}
                    {/* feature cards start */}
                    <div className="features space-top--x-large">
                        <div className="features__cards">
                            <a className="features__card" href="/features/hey-menu">
                                <picture>
                                    <source srcSet="/assets/images/screenshots/hey-menu-thumbnail-bae02f756fb967320b37d80dde129684aeb655be4c6efd9f0dc73f4a25c95188.webp" type="image/webp" />
                                    <img src="/assets/images/screenshots/hey-menu-thumbnail-aac53e187bb96b26afacd4b7245b8504fe76fe19f20b3ce52cfee12217410fb2.png" alt="Be notified in one place" />
                                </picture>
                                <dl>
                                    <dt>Be notified in one place</dt>
                                    <dd>The Hey! menu aggregates all your notifications in a single menu. No more bouncing around.</dd>
                                </dl>
                            </a>
                        </div>
                    </div>
                    {/* feature cards end */}
                    {/* callout space start */}
                    <div className="callout space-top--x-large">
                        <div className="callout__frame">
                            <blockquote>
                                <q>We are consistently meeting deadlines because all the facts, files and comments are in one place.</q>
                                <cite>- Kim Curry, Kim Curry Design</cite>
                            </blockquote>
                        </div>
                    </div>
                    {/* callout space end */}
                    {/* footer start */}
                    <div className="footer__recognition recognition space-bottom--xxx-large">
                        <div className="recognition__badge recognition__badge--app-store">
                            <picture>
                                <source srcSet="/assets/images/recognition/badge-app-store-9b22e2dfb1476c2f64248b9b3519ea388e8424f2078f334f5f16a87ed0b35be6.webp" type="image/webp" />
                                <img src="/assets/images/recognition/badge-app-store-17630de1b21cdf3337036c3bfc0550c15c66e24d4842fcb9ae085a2724531db4.png" alt="" />
                            </picture>
                        </div>
                        <div className="recognition__badge recognition__badge--google-play">
                            <picture>
                                <source srcSet="/assets/images/recognition/badge-google-play-8388ddf3422ddd0b9a22dfb1702ac595ae626719053e2e05828d46fa991b81b6.webp" type="image/webp" />
                                <img src="/assets/images/recognition/badge-google-play-08d2150033900dad48d932a7334e596734e868d88e702dc596bdf0fceb103be4.png" alt="" />
                            </picture>
                        </div>
                        <div className="recognition__badges">
                            <picture>
                                <source srcSet="/assets/images/recognition/badge-g2-easiest-setup-b0da73bbbc6a263a0bbd05961e3bf630f783cd8b4a376b514bc6934970b1028e.webp" type="image/webp" />
                                <img src="/assets/images/recognition/badge-g2-easiest-setup-19d740f3b345fc0303a9595b9a11611a5bb95e836b0741955fe166a07108eb00.png" alt="" />
                            </picture>
                            <picture>
                                <source srcSet="/assets/images/recognition/badge-g2-collaboration-products-b15710c15c63a0d8d1dda3fb1d071dd4dc1520161f4c91122e8d404caae2b0d1.webp" type="image/webp" />
                                <img src="/assets/images/recognition/badge-g2-collaboration-products-f1705a0efcfadbb285c7b90ac3982866d815ab2f4964e1e9ef29b99d76c8d1c8.png" alt="" />
                            </picture>
                            <picture>
                                <source srcSet="/assets/images/recognition/badge-capterra-best-value-8871c8575a09bb015f44df563e8f20f391d394e2fdc3991a68a49d87c44a89e8.webp" type="image/webp" />
                                <img src="/assets/images/recognition/badge-capterra-best-value-c1373f2b70016a47eec2a46f8eb4e358a8334f917644a1f8f63a79ff18f84cf3.png" alt="" />
                            </picture>
                            <picture>
                                <source srcSet="/assets/images/recognition/badge-g2-project-management-products-656bbbadfe260f050e6580f588117d1dfd37cf577f3fd3f7558555fef4c79f51.webp" type="image/webp" />
                                <img src="/assets/images/recognition/badge-g2-project-management-products-7b7871f75ca6ec80b8f94a6002eaec65028674786a13076bd105a047d0cfa3ae.png" alt="" />
                            </picture>
                            <picture>
                                <source srcSet="/assets/images/recognition/badge-g2-best-roi-848c356275beb776061862a030c99605cba2698f5de5f479d379421e039d7fb8.webp" type="image/webp" />
                                <img src="/assets/images/recognition/badge-g2-best-roi-5c7d4be2553979dd391b077baf111c40ffff99e1932b1b71d8a65b2cf09639e4.png" alt="" />
                            </picture>
                        </div>
                    </div>
                    {/* footer end */}
                    <PurchaseButton />
                </div>
            </main>
        </Layout>
    )
}