import React, { Component } from 'react'; //import React Component
import "./index.css";


export class StickyNote extends Component {
    onClick = () => {
        console.log('Do Things Here')
    }
    render() {
        return (
            <div id ='notesWrapper'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
                <div class ='sticky-notes'>
                    <div class = 'note'>
                        <div class ='note-header'>
                            <button class = 'note-close' onClick={this.onClick}>
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class = 'note-title' contentEditable suppressContentEditableWarning={true}>
                            Title
                        </div>
                        <div class = 'note-body' contentEditable suppressContentEditableWarning={true}>
                            Body
                        </div>
                    </div>
                </div>
            </div>
        );
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

export class NewNoteButton extends Component {
    onClick = () => {
        console.log('I am a new Note Button!')
    }

    render(){
        return(
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
                <button class='new-note-button'onClick={this.onClick}>
                    New Note
                    <br></br>
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        )
    }
}

