import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  const meaning = props.meaning;

  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>

      {meaning.definition && (
        <p>
          <strong>Definition:</strong> {meaning.definition}
        </p>
      )}

      {meaning.example && (
        <p>
          <strong>Example:</strong> "{meaning.example}"
        </p>
      )}

      <Synonyms synonyms={meaning.synonyms} />
    </div>
  );
}
