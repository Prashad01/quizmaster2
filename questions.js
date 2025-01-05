// // Question bank
// const questionBank = {
//     APSC: [
//         {
//             question: "What is the capital of India?",
//             options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
//         },
//         {
//             question: "Who is the current President of India?",
//             options: ["Ram Nath Kovind", "Droupadi Murmu", "Pranab Mukherjee", "A. P. J. Abdul Kalam"],
//         },
//         {
//             question: "Which river is known as the 'Sorrow of Bihar'?",
//             options: ["Ganga", "Kosi", "Brahmaputra", "Mahanadi"],
//         },
//     ],
//     APDCL: [
//         {
//             question: "What is the unit of electrical power?",
//             options: ["Watt", "Volt", "Ampere", "Ohm"],
//         },
//         {
//             question: "What is the full form of AC in electricity?",
//             options: ["Alternative Current", "Active Current", "Alternate Cycle", "None of these"],
//         },
//         {
//             question: "What is the standard frequency of AC in India?",
//             options: ["50 Hz", "60 Hz", "45 Hz", "55 Hz"],
//         },
//     ],
// };

// // Function to load questions dynamically based on the exam name
// function loadQuestions(examName) {
//     const examTitle = document.getElementById("exam-title");
//     const questionsContainer = document.getElementById("questions-container");

//     // Set the title dynamically
//     examTitle.textContent = `${examName} Questions`;

//     // Clear existing questions (if any)
//     questionsContainer.innerHTML = "";

//     // Fetch questions for the given exam
//     const questions = questionBank[examName] || [];

//     // Generate and insert questions
//     questions.forEach((q, index) => {
//         const questionDiv = document.createElement("div");
//         questionDiv.classList.add("question");

//         // Create question text
//         const questionText = document.createElement("p");
//         questionText.textContent = `${index + 1}. ${q.question}`;
//         questionDiv.appendChild(questionText);

//         // Create options
//         const optionsDiv = document.createElement("div");
//         optionsDiv.classList.add("options");
//         q.options.forEach((option) => {
//             const label = document.createElement("label");
//             const input = document.createElement("input");
//             input.type = "radio";
//             input.name = `q${index + 1}`;
//             label.appendChild(input);
//             label.appendChild(document.createTextNode(option));
//             optionsDiv.appendChild(label);
//             optionsDiv.appendChild(document.createElement("br"));
//         });

//         questionDiv.appendChild(optionsDiv);
//         questionsContainer.appendChild(questionDiv);
//     });
// }

// // Function to handle exam submission
// function submitExam() {
//     alert("Test submitted successfully!");
// }
