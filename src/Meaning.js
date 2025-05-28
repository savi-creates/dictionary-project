import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  const meaning = props.meaning;

  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>

      {meaning.definition && (
        <div className="definition">{meaning.definition}</div>
      )}

      {meaning.example && <div className="example">{meaning.example}</div>}

      <Synonyms synonyms={meaning.synonyms} />
    </div>
  );
}
