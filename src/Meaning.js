import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  const meaning = props.meaning;

  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition:</strong>
      </p>
      {meaning.definition && <p>{meaning.definition}</p>}
      {meaning.example && (
        <p>
          <strong>Example:</strong> "{meaning.example}"
        </p>
      )}
      <Synonyms synonyms={meaning.synonyms} />
    </div>
  );
}
