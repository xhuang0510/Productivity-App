import React, { Component } from 'react'; //import React Component
import { Switch, Route, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Button } from 'react-bootstrap';
import { AccountInfoDisplay, StickyNotesSection, ScheduleUI, StatsUI, AchievementsUI, OptionsUI, AboutUI } from "./Displays"
import "./index.css";


export class LeftMenu extends Component {
    render() {
        return (
            <div>
                <h1>LOGO HERE</h1>
                <div>
                    <Link to="/">
                        <Button>Schedule</Button>
                    </Link>
                </div>
                <div>
                    <Link to="/stats">
                        <Button>Stats</Button>
                    </Link>  
                </div>
                <div>
                    <Link to="/achievements">
                        <Button>Achievements</Button>
                    </Link>
                </div>
                <div>
                    <Link to="/options">
                        <Button>Options</Button>
                    </Link>
                </div>
                <div>
                    <Link to="/about">
                        <Button>About</Button>
                    </Link>
                </div>
                <div>
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
            <TransitionGroup>
                <CSSTransition classNames="fade" timeout={300}>
                    <Switch>
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
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
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
                        updateSticky={this.props.updateSticky} 
                        stickyNotes={this.props.stickyNotes} 
                        pinnedStickyNotes={this.props.pinnedStickyNotes}
                        updatePinnedStickies={this.props.updatePinnedStickies}>    
                    </StickyNotesSection>
                </div>
            </div>
        )
    }
}