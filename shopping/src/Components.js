import React, { Component } from 'react'; //import React Component
import "./index.css";


export class StickyNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTitle: this.props.title,
            inputBody: this.props.body,
            isPinned: false
        }
    }

    remove = () => {
        this.props.remove(this.props.keyNum, this.state.isPinned);
    }

    editTitle = (textbox) => {
        this.setState({
            inputTitle: textbox.target.value
        }, () => {
            this.props.updateTitle(this.props.keyNum, this.state.inputTitle, this.state.isPinned);
        });
    }

    editBody = (textbox) => {
        this.setState({
            inputBody: textbox.target.value
        }, () => {
            this.props.updateBody(this.props.keyNum, this.state.inputBody, this.state.isPinned);
        });
    }

    pin = () => {
        if (this.isPinned) {
            this.isPinned = false
        } else {
            this.isPinned = true
        }
        this.props.pin(this.props.keyNum, this.isPinned)
    }

    render() {
        return (
            <div id ='notesWrapper'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
                <div className ='sticky-notes'>
                    <div className = 'note'>
                        <div className ='note-header'>
                            <button className = 'note-close' onClick={this.remove}>
                                {/* x button  */}
                                <i className="fas fa-times"></i>
                            </button>
                            <button className = 'note-pin' onClick={this.pin}>
                                {/* pin button */}
                                <i className="fas fa-thumbtack"></i>
                            </button>
                        </div>
                        <input ref={this.titleBar} value={this.state.inputTitle} className='note-title' contentEditable suppressContentEditableWarning={true} onInput={this.editTitle} size={50}/>
                        <textarea ref={this.bodyBar} value={this.state.inputBody} className='note-body' contentEditable suppressContentEditableWarning={true} onInput={this.editBody}/>
                    </div>
                </div>
            </div>
        );
    }
}

// You can do an array of elements to render them all at once
export class StickyNoteList extends Component {
    updateStickyList = (index, isPinned) => {
        let newArray
        if (isPinned) {
            newArray = this.props.pinnedStickyNotes;
            newArray.splice(index, 1);
            this.props.updatePinnedStickies(newArray);
        } else {
            newArray = this.props.stickyNotes;
            newArray.splice(index, 1);
            this.props.updateSticky(newArray);
        }
        
    }

    updateStickyTitle = (index, text, isPinned) => {
        let newArray
        if (isPinned) {
            newArray = this.props.pinnedStickyNotes;
            newArray[index] = {
                title: text,
                body: newArray[index].body
            };
            this.props.updatePinnedStickies(newArray);
        } else {
            newArray = this.props.stickyNotes;
            newArray[index] = {
                title: text,
                body: newArray[index].body
            };
            this.props.updateSticky(newArray);
        }
        
    }

    updateStickyBody = (index, text, isPinned) => {
        let newArray
        if (isPinned) {
            newArray = this.props.pinnedStickyNotes;
            newArray[index] = {
                title: newArray[index].title,
                body: text
            };
            this.props.updatePinnedStickies(newArray);
        } else {
            newArray = this.props.stickyNotes;
            newArray[index] = {
                title: newArray[index].title,
                body: text
            };
            this.props.updateSticky(newArray);
        }
        
    }

    pin = (index, isPinned) => {
        console.log(this.props.pinnedStickyNotes);
        let pinned = this.props.pinnedStickyNotes;
        let notPinned = this.props.stickyNotes;
        if (isPinned) {
            let tempSticky = notPinned.splice(index, 1)
            pinned.push(tempSticky)
        } else {
            let tempSticky = pinned.splice(index, 1)
            notPinned.push(tempSticky)
        }
        this.props.updatePinnedStickies(pinned);
        this.props.updateSticky(notPinned);
    }

    render() {
        let stickyNotes = this.props.stickyNotes;
        let pinnedStickyNotes = this.props.pinnedStickyNotes;
        let stickyNoteDisplay = [];
        for(let i = 0; i < pinnedStickyNotes.length; i++) {
            stickyNoteDisplay.push(
                <StickyNote 
                    key={i} 
                    keyNum={i} 
                    remove={this.updateStickyList} 
                    updateTitle={this.updateStickyTitle} 
                    updateBody={this.updateStickyBody} 
                    title={pinnedStickyNotes[i].title} 
                    body={pinnedStickyNotes[i].body}
                    pin={this.pin}>
                </StickyNote>)
        }
        for(let i = 0; i < stickyNotes.length; i++) {
            stickyNoteDisplay.push(
                <StickyNote 
                    key={i+100} 
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
            body: "Text goes here"
        });
        this.props.updateSticky(array);
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

