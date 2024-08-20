const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const { spawn, spawnSync } = require('child_process');

const fs = require("fs").promises;
const path = require("path");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 4000;

require('dotenv').config();



// Database Connection
// mongoose.connect('mongodb://localhost:27017/newBox', { 
    
// });

mongoose.connect('mongodb://localhost:27017/project', { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


const User = mongoose.model('User', UserSchema);



app.use(cors({
    origin: 'http://localhost:3000', // Replace with your React app's URL
    credentials: true
  }));
  app.use(express.json());
  
  app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } // 1 day in milliseconds
  }));
  
  app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.log("Error creating user")
      res.status(400).json({ message: 'Error creating user', error });
    }
  });
  
  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (user && await bcrypt.compare(password, user.password)) {
        req.session.userId = user._id;
        res.json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  });
  
  // Define the array of subjects with display names and Google Drive links
  const driveLinks = [
    { subject: 'Sub-1 Maths-II', url: 'https://drive.google.com/file/d/10eNh0Wc2JzULq5funs4uQj77tUCCuwI3/view?usp=drivesdk' },
    { subject: 'Sub-2 Physics-II', url: 'https://drive.google.com/file/d/10SL3JFQEneEv02guZ03wEKQ3Kkh4QV-h/view?usp=drivesdk' },
    { subject: 'Sub-3 PPS', url: 'https://drive.google.com/file/d/10fHSBBAcMSQftt2ypy577Ml3BCZ96g6M/view?usp=drivesdk' },
    { subject: 'Sub-4 English', url: 'https://drive.google.com/file/d/10XywrHc4qJxZY-nQVg3uBD58TF29wIO9/view?usp=drivesdk' }
  ];
  
  app.get('/download', (req, res) => {
    if (req.session.userId) {
      res.json({ links: driveLinks });
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  });



// User Model
// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     role: {
//         type: String,
//         enum: ["Admin", "Student", "Visitor"],
//         default: "Visitor"
//     }
// });
// const User = mongoose.model("User", userSchema);

// // Express App Setup
// const app = express();
// const PORT = process.env.PORT || 8000;
// app.use(bodyParser.json());
// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
// app.use(cookieParser()); 

// console.log("JI");

// const verifyToken = (req, res, next) => {
//     try{
//         //extract JWT token
//         //PENDING : other ways to fetch token

//         console.log("cookie" , req.cookies.token);
//         console.log("body" , req.body.token);
//         console.log("header", req.header("Authorization"));
       
//         const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");
        
//         if(!token || token === undefined) {
//             return res.status(401).json({
//                 success:false,
//                 message:'Token Missing',
//             });
//         }

//         //verify the token
//         try{
//             const payload = jwt.verify(token, 'avinash');
//             console.log(payload);
//             //why this ?
//             req.user = payload;
//         } catch(error) {
//             return res.status(401).json({
//                 success:false,
//                 message:'token is invalid',
//             });
//         }
//         next();
//     } 
//     catch(error) {
//         return res.status(401).json({
//             success:false,
//             message:'Something went wrong, while verifying the token',
//             error:error.message,
//         });
//     }
    
// };


// // Check login status route

// app.get("/api/check-auth", verifyToken, (req, res) => {
//     console.log('User is authenticated');
//     console.log('User details:', req.user);
//     res.status(200).json({ isAuthenticated: true, user: req.user });
// });




// // Signup Route
// app.post('/signup', async (req, res) => {
//     try {
//         const { name, email, password, role } = req.body;
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ success: false, message: 'User already exists' });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ name, email, password: hashedPassword, role });
//         await newUser.save();

//         res.status(201).json({ success: true, message: 'User created successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: 'Error registering user' });
//     }
// });

// // Login Route
// app.post('/login', async (req, res) => {
//     try {

//         //data fetch
//         const {email, password} = req.body;
//         //validation on email and password
//         if(!email || !password) {
//             return res.status(400).json({
//                 success:false,
//                 message:'PLease fill all the details carefully',
//             });
//         }

//         //check for registered user
//         let user = await User.findOne({email});
//         //if not a registered user
//         if(!user) {
//             return res.status(401).json({
//                 success:false,
//                 message:'User is not registered',
//             });
//         }

//         const payload = {
//             email:user.email,
//             id:user._id,
//             role:user.role,
//         };
//         //verify password & generate a JWT token
//         if(await bcrypt.compare(password,user.password) ) {
//             //password match
//             let token =  jwt.sign(payload, 
//                                 'avinash',
//                                 {
//                                     expiresIn:"2h",
//                                 });

                                
//             user = user.toObject();
//             user.token = token;
//             user.password = undefined;

//             const options = {
//                 expires: new Date( Date.now() + 3*24*60*60*1000),
//                 httpOnly:true,
//             }

