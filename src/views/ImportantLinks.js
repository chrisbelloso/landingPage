import './ImportantLinks.css'

const ImportantLinks = () => {
    return(
        <>
            <header className="header">
            <h1 className='headerTitle'>Important Links</h1>
            </header>

            
            <div className='links'>
                <div className='E-Mail'>
                    <h4 className='linkTitle'>E-Mail</h4>
                    <p className='linkText'>
                        christianbelloso2002@gmail.com
                    </p>
                </div>
                <div className='Phone'>
                    <h4 className='linkTitle'>Phone</h4>
                    <a className='linkText' href="tel: 7866038365">(786) 603-8365</a>
                </div>
                <div className='GitHub'>
                    <h4 className='linkTitle'>GitHub</h4>
                    <a className='linkText' href="https://github.com/chrisbelloso">github.com/chrisbelloso</a>
                </div>
                <div className='Resume'>
                    <h4 className='linkTitle'>Resume</h4>
                    <a className='linkText' href="https://drive.google.com/file/d/1X9YPoatDGO6cnO_IhHje3enDFS0lSl0A/view?usp=sharing">
                        Christian Belloso Resume.PDF</a>
                </div>
                <div className='Website'>
                    <h4 className='linkTitle'>Website</h4>
                    <a className='linkText' href="https://awesome-davinci-fc5252.netlify.app/">CB Lading Page</a>
                </div>
            </div>
        </>
    )
}

export default ImportantLinks;