import { useState } from "react";
//const axios = require("axios");

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [h1Toggle, setH1Toggle] = useState(false);
  const [inputVal, setInputVal] = useState("");

  return (
    <div className="p">
      <h1 className="text-center text-4xl">Amazon Scrapper</h1>
      <form>
        <input
          class="border-2 border-black rounded-lg"
          id="searchTerm"
          type="text"
          placeholder="search"
          value={inputVal}
          onChange={(val) => inputHandler(val)}
        ></input>
        <button
          className="p-1 bg-lime-500 rounded-lg text-white"
          type="button"
          onClick={submitHandler}
        >
          Submit
        </button>
        {h1Toggle ? (
          <h1 className="text-red-900 text-2xl">
            {sendSearchTerm(searchTerm)}
          </h1>
        ) : null}
      </form>
    </div>
  );

  function inputHandler(e) {
    let text = e.target.value;
    console.log(text);
    setSearchTerm(text);
    setInputVal(text);
    setH1Toggle(false);
  }

  function submitHandler() {
    if (inputVal) {
      setH1Toggle(!h1Toggle);
    } else {
      setH1Toggle(false);
    }
    setInputVal("");
  }

  function sendSearchTerm(term) {
    const backend_api = "http://localhost:3000/";
    const config = {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ term }),
    };
    fetch(backend_api, config);
    return "request sent :) ";
  }
}
