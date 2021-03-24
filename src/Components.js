import React, { Component } from 'react'; //import React Component
import { Button } from 'react-bootstrap';
import "./css/index.css";


export class StickyNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTitle: this.props.title,
            inputBody: this.props.body,
            black: true
        };
    }

    remove = () => {
        this.props.remove(this.props.keyNum);
    }

    editTitle = (textbox) => {
        this.setState({
            inputTitle: textbox.target.value
        }, () => {
            this.props.updateTitle(this.props.keyNum, this.state.inputTitle);
        });
    }

    editBody = (textbox) => {
        this.setState({
            inputBody: textbox.target.value
        }, () => {
            this.props.updateBody(this.props.keyNum, this.state.inputBody);
        });
    }

    pin = () => {
        this.setState({black: !this.state.black});
        this.props.pin(this.props.keyNum);
    }

    render() {
        let pinClass = this.state.black ? 'note-pin black' : 'note-pin white'
        return (
            <div id ='notesWrapper'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
                <div className ='sticky-notes'>
                    <div className = 'note'>
                        <div className ='note-header'>
                            <button className = 'note-close' onClick={this.remove}>
                                <i className="fas fa-times"></i>
                            </button>
                            <button className = {pinClass} onClick={this.pin}>
                                <i className="fas fa-thumbtack"></i>
                            </button>
                        </div>
                        <input value={this.props.title} className='note-title' contentEditable suppressContentEditableWarning={true} onInput={this.editTitle} size={50}/>
                        <textarea value={this.props.body} className='note-body' contentEditable suppressContentEditableWarning={true} onInput={this.editBody}/>
                    </div>
                </div>
            </div>
        );
    }
}

// You can do an array of elements to render them all at once
export class StickyNoteList extends Component {
    updateStickyList = (index) => {
        let newArray = this.props.stickyNotes;
        newArray.splice(index, 1);
        this.props.updateStickyNotes(newArray);  
    }

    updateStickyTitle = (index, text) => {
        let newArray = this.props.stickyNotes;
        newArray[index] = {
            title: text,
            body: newArray[index].body
        };
        this.props.updateStickyNotes(newArray);
        
    }

    updateStickyBody = (index, text) => {
        let newArray = this.props.stickyNotes;
        newArray[index] = {
            title: newArray[index].title,
            body: text
        };
        this.props.updateStickyNotes(newArray);
       
    }

    pin = (index) => {
        let newArray = this.props.stickyNotes;
        let currSticky = newArray[index];
        let pinned = currSticky.isPinned;
        

        currSticky = {
            title: currSticky.title,
            body: currSticky.body,
            isPinned: !pinned
        }

        newArray.splice(index, 1);
        if (pinned) {
            newArray.push(currSticky);
        } else {
            newArray.unshift(currSticky);
        }

        this.props.updateStickyNotes(newArray);
    }

    render() {
        let stickyNotes = this.props.stickyNotes;
        let stickyNoteDisplay = [];
        for(let i = 0; i < stickyNotes.length; i++) {
            stickyNoteDisplay.push(
                <StickyNote 
                    key={i} 
                    keyNum={i} 
                    remove={this.updateStickyList} 
                    updateTitle={this.updateStickyTitle} 
                    updateBody={this.updateStickyBody} 
                    title={stickyNotes[i].title} 
                    body={stickyNotes[i].body}
                    pin={this.pin}>
                </StickyNote>)
        }
        let renderDisplay = (
            <div className="scrollable">
                {stickyNoteDisplay}
            </div>
        )
        return renderDisplay;
    }
}

export class NewNoteButton extends Component {
    add = () => {
        let array = this.props.stickyNotes;
        array.push({
            title: "Title",
            body: "Text goes here",
            isPinned: false
        });
        this.props.updateStickyNotes(array);
    }

    render(){
        return(
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
                <button className='new-note-button' onClick={this.add}>
                    New Note
                    <br></br>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
        )
    }
}

export class SmartScheduler extends Component {
    render() {
        return (
            <div>
                <Button>Smart Scheduler</Button>
            </div>
        );
    }
}

// export class LoadingScreen extends Component {
//     render() {
//         return(
//             <div className="loading">
//                 <i className="fa fa-spinner fa-spin fa-5x" aria-hidden="true"></i>
//                 <p>Loading...</p>
//             </div>
//         )
//     }
// }