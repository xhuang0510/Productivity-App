import React, { Component } from 'react'; //import React Component
import Clock from 'react-live-clock';
import { Inject, ScheduleComponent, Day, Week, ViewsDirective, ViewDirective, DragAndDrop, ExcelExport, Resize } from "@syncfusion/ej2-react-schedule";
import { StickyNoteList, NewNoteButton } from "./Components";
import { Input, Card, Button } from 'react-rainbow-components';
import styled from 'styled-components';
import "./css/index.css";

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
            <div>
                <div className="accountLayout">
                    <div className="clock">
                        <Clock format={'LT'} ticking={true} />
                    </div>

                    <button className="menu-buttons" id="login-button">Login</button>   
                    <button className="menu-buttons" id="logout-button">Logout</button>
                </div>
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

const StyledCard = styled(Card)`
    width: 285px;
    height: 420px;
`;

export class StatsUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        let userStats = this.props.stats;
        let flexArray = [];
        let statCardFlexRow = [];
        for (let i = 0; i < userStats.length; i++) {
            // Insert more details here if needed
            statCardFlexRow.push(
                <StyledCard
                    className="statCardItem" key={i}
                >
                    <h1>{userStats[i].label}</h1>
                    <p><b>{userStats[i].definingFactor}</b>: {userStats[i].value}</p>
                </StyledCard>);
            if (i % 3 === 2 || i === userStats.length - 1) {
                flexArray.push(
                    <div className="statCards" key={i}>
                        {statCardFlexRow}
                    </div>
                );
                statCardFlexRow = [];
            }
        }
        console.log(flexArray);
        return (
            <div>
                <h1>These are stats</h1>
                <hr class="solid" />
                <div className="scrollable statCardHeightLimit">
                    {flexArray}
                </div>
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
                <h1>Achievements</h1> 
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
                <h1>Options</h1> 
                <Button>Edit Personal Stats</Button>
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
                <h1>About</h1>
            </div>
        );
    }
}
