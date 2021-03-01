import React, { Component } from 'react'; //import React Component
import Clock from 'react-live-clock';
import { Inject, ScheduleComponent, Day, Week, ViewsDirective, ViewDirective, DragAndDrop, ExcelExport, Resize } from "@syncfusion/ej2-react-schedule"
import { Button } from 'react-bootstrap';
import { StickyNoteList, NewNoteButton, LoadingScreen } from "./Components"
import { Transition } from 'react-spring/renderprops'
import "./css/index.css";
// import styles from "./css/material-dark.css"

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
            i: 0
        }
    }

    render() {
        return (
            <div>
                <StickyNoteList 
                     updateStickyNotes={this.props.updateStickyNotes} 
                     stickyNotes={this.props.stickyNotes} >
                </StickyNoteList>
                <NewNoteButton 
                     updateStickyNotes={this.props.updateStickyNotes} 
                     stickyNotes={this.props.stickyNotes}>

                </NewNoteButton>
            </div>
        );
    }
}

export class ScheduleUI extends Component {
    constructor(props) {
        super(props);
        this.mounted = false;
        // Saves data automatically every 60 seconds while component is active
        this.interval = setInterval(() => {
            if(this.mounted) {
                this.saveData();
            }
        }, 60000);
    }

    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
        clearInterval(this.interval);
    }

    onActionBegin(args) {
        if (args.requestType === 'toolbarItemRendering') {
            let exportItem = {
                align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
                text: 'Excel Export', cssClass: 'e-excel-export', click: this.onExportClick.bind(this)
            };
            args.items.push(exportItem);
        }
    }

    onExportClick() {
        this.scheduleObj.exportToExcel();
    }

    saveData = () => {
        let newData = this.scheduleObj.dataModule.dataManager.dataSource.json;
        this.props.update(newData);
        console.log("Data saved!");
    }

    render() {
        return (
            <div className="scheduleSection">
                <Transition from={{ opacity: 1 }} leave={{ opacity: 0 }}>
                    
                </Transition>
                <ScheduleComponent cssClass='excel-export' width="100%" height="100vh" ref={t => this.scheduleObj = t} id='schedule'
                                    actionBegin={this.onActionBegin.bind(this)} eventSettings={{ dataSource: this.props.schedule }}>
                    <ViewsDirective>
                        <ViewDirective option='Day'/>
                        <ViewDirective option='Week'/>
                    </ViewsDirective>
                    <Inject services={[Day, Week, DragAndDrop, ExcelExport, Resize]}></Inject>
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
