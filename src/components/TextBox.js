import React from 'react'
import { useState } from 'react'
import Button from './Button';
import "./TextBox.css"
import Alert from "./Alert";


function TextBox(props) {

    // create useState variable - react hooks
    const [Text, setText] = useState("Paste Text here to Analyze...");
    // set preview text
    const [preview, setPreview] = useState({ display: "none" });
    // show occurances of numbers
    const [showNumber, setshowNumber] = useState("0");

    // show alert message 
    const [Message, SetMessage] = useState("Welcome to Text Tools...")

    let previewTextStyle = {
        display: "block"
    }

    const previewTextToggle = () => {
        if (preview.display === "block") {
            previewTextStyle.display = "none";
            setPreview(previewTextStyle)
        } else {
            previewTextStyle.display = "block";
            setPreview(previewTextStyle)
        }
    }

    // textarea onchange 
    const textOnChangeHandler = (e) => {
        setText(e.target.value);
        checkNumbers();
    }

    // convert to upper case string when btn clicked
    const makeUpperCase = () => {
        let upperText = Text.toUpperCase();
        setText(upperText);
    }

    // convert to lower case string when btn clicked
    const makeLowerCase = () => {
        let upperText = Text.toLowerCase();
        setText(upperText);
    }

    const makeClear = () => {
        setText("");
        showMessage("Text Cleared");
    }

    const pasteText = () => {
        // let text =  navigator.clipboard.readText();
        navigator.clipboard.readText()
            .then(text => {
                setText(text);
                showMessage("Text Pasted");
            })
            .catch(err => {
                console.error('failed to paste', err);
            });
    }

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(Text);
        showMessage("Copied to Clipboard");
    }

    const removeExtraSpaces = () => {
        setText(Text.replace(/  +/g, ' '));
    }

    const removeExtraLines = () => {
        setText(Text.replace(/[\r\n]+/g, '\n'));
    }

    const capitalizeString = () => {
        var finalStr = "";
        var str_array = Text.split(".");

        str_array.forEach(s => {
            s = s.toLowerCase();
            if (s !== "") {
                s = s.trim();
                s = s.replace(/^./, s[0].toUpperCase());
                finalStr += (s + ". ");
            }
        });
        finalStr = finalStr.trimEnd();
        setText(finalStr);
    }

    const checkNumbers = () => {
        let str_arr = Text.split(" ");
        let count = 0;
        str_arr.forEach((s) => {
            if (s.search(/\d+/g) !== -1) {
                count++;
            }
        })
        setshowNumber(count);
        showMessage(`Numbers ${count} Times Found`);
    }

    const showMessage = (m) => {
        document.getElementById("alert").style.right = "1rem";
        SetMessage(m);
        setTimeout(() => {
            document.getElementById("alert").style.right = "-100%";
        }, 3000);

    }



    return (
        <>
            <Alert className={"alert p-1 fade show"} message={Message} ></Alert>
            <div className='container text_tool'>
                <h1 className='my-2'>{props.heading}</h1>
                <div className="d-flex flex-wrap justify-content-start">
                    <Button click={makeUpperCase} className={"btn btn-sm bg-light text-dark m-2"} text={"Uppercase"}></Button>
                    <Button click={makeLowerCase} className={"btn btn-sm bg-light text-dark m-2"} text={"Lowercase"}></Button>
                    <Button click={capitalizeString} className={"btn btn-sm bg-light text-dark m-2"} text={"Capitalize"}></Button>
                    <Button click={removeExtraSpaces} className={"btn btn-sm bg-light text-dark m-2"} text={"Remove Extra Spaces"}></Button>
                    <Button click={removeExtraLines} className={"btn btn-sm bg-light text-dark m-2"} text={"Remove Extra Lines"}></Button>
                    <Button click={checkNumbers} className={"btn btn-sm bg-light text-dark m-2"} text={"Check Numbers"}></Button>
                </div>

                <div className="my-2">
                    <textarea autoFocus="on" name="textarea_input" id="textarea_input" rows="8" className='form-control bg-light text-dark' placeholder='Write your text here' value={Text} onChange={textOnChangeHandler}></textarea>
                    <span className="fw-light mx-2">Characters: {Text.length}</span>
                    <span className="fw-light mx-2">Words: {Text.trim().length === 0 ? 0 : (Text.trim().split(/\s+/).length)}</span>
                    <span className="fw-light mx-2">Spaces count: {Text.split(" ").length - 1}</span>
                    <span className="fw-light mx-2">New Line count: {Text.split("\n").length - 1}</span>
                    <span className="fw-light mx-2">Numbers count: {showNumber}</span>
                </div>

                {/* Texting buttons  */}
                <div className="d-flex flex-wrap justify-content-start">
                    <Button click={copyToClipBoard} className={"btn btn-sm bg-light text-dark m-2"} text={<i className="fa-solid fa-copy"></i>}></Button>
                    <Button click={pasteText} className={"btn btn-sm bg-light text-dark m-2"} text={<i className="fa-solid fa-paste"></i>}></Button>
                    <Button className={"btn btn-sm bg-light text-dark m-2"} click={previewTextToggle} text={<i className="fa-solid fa-eye-slash"></i>}></Button>
                    <Button click={makeClear} className={"btn btn-danger m-2"} text={<i className="fa-solid fa-trash"></i>}></Button>
                </div>

                {/* preview text  */}
                <div className="preview my-2" style={preview}>
                    <h2>Preview </h2>
                    <p>{Text}</p>
                </div>
            </div>
        </>
    )
}

export default TextBox