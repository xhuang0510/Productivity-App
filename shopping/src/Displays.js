import React, { Component } from 'react'; //import React Component
import Clock from 'react-live-clock';
import { Inject, ScheduleComponent, Day, Week, ViewsDirective, ViewDirective, DragAndDrop, ExcelExport } from "@syncfusion/ej2-react-schedule"
import { Button } from 'react-bootstrap';
import { StickyNoteList, NewNoteButton } from "./Components"
import "./index.css";



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
            <div className="accountLayout">
                <Clock format={'LT'} ticking={true} />
                <Button>
                    Login
                </Button>
                <Button>
                    Logout
                </Button>
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
                <StickyNoteList 
                    updateSticky={this.props.updateSticky} 
                    stickyNotes={this.props.stickyNotes} 
                    pinnedStickyNotes={this.props.pinnedStickyNotes}
                    updatePinnedStickies={this.props.updatePinnedStickies}>
                </StickyNoteList>
                <NewNoteButton updateSticky={this.props.updateSticky} stickyNotes={this.props.stickyNotes}></NewNoteButton>
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
                <ScheduleComponent cssClass='excel-export' width="100%" height="720px" id='schedule'>
                    <ViewsDirective>
                        <ViewDirective option='Day'/>
                        <ViewDirective option='Week'/>
                    </ViewsDirective>
                    <Inject services={[Day, Week, DragAndDrop, ExcelExport]}></Inject>
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
        return (
            <div>
                These are stats 
            </div>
        );
    }
}

export class AchievementsUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                Achievements 
            </div>
        );
    }
}

export class OptionsUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                Options 
            </div>
        );
    }
}

export class AboutUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                About
            </div>
        );
    }
}
