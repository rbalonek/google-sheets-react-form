import React, { useState } from "react";
import "./App.css";

function App() {
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
    </div>
  );
}

export default App;
