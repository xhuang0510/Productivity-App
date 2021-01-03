import React, { Component } from 'react'; //import React Component
import "./index.css";
import {StickyNote, StickyNoteList, ScheduleBlock, ToggleButton, NewNoteButton} from "./Components"
import Clock from 'react-live-clock';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ViewsDirective, ViewDirective} from "@syncfusion/ej2-react-schedule"

export class AccountInfoDisplay extends Component {
    // Stores the state of this component and inherits properties from parent
    constructor(props) {
        super(props);
        this.state = {
            timezone: "Pacific"
        }
    }

    // Renders the component
    // Whenever you change state, the component re-renders
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
        return (
            <div>
                <StickyNoteList></StickyNoteList>,
                <NewNoteButton></NewNoteButton>
            </div>
        );
    }
}

export class ScheduleUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="scheduleSection">
                <ScheduleComponent cssClass='schedule-cell-dimension' width="100%" height="720px">
                    <ViewsDirective>
                        <ViewDirective option='Day'/>
                        <ViewDirective option='Week'/>
                    </ViewsDirective>
                    <Inject services={[Day, Week]}></Inject>
                </ScheduleComponent>
            </div>
        );
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
