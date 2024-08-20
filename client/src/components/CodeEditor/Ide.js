// Importing necessary modules and components for the application
import React, { useState, useRef, useEffect } from 'react'; 
import './Ide.css'; 

// Importing Monaco editor component for code editing
// It is used because it offers syntax highlighting,code completion,
// and various customization options developed by "Microsoft"
import Editor from "@monaco-editor/react"; 

import Navbar from './NavbarIde'; 
import Axios from 'axios';


function App() {
    // State variables using useState hook for managing component state are used
    const [iconClassName, setIconClassName] = useState('green'); 
    const [userCode, setUserCode] = useState(''); 
    const [userLang, setUserLang] = useState("cpp"); 
    const [userTheme, setUserTheme] = useState("vs-dark");
    const [fontSize, setFontSize] = useState(20); 
    const [userInput, setUserInput] = useState(""); 
    const [userOutput, setUserOutput] = useState(""); 
    const [error, setError] = useState(''); 

    // Taking References for input and output boxes
    const inputRef = useRef(null); 
    const outputRef = useRef(null); 

    // State variables for input and output box heights
    const [inputHeight, setInputHeight] = useState(300); 
    const [outputHeight, setOutputHeight] = useState(150); 

    // Effect hook used to set default user code based on selected language
    useEffect(() => {
      setUserCode(getDefaultCode(userLang)); 
  }, [userLang]);

  // Function to get default code snippet based on selected language
  function getDefaultCode(lang) {
    switch (lang) {
        case "c":
            return `#include<stdio.h>\n\nint main() {\n\tprintf("Welcome to CodeBlaZe");\n\treturn 0;\n}`;
        case "cpp":
            return `#include<iostream>\nusing namespace std;\n\nint main() {\n\tcout << "Welcome to CodeBlaZe";\n\treturn 0;\n}`;
        case "python":
            return `print("Welcome to CodeBlaZe")`;
        case "java":
            return `class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Welcome to CodeBlaZe");\n\t}\n}`;
        default:
            return '';
    }
}

// Function to handle mouse down event
function handleMouseDown(event) { 
    document.addEventListener('mousemove', handleMouseMove); 
    document.addEventListener('mouseup', handleMouseUp); 
} 

// Function to handle mouse move event
function handleMouseMove(event) { 
    const mouseY = event.clientY; 
    const inputHeight = mouseY - inputRef.current.offsetTop; 
    const outputHeight = outputRef.current.offsetHeight - mouseY + outputRef.current.offsetTop; 
    setInputHeight(inputHeight); 
    setOutputHeight(outputHeight); 
} 

// Function to handle mouse up event
function handleMouseUp() { 
    document.removeEventListener('mousemove', handleMouseMove); 
    document.removeEventListener('mouseup', handleMouseUp); 
} 

// Options for the editor component
const options = {
    fontSize: fontSize
}

// Function to compile user code
const compile = async () => {
    if (userCode === '') {
        return;
    }

    try {
        const res = await Axios.post(`http://localhost:4000/compile`, {
            code: userCode,
            language: userLang,
            input: userInput
        });
        setUserOutput(res.data.output);
    } catch (error) {
        if (error.response && error.response.status === 400) {
            setUserOutput(error.response.data.error);
        } else {
            console.error("Error compiling code:", error);
        }
    }
}


// Function to clear output
function clearOutput() {
    setUserOutput('');
    setError('');
}

// JSX rendering
return (
    <>
    <div className={`Apps-b ${iconClassName}`}>
        <Navbar
            userLang={userLang} setUserLang={setUserLang}
            userTheme={userTheme} setUserTheme={setUserTheme}
            fontSize={fontSize} setFontSize={setFontSize}
            iconClassName={iconClassName}
            setIconClassName={setIconClassName}
        />
        
        <div className="main-b">
            <div className="left-container-b">
                <Editor
                    options={options}
                    height="calc(100vh - 50px)"
                    width="100%"
                    theme={userTheme}
                    language={userLang}
                    defaultLanguage={userLang}
                    defaultValue={getDefaultCode(userLang)}
                    onChange={(value) => { setUserCode(value) }}
                />
                <button className={`run-btn-b button-71-b ${iconClassName}`} onClick={() => compile()}>
                    Run
                </button>
            </div>
            <div className={`right-container-b ${userTheme === 'light' ? 'light-theme' : 'dark-theme'}`}>
                <h4 className={iconClassName}>Input:</h4>
                <div className="input-box-b" style={{height:inputHeight}}
                     ref={inputRef} onMouseDown={handleMouseDown}
                >
                    <textarea className={`${userTheme === 'light' ? 'light-theme' : 'dark-theme'}`}
                        id="code-inp-b"
                        style={{ height: inputHeight - 10 }} 
                        onChange={(e) => setUserInput(e.target.value)}
                    ></textarea>
                </div>
                <h4 className={iconClassName}>Output:</h4>
                <div className="output-box-b"
                     style={{ height: outputHeight }} 
                     ref={outputRef} 
                     onMouseDown={handleMouseDown}
                >
                    <pre>{error || userOutput}</pre>
                    <button onClick={() => { clearOutput() }}
                        className={`clear-btn-b ${iconClassName}`}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div className="message-b">Sorry ! Come with a Larger Resolution Device</div>
    </>
);
}



export default App; 
