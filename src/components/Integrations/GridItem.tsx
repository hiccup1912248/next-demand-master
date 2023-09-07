import Image from 'next/image';

export default function GridItem({ image, content }: {
    image?: string,
    content: string,
}) {
    return (
        <div className="grid-item">
            <figure className="title">
                {
                    image && <Image src={image} alt="service-logo" width={50} height={50} />
                }
                {
                    !image && (
                        <div className="header__logo">
                            <Image src="/assets/images/logo.svg" alt="logo" width="38" height="38" />
                            <strong>demand</strong>
                        </div>
                    )
                }
            </figure>
            <div className="content">
                <p>{content}</p>
                <a><p className='link'>Learn more &gt;</p></a>
            </div>
        </div>
    )
}