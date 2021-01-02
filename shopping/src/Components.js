import React, { Component } from 'react'; //import React Component
import "./index.css";


export class StickyNote extends Component {
    render() {
        return (<div>I am a StickyNote</div>);
    }
}

// You can do an array of elements to render them all at once
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
    constructor(props) {
        super(props);
        
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

