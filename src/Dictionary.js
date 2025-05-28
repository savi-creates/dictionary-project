import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleSheCodesResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = "ta4d13o783b04c3ee4a956ed2febde0f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    let headers = { Authorization: `Bearer ${apiKey}` };
    axios
      .get(sheCodesApiUrl, { headers: headers })
      .then(handleSheCodesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">suggested words: pizza, water, forest...</div>
        </section>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
