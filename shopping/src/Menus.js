import React, { Component } from 'react'; //import React Component
import "./index.css";
import {AccountInfoDisplay, StickyNotesSection, ScheduleUI, StatsUI, AchievementsUI, OptionsUI, AboutUI, ToggleButton} from "./Displays"

export class LeftMenu extends Component {
    render() {
        return (
            <div>
                This is Left
                Hello this is a REALLYYYYYYYYYYYYYYYYYYY long line
                <br></br>
                <button onClick={this.props.toggle}>Light/Dark</button>
                <ToggleButton text="Dark/Light" onClick={this.props.toggle}></ToggleButton>
            </div>
        );
    }
}

export class CenterMenu extends Component {
    render() {
        return (
            <div className="thisSection">
                <ScheduleUI></ScheduleUI>
            </div>
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
                    <StickyNotesSection updateSticky={this.props.updateSticky} stickyNotes={this.props.stickyNotes}></StickyNotesSection>
                </div>
                Hello this is a REALLYYYYYYYYYYYYYYYYYYY long line
            </div>
        )
    }
}