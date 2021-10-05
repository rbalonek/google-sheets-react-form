import React, {
  useState,
  // useEffect
} from "react";
import "./App.css";

// import { getAllSubmissions } from "./services/submissions";

function App() {
  // const [submissions, setSubmissions] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/rbalonek/google_sheets/RLnoQGmgSElGTYmJ?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, message, new Date().toLocaleDateString()],
          ]),
        }
      );
      await response.json();
      setData({ ...data, name: "", email: "", message: "" });
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  // useEffect(() => {
  //   const fetchSubmissions = async () => {
  //     const submissionArray = await getAllSubmissions();
  //     setSubmissions(submissionArray);
  //   };
  //   fetchSubmissions();
  // }, []);

  return (
    <div className="App">
      <form className="form__container" onSubmit={handleSubmit}>
        <h3>Form for Google Spreadsheet</h3>
        <label>Name</label>
        <input
          className="form-input"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          className="form-input"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label>Message</label>
        <input
          className="message"
          type="text"
          rows="5"
          name="message"
          value={message}
          onChange={handleChange}
        />
        <button className="btn" type="submit" value="Submit">
          Submit
        </button>
      </form>
      <div style={{ position: "relative", top: "100px" }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/spreadsheets/d/10BN33OopwZOWvsclMj44xy6b7Tx8r1GIjFAdQVKfzy8/edit?usp=sharing"
        >
          <h3>View results on spreadsheet HERE</h3>
        </a>
      </div>
    </div>
  );
}

export default App;

//If you want to add GET (it uses your API Request Quota)

// <div className="submission-list">
// <h1>Submissions</h1>
// {submissions.length && (
//   <>
//     {submissions.map((submission) => (
//       <div
//         key={`${submission.Name} + div`}
//         className="single-submission"
//       >
//         <p key={`${submission.Name} + p1`}>
//           <span style={{ fontWeight: "800" }}>Name:</span>{" "}
//           {submission.Name}
//         </p>
//         <p key={`${submission.Name} + p2`}>
//           <span style={{ fontWeight: "800" }}>Email:</span>{" "}
//           {submission.Email}
//         </p>
//         <p key={`${submission.Name} + p3`}>
//           <span style={{ fontWeight: "800" }}>Message:</span>{" "}
//           {submission.Message}
//         </p>
//         <p key={`${submission.Name} + p4`}>
//           <span style={{ fontWeight: "800" }}>Received </span>
//           {submission.Timestamp}
//         </p>
//       </div>
//     ))}
//   </>
// )}
// </div>
