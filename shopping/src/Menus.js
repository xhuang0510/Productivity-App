import React, { Component } from 'react'; //import React Component
import "./index.css";
import {AccountInfoDisplay, StickyNotesSection, ScheduleUI, StatsUI, AchievementsUI, OptionsUI, AboutUI} from "./Displays"

export class LeftMenu extends Component {
    render() {
        return (
            <div>
                This is Left
                Hello this is a REALLYYYYYYYYYYYYYYYYYYY long line
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
                <StickyNotesSection></StickyNotesSection>
                Hello this is a REALLYYYYYYYYYYYYYYYYYYY long line
            </div>
        )
    }
}