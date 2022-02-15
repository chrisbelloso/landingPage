import './MainView.css'
import { NavLink } from "react-router-dom";

const MainView = () => {
    return (
        <div style={{margin: "20px"}}>
            <div>
                <h1 style={{fontWeight: "bold", fontSize: "40px"}}>Welcome,</h1>
            </div>

            <div>
                <h4>In this page you will be able to find all of my personal projects, about me, ways to contact me, etc.</h4>
            </div>

        <div className='allProjects'>
            <div className='exploreContainer'>
                <h2>The Help App</h2>
                <p>The Help App is a website used to get immediate help after a crash. 
                    It also has a pre-saved "favorites" feature for a faster contact with 
                    your loved ones on a moment of distress.</p>
                <a className='toLinkContainer' href="https://jolly-shannon-f518c5.netlify.app/">GO</a>
            </div>
            <div className='exploreContainer'>
                <h2>The Help App</h2>
                <p>The Help App is a website used to get immediate help after a crash. 
                    It also has a pre-saved "favorites" feature for a faster contact with 
                    your loved ones on a moment of distress.</p>
                <a className='toLinkContainer' href="https://jolly-shannon-f518c5.netlify.app/">GO</a>
            </div>
        </div>
        </div>
    )
}

export default MainView;