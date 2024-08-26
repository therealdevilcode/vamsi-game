const students = [
    { name: "DBMS", result: "TUESDAY 2ND&3RD PERIOD,WEDNESDAY 1ST PERIOD,THURSDAY 1ST PERIOD, FRIDAY 4TH PERIOD" },
    { name: "SE", result: "TUESDAY" },
    { name: "DE", result: "SUPPLY FEE READY CHESKO BRO🥲 MANAM PASS AVVALEM" }
    
];

// Function to search for student by name
function searchStudent() {
    const studentName = document.getElementById("studentName").value;
    const resultDiv = document.getElementById("result");

    const student = students.find(s => s.name.toLowerCase() === studentName.toLowerCase());

    if (student) {
        resultDiv.innerHTML = `Result for ${student.name}: ${student.result}`;
    } else {
        resultDiv.innerHTML = "NAKU THELVADHU BHAI";
    }
}