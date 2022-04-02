import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpperClick = () => {
        // console.log("You have clicked handleUpperClick " + { text });
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Texts converted to uppercase", "success");
    }

    const handleLowerClick = () => {
        // console.log("You have clicked handleUpperClick " + { text });
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Texts converted to lowercase", "success");
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Texts cleared", "success");
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Texts copied", "success");
    }

    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div>
                <div className="mb-3" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'light' ? '#2c3251' : 'white' }}>
                    <h2>{props.heading}</h2>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'light' ? '#2c3251' : 'white' }}></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpperClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-3" onClick={handleRemoveSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'light' ? '#2c3251' : 'white' }}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>Average {0.008 * text.split(" ").length} minutes time to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>
        </>
    )
}