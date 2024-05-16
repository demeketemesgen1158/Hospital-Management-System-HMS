import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";
import { Button, Stack, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UseFetch from "../../hooks/useFetch";

const options = [
  "",
  "Finance",
  "OPD",
  "Laboratory",
  "Diagnosis",
  "Operation room",
  "Pharmacy",
  "Registrar",
];
function Roles() {
  const [department, setDepartment] = React.useState("");

  return (
    <Stack
      sx={{
        display: "flex",
        alignContent: "center",
        flexFlow: "row wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 3,
        position: "sticky",
        left: "0",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          alignContent: "center",
          flexFlow: "row wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 187 }} size="small">
          <InputLabel id="demo-select-small-label">Refer to:</InputLabel>
          <Select
            variant="standard"
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={department}
            label="Department"
            onChange={(departmentValue) => setDepartment(departmentValue)}
          >
            {options.map((option) => (
              <MenuItem value={option.toLowerCase()}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
}

export default function AdmitPatient() {
  const [fName, setFname] = React.useState("");
  const [lName, setLname] = React.useState("");
  const [mName, setmName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [emergencyContact, setEmergencyContact] = React.useState("");
  const [room, setRoom] = React.useState("");
  const [admissionFee, setAdmissionFee] = React.useState("");

  const handleSubmit = UseFetch();

  return (
    <Box
      sx={{
        width: 800,
      }}
    >
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "99%",
          padding: 3,
          gap: 2,
        }}
      >
        <Typography variant="h6">New patient</Typography>
        <Box
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            gap: 2,
            "& .MuiTextField-root": { m: 1, width: "21ch" },
          }}
        >
          <FormControl>
            <InputLabel>First name</InputLabel>
            <Input
              value={fName}
              id="fName"
              onChange={(e) => setFname(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Last name</InputLabel>
            <Input
              value={lName}
              id="lName"
              onChange={(e) => setLname(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Age</InputLabel>
            <Input
              value={age}
              id="age"
              onChange={(e) => setAge(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <InputLabel> Tel</InputLabel>
            <Input
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              id="tel"
              type="tel"
            />
          </FormControl>
          <FormControl>
            <InputLabel> Email</InputLabel>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
            />
          </FormControl>
          <FormControl>
            <InputLabel>Country </InputLabel>
            <Input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              id="country"
            />
          </FormControl>
          <FormControl>
            <InputLabel> State</InputLabel>
            <Input
              value={state}
              onChange={(e) => setState(e.target.value)}
              id="state"
            />
          </FormControl>
          <FormControl>
            <InputLabel>City </InputLabel>
            <Input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              id="city"
            />
          </FormControl>
          <FormControl>
            <InputLabel>Emergency contact</InputLabel>
            <Input
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              id="emergencyContact"
            />
          </FormControl>
          <FormControl>
            <InputLabel>Room number</InputLabel>
            <Input
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              id="room"
            />
          </FormControl>
          <FormControl>
            <InputLabel>Admission fee</InputLabel>
            <Input
              value={admissionFee}
              onChange={(e) => setAdmissionFee(e.target.value)}
              id="admissionFee"
            />
          </FormControl>
          <Stack
            sx={{
              display: "flex",
              alignContent: "center",
              flexFlow: "row wrap",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Roles />
          </Stack>
        </Box>
        <Box sx={{ padding: 5 }}>
          <Button onClick={handleSubmit} variant="outlined" sx={{ width: 150 }}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
