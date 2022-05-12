import React from 'react'
import { useState } from 'react'
import "./TextBox.css"


function TextBox(props) {

    // create useState variable - react hooks
    const [Text, setText] = useState("Paste Text here to Analyze...");
    // set preview text
    const [preview, setPreview] = useState({ display: "none" });
    // show occurances of numbers
    const [showNumber, setshowNumber] = useState("0");

    let previewTextStyle = {
        display: "block"
    }

    const previewTextToggle = () => {
        if (preview.display == "block") {
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
    }

    const pasteText = () => {
        // let text =  navigator.clipboard.readText();
        navigator.clipboard.readText()
            .then(text => {
                setText(text);
            })
            .catch(err => {
                console.error('failed to paste', err);
            });
    }

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(Text);
    }

    const removeExtraSpaces = () => {
        setText(Text.replace(/  +/g, ' '));
    }

    const removeExtraLines = () => {
        setText(Text.replace(/(\r\n|\n|\r)/gm, " "));
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
    }

    return (
        <div className='container border'>
            <h1 className='my-2'>{props.heading}</h1>
            <div className="my-2">
                <textarea name="textarea_input" id="textarea_input" rows="8" className='form-control' placeholder='Write your text here' value={Text} onChange={textOnChangeHandler}></textarea>
                <span className="fw-light mx-2">Characters: {Text.length}</span>
                <span className="fw-light mx-2">Words: {Text.length === 0 ? 0 : (Text.trim()).split(" ").length}</span>
                <span className="fw-light mx-2">Numbers count: {showNumber}</span>
            </div>

            {/* Texting buttons  */}
            <div className="border d-flex flex-wrap justify-content-start">
                <button onClick={copyToClipBoard} className="btn btn-success btn-sm m-2"><i className="fa-solid fa-copy"></i></button>
                <button onClick={pasteText} className="btn btn-success btn-sm m-2"><i className="fa-solid fa-paste"></i></button>
                <button onClick={makeClear} className="btn btn-danger m-2"><i className="fa-solid fa-trash"></i></button>
            </div>
            <div className="border d-flex flex-wrap justify-content-start">
                <button onClick={makeUpperCase} className="btn btn-success btn-sm m-2">Uppercase</button>
                <button onClick={makeLowerCase} className="btn btn-success btn-sm m-2">Lowercase</button>
                <button onClick={capitalizeString} className="btn btn-success btn-sm m-2">Capitalize</button>
                <button onClick={removeExtraSpaces} className="btn btn-success btn-sm m-2">Remove Extra Spaces</button>
                <button onClick={removeExtraLines} className="btn btn-success btn-sm m-2">Remove Extra Lines</button>

                <button onClick={checkNumbers} className="btn btn-success btn-sm m-2">Check Numbers</button>
                <button className="btn btn-success btn-sm m-2" onClick={previewTextToggle}>Preview Text</button>
            </div>

            {/* preview text  */}
            <div className="preview my-2" style={preview}>
                <h2>Preview </h2>
                <p>{Text}</p>
            </div>
        </div>

    )
}

export default TextBox