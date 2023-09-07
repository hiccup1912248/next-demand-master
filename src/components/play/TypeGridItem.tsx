export default function TypeGridItem({ title, content }: {
    title: string,
    content: string,
}) {
    return (
        <div className='grid-item'>
            <div className='title-section'>
                <div className='new-lead-back'>
                    <div className='check'></div>
                    <span>New Leads</span>
                </div>

                <p>{title}</p>
            </div>
            <div className='content-section'>
                <p>{content}</p>
                <a href="/plays/new"><p className='link'>View Play &gt;</p></a>
            </div>
        </div>
    )
}