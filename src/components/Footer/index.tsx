import Image from 'next/image'
import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div style={{ width: 200, height: 56, marginBottom: -40 }}>
                    <Image src="/assets/images/footer-logo.png" alt="logo" width={200} height={56} />
                </div>
                <div className={styles.navigation_area}>
                    <div className={styles.subnav}>
                        <p className={styles.navTitle}>Products</p>
                        <div className={styles.navContent}>
                            <div style={{ flexDirection: 'column', flex: 1, display: 'flex' }}>
                                <span className={styles.navLabel}>Automations</span>
                                <span className={styles.navLabel}>Playbooks</span>
                                <span className={styles.navLabel}>Demand Insights</span>
                            </div>
                            <div style={{ flexDirection: 'column', flex: 1, display: 'flex' }}>
                                <span className={styles.navLabel}>Visitor Tracking</span>
                                <span className={styles.navLabel}>Personalization</span>
                                <span className={styles.navLabel}>API</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.subnav}>
                        <p className={styles.navTitle}>Company</p>
                        <div className={styles.navContent}>
                            <div style={{ flexDirection: 'column', flex: 1, display: 'flex' }}>
                                <span className={styles.navLabel}>About Us</span>
                                <span className={styles.navLabel}>Blog</span>
                                <span className={styles.navLabel}>Free Lists</span>
                            </div>
                            <div style={{ flexDirection: 'column', flex: 1, display: 'flex' }}>
                                <span className={styles.navLabel}>Career</span>
                                <span className={styles.navLabel}>Refer a Lead</span>
                                <span className={styles.navLabel}>Support</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.subnav}>
                        <div className={styles.navContent}>
                            <span className={styles.navTitle} style={{ flex: 1 }}>Legal</span>
                            <span className={styles.navTitle} style={{ flex: 1 }}>Prospect on LinkedIn</span>
                        </div>
                        <div className={styles.navContent}>
                            <div style={{ flexDirection: 'column', flex: 1, display: 'flex' }}>
                                <span className={styles.navLabel}>Claim</span>
                                <span className={styles.navLabel}>GDPR</span>
                                <span className={styles.navLabel}> </span>
                            </div>
                            <div style={{ flexDirection: 'column', flex: 1, display: 'flex' }}>
                                <div className={styles.addToChromeBtnBack}>
                                    <div style={{ width: '1em', height: '1em', marginRight: 10 }}>
                                        <Image src="/assets/images/chrome.png" alt="chrome" width={35} height={35} />
                                    </div>
                                    <span className={styles.navLabel}>Add to Chrome</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomNav}>
                    <div className={styles.leftBottomNav}>
                        <span className={styles.bottomNavLabel}>Terms of Service</span>
                        <div className={styles.vl}></div>
                        <span className={styles.bottomNavLabel}>Data Terms</span>
                        <div className={styles.vl}></div>
                        <span className={styles.bottomNavLabel}>Privacy Policy</span>
                    </div>
                    <div className={styles.rightBottomNav}>
                        <div className={styles.linkLogo}>
                            <Image src="/assets/images/youtube.svg" alt="youtube" width={30} height={30} />
                        </div>
                        <div className={styles.linkLogo}>
                            <Image src="/assets/images/twitter.svg" alt="youtube" width={30} height={30} />
                        </div>
                        <div className={styles.linkLogo}>
                            <Image src="/assets/images/facebook.svg" alt="youtube" width={30} height={30} />
                        </div>
                        <div className={styles.linkLogo}>
                            <Image src="/assets/images/instagram.svg" alt="youtube" width={30} height={30} />
                        </div>
                        <div className={styles.linkLogo}>
                            <Image src="/assets/images/linkedin.svg" alt="youtube" width={30} height={30} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}