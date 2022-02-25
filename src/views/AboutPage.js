import './AboutPage.css'

const AboutPage = () => {
    return(
        <>
        <header className="aboutHeader">
            <h1 className='aboutTitle'>
                About Page
            </h1>
        </header>

        <div className='about'>
            <h4 style={{marginTop: "20px", marginBottom: "20px"}}>
                Ambitious web development bootcamp graduate
                with strong interest in projects that require both
                conceptual and analytical thinking. Passionate
                about developing innovative web-based materials
                that users will love. Seeking an opportunity to
                contribute to a great team and cultivate my skills
                further.
            </h4>
        </div>
        </>
    )
}

export default AboutPage;