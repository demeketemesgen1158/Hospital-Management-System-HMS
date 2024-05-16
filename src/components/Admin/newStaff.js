import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UseFetch from "../../hooks/useFetch";

function InputFileUpload() {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(10%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Button
      component="label"
      role={undefined}
      variant="outlined"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      sx={{ color: "black", textTransform: "none", borderColor: "gray" }}
    >
      Upload photo
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}

export default function NewStaff() {
  const [fName, setFname] = React.useState("");
  const [lName, setLname] = React.useState("");
  const [mName, setmName] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [salary, setSalary] = React.useState("");
  const [employmentDate, setEmployementDate] = React.useState("");
  const [emergencyContact, setEmergencyContact] = React.useState("");
  const [photo, setPhoto] = React.useState("");

  const handleSubmit = UseFetch();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 1000,
      }}
    >
      <Paper
        elevation={1}
        sx={{
          padding: 3,
          gap: 2,
        }}
      >
        <Typography variant="h6">Add staff</Typography>
        <FormGroup
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexFlow: "row wrap",
              gap: 3,
              "& .MuiTextField-root": { m: 1, width: "21ch" },
            }}
          >
            <FormControl>
              <InputLabel>First name</InputLabel>
              <Input id="fName" onChange={(e) => setFname(e.target.value)} />
            </FormControl>
            <FormControl>
              <InputLabel>Middle name</InputLabel>
              <Input id="mName" onChange={(e) => setmName(e.target.value)} />
            </FormControl>
            <FormControl>
              <InputLabel>Last name</InputLabel>
              <Input id="lName" onChange={(e) => setLname(e.target.value)} />
            </FormControl>
            <FormControl>
              <InputLabel> Tel</InputLabel>
              <Input
                onChange={(e) => setTel(e.target.value)}
                id="tel"
                type="tel"
              />
            </FormControl>
            <FormControl>
              <InputLabel> Email</InputLabel>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
              />
            </FormControl>
            <FormControl>
              <InputLabel>Country </InputLabel>
              <Input
                onChange={(e) => setCountry(e.target.value)}
                id="country"
              />
            </FormControl>
            <FormControl>
              <InputLabel> State</InputLabel>
              <Input onChange={(e) => setState(e.target.value)} id="state" />
            </FormControl>
            <FormControl>
              <InputLabel>City </InputLabel>
              <Input onChange={(e) => setCity(e.target.value)} id="city" />
            </FormControl>
            <FormControl>
              <InputLabel>Emergency contact</InputLabel>
              <Input
                onChange={(e) => setEmergencyContact(e.target.value)}
                id="emergencyContact"
              />
            </FormControl>
            <FormControl>
              <InputLabel>Salary</InputLabel>
              <Input
                onChange={(e) => setSalary(e.target.value)}
                id="salary"
                type="text"
              />
            </FormControl>
            <FormControl>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem>
                  <MobileDatePicker
                    label="Employment date"
                    Value={employmentDate}
                    onChange={(newValue) => {
                      setEmployementDate(new Date(newValue));
                    }}
                    slotProps={{ textField: { size: "small" } }}
                  />
                </DemoItem>
              </LocalizationProvider>
            </FormControl>
            <FormControl>
              <InputFileUpload onChange={(e) => setPhoto(e.target.value)} />
            </FormControl>
          </Box>
          <Button onClick={handleSubmit} sx={{ width: 120 }}>
            Submit
          </Button>
        </FormGroup>
      </Paper>
    </Box>
  );
}
