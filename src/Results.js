import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    const firstMeaning = props.results.meanings.find((meaning) =>
      ["noun", "verb"].includes(meaning.partOfSpeech)
    );

    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.phonetic && (
          <p className="phonetic">/{props.results.phonetic}/</p>
        )}
        {firstMeaning && <Meaning meaning={firstMeaning} />}
      </div>
    );
  } else {
    return null;
  }
}
