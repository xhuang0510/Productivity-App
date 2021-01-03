import React, { Component } from 'react'; //import React Component
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Container, Button, Alert } from 'react-bootstrap';
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
                    <label class="toggle-switch">
                        <input type="checkbox" onChange={this.props.toggle}></input>
                        <span class="round-slider"></span>
                    </label> 
                </div>
            </div>
        );
    }
}

export function CenterMenu() {
        let location = useLocation();
        return (
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                    <Switch location={location}>
                        <Route exact path="/">
                            <ScheduleUI />
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
                    <StickyNotesSection updateSticky={this.props.updateSticky} stickyNotes={this.props.stickyNotes}></StickyNotesSection>
                </div>
            </div>
        )
    }
}