//             res.cookie("token", token, options).status(200).json({
//                 success:true,
//                 token,
//                 user,
//                 message:'User Logged in successfully',
//             });

//             // res.status(200).json({
//             //     success:true,
//             //     token,
//             //     user,
//             //     message:'User Logged in successfully',
//             // });
//         }
//         else {
//             //passwsord do not match
//             return res.status(403).json({
//                 success:false,
//                 message:"Password Incorrect",
//             });
//         }

//     }
//     catch(error) {
//         console.log(error);
//         return res.status(500).json({
//             success:false,
//             message:'Login Failure',
//         });

//     }
// });



app.use(bodyParser.json());

// Function to create a temporary file asynchronously
const createTempFile = async (code, extension) => {
    try {
        const tempFileName = `temp.${extension}`;
        const tempFilePath = path.join(__dirname, tempFileName);
        await fs.writeFile(tempFilePath, code);
        return tempFilePath;
    } catch (error) {
        console.error("Error creating temporary file:", error);
        throw error;
    }
};

// Function to delete temporary files
const deleteTempFile = async (filePath) => {
    try {
        await fs.unlink(filePath);
    } catch (error) {
        console.error("Error deleting temporary file:", error);
    }
};

// Extracting code, language, and input from the request body
app.post("/compile", async (req, res) => {
    const { code, language, input } = req.body;

    let fileExtension;
    let command;

    // Using Switch statement to determine file extension and compilation command
    switch (language) {
        case "c":
            fileExtension = "c";
            command = ["gcc", "-o", "temp", "-xc", "-"];
            break;
        case "cpp":
            fileExtension = "cpp";
            command = ["g++", "-o", "temp", "-xc++", "-"];
            break;
        case "python":
            fileExtension = "py";
            command = ["python3"];
            break;
        case "java":
            fileExtension = "java";
            const tempFilePath = await createTempFile(code, fileExtension);
            command = ["javac", tempFilePath];
            break;
        default:
            // Returning error response for unsupported language
            return res.status(400).json({ error: "Unsupported language" });
    }

    try {
        // Creating a temporary file with the user code
        const tempFilePath = await createTempFile(code, fileExtension);

        if (language === "python") {
            // For Python, execute the code asynchronously
            const executionProcess = spawn(command[0], [tempFilePath]);

            let output = "";
            let error = "";

            // Handling stdout data
            executionProcess.stdout.on("data", (data) => {
                output += data.toString();
            });

            // Handling stderr data
            executionProcess.stderr.on("data", (data) => {
                error += data.toString();
            });

            // Handling execution process exit
            executionProcess.on("close", () => {
                if (error) {
                    // If there's any error output, send it to the client
                    console.error("Python execution error:", error);
                    res.status(400).json({ error });
                } else {
                    // Sending output to the client
                    res.status(200).json({ output });
                }
                // Deleting the temporary file
                deleteTempFile(tempFilePath);
            });

            // Passing input to the execution process
            executionProcess.stdin.write(input);
            executionProcess.stdin.end();
        } else {
            // For other languages (C, C++, Java), handle compilation and execution
            // Compilation command
            const compilerProcess = spawn(command[0], command.slice(1));

            let output = "";
            let error = "";

            // Handling stderr data
            compilerProcess.stderr.on("data", (data) => {
                error += data.toString();
            });

            // Handling process exit
            compilerProcess.on("close", (code) => {
                if (code === 0) {
                    // Compilation successful
                    if (language === "java") {
                        // If Java program, execute the code
                        const executionCommand = ["java", "-cp", path.dirname(tempFilePath), path.basename(tempFilePath, ".java")];
                        const executionProcess = spawn(executionCommand[0], executionCommand.slice(1));

                        let executionOutput = "";
                        let executionError = "";

                        // Handling stdout data
                        executionProcess.stdout.on("data", (data) => {
                            executionOutput += data.toString();
                        });

                        // Handling stderr data
                        executionProcess.stderr.on("data", (data) => {
                            executionError += data.toString();
                        });

                        // Handling execution process exit
                        executionProcess.on("close", () => {
                            if (executionError) {
                                // If there's any error output, send it to the client
                                console.error("Java execution error:", executionError);
                                res.status(400).json({ error: executionError });
                            } else {
                                // Sending output to the client
                                res.status(200).json({ output: executionOutput });
                            }
                            // Deleting the temporary file
                            deleteTempFile(tempFilePath);
                        });

                        // Passing input to the execution process
                        executionProcess.stdin.write(input);
                        executionProcess.stdin.end();
                    } else {
                        // For C, C++, execute the code with input
                        const executionProcess = spawn("./temp");

                        // Handling stdout data
                        executionProcess.stdout.on("data", (data) => {
                            output += data.toString();
                        });

                        // Handling execution process exit
                        executionProcess.on("close", () => {
                            // Sending output to the client
                            res.status(200).json({ output });
                            // Deleting the temporary file
                            deleteTempFile(tempFilePath);
                        });

                        // Passing input to the execution process
                        executionProcess.stdin.write(input);
                        executionProcess.stdin.end();
                    }
                } else {
                    // Compilation or execution error
                    console.error(`Error: ${error}`);
                    res.status(400).json({ error });
                    // Deleting the temporary file
                    deleteTempFile(tempFilePath);
                }
            });

            // Passing code to the compiler process
            compilerProcess.stdin.write(code);
            compilerProcess.stdin.end();
        }
    } catch (error) {
        console.error("Internal server error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});




// Test Code Execution Routes
app.post('/run', (req, res) => {
    const { language, code, question } = req.body;
    console.log("Language:", language);
    console.log("Question:", question);

    let results;
    switch (question) {
        case 'add':
            results = compileAndRunAddition(language, code);
            break;
        case 'subtract':
            results = compileAndRunSubtraction(language, code);
            break;
        case 'twoSum':
            results = compileAndRunTwoSum(language, code);
            break;
        case 'sortedArray':
            results = compileAndRunSortedArray(language, code);
            break;
        case 'runningSum':
            results = compileAndRunRunningSum(language, code);
            break;
        case 'countFrequencies':
            results = compileAndRunCountFrequencies(language, code);
            break;
        default:
            results = { error: 'Unsupported question' };
    }

    res.json({ results });
});


// Compile and Run Specific Functions
function compileAndRunAddition(language, code) {
    const testCases = [
        { input: "1 2", output: "3" },
        { input: "5 10", output: "15" },
        { input: "0 0", output: "0" }
    ];
    return compileAndRun(language, code, testCases);
}

function compileAndRunSubtraction(language, code) {
    const testCases = [
        { input: "2 1", output: "1" },
        { input: "10 5", output: "5" },
        { input: "5 10", output: "-5" }
    ];
    return compileAndRun(language, code, testCases);
}

function compileAndRunTwoSum(language, code) {
    const testCases = [
        { input: "4\n2 7 11 15\n9\n", output: "[0,1]" },
        { input: "3\n3 2 4\n6\n", output: "[1,2]" },
        { input: "2\n3 3\n6\n", output: "[0,1]" }
    ];
    return compileAndRun(language, code, testCases);
}

function compileAndRunSortedArray(language, code) {
    const testCases = [
        { input: "5\n10 20 30 40 50", output: "1" },
        { input: "3\n30 20 10", output: "0" },
        { input: "1\n100", output: "1" },
        { input: "4\n1 2 3 4", output: "1" },
        { input: "2\n5 3", output: "0" }
    ];
    return compileAndRun(language, code, testCases);
}

function compileAndRunRunningSum(language, code) {
    const testCases = [
        { input: "4\n1 2 3 4", output: "1 3 6 10" },
        { input: "5\n1 1 1 1 1", output: "1 2 3 4 5" },
        { input: "5\n3 1 2 10 1", output: "3 4 6 16 17" }
    ];
    return compileAndRun(language, code, testCases);
}

function compileAndRunCountFrequencies(language, code) {
    const testCases = [
        { input: "8\n10 20 20 10 10 20 5 20", output: "10 3\n20 4\n5 1" },
        { input: "3\n10 20 20", output: "10 1\n20 2" },
        { input: "5\n1 2 2 1 3", output: "1 2\n2 2\n3 1" }
    ];
    return compileAndRun(language, code, testCases);
}


// Function to compile and run code based on language and test cases
function compileAndRun(language, code, testCases) {
    const results = [];
    for (let i = 0; i < testCases.length; i++) {
        const { input, output } = testCases[i];
        const testCaseResult = runTestCase(language, code, input, output);
        results.push(testCaseResult);
    }
    return results;
}


// Function to run a single test case and compare output with expected output
function runTestCase(language, code, input, expectedOutput) {
    let process;
    switch (language) {
        case 'cpp':
            process = spawnSync('g++', ['-x', 'c++', '-o', 'temp', '-'], { input: code });
            if (process.status !== 0) {
                return false; // Compilation or execution failed
            }
            const execution = spawnSync('./temp', { input });
            const actualOutput = execution.stdout.toString().trim();
            return actualOutput === expectedOutput;
        case 'python':
            const tempPythonFile = code;
            const pythonProcess = spawnSync('python3', [tempPythonFile], { input: input.join("\n") });
            const pythonActualOutput = pythonProcess.stdout.toString().trim();
            return pythonActualOutput === expectedOutput;
        // Add support for Java and JavaScript
        default:
            return false;
    }
}

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
