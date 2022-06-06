import './ImportantLinks.css'

const ImportantLinks = () => {
    return(
        <>
            <header className="header">
            <h1 className='headerTitle'>Important Links</h1>
            </header>

            <div className='linksContainer'>

                {/* EMAIL */}

                <div className='iconsContainer'>
                    <img className='emailIcon'
                    src="https://cdn-icons-png.flaticon.com/512/1932/1932875.png" 
                    alt="venmo"
                    />
                    <a 
                     className='allLinks'
                     href="mailto:christianbelloso2002@gmail.com">
                        Send Email
                    </a>
                </div>

                {/* RESUME */}

                <div className='iconsContainer'>
                    <img className='cvIcon'
                    src="https://www.pngmart.com/files/19/Vector-Resume-Transparent-Background.png" 
                    alt="resume"
                    />
                    <a 
                     className='allLinks'
                     href="https://drive.google.com/file/d/1X9YPoatDGO6cnO_IhHje3enDFS0lSl0A/view?usp=sharing">
                        CV/Resume
                    </a>
                </div>

                {/* LINKED IN */}

                <div className='iconsContainer'>
                    <img className='linkedinIcon'
                    src="https://startupshow.com.br/wp-content/uploads/2018/06/linkedin-icon.png" 
                    alt="linkedin"
                    />
                    <a 
                     className='allLinks'
                     href="https://www.linkedin.com/in/christianbelloso/">
                        Linked in
                    </a>
                </div>

                {/* PHONE */}

                <div className='iconsContainer'>
                    <img className='linkedinIcon'
                    src="https://icon-library.com/images/icon-for-mobile/icon-for-mobile-21.jpg" 
                    alt="phone"
                    />
                    <a 
                     className='allLinks'
                     href="tel: 7866038365">
                        Call now
                    </a>
                </div>
            </div>
        </>
    )
}

export default ImportantLinks;
            // <div className='links'>
            //     <div className='E-Mail'>
            //         <h4 className='linkTitle'>E-Mail</h4>
            //         <a className='linkText' href="mailto:christianbelloso2002@gmail.com">
            //             christianbelloso2002@gmail.com
            //         </a>
            //     </div>
            //     <div className='Phone'>
            //         <h4 className='linkTitle'>Phone</h4>
            //         <a className='linkText' href="tel: 7866038365">(786) 603-8365</a>
            //     </div>
            //     <div className='GitHub'>
            //         <h4 className='linkTitle'>GitHub</h4>
            //         <a className='linkText' href="https://github.com/chrisbelloso">github.com/chrisbelloso</a>
            //     </div>
            //     <div className='Resume'>
            //         <h4 className='linkTitle'>Resume</h4>
            //         <a className='linkText' href="https://drive.google.com/file/d/1X9YPoatDGO6cnO_IhHje3enDFS0lSl0A/view?usp=sharing">
            //             Christian Belloso Resume.PDF</a>
            //     </div>
            //     <div className='Website'>
            //         <h4 className='linkTitle'>Website</h4>
            //         <a className='linkText' href="https://awesome-davinci-fc5252.netlify.app/">CB Lading Page</a>
            //     </div>
            // </div>