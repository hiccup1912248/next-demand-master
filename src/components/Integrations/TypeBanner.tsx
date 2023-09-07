export default function TypeBanner({ active }: {
    active: string,
}) {
    return (
        <div className="integration-type space-top--x-large">
            <div className={`banner-back ${active == 'demand' ? 'active' : ''}`}>
                <figure className="demand" />
                <span>BUILT BY DEMAND</span>
            </div>
            <div className={`banner-back ${active == 'partner' ? 'active' : ''}`}>
                <figure className="partner" />
                <span>BUILT BY DEMAND</span>
            </div>
            <div className={`banner-back ${active == 'zapier' ? 'active' : ''}`}>
                <figure className="zapier" />
                <span>BUILT BY DEMAND</span>
            </div>
        </div>
    )
}