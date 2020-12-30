import React, { Component } from 'react'; //import React Component
import "./index.css";


export class StickyNote extends Component {
    render() {
        return (<div>I am a StickyNote</div>);
    }
}

export class StickyNoteList extends Component {
    render() {
        let stickyNotes = [];
        for(let i = 0; i < 2; i++) {
            stickyNotes.push(<StickyNote></StickyNote>)
        }
        let renderDisplay = (
            <div>
                {stickyNotes}
            </div>
        )
        return renderDisplay;
    }
}

export class ScheduleBlock extends Component {
    render() {
        return (<div>The time is: </div>);
    }
}

export class ToggleButton extends Component {
    render() {
        return (<div>The time is: </div>);
    }
}
