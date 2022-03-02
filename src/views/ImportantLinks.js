import './ImportantLinks.css'

const ImportantLinks = () => {
    return(
        <>
            <header className="header">
            <h1 className='headerTitle'>Important Links</h1>
            </header>

            
            <div className='links'>
                <div className='E-Mail'>
                    <p className='linkTitle'>E-Mail</p>
                    <p>
                        christianbelloso2002@gmail.com
                    </p>
                </div>
                <div className='Phone'>
                    <ul className='linkTitle'>Phone</ul>
                    <a href="tel: 7866038365">(786) 603-8365</a>
                </div>
                <div className='GitHub'>
                    <ul className='linkTitle'>GitHub</ul>
                    <a href="https://github.com/chrisbelloso">GITHUB</a>
                </div>
                <div className='Website'>
                    <ul className='linkTitle'>Website</ul>
                    <a href="https://github.com/chrisbelloso">WEBSITE</a>
                </div>
            </div>
        </>
    )
}

export default ImportantLinks;