import Image from 'next/image'

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <a className="header__logo" href="/">
                    <figure>
                        <Image src="/assets/images/logo.svg" alt="logo" width="38" height="38" />
                    </figure>
                    <strong>demand</strong>
                    <div className="header__tagline header__tagline--js header__tagline--stars"><span>“AI IS A GAME CHANGER”</span></div>
                </a>
                <ul className="header__options">
                    <li><a className="button button--small button--text" href="/new">WHAT&apos;S NEW?</a></li>
                    <li><a className="button button--small button--text" href="/plays">PLAYS</a></li>
                    <li><a className="button button--small button--text" href="/pricing">PRICING</a></li>
                    <li><a className="button button--small button--text" href="/integrations">INTEGRATIONS</a></li>
                    <li><a className="button button--small button--text" href="/customers">CUSTOMERS</a></li>
                    <li><a className="button button--small button--text" href="/resources">RESOURCES</a></li>
                    <li><a className="button button--small button--text" href="/login">LOGIN</a></li>
                    <li><a className="button button--glow button--small" href="/pricing" >Pricing + Sign up</a></li>
                </ul>
            </div>
        </header>
    )
}