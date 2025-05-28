import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    const firstMeaning = props.results.meanings.find((meaning) =>
      ["noun", "verb"].includes(meaning.partOfSpeech)
    );

    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetic && (
            <p className="Phonetic">/{props.results.phonetic}/</p>
          )}
        </section>
        <section>{firstMeaning && <Meaning meaning={firstMeaning} />}</section>
      </div>
    );
  } else {
    return null;
  }
}
