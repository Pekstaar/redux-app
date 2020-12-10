import React from "react";
import "./InputFile.css";
import {TextField} from '@material-ui/core';

 const InputField = () => {
  return (
    <div className="form">
      <TextField
        required
        id="input_one"
        name="first"
        label="First-Name"
        defaultValue=""
      />
      <TextField
        required
        className="input"
        name="Last"
        label="Last-Name"
        defaultValue=""
      />
      <TextField
        required
        className="input"
        name="others"
        label="Other Name(s)"
        defaultValue=""
      />

      <TextField
        required
        className="input"
        name="Id"
        label="National ID Number"
        defaultValue=""
      />
      <TextField
        required
        className="input"
        name="Id"
        label="Phone-Number"
        defaultValue=""
      />
    </div>
  );
};

export default InputField;
