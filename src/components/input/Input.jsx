import React from "react";
import "./input.css";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  //KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useState } from "react";

const Input = () => {
  const initialState = {
    first_name: "",
    last_name: "",
    other_name: "",
    gender: "",
    n_id: "",
    phone_number: "",
    email: "",
    dob: new Date(),
    address: "",
  };
  //states setup
  const [details, setDetails] = useState(initialState);

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(details);

    setDetails(initialState);
  };

  const handleChange = (e) => {
    if (e.target.value.trim() !== " ") {
      setDetails({ ...details, [e.target.name]: e.target.value });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* <TextField type="text" value={details.first_name} onChange={handleChange} /> */}
      <TextField
        required
        type="text"
        className="input"
        name="first_name"
        value={details.first_name}
        onChange={handleChange}
        label="First-Name"
        variant="outlined"
      />
      <TextField
        required
        type="text"
        className="input"
        name="last_name"
        value={details.last_name}
        onChange={handleChange}
        label="Last-Name"
        variant="outlined"
      />
      <TextField
        required
        className="input"
        name="other_name"
        value={details.other_name}
        onChange={handleChange}
        label="Other Name(s)"
        variant="outlined"
      />

      <FormControl variant="outlined" className={"gender"}>
        <InputLabel >Gender</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="   Gender"
          name="gender"
          value={details.gender}
          onChange={handleChange}
        >
          <MenuItem value={""}>Select gender</MenuItem>
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
          <MenuItem value={"can't disclose"}>Prefer not to disclose</MenuItem>
        </Select>
      </FormControl>

      <TextField
        required
        className="input"
        name="n_id"
        label="National ID Number"
        value={details.n_id}
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        required
        className="input"
        name="phone_number"
        label="Phone-Number(+254)"
        value={details.phone_number}
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        required
        className="input"
        name="email"
        type="email"
        label="email (name@name.com)"
        value={details.email}
        onChange={handleChange}
        variant="outlined"
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          name="dob"
          label="Date Of Birth"
          format="MM/dd/yyyy"
          inputVariant="outlined"
          value={details.dob}
          onChange={handleChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
      <TextareaAutosize
        style={{
          height: "5em",
          border: "1px solid #d1d1d1",
          borderRadius: ".4em",
        }}
        aria-label="maximum height"
        className="input"
        name="address"
        value={details.address}
        onChange={handleChange}
        rowsMax={3}
        placeholder="Home address"
      />
      <Button
        type="submit"
        className="btn"
        variant="contained"
        style={{ backgroundColor: "#50009b", color: "white", fontSize: "16px" }}
      >
        Submit
      </Button>
    </form>
  );
};

export default Input;
