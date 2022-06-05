import './MainView.css'

const MainView = () => {
    return (
        <div>
                <header className='header'>
                    <h1 style={{fontWeight: "bold", fontSize: "40px", marginLeft: "10px", color: "white", marginTop: "70px"}}>Welcome,</h1>
                <div>
                    <h4 style={{marginLeft: "10px", color: "white", marginTop: "60px"}}>In this page you will be able to find all of my personal projects, about me, ways to contact me, etc.</h4>
                </div>
                </header>

            <div>
                <h1 className='subHeaderProjects'>PROJECTS</h1>
            </div>

            <div className='allProjects'>
                <div className='exploreContainer'>
                    <h2 style={{fontWeight: "bold"}}>The Help App</h2>
                    <p>- The Help App is a website used to get immediate help after a crash. 
                        It also has a pre-saved "favorites" feature for a faster contact with 
                        your loved ones on a moment of distress.</p>
                    <a className='toLinkContainer' href="https://jolly-shannon-f518c5.netlify.app/">GO</a>
                </div>
                <div className='exploreContainer'>
                    <h2 style={{fontWeight: "bold"}}>Chris Pool</h2>
                    <p>- Here is a look at the pool game that I created using Javascript during 
                        project week at IRONHACK!!</p>
                    <a className='toLinkContainer' href="https://chrisbelloso.github.io/POOL-GAME/">GO</a>
                </div>
                <div className='exploreContainer'>
                    <h2 style={{fontWeight: "bold"}}>Address Book:</h2>
                    <p>- An address book containing 50+ user data from API ending point.</p>
                    <a className='toLinkContainer' href="https://sleepy-volhard-62e8f8.netlify.app/">GO</a>
                </div>
                <div className='exploreContainer'>
                    <h2 style={{fontWeight: "bold"}}>Road Runners 2409 Landing Page</h2>
                    <p>
                        - Road Runners is a Miami based company that offers transportation services. 
                        This landing page is a project dedicated to give it's clients access to bookings and payments through Venmo.
                        </p>
                    <a className='toLinkContainer' href="https://elaborate-parfait-3cc6d1.netlify.app/">GO</a>
                </div>
            </div>

            <div>
            <h1 className='subHeaderProjects'>ABOUT ME</h1>
            </div>

            <div className='about'>
                <div className='aboutContainer'>
                    <p>
                        Ambitious web development bootcamp graduate
                        with strong interest in projects that require both
                        conceptual and analytical thinking. Passionate
                        about developing innovative web-based materials
                        that users will love. Seeking an opportunity to
                        contribute to a great team and cultivate my skills
                        further.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainView;