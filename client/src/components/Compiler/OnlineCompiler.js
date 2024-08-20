
import React, { useState } from 'react';
import axios from 'axios';
// import './App.css';
import './OnlineCompiler.css'

function App() {
  const [code, setCode] = useState('');
  const [results, setResults] = useState([]);
  const [language, setLanguage] = useState('cpp'); // Default to C++
  const [question, setQuestion] = useState('add'); // Default to addition question

  const additionTestCases = [
    { input: "1 2", output: "3" },
    { input: "5 10", output: "15" },
    { input: "0 0", output: "0" }
  ];

  const subtractionTestCases = [
    { input: "2 1", output: "1" },
    { input: "10 5", output: "5" },
    { input: "5 10", output: "-5" }
  ];

  const twoSumTestCases = [
    { input: "n=4; [2,7,11,15] 9", output: "[0,1]" },
    { input: "n=3; [3,2,4] 6", output: "[1,2]" },
    { input: "n=2; [3,3] 6", output: "[0,1]" }
  ];

  const sortedArrayTestCases = [
    { input: "5\n10 20 30 40 50", output: "1" },
    { input: "3\n30 20 10", output: "0" },
    { input: "1\n100", output: "1" },
    // { input: "4\n1 2 3 4", output: "1" },
    // { input: "2\n5 3", output: "0" }
  ];

  const runningSumTestCases = [
    { input: "4\n1 2 3 4", output: "1 3 6 10" },
    { input: "5\n1 1 1 1 1", output: "1 2 3 4 5" },
    { input: "5\n3 1 2 10 1", output: "3 4 6 16 17" }
  ];

  const countFrequenciesTestCases = [
    { input: "8\n10 20 20 10 10 20 5 20", output: "10 3\n20 4\n5 1" },
    { input: "3\n10 20 20", output: "10 1\n20 2" },
    { input: "5\n1 2 2 1 3", output: "1 2\n2 2\n3 1" }
  ];

  const selectedTestCases = () => {
    switch (question) {
      case 'add':
        return additionTestCases;
      case 'subtract':
        return subtractionTestCases;
      case 'twoSum':
        return twoSumTestCases;
      case 'sortedArray':
        return sortedArrayTestCases;
      case 'runningSum':
        return runningSumTestCases;
      case 'countFrequencies':
        return countFrequenciesTestCases;
      default:
        return [];
    }
  };

  const questionDescriptions = {
    add: {
      task: "Your task is to take two inputs a and b and find the sum of the two inputs and print it.",
      expectedTC: "Expected TC - O(1)",
      expectedSC: "Expected SC - O(1)"
    },
    subtract: {
      task: "Your task is to take two inputs a and b and find the subtraction of the two inputs and print it.",
      expectedTC: "Expected TC - O(1)",
      expectedSC: "Expected SC - O(1)"
    },
    twoSum: {
      task: "Your task is to find two numbers in array that sum up to the target value & print their indices.",
      expectedTC: "Expected TC - O(n)",
      expectedSC: "Expected SC - O(n)"
    },
    sortedArray: {
      task: "Your task is to check if the given array is sorted in ascending order and print 1 if true, otherwise 0.",
      expectedTC: "Expected TC - O(n)",
      expectedSC: "Expected SC - O(1)"
    },
    runningSum: {
      task: "Your task is to return the running sum of the given array.",
      expectedTC: "Expected TC - O(n)",
      expectedSC: "Expected SC - O(n)"
    },
    countFrequencies: {
      task: "Your task is to count the frequency of each element in the array and print them.",
      expectedTC: "Expected TC - O(n)",
      expectedSC: "Expected SC - O(n)"
    }
  };

  const runCode = async () => {
    try {
      const response = await axios.post('http://localhost:4000/run', { language, code, question });
      setResults(response.data.results);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='king'>
    <div className="app-container">
      <h1 className="app-title">Online Coding Platform</h1>
      <div className="main-content">
        <div className="left-side">
          <div className="dropdown-container">
            <h2>Select Language:</h2>
            <select className='select-bar' value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="cpp">C++</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="javascript">JavaScript (Node.js)</option>
            </select>
          </div>
          <div className="dropdown-container">
            <h2>Select Question:</h2>
            <select className='select-bar' value={question} onChange={(e) => setQuestion(e.target.value)}>
              <option value="add">Addition</option>
              <option value="subtract">Subtraction</option>
              <option value="twoSum">Two Sum</option>
              <option value="sortedArray">Check if Array is Sorted</option>
              <option value="runningSum">Running Sum of Array</option>
              <option value="countFrequencies">Counting Frequencies of Array Elements</option>
            </select>
          </div>
          <div className="question-description">
            <h3>Task:</h3>
            <p>{questionDescriptions[question].task}</p>
            <h3>Expected Time Complexity:</h3>
            <p>{questionDescriptions[question].expectedTC}</p>
            <h3>Expected Space Complexity:</h3>
            <p>{questionDescriptions[question].expectedSC}</p>
          </div>
          <div className="test-cases-container">
            <h2>Test Cases:</h2>
            <ul>
              {selectedTestCases().map((testCase, index) => (
                <li key={index}>
                  Test Case {index + 1}: Input: {testCase.input}, Output: {testCase.output}
                </li>
              ))}
            </ul>
          </div>
         
        </div>
        <div className="right-side">
          <div className="code-input-container">
            <h2>Enter Code:</h2>
            <textarea 
              value={code} 
              onChange={e => setCode(e.target.value)} 
              rows={20} 
              cols={50}
              placeholder="// Write your code here"
            />
          </div>
          <button className="run-button" onClick={runCode}>Run Code</button>
          <div className="results-container">
            <h2>Test Case Results:</h2>
            <ul>
              {results.map((result, index) => (
                <li key={index}>
                  Test Case {index + 1}: {result ? 'Passed' : 'Failed'}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
