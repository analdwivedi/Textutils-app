import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const onUpClick = () => {
        let changeToUpper = text.toUpperCase();
        setText(changeToUpper);
        props.showAlert("Converted to uppercase!", "success");
        props.show_Alert("Converted to uppercase!", "danger");
    }
    const onDownClick = () => {
        let changeToLower = text.toLowerCase();
        setText(changeToLower);
        props.showAlert("Converted to lowercase!", "success")
        props.show_Alert("Converted to lowercase!", "danger")
    }
    const onClearAll = () => {
        let clearAll = "";
        setText(clearAll);
        props.showAlert("Everthing is cleared!", "success");
        props.show_Alert("Everything is cleared!", "danger");
    }
    const onCheckWord = () => {
        let checkItAll = text.replaceAll('fuck', 'beep');
        setText(checkItAll);
        props.showAlert("Everything is checked!", "success");
        props.show_Alert("Everything is checked!", "danger");
    }
    const onCheckSpace = () => {
        let spaceAll = text.split(/[ ]+/); 
        setText(spaceAll.join(" "));
        props.showAlert("Everything is spaced well!", "success");
        props.show_Alert("Everything is spaced well!", "danger");
    }
    const handleTextOnChange = (event) => {
        setText(event.target.value);
    }
    const handleEmailOnChange = (event) => {
        setEmail(event.target.value);
    }
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
            <div className='container' style={props.mode} >
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <label htmlFor="myemail" className="form-label">Email Address</label>
                    <input type="email" className="form-control" value={email} onChange={handleEmailOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myemail" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label">Text Here</label>
                    <textarea className="form-control" value={text} onChange={handleTextOnChange} id="mybox" rows="9" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-danger mx-2 my-2" onClick={onUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={onDownClick}>Convert toLowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={onClearAll}>Clear All</button>
                <button disabled={text.length === 0} className="btn btn-warning mx-2 my-2" onClick={onCheckWord}>Check All</button>
                <button disabled={text.length === 0} className='btn btn-secondary mx-2 my-2' onClick={onCheckSpace}>Format</button>
            </div>
            <div className="container my-3" style={props.mode}>
                <h3>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter((text) => { return text.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((text) => { return text.length !== 0 }).length} minutes to read</p>
                <h3>Preview Here</h3>
                <p>Your Email :- {email}</p>
                <p>Your Text :- {text}</p>
            </div>
        </>
    )
}
