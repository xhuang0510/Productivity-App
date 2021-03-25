import React, { Component } from 'react'; //import React Component
import { Route, Link } from "react-router-dom";
import { AccountInfoDisplay, StickyNotesSection, ScheduleUI, StatsUI, AchievementsUI, OptionsUI, AboutUI } from "./Displays"
import { SmartScheduler } from "./Components"
import { AnimatedSwitch } from 'react-router-transition';
import "./css/index.css";


export class LeftMenu extends Component {
    render() {
        return (
            <div>
                <h1>LOGO HERE</h1>
                <div>
                    <Link to="/">
                        <button className="left-menu-buttons">Schedule</button>
                    </Link>
                </div>
                <div>
                    <Link to="/stats">
                        <button className="left-menu-buttons">Stats</button>
                    </Link>
                </div>
                <div>
                    <Link to="/achievements">
                        <button className="left-menu-buttons">Achievements</button>
                    </Link>
                </div>
                <div>
                    <Link to="/options">
                        <button className="left-menu-buttons">Options</button>
                    </Link>
                </div>
                <div>
                    <Link to="/about">
                        <button className="left-menu-buttons">About</button>
                    </Link>
                </div>
                <div>
                    <SmartScheduler></SmartScheduler>
                </div>

                <div className="toggle-switch-wrapper">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
                    <label className="toggle-switch">
                        <input type="checkbox" onChange={this.props.toggle}></input>
                        <span className="round-slider">
                            <span className='sun-img'>
                                <i className="fas fa-sun"></i>
                            </span>
                            <span className='moon-img'>
                                <i className="fas fa-moon"></i>
                            </span>
                        </span>
                    </label>
                </div>
                
            </div>
        );
    }
}

export class CenterMenu extends Component {
    render() {
        return (
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
                >
                <Route exact path="/">
                    <ScheduleUI schedule={this.props.schedule} update={this.props.updateSchedule}/>
                </Route>
                <Route path="/stats">
                    <StatsUI />
                </Route>
                <Route path="/achievements">
                    <AchievementsUI />
                </Route>
                <Route path="/options">
                    <OptionsUI />
                </Route>
                <Route path="/about">
                    <AboutUI />
                </Route>
            </AnimatedSwitch>
        );
    }
}

export class RightMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <AccountInfoDisplay></AccountInfoDisplay>
                <div className="stickyNotesSection">
                    <StickyNotesSection
                        updateStickyNotes={this.props.updateStickyNotes}
                        stickyNotes={this.props.stickyNotes} >
                    </StickyNotesSection>
                </div>
            </div>
        )
    }
}