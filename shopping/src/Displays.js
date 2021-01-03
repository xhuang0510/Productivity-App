import React, { Component } from 'react'; //import React Component
import "./index.css";
import {StickyNote, StickyNoteList, NewNoteButton} from "./Components"
import Clock from 'react-live-clock';
import {Inject, ScheduleComponent, Day, Week, ViewsDirective, ViewDirective, DragAndDrop, ExcelExport} from "@syncfusion/ej2-react-schedule"

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
                <div>
                    Login
                </div>
                <div>
                    Logout
                </div>
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
                <StickyNoteList updateSticky={this.props.updateSticky} stickyNotes={this.props.stickyNotes}></StickyNoteList>
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

export class ToggleButton extends Component {
    constructor(props){
        super(props);
        this.state={
            textDisplay: false,
        }
    }

    Toggled(){
        this.setState((currentState) => ({
            textDisplay: !currentState.textDisplay, 
        }));
    }

    render(){
        return(
            <div>
                <button onClick={() => this.Toggled()}>
                  Toggle
                </button>
                {!this.state.textDisplay && this.props.text}
            </div>
        )
    }
}