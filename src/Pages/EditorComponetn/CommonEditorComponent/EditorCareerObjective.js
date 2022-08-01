import React, { useState } from "react";
import EditorComponent from "./EditorComponent";

const EditorCareerObjective = () => {
  const [value, setValue] = useState("");
  console.log(value);
  const getValue = (value) => {
    setValue(value);
  };

  return (
    <div className= "">
      <EditorComponent  initialValue="" getValue={getValue} />
    </div>
  );
};

export default EditorCareerObjective;
