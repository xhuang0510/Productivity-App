import React, { Component } from 'react'; //import React Component
import "./index.css";
import {StickyNote, StickyNoteList, ScheduleBlock, ToggleButton} from "./Components"
import Clock from 'react-live-clock';

export class AccountInfoDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timezone: "Pacific"
        }
    }

    render() {
        console.log("rendering");
        return (
            <div>
                <Clock format={'LT'} ticking={true} />
                <br></br>
                <header>This is a header</header>
                <p>This is a paragraph</p>
                <br></br>
                <br></br>
                <br></br>
                <ToggleButton text="On" />
                
            </div>
        )
    }
}

export class StickyNotesSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (<StickyNoteList></StickyNoteList>);
    }
}

export class ScheduleUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (<div>The time is: </div>);
    }
}

export class StatsUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (<div>The time is: </div>);
    }
}

export class AchievementsUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (<div>The time is: </div>);
    }
}

export class OptionsUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (<div>The time is: </div>);
    }
}

export class AboutUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (<div>The time is: </div>);
    }
}
